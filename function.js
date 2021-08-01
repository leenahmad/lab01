alert("must your age be +18 to drive a car")

let age = parseInt(prompt('Enter your age'));



function ShowMessage(firstName)
{
    function SayHello() {
        alert("Hello " + firstName);
    }

    return SayHello();
}


let name = prompt("what is your name")

ShowMessage(name);

let b =  parseInt(prompt('Enter current year'));
let c = parseInt(prompt('Enter your birth year'));

function yourAge(){
  let a = b - c; 

  return a;
}
 
 let result = parseInt(yourAge())
  alert("your age is " + result);




  
let favCar = prompt("what is your fav car, plese choose one of these: tesla, mazda, mercedes")

while(favCar != "tesla" && favCar != "mazda" && favCar != "mercedes"){

   favCar = prompt("what is your fav car, plese choose one of these : tesla,mazda,mercedes")
}

let numberOfPic = prompt("how many times you wish to see it")

while(numberOfPic > 5){

numberOfPic = prompt ("please enter number less than 5")
}

if(favCar == "tesla"){

for(let i =0; i< numberOfPic; i++)


 {document.write("<div>" + "<h4>" + favCar + "</h4>" + "<img src='https://www.teslarati.com/wp-content/uploads/2020/06/tesla-model-s-plaid-3-1024x670.jpg' 'alt=tesla' 'width=300' 'height=200' 'title=tesla'>"  + "</div")}
}
else if(favCar == "mazda"){

  for(let i =0; i< numberOfPic; i++)

  {document.write("<div>" + "<h4>" + favCar + "</h4>" + "<img src='https://images.hgmsites.net/lrg/2021-mazda-mazda6_100770171_l.jpg' 'alt=Mazda' 'width=300' 'height=200' 'title=mazda'>" + "</div>")}

}
else if(favCar == "mercedes"){

  for( let i =0; i< numberOfPic; i++)
 
 {document.write("<div>" + "<h4>" + favCar + "</h4>" + "<img src='https://www.mercedes-benz.com/en/company/_jcr_content/root/slider/sliderchilditems/slideritem/image/MQ3-0-tabletImage-20191025121730/01-mercedes-benz-ag-company-3400x1440.jpeg' 'alt=mercedes' 'width=300' 'height=200' 'title=mercedes'>" + "</div>")}
}
else{
 confirm("Your fav car is not here")


}
