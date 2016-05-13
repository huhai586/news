/**
 * Created by haihu on 2016/5/11.
 */
import React from 'react';
import Select from 'react-select';
import style from "./style.less"
export default React.createClass({
    changeStatus(val){
        this.props.actions.changeStatus(val);
    },
    render(){
        return(
            <div className={style.querySelect} >
                <Select
                    {...this.props}
                />
            </div>


        )
    }
})