/**
 * Name: Aline Vetrov
 * Date: Jan 15, 2020
 * Title: Data Ex
 */

 let registration = new Date(2020, 0, 7, 8, 25); //Jan 7, 2020 8:25am
 console.log(registration);
 console.log(`year ${registration.getFullYear()}`);
 console.log(`month ${registration.getMonth()}`);
 console.log(`day of week ${registration.getDay()}`);
 console.log(`date ${registration.getDate()}`);
 console.log(`hours ${registration.getHours()}`);
 console.log(`utc hours ${registration.getUTCHours()}`);
 console.log(`minutes ${registration.getMinutes()}`);
 console.log(`seconds ${registration.getSeconds()}`);

 let now = new Date();
 console.log(now);
 console.log(`seconds: ${now.getSeconds()}`);

 now.setFullYear(1999);
 console.log(`${now.toDateString()} ${now.toTimeString()}`);
 
 
 