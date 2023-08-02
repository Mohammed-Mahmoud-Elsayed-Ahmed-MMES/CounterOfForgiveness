const popup = document.createElement('div');
//-------------------------------------------------------
let value1 = document.querySelector("#Value1");
let add1 = document.querySelector("#addButton");
let remove1 = document.querySelector("#removeButton");
let counter1 = 0;
let one = document.querySelector("#one");
// ------------------------------------------------------
let value2 = document.querySelector("#Value2");
let add2 = document.querySelector("#addButton1");
let remove2 = document.querySelector("#removeButton1");
let counter2 = 0;
let two = document.querySelector("#two");
// ------------------------------------------------------
let value3 = document.querySelector("#Value3");
let add3 = document.querySelector("#addButton2");
let remove3 = document.querySelector("#removeButton2");
let counter3 = 0;
let three = document.querySelector("#three");
// ------------------------------------------------------
let value4 = document.querySelector("#Value4");
let add4 = document.querySelector("#addButton3");
let remove4 = document.querySelector("#removeButton3");
let counter4 = 0;
let four = document.querySelector("#four");
// ------------------------------------------------------
let value5 = document.querySelector("#Value5");
let add5 = document.querySelector("#addButton4");
let remove5 = document.querySelector("#removeButton4");
let counter5 = 0;
let five = document.querySelector("#five");
// ------------------------------------------------------
let value6 = document.querySelector("#Value6");
let add6 = document.querySelector("#addButton5");
let remove6 = document.querySelector("#removeButton5");
let counter6 = 0;
let six = document.querySelector("#six");
// ------------------------------------------------------
let value7 = document.querySelector("#Value7");
let add7 = document.querySelector("#addButton6");
let remove7 = document.querySelector("#removeButton6");
let counter7 = 0;
let seven = document.querySelector("#seven");
// ------------------------------------------------------
let value8 = document.querySelector("#Value8");
let add8 = document.querySelector("#addButton7");
let remove8 = document.querySelector("#removeButton7");
let counter8 = 0;
let eight = document.querySelector("#eight");
// ------------------------------------------------------
let value9 = document.querySelector("#Value9");
let add9 = document.querySelector("#addButton8");
let remove9 = document.querySelector("#removeButton8");
let counter9 = 0;
let nine = document.querySelector("#nine");
// ------------------------------------------------------
let box = document.querySelector(".box");
// const sureButton = document.createElement('button');
// ------------------------------------------------------

/*class sureButtonClass {
  constructor(counter,value,RemoveButton,AddButton)
  {
    this.counter = counter;
    this.value = value;
    this.RemoveButton = RemoveButton;
    this.AddButton = AddButton;
  }
  sureButton1(){
    const sureButton = document.createElement('button');
    sureButton.textContent = 'YES';
    sureButton.style.color = 'white';
    sureButton.style.backgroundColor = 'rgb(2, 38, 52)';
    sureButton.style.borderRadius = "45%";
    sureButton.style.position="absolute" ;
    sureButton.style.fontSize = "x-small" ;
    sureButton.style.top = "56%" ;
    sureButton.style.right = "40%" ;
    sureButton.addEventListener('click', () => {
      this.counter = 0;
      this.value.innerHTML = `${this.counter}`;
        window.localStorage.setItem(this.RemoveButton , this.counter);
        window.localStorage.setItem(this.AddButton , this.counter);
        popup.remove();
    });
    popup.appendChild(sureButton);
  }
}*/

function createPopup() {
  // Create a new div element
  //const popup = document.createElement('div');

  // Set the div element's style
  popup.style.position="relative" ;
  popup.style.width = '230px';
  popup.style.height = '150px';
  popup.style.marginTop = '8px';
  popup.style.backgroundColor = 'lightGray';
  popup.style.border = '1px solid black';
  popup.style.borderRadius = "10%";
  //popup.style.right = '-67%';

  // Add a message to the div element
  const message = document.createElement('p');
  message.textContent = 'Are Sure?';
  message.style.fontSize = "40px";
  message.style.position="absolute" ;
  message.style.top = "-18%";
  message.style.color = "black";
  popup.appendChild(message);

  // Add a button to the div element
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.style.color = 'white';
  closeButton.style.backgroundColor = 'red';
  closeButton.style.borderRadius = "45%";
  closeButton.style.position="absolute" ;
  closeButton.style.fontSize = "xx-small" ;
  closeButton.style.top = "-25%" ;
  closeButton.style.right = "-8%" ;
  closeButton.addEventListener('click', () => {
      popup.remove();
  });
  popup.appendChild(closeButton);

  //

  // Append the div element to the body element
  //box.appendChild(popup);
}
function sureButton1(){
  one.appendChild(popup);
  const sureButton = document.createElement('button');
  sureButton.textContent = 'YES';
  sureButton.style.color = 'white';
  sureButton.style.backgroundColor = 'rgb(2, 38, 52)';
  sureButton.style.borderRadius = "45%";
  sureButton.style.position="absolute" ;
  sureButton.style.fontSize = "x-small" ;
  sureButton.style.top = "56%" ;
  sureButton.style.right = "40%" ;
  sureButton.addEventListener('click', () => {
      counter1 = 0;
      value1.innerHTML = `${counter1}`;
      window.localStorage.setItem("RemoveButton1" , counter1);
      window.localStorage.setItem("AddButton1" , counter1);
      popup.remove();
  });
  popup.appendChild(sureButton);
}
function sureButton2(){
  two.appendChild(popup);
  const sureButton = document.createElement('button');
  sureButton.textContent = 'YES';
  sureButton.style.color = 'white';
  sureButton.style.backgroundColor = 'rgb(2, 38, 52)';
  sureButton.style.borderRadius = "45%";
  sureButton.style.position="absolute" ;
  sureButton.style.fontSize = "x-small" ;
  sureButton.style.top = "56%" ;
  sureButton.style.right = "40%" ;
  sureButton.addEventListener('click', () => {
    counter2 = 0;
    value2.innerHTML = `${counter2}`;
    window.localStorage.setItem("RemoveButton2" , counter2);
    window.localStorage.setItem("AddButton2" , counter2);
    popup.remove();
});
  popup.appendChild(sureButton);
}

function sureButton3(){
  three.appendChild(popup);
  const sureButton = document.createElement('button');
  sureButton.textContent = 'YES';
  sureButton.style.color = 'white';
  sureButton.style.backgroundColor = 'rgb(2, 38, 52)';
  sureButton.style.borderRadius = "45%";
  sureButton.style.position="absolute" ;
  sureButton.style.fontSize = "x-small" ;
  sureButton.style.top = "56%" ;
  sureButton.style.right = "40%" ;
  sureButton.addEventListener('click', () => {
    counter3 = 0;
    value3.innerHTML = `${counter3}`;
    window.localStorage.setItem("RemoveButton3" , counter3);
    window.localStorage.setItem("AddButton3" , counter3);
    popup.remove();
});
  popup.appendChild(sureButton);
}

function sureButton4(){
  four.appendChild(popup);
  const sureButton = document.createElement('button');
  sureButton.textContent = 'YES';
  sureButton.style.color = 'white';
  sureButton.style.backgroundColor = 'rgb(2, 38, 52)';
  sureButton.style.borderRadius = "45%";
  sureButton.style.position="absolute" ;
  sureButton.style.fontSize = "x-small" ;
  sureButton.style.top = "56%" ;
  sureButton.style.right = "40%" ;
  sureButton.addEventListener('click', () => {
    counter4 = 0;
    value4.innerHTML = `${counter4}`;
    window.localStorage.setItem("Remove Button4" , counter4);
    window.localStorage.setItem("Add Button4" , counter4);
    popup.remove();
});
  popup.appendChild(sureButton);
}

function sureButton5(){
  five.appendChild(popup);
  const sureButton = document.createElement('button');
  sureButton.textContent = 'YES';
  sureButton.style.color = 'white';
  sureButton.style.backgroundColor = 'rgb(2, 38, 52)';
  sureButton.style.borderRadius = "45%";
  sureButton.style.position="absolute" ;
  sureButton.style.fontSize = "x-small" ;
  sureButton.style.top = "56%" ;
  sureButton.style.right = "40%" ;
  sureButton.addEventListener('click', () => {
    counter5 = 0;
    value5.innerHTML = `${counter5}`;
    window.localStorage.setItem("Remove Button5" , counter5);
    window.localStorage.setItem("Add Button5" , counter5);
    popup.remove();
});
  popup.appendChild(sureButton);
}

function sureButton6(){
  six.appendChild(popup);
  const sureButton = document.createElement('button');
  sureButton.textContent = 'YES';
  sureButton.style.color = 'white';
  sureButton.style.backgroundColor = 'rgb(2, 38, 52)';
  sureButton.style.borderRadius = "45%";
  sureButton.style.position="absolute" ;
  sureButton.style.fontSize = "x-small" ;
  sureButton.style.top = "56%" ;
  sureButton.style.right = "40%" ;
  sureButton.addEventListener('click', () => {
    counter6 = 0;
    value6.innerHTML = `${counter6}`;
    window.localStorage.setItem("Remove Button6" , counter6);
    window.localStorage.setItem("Add Button6" , counter6);
    popup.remove();
});
  popup.appendChild(sureButton);
}

function sureButton7(){
  seven.appendChild(popup);
  const sureButton = document.createElement('button');
  sureButton.textContent = 'YES';
  sureButton.style.color = 'white';
  sureButton.style.backgroundColor = 'rgb(2, 38, 52)';
  sureButton.style.borderRadius = "45%";
  sureButton.style.position="absolute" ;
  sureButton.style.fontSize = "x-small" ;
  sureButton.style.top = "56%" ;
  sureButton.style.right = "40%" ;
  sureButton.addEventListener('click', () => {
    counter7 = 0;
    value7.innerHTML = `${counter7}`;
    window.localStorage.setItem("Remove Button7" , counter7);
    window.localStorage.setItem("Add Button7" , counter7);
    popup.remove();
});
  popup.appendChild(sureButton);
}

function sureButton8(){
  eight.appendChild(popup);
  const sureButton = document.createElement('button');
  sureButton.textContent = 'YES';
  sureButton.style.color = 'white';
  sureButton.style.backgroundColor = 'rgb(2, 38, 52)';
  sureButton.style.borderRadius = "45%";
  sureButton.style.position="absolute" ;
  sureButton.style.fontSize = "x-small" ;
  sureButton.style.top = "56%" ;
  sureButton.style.right = "40%" ;
  sureButton.addEventListener('click', () => {
    counter8 = 0;
    value8.innerHTML = `${counter8}`;
    window.localStorage.setItem("Remove Button8" , counter8);
    window.localStorage.setItem("Add Button8" , counter8);
    popup.remove();
});
  popup.appendChild(sureButton);
}

function sureButton9(){
  nine.appendChild(popup);
  const sureButton = document.createElement('button');
  sureButton.textContent = 'YES';
  sureButton.style.color = 'white';
  sureButton.style.backgroundColor = 'rgb(2, 38, 52)';
  sureButton.style.borderRadius = "45%";
  sureButton.style.position="absolute" ;
  sureButton.style.fontSize = "x-small" ;
  sureButton.style.top = "56%" ;
  sureButton.style.right = "40%" ;
  sureButton.addEventListener('click', () => {
    counter9 = 0;
    value9.innerHTML = `${counter9}`;
    window.localStorage.setItem("Remove Button9" , counter9);
    window.localStorage.setItem("Add Button9" , counter9);
    popup.remove();
});
  popup.appendChild(sureButton);
}


// ------------------------------------------------------

add1.onclick = function()
{
  counter1++;
  value1.innerHTML = `${counter1}`;
  window.localStorage.setItem("AddButton1" , counter1);
}
remove1.onclick = function()
{
  createPopup();
  sureButton1();
  window.localStorage.setItem("RemoveButton1" , counter1);
} 

if (window.localStorage.getItem("AddButton1")) {
  counter1 = window.localStorage.getItem("AddButton1");
  value1.textContent = counter1;
  }
// ------------------------------------------------------
add2.onclick = function()
{
  counter2++;
  value2.innerHTML = `${counter2}`;
  window.localStorage.setItem("AddButton2" , counter2);
}
remove2.onclick = function()
{
  createPopup();
  sureButton2();
  window.localStorage.setItem("RemoveButton2" , counter2);
} 

if (window.localStorage.getItem("AddButton2")) {
  counter2 = window.localStorage.getItem("AddButton2");
  value2.textContent = counter2;
  }
// ------------------------------------------------------
add3.onclick = function()
{
  counter3++;
  value3.innerHTML = `${counter3}`;
  window.localStorage.setItem("AddButton3" , counter3);
}
remove3.onclick = function()
{
  createPopup();
  sureButton3();
  window.localStorage.setItem("RemoveButton3" , counter3);
} 

if (window.localStorage.getItem("AddButton3")) {
  counter3 = window.localStorage.getItem("AddButton3");
  value3.textContent = counter3;
  }
// ------------------------------------------------------
add4.onclick = function()
{
  counter4++;
  value4.innerHTML = `${counter4}`;
  window.localStorage.setItem("Add Button4" , counter4);
}
remove4.onclick = function()
{
  createPopup();
  sureButton4();
  window.localStorage.setItem("Remove Button4" , counter4);
} 

if (window.localStorage.getItem("Add Button4")) {
  counter4 = window.localStorage.getItem("Add Button4");
  value4.textContent = counter4;
  }
// ------------------------------------------------------
add5.onclick = function()
{
  counter5++;
  value5.innerHTML = `${counter5}`;
  window.localStorage.setItem("Add Button5" , counter5);
}
remove5.onclick = function()
{
  createPopup();
  sureButton5();
  window.localStorage.setItem("Remove Button5" , counter5);
} 

if (window.localStorage.getItem("Add Button5")) {
  counter5 = window.localStorage.getItem("Add Button5");
  value5.textContent = counter5;
  }
// ------------------------------------------------------
add6.onclick = function()
{
  counter6++;
  value6.innerHTML = `${counter6}`;
  window.localStorage.setItem("Add Button6" , counter6);
}
remove6.onclick = function()
{
  createPopup();
  sureButton6();
  window.localStorage.setItem("Remove Button6" , counter6);
} 

if (window.localStorage.getItem("Add Button6")) {
  counter6 = window.localStorage.getItem("Add Button6");
  value6.textContent = counter6;
  }
// ------------------------------------------------------
add7.onclick = function()
{
  counter7++;
  value7.innerHTML = `${counter7}`;
  window.localStorage.setItem("Add Button7" , counter7);
}
remove7.onclick = function()
{
  createPopup();
  sureButton7();
  window.localStorage.setItem("Remove Button7" , counter7);
} 

if (window.localStorage.getItem("Add Button7")) {
  counter7 = window.localStorage.getItem("Add Button7");
  value7.textContent = counter7;
  }
// ------------------------------------------------------
add8.onclick = function()
{
  counter8++;
  value8.innerHTML = `${counter8}`;
  window.localStorage.setItem("Add Button8" , counter8);
}
remove8.onclick = function()
{
  createPopup();
  sureButton8();
  window.localStorage.setItem("Remove Button8" , counter8);
} 

if (window.localStorage.getItem("Add Button8")) {
  counter8 = window.localStorage.getItem("Add Button8");
  value8.textContent = counter8;
  }
// ------------------------------------------------------
add9.onclick = function()
{
  counter9++;
  value9.innerHTML = `${counter9}`;
  window.localStorage.setItem("Add Butto9" , counter9);
}
remove9.onclick = function()
{
  createPopup();
  sureButton9();
  window.localStorage.setItem("Remove Button9" , counter9);
} 

if (window.localStorage.getItem("Add Button9")) {
  counter9 = window.localStorage.getItem("Add Button9");
  value9.textContent = counter9;
  }
// ------------------------------------------------------------------

/* var lastTap = 0;
document.addEventListener('touchend', function(event) {
    var currentTime = new Date().getTime();
    var tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
        event.preventDefault();
    }
    lastTap = currentTime;
});
var counter = 0;

var add1 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value1').innerHTML);
  a += valueToAdd;
  document.getElementById('Value1').innerHTML = a;
}

function reset1(){
  document.getElementById('Value1').innerHTML=0;  
  }

var counter = 0;
var add2 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value2').innerHTML);
  a += valueToAdd;
  document.getElementById('Value2').innerHTML = a;
}

function reset2(){
  document.getElementById('Value2').innerHTML=0;  
  }

var counter = 0;
var add3 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value3').innerHTML);
  a += valueToAdd;
  document.getElementById('Value3').innerHTML = a;
}

function reset3(){
  document.getElementById('Value3').innerHTML=0;  
  }

var counter = 0;
var add4 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value4').innerHTML);
  a += valueToAdd;
  document.getElementById('Value4').innerHTML = a;
}

function reset4(){
  document.getElementById('Value4').innerHTML=0;  
  }

var counter = 0;
var add5 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value5').innerHTML);
  a += valueToAdd;
  document.getElementById('Value5').innerHTML = a;
}

function reset5(){
  document.getElementById('Value5').innerHTML=0;  
  }

var counter = 0;
var add6 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value6').innerHTML);
  a += valueToAdd;
  document.getElementById('Value6').innerHTML = a;
}

function reset6(){
  document.getElementById('Value6').innerHTML=0;  
  }

var counter = 0;
var add7 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value7').innerHTML);
  a += valueToAdd;
  document.getElementById('Value7').innerHTML = a;
}

function reset7(){
  document.getElementById('Value7').innerHTML=0;  
  }

var counter = 0;
var add8 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value8').innerHTML);
  a += valueToAdd;
  document.getElementById('Value8').innerHTML = a;
}

function reset8(){
  document.getElementById('Value8').innerHTML=0;  
  }

var counter = 0;
var add9 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value9').innerHTML);
  a += valueToAdd;
  document.getElementById('Value9').innerHTML = a;
}

function reset9(){
  document.getElementById('Value9').innerHTML=0;  
}
var btn = document.getElementById("btn");
var message = document.getElementById("message");

btn.addEventListener("click", function() {
  message.style.display = "block";
});*/