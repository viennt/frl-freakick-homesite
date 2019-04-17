import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import * as constants from '../constants';

@Injectable()
export class HelpService {

  public static getTimezoneOffset(timezone: string) {
    let offset: string = moment().tz(timezone).format('Z');
    return HelpService.convertStringTimeToDouble(offset);
  }

  public static convertStringTimeToDouble(time: string): number {
    let arrTime = time.split(':');
    let minutes = (arrTime[1] === '00') ? '' : '5';
    return Number(arrTime[0] + '.' + minutes);
  }

  public static convertDoubleTimeToString(time: number): string {
    time = (time < 0) ? (24 + time) : time;
    time = (time >= 24) ? (time - 24) : time;
    let hour = (Math.floor(time) < 10) ? ('0' + Math.floor(time)) : (Math.floor(time) + '');
    let minute = String('0' + Math.round(time % 1 * 60)).substr(-2);
    return hour + ':' + minute;
  }

  public static convertUTCToLocalTime(date: string, timezone: string, format = constants.DATE_TIME.LOCAL_FORMAT): any {
    return moment.utc(date).local().tz(timezone).format(format) + '';
  }

  public static getTimeLocalToUTC(time: number, timeZoneOffset: number) {
    time = time - timeZoneOffset;
    time = time < 0 ? (time + 24) : time >= 24 ? (time - 24) : time;
    let h = time < 10 ? '0' + (time * 10 - (time * 10) % 10) / 10 : (time * 10 - (time * 10) % 10) / 10 + '';
    let m = (time * 10) % 10 === 0 ? '00' : '30';
    return h + ':' + m;
  }

  public static getListHoursInDay() {
    let hour: any;
    let hourH: any;
    let hours: { name: string, value: number }[] = [];
    for (let i = 0; i < 24; i++) {
      let period = i >= 12 ? 'PM' : 'AM';
      if (i < 10) {
        i = Number('0' + i);
      }
      let h = i;
      h = (h > 12) ? h - 12 : h;
      h = h ? h : 12; // the hour '0' should be '12'
      hour = {value: i, name: h + ':00 ' + period};
      hourH = {value: i + 0.5, name: h + ':30 ' + period};
      hours.push(hour);
      hours.push(hourH);
    }
    return hours;
  }

  public static getUserLogo(logo: string) {
    if (!logo || logo === 'null') {
      return './assets/images/default/user_logo.png';
    } else {
      if (logo.startsWith(constants.CONFIG.URL)) return logo;
      else if (logo.startsWith('./assets')) return logo;
      return constants.CONFIG.URL + '/assets/' + logo;
    }
  }
}
