//1.display the number in the input box

function displayNum(num) {
    console.log(num);
    result.value+=num; // if + not added then oly one time number will be displayed. result is inputtype id
}

//2. clear the box
function clearBox() {
    result.value=""; // empty string coz when clicked the input box shud be clear
}

//3.evaluation
function evaluateExp() {
    expression=result.value;// 5+3
    output=eval(expression);// eval is op of js for evaluation. here 5+3=8 happens
    result.value=output; //8

    //or

    result.value=eval(result.value) //both same mtd
}

//4.remove last item from text box

function removeLastItem() {
    currentExp=result.value;
    result.value=currentExp.slice(0,-1) // -1 to remove one value...-4 removes 4 values
    //or                                    slice mtd in js is to slice one by one
    // result.value=result.value.slice(0,-1)
}