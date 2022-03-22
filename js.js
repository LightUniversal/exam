let qts = [
    
    {
        qt : 'Ajax is basically used for ____',
        a : 'API requests',
        b : 'http requests',
        c : 'fetch requests',
        d : 'all of the above',
        name : 'one'
    },
    {
        qt : 'What is DOM',
        a : 'Domain Organized Manipulation',
        b : 'Document Object Model',
        c : 'Document Object Module',
        d : 'Domcument Object Mode',
        name : 'two'
    },
    {
        qt : 'The process that converts a plaintext to an alternative text called ciphertext is called ____',
        a : 'debugging',
        b : 'decoding',
        c : 'encryption',
        d : 'API manipulation',
        name : 'three'
    },
    {
        qt : 'Which one is correct?',
        a : 'Domain System Server',
        b : 'Dominant Server System',
        c : 'Domain Security Server',
        d : 'Domain Secure System',
        name : 'four'
    },
    {
        qt : 'Attributes are to HTML while ____ is to CSS',
        a : 'presentation',
        b : 'properties',
        c : 'layout',
        d : 'object',
        name : 'five'
    },
    {
        qt : 'What is the full meaning of CSS',
        a : 'common style sheet',
        b : 'cascaded style system',
        c : 'cascaded style sheet',
        d : 'cascaded still sheet',
        name : 'six'
    },
    {
        qt : 'Programs that read out the contents of a computer screen to a user is ____',
        a : 'recoder',
        b : 'screen reader',
        c : 'website',
        d : 'software application',
        name : 'seven'
    },
    {
        qt : '___ are special computers that are constanly connected to the internet, and are optimised to send web pages to people who request them',
        a : 'Domains',
        b : 'Web servers',
        c : 'Web hosting',
        d : 'API',
        name : 'eight'
    },
    {
        qt : 'People access website using software called______',
        a : 'screen readers',
        b : 'web browser',
        c : 'web server',
        d : 'mobile phone',
        name : 'nine'
    },
    {
        qt : 'What is a flowchart',
        a : 'Diagramatic representation of program flow',
        b : 'The flow of program execution',
        c : 'The chart flow',
        d : 'none of the above',
        name : 'ten'
    }
];

// console.log(qts);
// loop through question
let curTime = document.getElementsByClassName('timer')[0];
let box = document.querySelector('.next-box');
function getQuestions(arr){
    // arr.forEach(function(ar, i, oriarr){
        
    // });
    let l = 1;
    qts.forEach((phaseitem, i)=>{
        box.innerHTML += `
            <form class='questions'>
                <label for = "${i}">${l++}. ${phaseitem.qt}</label>
                <div class = 'options'>
                    <input type = 'radio' name = '${phaseitem.name}' id = '${phaseitem.a}' value = '${phaseitem.a}'>
                    <label for = "${phaseitem.a}">${phaseitem.a}</label>
                    <br>
                    <input type = 'radio' name = '${phaseitem.name}' id = '${phaseitem.b}' value = '${phaseitem.b}'>
                    <label for = "${phaseitem.b}">${phaseitem.b}</label>
                    <br>
                    <input type = 'radio' name = '${phaseitem.name}' id = '${phaseitem.c}' value = '${phaseitem.c}'>
                    <label for = "${phaseitem.c}">${phaseitem.c}</label>
                    <br>
                    <input type = 'radio' name = '${phaseitem.name}' id = '${phaseitem.d}' value = '${phaseitem.d}'>
                    <label for = "${phaseitem.d}">${phaseitem.d}</label>
                </div>
            </form>
        `;
    })
}
getQuestions(qts);  
let rightAns = ['all of the above', 'Document Object Model', 'encryption', "Domain System Server", 'properties', 'cascaded style sheet', "screen reader", 'Web servers', 'web browser', 'Diagramatic representation of program flow'];

const labels = document.querySelectorAll('.options label');
const values = Array.from(document.querySelectorAll('.options input'));
console.log(values[0].value, rightAns.length);
const actions = Array.from(document.getElementsByTagName('button'));
console.log(actions);
const submit = actions[1];
let score = 0;
let parent = document.querySelectorAll('.options');
console.log(parent)

function time(){
    let starttime, hr, mins, secs;
    hr  = 0, mins = 5, secs = 0;
    let runTime = setInterval(()=>{
        secs++;
        if(secs === 60){
            mins--;
            secs -= 60;
        }if(mins === 0 || actions[1].title === 'you have submitted'){
                actions[1].style.display = 'none';
                document.getElementsByClassName('next-box')[0].style.display = 'none';
                clearInterval(runTime)
            }
        curTime.textContent = `${mins}mins : ${secs}secs`;
    },1000);
    actions[0].remove();
}
actions[0].addEventListener('click', time, 0)
submit.onclick = function(e){
    actions[1].title = 'you have submitted';
    document.querySelector('#done').style.display = 'none';
    actions[0].style.display = 'none';
    actions[1].style.display = 'none';
    e.preventDefault();
    values.forEach((val, i)=>{
        if(val.checked){
           rightAns.forEach((ans, i)=>{
               if(ans === val.value){
                //    console.log('done')
                score += 10;
                
               }
           })
        }
    })
        document.getElementsByClassName('next-box')[0].style.display = 'none';
    
    // document.getElementsByClassName('timer')[0].innerHTML = `${00}hr : ${00}mins : ${00}secs`;
    let counter = 0;
    const display = document.querySelector('.score');
                const timer = setInterval(()=>{
                    display.firstElementChild.textContent = `${counter}%`;
                    if(counter === Math.round(score)){
                        clearInterval(timer);
                        // console.log();
                    } else {
                        counter++;
                    }
                }, 10);
};
// curTime.textContent = `${hr}hr : ${mins}mins : ${secs}secs`;


// function submitFun(){
//     document.querySelector('.next-box').style.display = 'none';
// }
document.querySelector('#done').addEventListener('click', function(){
    window.scrollTo(0,0);
    console.log('done');
},0);