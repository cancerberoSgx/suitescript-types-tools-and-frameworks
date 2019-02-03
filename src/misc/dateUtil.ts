import { nanoTime } from 'N/util';

export function now(unit: 'milliseconds' | 'nanoseconds' = 'milliseconds') {
  return unit === 'milliseconds' ? nanosecondsToMilliseconds(nanoTime()) : nanoTime();
}
export function nanosecondsToMilliseconds(n: number) {
  return n / 1e+6;
}

export function formatDate(date: Date, format: 'YYYY-MM-DD'|'MM/DD/YYYY') {
  var dd:any = date.getDay();
  var mm:any = date.getMonth()+1; //January is 0!
  var yyyy = date.getFullYear();
  if(dd<10){
      dd='0'+dd;
  } 
  if(mm<10){
      mm='0'+mm;
  } 
  if(format==='YYYY-MM-DD'){
    return yyyy+'-'+mm+'-'+dd;                
  }
  else {
    return `${mm}/${dd}/${yyyy}`
  }
}