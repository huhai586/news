/**
 * Created by haihu on 2016/5/11.
 */
import React from 'react';
import Select from 'react-select';
import style from "./style.less";
import classnames from 'classnames';
import SelectCommon from '../../components/Articles/select-common';
import ArticleSolo from '../../components/Articles/article-solo';
import { merge } from 'lodash';


export default React.createClass({
    getInitialState() {
        console.log("初始数据",this.props)
      return {
          checked: {}
      }
    },
    onChecked(index, checked) {
        console.log('onChecked', index, checked);
       //this.setState({...(this.state), index: true})
        this.setState(state => {
            var stateNew = {...state};
            stateNew.checked = merge({}, state.checked, {[index]: checked});
            return stateNew;
        })
    },
    cancelPublish(){
        var ids = [];
        this.props.onCancelPublish(ids);
    },
    componentWillUpdate(nextProps) {
        if(nextProps.articles.articlesList !== this.props.articles.articlesList) {
            console.log('List changed');
            this.setState(this.getInitialState());
    }
    },
    doAll:function(e){
        var dataLength=this.props.articles.articlesList.items.length
        var actionType=e.target.checked;
            let checked=this.state.checked;
        var newChecked={};
        for(var i=0;i<dataLength;i++){
            newChecked[i]=actionType
        };
        console.log("全选操作的结果",newChecked)
        this.setState(state => {
            var stateNew = {...state};
            stateNew.checked = merge({}, state.checked, newChecked);
            return stateNew;
        })


    },
    render(){
        let {checked} = this.state;
        console.log(checked);
        let {articles,config,actions}=this.props,rows=[]
        console.log("articles-list得到的数据", this.props.articles.articlesList);
        var publishStatus = parseInt(articles.query.publishStatus);

        //组装数据
        let articlesLists=this.props.articles.articlesList;
        if(articlesLists.items){
            rows=articlesLists.items.map((articleData,index)=>{
                return <ArticleSolo key={index} index={index} checked={checked[index]} onChecked={this.onChecked} {...articleData} actions={actions}/>
            });
        }
        return (
            <div>
                <div className={style.articles_list_header}>

                                <div className={classnames({'selectAll':true})}>
                                    <input type="checkbox" onChange={this.doAll}/>All select
                                    <span onClick={this.cancelPublish} className={classnames({'hidden':!publishStatus})}>Cancel push</span>
                                    <span className={classnames({'hidden':publishStatus})}>Push</span>

                                </div>

                                <div className='orderType'>
                                    <SelectCommon value={articles.query.orderType}
                                                  options={config.filterOption} onChange={actions.changeFilterType}
                                                  placeholder=""
                                        />

                                </div>


                </div>


                <div className={style.articles_list_body}>
                <ul>
                    {rows}
                </ul>
                </div>
                <div className="articles-list-footer"></div>
            </div>


        )
    }
})