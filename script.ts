function clock()  {
    let days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'saturday'];
    let months: string[]  = ['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
    let hrs: any = document.getElementById('hours');
    let min: any = document.getElementById('minutes');
    let sec: any = document.getElementById('second');
    let period: any = document.getElementById('pmam');
    let date: any = document.getElementById('dd');
    let day: any = document.getElementById('ddmmyy');

    let time = new Date();

    let h: number | string = time.getHours();
    let m: number | string = time.getMinutes();
    let s: number | string = time.getSeconds(); 
    let dy: number | string = time.getDay();
    let dd: number | string = time.getDate();
    let mm: number | string = time.getMonth();
    let yy: number | string = time.getFullYear();

    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }

    let pmam = h >= 12 ? 'AM' : 'PM';

    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    period.innerHTML = pmam;
    date.innerHTML = months[mm] + ' ' + dd + ',' + yy;
    day.innerHTML = days[dy];

}
setInterval(clock, 1000);
clock()



