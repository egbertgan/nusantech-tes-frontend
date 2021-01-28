// 

function plus(){
    var x = document.getElementById("inputNum1").value;
    var numX = parseInt(x);
    var y = document.getElementById("inputNum2").value;
    var numY = parseInt(y);
    var z = document.getElementById("inputNum3").value;
    var numZ = parseInt(z);

    var hasil = numX+numY+numZ;

    if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
        alert('all checkbox must be checked');
    }
    else if (!checkbox1.checked) {
        var hasil = numY+numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox2.checked) {
        var hasil = numX+numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox3.checked) {
        var hasil = numX+numY;
        document.getElementById("hasil").innerHTML = hasil;
    }
    else{
        document.getElementById("hasil").innerHTML = hasil;
        console.log(hasil);
    }
    
}

function minus(){

    var x = document.getElementById("inputNum1").value;
    var numX = parseInt(x);
    var y = document.getElementById("inputNum2").value;
    var numY = parseInt(y);
    var z = document.getElementById("inputNum3").value;
    var numZ = parseInt(z);

    var hasil = numX-numY-numZ;

    if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
        alert('all checkbox must be checked');
    }

    else if (!checkbox1.checked) {
        var hasil = numY-numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox2.checked) {
        var hasil = numX-numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox3.checked) {
        var hasil = numX-numY;
        document.getElementById("hasil").innerHTML = hasil;
    }
    else{
        document.getElementById("hasil").innerHTML = hasil;
        console.log(hasil);
    }
}

function multiply(){

    var x = document.getElementById("inputNum1").value;
    var numX = parseInt(x);
    var y = document.getElementById("inputNum2").value;
    var numY = parseInt(y);
    var z = document.getElementById("inputNum3").value;
    var numZ = parseInt(z);

    var hasil = numX*numY*numZ;

    if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
        alert('all checkbox must be checked');
    }

    else if (!checkbox1.checked) {
        var hasil = numY*numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox2.checked) {
        var hasil = numX*numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox3.checked) {
        var hasil = numX*numY;
        document.getElementById("hasil").innerHTML = hasil;
    }
    else{
        document.getElementById("hasil").innerHTML = hasil;
        console.log(hasil);
    }
}

function division(){

    var x = document.getElementById("inputNum1").value;
    var numX = parseInt(x);
    var y = document.getElementById("inputNum2").value;
    var numY = parseInt(y);
    var z = document.getElementById("inputNum3").value;
    var numZ = parseInt(z);

    var hasil = numX/numY/numZ;

    if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
        alert('all checkbox must be checked');
    }
    else if (!checkbox1.checked) {
        var hasil = numY/numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox2.checked) {
        var hasil = numX/numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox3.checked) {
        var hasil = numX/numY;
        document.getElementById("hasil").innerHTML = hasil;
    }
    else{
        document.getElementById("hasil").innerHTML = hasil;
        console.log(hasil);
    }
}