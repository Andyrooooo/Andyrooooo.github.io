// what is the path to the JSON file?
const apiURL = "hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++) {

    let myImageTag = document.createElement("img"); //child
    myImageTag.src = myList[i].photo;

    let myCaptionTag = document.createElement("figcaption"); //child
    myCaptionTag.textContent = myList[i].name;
    
    let myFigureTag = document.createElement("figure"); //parent
    myFigureTag.appendChild(myImageTag);  //where you add the child to the tag
    myFigureTag.appendChild(myCaptionTag); //where you add the child to the tag


    let iconUno = document.createElement("i");
    iconUno.className = "icon ion-md-business";

    let firstAddress = document.createElement("p");
    firstAddress.textContent = myList[i].address[0];

    let secondAddress = document.createElement("p");
    secondAddress.textContent = myList[i].address[1];


    let leftSpanTag = document.createElement("span");
    leftSpanTag.appendChild(iconUno);
    leftSpanTag.appendChild(firstAddress);
    leftSpanTag.appendChild(secondAddress);




    let iconDos = document.createElement("i");
    iconDos.className = "icon ion-md-call";

    let phoneNumber = document.createElement("p");
    phoneNumber.textContent = myList[i].phone;

    let rightSpanTag = document.createElement("span");
    rightSpanTag.appendChild(iconDos);
    rightSpanTag.appendChild(phoneNumber);




    let hotelDiv = document.createElement("div");
    hotelDiv.appendChild(leftSpanTag);
    hotelDiv.appendChild(rightSpanTag);
  


    let cardOne = document.createElement("section");
    cardOne.appendChild(myFigureTag);
    cardOne.appendChild(hotelDiv);
    //example of how to add the icons   theIconLeftTag.className = "icon ion-md-car";


    
    document.getElementById('allcards').appendChild(cardOne);
    }

}); //end of "then" fat arrow function