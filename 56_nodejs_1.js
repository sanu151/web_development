const { link } = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Digital Wall Clock</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet">
      <style>
      body{
        background-color: yellow;
    }
    #container{
        width: 98%;
        height: 98%;
        border: 10px solid black;
        background-color: gray;
        border-radius: 20px;
    }
    
    .part{
        padding: 1%;
        margin: 3% 5%;
        height: 20%;
        border: 5px solid black;
        border-radius: 20px;
    }
    
    #companyName{
        border: 10px solid rgb(221, 100, 154);
        background-color: rgb(221, 100, 154);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        font-weight: bold;
    }
    
    .grid{
        display: grid;
        grid-template-columns: 2fr 2fr 3fr;
        grid-gap: 1rem;
        margin-left: 5%;
    }
    
    .date{
        height: 100px;
        display: flex;
        align-items: center;
    }
    
    #day, #month, #year{
        border: 4px solid black;
        width: 60%;
        height: 100%;
    }
    .grid1{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1rem;
    }
    
    .time{
        height: 100px;
        display: flex;
        align-items: center;
    }
    
    #hour, #minits, #second, #ampm{
        border: 4px solid black;
        width: 59%;
        height: 100%;
    }
    
    .grid2{
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 1rem;
        margin: auto;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    #day, #month, #year, #hour,#minits, #second, #ampm{
        font-family: 'Silkscreen', cursive;
        font-size: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        background-color: ivory;
    }
      </style>
  </head>
  
  <body>
      <div id="container">
          <div class="part">
              <div class="grid">
                  <div class="date">
                      <h2>Day : </h2>
                      <div id="day">12</div>
                  </div>
                  <div class="date">
                      <h2>Month : </h2>
                      <div id="month"></div>
                  </div>
                  <div class="date">
                      <h2>Year : </h2>
                      <div id="year"></div>
                  </div>
              </div>
          </div>
          <div class="part">
              <div class="grid1">
                  <div class="time">
                      <h2>Hour : </h2>
                      <div id="hour">
  
                      </div>
                  </div>
                  <div class="time">
                      <h2>Minutes : </h2>
                      <div id="minits"></div>
                  </div>
                  <div class="time">
                      <h2>Second : </h2>
                      <div id="second"></div>
                  </div>
                  <div class="time">
                      <h2>A.M./P.M. : </h2>
                      <div id="ampm"></div>
                  </div>
              </div>
          </div>
          <div class="part">
              <div class="grid2">
                  <div id="day-1">Sun </div>
                  <div id="day-2">Mon </div>
                  <div id="day-3">Tue </div>
                  <div id="day-4">Wed </div>
                  <div id="day-5">Thu </div>
                  <div id="day-6">Fri </div>
                  <div id="day-7">Sat </div>
              </div>
          </div>
          <div class="part" id="companyName">Supriyo's Clock</div>
      </div>
  
      <script>
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
      </script>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});