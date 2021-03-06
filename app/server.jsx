import Express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'

import compression from 'compression'
import path from 'path'
import PrettyError from 'pretty-error'
import http from 'http'
import axios from 'axios'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import moment from 'moment'

import { createMemoryHistory, match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'

import config from './config'
import createRoutes from 'routes'
import configureStore from 'store/configureStore'
import preRenderMiddleware from 'middlewares/preRenderMiddleware'
import header from 'components/Meta'
import rootSaga from 'sagas'

/*
 * Export render function to be used in server/index.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
export default function render(req, res) {
  const authenticated = false // req.isAuthenticated()
  const history = createMemoryHistory()
  const store = configureStore({
    context: {
      contextType: 'PAGE',
      tokenId: '123456',
      pageId: '',
      instanceId: '',
      pages: {
        isFetching: false,
        entities: []
      },
      instances: {
        isFetching: false
      },
      pageStats: {}
    },
    trails: {
      query: {},
      trail: {},
      forks: {}
    },
    behaviors: {
      behaviorId: '',
      clusters: {},
      stories: {},
      stats: {}
    },
    errorMessage: ''
  }, history)

  const routes = createRoutes(store)

  /*
   * From the react-router docs:
   *
   * This function is to be used for server-side rendering. It matches a set of routes to
   * a location, without rendering, and calls a callback(err, redirect, props)
   * when it's done.
   *
   * The function will create a `history` for you, passing additional `options` to create it.
   * These options can include `basename` to control the base name for URLs, as well as the pair
   * of `parseQueryString` and `stringifyQuery` to control query string parsing and serializing.
   * You can also pass in an already instantiated `history` object, which can be constructured
   * however you like.
   *
   * The three arguments to the callback function you pass to `match` are:
   * - err:       A javascript Error object if an error occured, `undefined` otherwise.
   * - redirect:  A `Location` object if the route is a redirect, `undefined` otherwise
   * - props:     The props you should pass to the routing context if the route matched,
   *              `undefined` otherwise.
   * If all three parameters are `undefined`, this means that there was no route found matching the
   * given location.
   */
  match({routes, location: req.url}, (err, redirect, props) => {
    if(err) {
      res.status(500).json(err)
    } else if(redirect) {
      res.redirect(302, redirect.pathname + redirect.search)
    } else if(props) {
      preRenderMiddleware(
        store.dispatch,
        props.components,
        props.params
      ).then(() => {
        const initialState = store.getState()
        const componentHTML = ReactDOM.renderToString(
          <Provider store={store}>
            <RouterContext {...props}/>
          </Provider>
        )

        store.runSaga(rootSaga).done.then(() => {
          console.log('sagas complete')
          res.status(200).send(`
            <!doctype html>
            <html ${header.htmlAttributes.toString()}>
              <head>
                ${header.title.toString()}
                ${header.meta.toString()}
                ${header.link.toString()}
              </head>
              <body>
              <div class="feedback"><a class="typeform-share button" href="https://aianash.typeform.com/to/sveJ8Y" data-mode="2" target="_blank">Feedback</a></div>
                <div id="app">${componentHTML}</div>
                <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
                <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
                <script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}id=id+'_';if(!gi.call(d,id)){qs=ce.call(d,'link');qs.rel='stylesheet';qs.id=id;qs.href=b+'share-button.css';s=gt.call(d,'head')[0];s.appendChild(qs,s)}})()</script>
              </body>
            </html>
          `)
        })

        store.close()
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
    } else {
      res.status(404).send('Not found')
    }
  })
}