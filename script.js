/* Task 1 */
var heading = document.getElementById('heading');
console.log(heading.innerText);
heading.innerText="change it";
/* Task 2 using plain JavaScript */

//var test=1;

var textBtn = document.getElementById('addText2a');
textBtn.addEventListener('click',function(event){
    var task2=document.getElementById('task2a');
    var paragraph= document.createElement('p');
    task2.innerText="hello world";
    task2.appendChild(paragraph);
   // test=3;
    
});
 //console.log(test);
function changeBGcolor(event){
    var body= document.getElementsByTagName('body')[0];
    if (event.target.innerText=="Red") {
        body.style.backgroundColor='red';
        
    }
     if (event.target.innerText=="Green") {
        body.style.backgroundColor='green';
        
    }
    
}

function redirectToGoogle(event){
    window.location.assign("http://www.google.com")
}

/* Task 4 using jQuery */

 $('#addText4').click(function(event){
    var paragraph=$('<p>').text('Hello World');
    $('#task4a').append(paragraph);
    
})