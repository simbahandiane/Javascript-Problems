function FirstMethod(str){
    var getInputText = document.getElementById("inputField").value;
    document.getElementById("Reflect").innerHTML = getInputText;
    const strconv = getInputText.replace(/[\W]/gi,'').toLowerCase();
    const strrev = [...strconv].reduce((prev, next)=>next+prev);//reduce gets 2 param(next, previous)

    if(strconv === strrev){
        document.getElementById("Reflect").innerHTML = getInputText + " " +"is a Palindrome";

    }else{
        document.getElementById("Reflect").innerHTML = getInputText + " " +"is not a Palindrome";
    }

}

function SecondMethod(str){
    var getInputText = document.getElementById("inputField").value;
    document.getElementById("Reflect").innerHTML = getInputText;
    const str1 = [...getInputText].reverse().join('');
    
    if(getInputText === str1){
        document.getElementById("Reflect").innerHTML = getInputText + " " +"is a Palindrome";

    }else{
        document.getElementById("Reflect").innerHTML = getInputText + " " +"is not a Palindrome";
    }
}

function ThirdMethod(str){
    var getInputText = document.getElementById("inputField").value;
    document.getElementById("Reflect").innerHTML = getInputText;
    const arr = [];
    [...getInputText].forEach((e)=>arr.unshift(e));

    //return getInputText === arr.join(''); //arr.join('') joins the array into string

    if (getInputText === arr.join('')){
        document.getElementById("Reflect").innerHTML = getInputText + " " +"is a Palindrome";

    }else{
        document.getElementById("Reflect").innerHTML = getInputText + " " +"is not a Palindrome";
    }


}