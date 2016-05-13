import React from 'react';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import style from './style.less';
import moment from 'moment';

import { DATE_FORMAT_DAY } from '../../constants/config';
import { isValidDate } from '../../utils/common';
import classnames from 'classnames';

export default React.createClass({
  //mixins: [PureRenderMixin],
  getDefaultProps() {
    return {
      viewModel: 'day',
      inputFormat: DATE_FORMAT_DAY,
      format: DATE_FORMAT_DAY,
      mode: 'date',
      //minDate: moment('2016-02-03'),
      maxDate: moment(new Date())
    }

  },
  onQueryChange (val) {
    //this.props.onChange({
    //  from: getDateBeforeWeek(val),
    //  to: val
    //});
  },
  render() {
    var {dateTimeFrom,dateTimeTo,actions} = this.props;
    var hasErrorFrom = !isValidDate(dateTimeFrom);
    var hasErrorTo = !isValidDate(dateTimeTo);
    //var msg = dateFrom? 'From '+dateFrom + ' to ' + dateTo: '';
    return (
        <div className={style.unionSelect}>

          <div className={style.querySelect}>
            <div className={classnames(style.datetimepicker, {'has-error': hasErrorFrom})}>
              <DateTimeField {...this.props} dateTime={dateTimeFrom} onChange={actions.setTimeFrom}/>
            </div>
          </div>
            <span className={style.timeTo}>To</span>
          <div className={style.querySelect}>
            <div className={classnames(style.datetimepicker, {'has-error': hasErrorTo})}>
              <DateTimeField {...this.props} dateTime={dateTimeTo} onChange={actions.setTimeTo}/>
            </div>
          </div>

        </div>

    );
  }
});