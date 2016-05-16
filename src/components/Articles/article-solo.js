/**
 * Created by haihu on 2016/5/11.
 */
import React from 'react';
import Select from 'react-select';
import style from "./style.less"
import classnames from "classnames"
export default React.createClass({
    getContent(){
        var contentId=this.props.id;
        console.log("文章ID",contentId)
        //this.props.actions.getContent({contentId:contentId})
    },
    storeSelected(e){
        this.props.onChecked(this.props.index, e.target.checked)
    },
    render() {
        let{checked,title,originalReleaseTimestamp,browseNum,sourceDesc,recommendFlag,topFlag,type,actions}=this.props;
        return(
            <li className={style.articleSolo} onClick={this.getContent} >
                <div className="selctThis">
                    <input type="checkbox" checked={checked||false} onChange={this.storeSelected} />
                </div>
                <div className="basicInfo">
                    <div className="articleTitle"><span>{title}</span></div>
                    <span className="time">{originalReleaseTimestamp}</span>
                    <span className="readCount">Pageviews:{browseNum}</span>
                    <span className="from">{sourceDesc}</span>
                </div>
                <div className="otherInfo">
                    <span className={classnames({"recommendICON":true,"hidden":recommendFlag==0})}>Rec</span>
                    <span className={classnames({"FixICON":true,"hidden":topFlag==0})}>Fix</span>
                    <span className={classnames({"PicICON":true,"hidden":type==2})}>Pic</span>
                </div>
            </li>


        )
    }
})