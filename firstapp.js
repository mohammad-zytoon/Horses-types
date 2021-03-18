

alert("welcom to our webbage my name is mohammad and i am a big fan for horses");
/*var yes=true;
if (yes==true) {console.log("horses lover")
    
} else {alert("Please take a looke to our webpage you will change your mind");
    
}*/

var favourteHorsesType = prompt("What is your favourt type of horses exept the other you can found below?")

if (favourteHorsesType === 'arabian') {
    alert("good choice");

    console.log("arabian horse chosed");

    alert("you can learn more about it in the next link");

    document.write("<img src='pictures/arabian-horse-july032020-min.jpg'/>");
    document.write("<a href='https://nayturr.com/types-of-horses/'>for more information</a>");

}
 else if (favourteHorsesType==='lusitano'){ alert("good choice");
          
          document.write("<img src='pictures/lusitano-horse-july032020-min.jpg'/>");

         console.log("lusitano horse chosed");

         alert("you can learn more about it in the next link");

         document.write("<a href='https://nayturr.com/types-of-horses/'>for more information</a>");}

 else{alert("for more choices we now wrok on developing our website sorry");}






