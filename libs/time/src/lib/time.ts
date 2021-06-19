import moment from 'moment';

export function date(date: Date): string {
  return moment(date).format('YYYY-MM-DD');
}

export function time(date: Date): string {
  return moment(date).format('HH:MM');
}
