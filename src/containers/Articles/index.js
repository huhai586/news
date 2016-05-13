import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import SelectCommon from '../../components/Articles/select-common';
import SelectFetch from '../../components/Articles/select-fetch';
import InputSearch from '../../components/Articles/input-search';
import Datetimepicker from '../../components/Datetimepicker/index';
import BarCharts from '../../components/BarCharts';
import * as articlesActions from '../../actions/articles';
import * as commonActions from '../../actions/common';
import {INFO_TYPE,PUBLISH_STATUS,FETCH_TYPE,SOURCE_OPTION,KEY_WORD} from '../../constants/placeholder';

import style from './style.less';

let unionActions=Object.assign({},articlesActions,commonActions);
console.log("css",style)
var Dashboard = React.createClass({
  getInitialState() {
    return {
      showModal: false
    }
  },
  onShowModal() {
    this.setState({showModal: true});
  },
  onCloseModal() {
    this.setState({showModal: false});
  },
  onGetChartData() {
    this.props.actions.getChartData().then(() => {
      this.refs.barCharts.setOption(this.props.data.chartData);
    });
  },
  componentDidMount() {
    //请求select数据
    this.props.actions.getCategory().then((res)=>{
      //
      if(res.payload.length!=0){
        this.props.actions.changeCategory(res.payload[0].categoryCode
        )
      }
    });

  },
  queryNews:function(){
    var query=this.props.articles.query;
    console.log("查询参数为",query)
    //检查是否都有值
    //let status,categoryCode,uplevelType,sourceId,dateType,startDate,endDate,keywords,orderType;
    //let params={
    //  status
    //}
    //actions.queryNews(params)
  },

  render() {
    var {articles,actions,config} = this.props;
    console.log('检测到render',this.props)
    return (
        <div className={style.query} >
          <SelectCommon value={articles.query.publishStatus}
            options={config.publishStatus} onChange={actions.changeStatus} placeholder={PUBLISH_STATUS}/>
          <SelectCommon onChange={actions.changeCategory} multi={true} options={config.category} placeholder={INFO_TYPE} value={articles.query.categoryCode}/>
          <SelectFetch optionsFetch={config.fetch_type} sourceOption={config.source_option} actions={actions} fetchTypeValue={articles.query.fetch_type} sourceOptionValue={articles.query.soucr_option}/>
          <SelectCommon onChange={actions.changeTimeType} options={config.timeType}  value={articles.query.timeType}/>
          <Datetimepicker dateTimeFrom={articles.query.time_from} dateTimeTo={articles.query.time_to} actions={actions}/>
          <InputSearch placeholder={KEY_WORD} actions={actions}/>
          <Button bsStyle="primary" onClick={this.queryNews}>Submit</Button>
        </div>

    );
  }
});

// connect action to props
const mapStateToProps = (state) => ({articles: state.articles,config:state.config});
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(unionActions, dispatch)});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
