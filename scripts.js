let button1Count = 0;
let button2Count = 0;

function handleKeydown1(event) {
    if (event.key === 'Enter') {
        squareAction();
    }
}
function handleKeydown2(event) {
    if (event.key === 'Enter') {
        calculateMPG();
    }
}


function squareAction () {
    const inputElement = document.querySelector('.js-inputNumber');
    const inputValue = Number(inputElement.value);
    // convert string to a number
    let squareNumber = (inputValue * inputValue);
    document.querySelector('.js-answer').innerHTML = squareNumber;
}

function calculateMPG () {
    const inputElement = document.querySelector('.js-inputL100');
    const inputValue = Number(inputElement.value);
    // convert string to a number
    let mpg = (282.481/inputValue);
    document.querySelector('.js-mpg').innerHTML = mpg;
}



function button1Selected() {
    const buttonElement = document.querySelector('.js-interactive-button1');
    //don't forget it's .js here (looking for class (like a label))
    
    if (buttonElement.innerText === 'Button 1 not Selected') {
        buttonElement.innerHTML = 'Button 1 Selected';
        buttonElement.classList.add('button-style-selected');
        //only use dot with querySelector
        button1Count +=1;
        document.querySelector('.js-button1Statement').innerHTML = "Button 1 Count = " + button1Count;
        //select the first element within the document that matches the specified CSS selector
        //innerHTML is the text of the element (js-button1Statement)
    }
    else {
        buttonElement.innerHTML = 'Button 1 not Selected';
        buttonElement.classList.remove('button-style-selected');
    }
}
function button2Selected() {
    const buttonElement = document.querySelector('.js-interactive-button2');
    //don't forget it's .js here
    
    if (buttonElement.innerText === 'Button 2 not Selected') {
        buttonElement.innerHTML = 'Button 2 Selected';
        
        buttonElement.classList.add('button-style-selected');
        button2Count +=1;
        document.querySelector('.js-button2Statement').innerHTML = "Button 2 Count = " + button2Count;
    }
    else {
        buttonElement.innerHTML = 'Button 2 not Selected';
        buttonElement.classList.remove('button-style-selected');
       
    }
}
