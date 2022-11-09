let billInput = document.querySelector("#billAmount");
let peopleInput = document.querySelector('#PeopleAmount');
let tipAmount = document.querySelector('.Sum1');
let totalPerson = document.querySelector('.totalPerson');
let button = document.querySelectorAll('.itembtn');
let errorText = document.querySelector('.error');
let customIn = document.querySelector('#customAmount');
let reset = document.querySelector('.resButton');

tipAmount.innerHTML = '$0.00';
totalPerson.innerHTML = '$0.00';


billInput.addEventListener('input', billFunct);
peopleInput.addEventListener('input', peopleFunct);
customIn.addEventListener('input', customFunct);
reset.addEventListener('click', resetApp);


console.log(button.innerText);
let billValue = 0;
let peopleValue = 0;
let customValue = 0;


function errorDisp() {
    if(peopleValue < 1) {
        errorText.style.display = 'inline';
        peopleInput.style.borderStyle = "solid";
        peopleInput.style.borderColor = "red";
    }
};


function billFunct() {
    billValue = parseFloat(billInput.value);
};

function peopleFunct() {
    peopleValue = parseFloat(peopleInput.value);
};

function customFunct() {
    customValue = parseFloat(customIn.value);
    console.log(customIn.value);
};



const buttonEach = function () {

    for(let i = 0; i < button.length; i++ ) {
        button[i].addEventListener('click', function() {
            if (billValue > 0 && peopleValue > 0 ) {
                let tipIn = ((billValue * parseInt(button[i].innerHTML))/100)/peopleValue;
                let totalIn = ((billValue / peopleValue) + parseInt(tipIn));
                tipAmount.innerHTML = '$' + tipIn.toFixed(1);
                totalPerson.innerHTML = '$' + totalIn.toFixed(1);
                
            } else {
                errorDisp();
            };
                
        });
    }; 
};

const customButton = function () { 
    customIn.addEventListener('input', function(){

        if( billValue > 0 && peopleValue > 0) {
            tipIn = ((billValue * parseInt(customValue)) / 100) / peopleValue;
            totalIn = ((billValue / peopleValue) + parseInt(customValue) );
            tipAmount.innerHTML = '$' + tipIn.toFixed(1);
            totalPerson.innerHTML = '$' + totalIn.toFixed(1);
            
            
        } else {
            errorDisp();
        };
    });
};
                       
            
buttonEach();
customButton();
      

function resetApp(){
    
    billInput.value='';
    peopleInput.value='';
    tipAmount.innerHTML='$0.00';
    totalPerson.innerHTML='$0.00';
    errorDisp(); 
    customIn.value='';
    errorText.style.display = 'none';
    peopleInput.style.borderStyle = "none";
};















