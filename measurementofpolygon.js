function GetTheAreaOfPolygon(val){
    var x = document.getElementById("Xvalue").value;
    var y = document.getElementById("Yvalue").value;

    var AreaOfRectangle = 2 * (x * y);
    document.getElementById("Area").innerHTML = AreaOfRectangle + " " +"is the area";
}

function GetThePerimeterOfPolygon(val){
    var x = document.getElementById("Xvalue").value;
    var y = document.getElementById("Yvalue").value;

    var PerimeterOfRectangle = (2 * x) + (2* y);
    document.getElementById("Perimeter").innerHTML = PerimeterOfRectangle + " " +"is the perimeter";
}

function GetAreaUsingRadius(num) {
    var rValue = document.getElementById("radius").value;
    GetArea(rValue);
}

function GetAreaUsingDiameter(radiusValue) {
    var dValue = document.getElementById("diameter").value;
    var rValue = dValue/2;

    GetArea(rValue);
}


function GetArea(val) {
    const piValue = 3.1416;

    var AreaUsingRadius = piValue * (val * val);
    document.getElementById("UsingRadius").innerHTML = AreaUsingRadius;
}

