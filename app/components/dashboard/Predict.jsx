import React, { PropTypes, Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';
import { Graph } from 'components/dashboard';
import {behavior, pageseq} from 'images';

const cx = classNames.bind(styles);

const randomize = (behavior) => {
  for(var i = 0; i < 3; i++) {
    var idx1 = Math.floor(Math.random() * behavior.length);
    var idx2 = Math.floor(Math.random() * behavior.length);
    const t = behavior[idx1];
    behavior[idx1] = behavior[idx2];
    behavior[idx2] = t;
  }
  return behavior.map((b, i) => ({b: b, m: (10 - Math.floor(Math.random() * 10))}))
                 .sort((a, b) => {
                   if(a.m < b.m) return 1;
                   else return -1;
                 });
}

const Importance = ({val}) => {
  const style = { width: val + "%"};
  return (<div style={style} className={cx("importance")}></div>);
}

Importance.propTypes = {
  val: PropTypes.number.isRequired
}

const Selector = ({behavior}) => {
  return (
    <div className={cx("selector")}>
      <ul className={cx("list-unstyled", "list-inline")}>
        <li key='t' className={cx("idx")}>avg information</li>
      {randomize(behavior).map((b, i) => (
        <li key={i} className={cx("tag")}>
          <span>{b.b}</span>
          <Importance val={b.m * 10}/>
        </li>
      ))}
      </ul>
    </div>
  );
}

Selector.propTypes = {
  behavior: PropTypes.array.isRequired
}

const sampleAction = () => {
  if(Math.random() < 0.5) return <div></div>
  else return (
    <ul className={cx("list-unstyled", "actions")}>
      <li><span className={cx("tag", "blue")}>click</span><span className={cx("val")}>5K/10K</span></li>
    </ul>
  )
}

const sampleDrops = () => {
  const reach = () => (
    Math.floor(Math.random() * ( 10 - 6) + 6));
  const drop = () => (
    Math.floor(Math.random() * 6));
  const continued = () => (
    Math.floor(Math.random() * 5));

  return (
    <ul className={cx("list-unstyled", "drops")}>
      <li><span className={cx("tag", "green")}>reach</span><span className={cx("val")}>{reach()}K/10K</span></li>
      <li><span className={cx("tag", "red")}>drop</span><span className={cx("val")}>{drop()}K/10K</span></li>
      <li><span className={cx("tag", "yellow")}>contnd</span><span className={cx("val")}>{continued()}K/10K</span></li>
    </ul>
  )
}

const createLabel = (time, idx, behavior, action) => {
  const style = { position: 'absolute', top: time };
  return (
    <div style={style} key={idx} className={cx("graph-label", "row")}>
      <div className={cx("col-md-4")}>
        <span className={cx("label-tm")}>{time}ms</span>
        <ul className={cx("list-unstyled")}>
          {randomize(behavior).map((b, i) => (
            <li key={i}>
              <span>{b.b}</span>
              <Importance val={b.m * 10}/>
            </li>
          ))}
        </ul>
      </div>
      <div className={cx("col-md-4")}>{sampleAction()}</div>
      <div className={cx("col-md-4")}>{sampleDrops()}</div>
    </div>
  )
}

const GraphLabel = ({gheight, timePos, behavior}) => {
  const set = { height: gheight };
  return (
    <div className={cx("col-md-5")} style={set}>
      {timePos.map((time, i) => createLabel(time, i, behavior, "click"))}
    </div>
  )
}

GraphLabel.propTypes = {
  gheight: PropTypes.string.isRequired,
  timePos: PropTypes.array.isRequired,
  behavior: PropTypes.array.isRequired
}

const Query = ({q, i}) => {
  return (
    <div className={cx("query")}>
      <div className={cx("box")}><span className={cx("field")}>{q.field}</span></div>
      <div className={cx("box")}><span className={cx("comp")}>{q.comp}</span></div>
      <div className={cx("box")}><span className={cx("vals")}>{q.vals[0]}</span></div>
    </div>
  )
}

Query.propTypes = {
  q: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired
}

const Filter = ({name, queries}) => {
  return (
    <div className={cx("filter")}>
      <h2 className={cx("header")}>{name}</h2>
      <ul className={cx("list-unstyled")}>
        {queries.map((qy, i) =>
          <li key={i}><Query q={qy} i={i}/></li>
        )}
      </ul>
    </div>
  )

}

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  queries: PropTypes.array.isRequired
}

export default class Behavior extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    gheight: "2120",
    gwidth: "100%",
    timePos: ["2070", "1934", "1798", "1662", "1526", "1390", "1254", "1118", "982", "846", "710", "574", "438", "302", "166", "30"],
    behavior: [
      'analytics',
      'sales',
      'marketing',
      'web'
    ],
    posterior: [
      'analytics',
      'sales',
      'marketing',
      'web'
    ],
    queries: {
      segment: [
        { field: 'Browser', comp: 'equals', vals: ['Chrome'] },
        { field: 'Country', comp: 'equals', vals: ['India'] }
      ],
      frompage: [
        { field: 'Page', comp: 'equals', vals: ['/dashboard'] }
      ],
      time: [
        { field: 'From', comp: 'equals', vals: ['Last Week'] }
      ]
    }
  }

  render() {
    return (
      <div className={cx("container-fluid")}>
        <div className={cx("row", "behavior", "predict")}>
          <div className={cx("col-md-4")}>
            <div className={cx("block")}>
              <div className={cx("block-heading")}>
                <div className={cx("title")}>
                  <h2>PREDICT FOR</h2>
                  <p>Choose parameters for prediction</p>
                </div>
                <div className={cx("heading-elements")}>Clear</div>
              </div>
              <div className={cx("block-content")}>
                <div className={cx("row")}><Filter name="Segment" queries={this.state.queries.segment}/></div>
                <div className={cx("row")}><Filter name="From page" queries={this.state.queries.frompage}/></div>
                <div className={cx("row")}><Filter name="Time" queries={this.state.queries.time}/></div>
              </div>
            </div>
            <div className={cx("block")}>
              <div className={cx("block-heading")}>
                  <div className={cx("title")}>
                    <h2>Behaviors</h2>
                    <p>Number of user's per behavior</p>
                  </div>
                  <div className={cx("heading-elements")}>
                    <button type="button" className={cx("btn", "btn-default", "btn-icon-fixed", "dropdown-toggle")} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className={cx("icon-calendar-full")}></span> June 13, 2016 - July 14, 2016
                    </button>
                  </div>
                </div>
                <div className={cx("block-content")}>
                  <img src={behavior} className={cx("img-responsive")} alt="work"/>
                </div>
            </div>
          </div>
          <div className={cx("col-md-8")}>
            <div className={cx("block")}>
              <div className={cx("block-heading")}>
                <div className={cx("title")}>
                  <h2>User Behavior</h2>
                  <p>Behavior prediction</p>
                </div>
                <div className={cx("heading-elements")}>
                  <Selector behavior={this.state.behavior}/>
                </div>
              </div>
              <div className={cx("block-content")}>
                <div className={cx("row", "graph-header")}>
                  <div className={cx("col-md-7")}>Graph</div>
                  <div className={cx("col-md-5")}>
                    <div className={cx("col-md-4")}>Information</div>
                    <div className={cx("col-md-4")}>Actions</div>
                    <div className={cx("col-md-4")}>User Reach</div>
                  </div>
                </div>
                <div className={cx("row", "graph-cont")}>
                  <Graph height={this.state.gheight} width={this.state.gwidth}/>
                  <GraphLabel gheight={this.state.gheight}
                              timePos={this.state.timePos}
                              behavior={this.state.behavior}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}