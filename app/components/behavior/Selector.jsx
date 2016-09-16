import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import fuzzy from 'fuzzy'
import { DateField, Calendar } from 'react-date-picker'
import 'react-date-picker/index.css'

import styles from 'css/main'
import {
  Query,
  Row,
  Column,
  Widget,
  WidgetHeading,
  WidgetContent } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

const pageMapper = (page) => `${page.name}-${page.url}`;
const pageEntryFormatter = (page) => `${page.name}-${page.url}`

//
const Selector = ({selectedPageId, pages, instances, selectPage, onDateChange, onSelectInstance}) => {
  let instanceRndr
  if(instances) {
    const {spans} = instances
    instanceRndr =
      <ol className={cx('list-unstyled')}>
        {_.map(spans, (span, idx) =>
          <li key={idx}
              onClick={_.bind(onSelectInstance, null, idx, span)}>
            {span[2]}: {span[0]} - {span[1]}
          </li>
        )}
      </ol>
  }

  const entities = pages && pages.entities ? pages.entities: []
  return (
    <Row>
      {/* search */}
      <Column size='md-4'>
        <Query entries={entities}
               mapper={pageMapper}
               formatter={pageEntryFormatter}
               onSelectEntry={selectPage}/>
      </Column>
      {/* datepicker */}
      <Column size='md-4'><Calendar onChange={onDateChange}/></Column>
      {/* instance selector */}
      <Column size='md-4'> {instanceRndr}</Column>
    </Row>
  )
};

Selector.propTypes = {
  selectedPageId: PropTypes.string,
  pages: PropTypes.object.isRequired,
  instances: PropTypes.object,
  selectPage: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onSelectInstance: PropTypes.func.isRequired
}

export default Selector