import moment from 'moment';
import { DATE_FORMAT_DAY } from '../constants/config';
//import Ps from 'perfect-scrollbar';

export const delay = (timeout = 50) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), timeout);
  });
};

export const getPromiseTypes = (actionName) => {
  return [actionName + '_REQUEST', actionName + '_SUCCESS', actionName + '_FAILURE'];
};

export const getDateToday = () => {
  return moment(new Date()).format(DATE_FORMAT_DAY);
};

export const getDateYesterday = () => {
  return moment(new Date()).subtract(1, 'days').format(DATE_FORMAT_DAY);
};

export const getDateBeforeWeek = (date) => {
  if(moment(date).isValid()) return moment(date).subtract(6, 'days').format(DATE_FORMAT_DAY);

};

export const isValidDate = (date) => {
  return moment(date).isValid();
};

export const isBeforeDate = (date1, date2) => {
  return moment(date1).isBefore(date2);
};

export const perfectScroll = (container) => {
  Ps.destroy(container);
  Ps.initialize(container, {
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
  });
};

export const perfectScrollUpdate = (container) => {
  Ps.update(container);
};

export const humanizeTime = (value, type = 'seconds') => {
  var mt = moment.duration(value, type);
  return (mt.days() ? (mt.days() + 'd, '): '') +
      (mt.hours() ? (mt.hours() + 'h, '): '') +
      (mt.minutes() ? (mt.minutes() + 'm, '): (type == 'minutes' ? '0m, ' : '')) +
      (mt.seconds() ? (mt.seconds() + 's'): (type == 'seconds' ? '0s' : ''));
};