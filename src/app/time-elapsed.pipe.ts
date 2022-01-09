import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  transform(daySubmitted:Date, ...arg:any []): unknown{//Specify the daySubmitted date as the parameter
                                                       // value to be passed to the transform() method.
                                                     
// Declare the variables to be utilized in our transform method's function operation statement
// to determine the elapsed time.

let presentDay:any = new Date();

 // Formulate the function operation code statement to provide the days elapsed 
 // for each table Quote entry by calculating the difference between the present time
 // and the quote submission time, and divide the milliseconds time interval
 // by a time metric factor to determine the period of time that elapsed in 'days'

 return Math.floor((presentDay.getTime() - daySubmitted.getTime()) / (24*60*60*1000));

  }

}
