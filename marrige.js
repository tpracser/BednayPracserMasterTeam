"use strict";


 var number = document.querySelector("#members");
 var members = document.querySelector('.marrige');

+var boy1 = [];
+var boy2 = [];
+var boy3 = [];
+var girl1 = [];
+var girl2 = [];
+var girl3 = [];
+
+
+var boys = [boy1, boy2, boy3];
+var girls = [girl1,  girl2,  girl3];
+


 members.addEventListener('click', function () {
-  for(var i = 1; i < (2 * Math.pow((number.value),2))+1; i++){
-    // var alma = document.querySelector('#select'+ i);
-    // console.log(alma);
-    // console.log(alma.value);
-    console.log(document.querySelector('#select' + i).value);
-    // console.log(alma.option1.value);
-    // console.log(i);
+  for(var i = 1; i < (2 * number.value) + 1; i++){
+    boy1.push(document.querySelector('#select' + i).value)
   }
-  ;


 });
