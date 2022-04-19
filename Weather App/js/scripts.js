// what is the path to the JSON file?
const apiURL = "//api.openweathermap.org/data/2.5/forecast?zip=84062,us&appid=e4e2fca17cf0dc5d7caf870a11eca397&units=imperial";

const d = new Date();

const todayDayNumber = d.getDay();

const myWeekDay = new Array(7);
    myWeekDay[0] = "Sunday";
    myWeekDay[1] = "Monday";
    myWeekDay[2] = "Tuesday";
    myWeekDay[3] = "Wednesday";
    myWeekDay[4] = "Thursday";
    myWeekDay[5] = "Friday";
    myWeekDay[6] = "Saturday";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myWeather) => {
    //Once it comes back, display it to the console.
    console.log(myWeather);

    document.getElementById('place').innerHTML=myWeather.city.name;

    let forecastDayNumber = todayDayNumber;
    
   let myList = myWeather.list;

    for (i=0;i<myList.length;i++) {

    var time = myList[i].dt_txt;

        if (time.includes('00:00:00')) {
            
            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {forecastDayNumber = 0;}
            
            let theDayName = document.createElement("span");
            theDayName.textContent = myWeekDay[forecastDayNumber];
            console.log(">"+myWeekDay[forecastDayNumber]);
            
            let dayTemp = document.createElement("p");
            dayTemp.textContent = myWeather.list[i].main.temp + "\xB0";

            let iconcode = myWeather.list[i].weather[0].icon
            let iconPath = "//openweathermap.org/img/w/"+iconcode+".png";
            let theIcon = document.createElement("img")
            theIcon.src = iconPath;

            
            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(dayTemp);
            theDay.appendChild(theIcon);

            let dayCard = document.createElement("section")
            dayCard.appendChild(theDay);

            document.getElementById('cards').appendChild(dayCard);
        }
    }

}); //end of "then" fat arrow function