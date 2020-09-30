import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
// import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { CustomRegExp } from '../constants';

@Injectable()
export class UtilsService {

  constructor() { }

  public isUndefined(obj: any): boolean {
    return obj === undefined;
  }

  public isNull(obj: any): boolean {
    return obj === null;
  }

  public isEmpty(obj: any): boolean {
    if (this.isNull(obj) || this.isUndefined(obj)) {
      return true;
    } else if (typeof obj === 'string') {
      return obj === '';
    } else if (typeof obj === 'number') {
      return isNaN(obj) || !isFinite(obj);
    } else if (Array.isArray(obj)) {
      return (<Array<any>>obj).length === 0;
    } else if (typeof obj === 'object') {
      return Object.keys(obj).length === 0;
    }
  }

  public notEmpty(obj: any): boolean {
    return !this.isEmpty(obj);
  }

  public removeEmpty(array: any[]): any[] {
    if (this.isEmpty(array)) {
      return [];
    } else {
      return array.filter(el => !this.isEmpty(el));
    }
  }

  public initializeArray(array: any[], length: number, type: any): any[] {
    const arr = [];
    const arrayLen = this.isEmpty(array) ? 0 : array.length;
    for (let i = 0; i < Math.max(length, arrayLen); i++) {
      if ([array, array[i]].some(e => this.isNull(e) || this.isUndefined(e))) {
        arr.push(new type());
      } else {
        arr.push(Object.assign(new type(), array[i]));
      }
    }
    return arr;
  }

  public deepCopy(source: any): any {
    if (this.isNull(source) || this.isUndefined(source)) {
      return source;
    }
    return JSON.parse(JSON.stringify(source));
  }

  public toBooleanString(value: any): string {
    return this.isEmpty(value) ? '' : String(Boolean(value));
  }

  public toNumber(value: any): number {
    if (value === '-') {
      return -0;
    }
    if (this.isEmpty(value) || isNaN(Number(value))) {
      return 0;
    } else {
      return Number(value);
    }
  }

  // public convertNgbDateToMillis(date: NgbDateStruct): number {
  //   if (date) {
  //     return Date.parse(NgbDateParserFormatter.prototype.format(date));
  //   }
  //   return null;
  // }

  // public convertDateToStrDate(date: Date | number, format: string = 'yyyy-MM-dd'): string {
  //   let d = date;
  //   if (typeof date === 'number') {
  //     d = new Date(<number>d);
  //   }
  //   return new DatePipe('en-US').transform(d, format);
  // }

  // public convertNgbDateToStrDate(date: NgbDateStruct, format: string = 'dd-MM-yyyy'): string {
  //   if (date) {
  //     return this.convertDateToStrDate(this.convertNgbDateToMillis(date), format);
  //   }
  //   return null;
  // }

  // public convertDateToNgbDate(date: NgbDateStruct | Date | number | string): NgbDateStruct {
  //   if (!this.isEmpty(date)) {
  //     let d = null;
  //     if (typeof date === 'number') {
  //       d = new Date(<number>date);
  //     } else if (typeof date === 'string') {
  //       if (isNaN(Date.parse(date))) {
  //         return null;
  //       }
  //       d = new Date(Date.parse(date));
  //     } else if (date instanceof Date) {
  //       d = date;
  //     } else if (typeof date === 'object' && 'day' in <any>date &&
  //       'month' in <any>date && 'year' in <any>date) {
  //       return <NgbDateStruct>date;
  //     }
  //     return {
  //       day: (<Date>d).getDate(),
  //       month: (<Date>d).getMonth() + 1,
  //       year: (<Date>d).getFullYear()
  //     };
  //   } else {
  //     return null;
  //   }
  // }

  getCustomRegExp(regexp: string) {
    return CustomRegExp[regexp];
  }

}
