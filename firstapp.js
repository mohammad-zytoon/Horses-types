

/*/alert("welcom to our webbage my name is mohammad and i am a big fan for horses");
var horsesLover = prompt("do you love horses?");
function getHorsesLover(isYouHorsesLover) 
{
    
    console.log(horsesLover);

    if (isYouHorsesLover=='yes') {console.log("horses lover")
    
} else if (isYouHorsesLover=='no') {alert("Please take a looke to our webpage you will change your mind");}

else {
        alert('please answer by yes or no only');
    }
}

getHorsesLover(horsesLover);


var favourteHorsesType = prompt("What is your favourt type of horses exept the other you can found below?");

var getfavourteHorsesType = function () {


while (favourteHorsesType !== 'arabian' && favourteHorsesType !== 'lusitano') {
    favourteHorsesType = prompt('you have to choose only one of the next two choices arabian and lusitano');
}

    var numberOfImages = prompt('how many images do you want for the horse you choose?');

    var insertingImages = '';
   
    var imagesGroup= '';

    //var insertingLink = '';
   
    //var linksGroup= '';


   if (favourteHorsesType === 'arabian') {
    alert("good choice");

    console.log("arabian horse chosed");

    alert("you can learn more about it in the next link");

    insertingImages = '<img src="pictures/arabian-horse-july032020-min.jpg" width="250px"/>';
    
    //insertingLink = '<a href="https://nayturr.com/types-of-horses/">for more information</a> ';

}
 else if (favourteHorsesType==='lusitano'){ alert("good choice");
          
    insertingImages ='<img src="pictures/lusitano-horse-july032020-min.jpg" width="250px"/>';

         console.log("lusitano horse chosed");

         alert("you can learn more about it in the next link");

        // insertingLink = '<a href="https://nayturr.com/types-of-horses/">for more information</a>';
    }

 //else{alert("for more choices we now wrok on developing our website sorry");}
     
     console.log(insertingImages);
     //console.log(insertingLink);
     
     for (var i = 0; i < numberOfImages; i++) {
       
        imagesGroup += insertingImages;
        //linksGroup += insertingLink;

    }

    //console.log(imagesGroup);
    //console.log(linksGroup);
    return imagesGroup

    
   // document.write(linksGroup);

}
document.write(getfavourteHorsesType());








