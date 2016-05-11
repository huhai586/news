import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import SelectPublishStatus from '../../components/Articles/select-publish-status';
import SelectCategory from '../../components/Articles/select-category';
import BarCharts from '../../components/BarCharts';
import * as articlesActions from '../../actions/articles';
import style from './style.less';
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
    //this.onGetChartData();
    //请求select数据

    this.props.actions.getCategory();
  },

  render() {
    var {articles,actions,config} = this.props;
    console.log('检测到render',this.props)
    return (
        <div className={style.query} >
          <SelectPublishStatus value={articles.query.publishStatus}
            options={config.publishStatus} onChange={actions.changeStatus}/>
        </div>

    );
  }
});

// connect action to props
const mapStateToProps = (state) => ({articles: state.articles,config:state.config});
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(articlesActions, dispatch)});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
