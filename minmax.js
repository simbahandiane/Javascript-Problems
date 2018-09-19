function GetMinMax(num){
    var getNum1 = document.getElementById("Num1").value;
    var getNum2 = document.getElementById("Num2").value;
    var getNum3 = document.getElementById("Num3").value;
    var getNum4 = document.getElementById("Num4").value;
    var getNum5 = document.getElementById("Num5").value;

    var arrayNum = [getNum1,getNum2,getNum3,getNum4, getNum5];

    var minValue = Math.max(...arrayNum);
    var maxValue = Math.min(...arrayNum);

    document.getElementById("MaxNum").innerHTML = maxValue + "" + " is the highest value";
    document.getElementById("MinNum").innerHTML = minValue + "" + " is the lowest value";

    console.log(getNum1,getNum2,getNum3,getNum4, getNum5);
}

function GetMinMaxUsingApplyFunc(num){
    var getNum1 = document.getElementById("Num1").value;
    var getNum2 = document.getElementById("Num2").value;
    var getNum3 = document.getElementById("Num3").value;
    var getNum4 = document.getElementById("Num4").value;
    var getNum5 = document.getElementById("Num5").value;

    var arrayNum = [getNum1,getNum2,getNum3,getNum4, getNum5];

    var minValue = Math.max.apply(null,arrayNum);
    var maxValue = Math.min.apply(null,arrayNum);

    document.getElementById("MaxNum").innerHTML = maxValue + "" + " is the highest value";
    document.getElementById("MinNum").innerHTML = minValue + "" + " is the lowest value";

    console.log(getNum1,getNum2,getNum3,getNum4, getNum5);
}

function ClearInputFields(){
    document.getElementById("Num1").value = '';
    document.getElementById("Num2").value= '';
    document.getElementById("Num3").value= '';
    document.getElementById("Num4").value='';
    document.getElementById("Num5").value='';
}