/* Declare variables below to save the different sections (divs) of your story*/
let title=document.querySelector(".title");

let storyOpenning=document.querySelector(".story-opening");
let buttons=document.querySelector(".buttons");
let button1=document.querySelector(".option-one");
let button2=document.querySelector(".option-two");
let optionOneScreen=document.querySelector(".option-one-screen");
let optionTwoScreen=document.querySelector(".option-two-screen");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");


button1.onclick=function(){
    optionOneScreen.style.display="block";
    storyOpenning.style.display="none";
    title.innerHTML="Second part of the story if you click yes";
};

button2.onclick=function(){
    optionTwoScreen.style.display="block";
    storyOpenning.style.display="none";
    
};









/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct vari

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


