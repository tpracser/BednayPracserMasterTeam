"use strict";

var button = document.querySelector('button');
var select = document.querySelector('#select');
var ul = document.querySelector('#result');
var number = document.querySelector("#members");

button.addEventListener('click', function () {
  ul.innerText = "";
   for(var c = 0; c < 2;c++){
       var gender = document.createElement('div');
        gender.setAttribute('class','genderType');
    for(var k = 0; k < number.value; k++){
      var li = document.createElement('li');
        for(var i = 0; i < number.value; i++){
          var select = document.createElement('select');
          for(var j = 0; j < number.value; j++){
            var option = document.createElement('option');
            option.setAttribute('value','korte');
            option.innerText = "option" + (j+1);
            select.appendChild(option);
        }
          li.appendChild(select)
      }
      ul.appendChild(li)
    }
    li.appendChild(gender)
  }
});
