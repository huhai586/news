import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import SelectCommon from '../../components/Articles/select-common';
import SelectFetch from '../../components/Articles/select-fetch';
import InputSearch from '../../components/Articles/input-search';
import ArticlesList from '../../components/Articles/articles-list';
import Datetimepicker from '../../components/Datetimepicker/index';
import BarCharts from '../../components/BarCharts';
import * as articlesActions from '../../actions/articles';
import * as commonActions from '../../actions/common';
import {INFO_TYPE,PUBLISH_STATUS,FETCH_TYPE,SOURCE_OPTION,KEY_WORD} from '../../constants/placeholder';

import style from './style.less';

let unionActions = Object.assign({}, articlesActions, commonActions);

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
    componentWillUpdate(nextPros){

        if(this.props.config.ajaxCount==3){
           return
        }else if(nextPros.config.ajaxCount==3){
            console.log("即将提起submit")
            this.queryNews()
        }
    },
    componentDidMount() {
        //请求select数据
        this.props.actions.getCategory().then((res)=> {
            //
            if (res.payload.length != 0) {
                this.props.actions.changeCategory(res.payload[0].categoryCode
                )
            }
        });

    },
    queryNews: function () {
        var query = this.props.articles.query;
        console.log("查询参数为", query)
        let params = {
            status: query.publishStatus,
            categoryCode: query.categoryCode,
            uplevelType: query.fetch_type,
            sourceId: query.soucr_option, //注意这个传输的类型应该为数组
            dateType: query.timeType,
            startDate: query.time_from,
            endDate: query.time_to,
            keywords: query.keyword,
            orderType: query.orderType,
            pageSize: query.pageSize,
            pageNo: query.pageNo,

        }
        this.props.actions.queryNews(params)
    },

    render() {
        console.log("sdfsdfsfs",style)

        var {articles,actions,config} = this.props;
        //console.log('检测到render', this.props)
        return (
            <div>

                <div className={style.query}>
                    <SelectCommon value={articles.query.publishStatus}
                                  options={config.publishStatus} onChange={actions.changeStatus}
                                  placeholder={PUBLISH_STATUS}/>
                    <SelectCommon onChange={actions.changeCategory} multi={true} options={config.category}
                                  placeholder={INFO_TYPE} value={articles.query.categoryCode}/>
                    <SelectFetch optionsFetch={config.fetch_type} sourceOption={config.source_option} actions={actions}
                                 fetchTypeValue={articles.query.fetch_type}
                                 sourceOptionValue={articles.query.soucr_option}/>
                    <SelectCommon onChange={actions.changeTimeType} options={config.timeType}
                                  value={articles.query.timeType}/>
                    <Datetimepicker dateTimeFrom={articles.query.time_from} dateTimeTo={articles.query.time_to}
                                    actions={actions}/>
                    <InputSearch placeholder={KEY_WORD} actions={actions}/>
                    <Button bsStyle="primary" onClick={this.queryNews}>Submit</Button>
                </div>
                <div className="articles">
                    <div className={style.articles_list}>
                    <ArticlesList {...this.props}></ArticlesList>
                    </div>
                    <div className={style.article_detail}>

                    </div>
                </div>
            </div>


   

        );
    }
});

// connect action to props
const mapStateToProps = (state) => ({articles: state.articles, config: state.config});
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(unionActions, dispatch)});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
