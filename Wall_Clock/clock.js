function myClock(){

    let nowDate = new Date();
    console.log(nowDate);


    let day = document.getElementById('day');
    day.innerHTML = nowDate.getDate();

    let month = document.getElementById('month');
    month.innerHTML = nowDate.getMonth() + 1;

    let year = document.getElementById('year');
    year.innerHTML = nowDate.getFullYear();

    let hour = document.getElementById('hour');
    let ampm = document.getElementById('ampm');
    let hr = nowDate.getHours();
    let a = "AM";
    if (hr > 12) {
        hr = hr - 12;
        a = "PM"
    }
    hour.innerHTML = hr;
    ampm.innerHTML = a;

    let minit = document.getElementById('minits');
    minit.innerHTML = nowDate.getMinutes();

    let second = document.getElementById('second');
    second.innerHTML = nowDate.getSeconds();

    let days = nowDate.getDay();
    console.log(days)

    if(days == 0){
        let day_1 = document.getElementById('day-1').style.backgroundColor = 'red';
    }
    if(days == 1){
        let day_1 = document.getElementById('day-2').style.backgroundColor = 'red';
    }
    if(days == 2){
        let day_1 = document.getElementById('day-3').style.backgroundColor = 'red';
    }
    if(days == 3){
        let day_1 = document.getElementById('day-4').style.backgroundColor = 'red';
    }
    if(days == 4){
        let day_1 = document.getElementById('day-5').style.backgroundColor = 'red';
    }
    if(days == 5){
        let day_1 = document.getElementById('day-6').style.backgroundColor = 'red';
    }
    if(days == 6){
        let day_1 = document.getElementById('day-7').style.backgroundColor = 'red';
    }


}
setInterval(myClock, 1000);