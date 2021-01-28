
function plus(){
    let x = document.getElementById("inputNum1").value;
    let numX = parseInt(x);
    let y = document.getElementById("inputNum2").value;
    let numY = parseInt(y);
    let z = document.getElementById("inputNum3").value;
    let numZ = parseInt(z);

    let hasil = numX+numY+numZ;

    if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
        alert('all checkbox must be checked');
    }
    else if (!checkbox1.checked) {
        let hasil = numY+numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox2.checked) {
        let hasil = numX+numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox3.checked) {
        let hasil = numX+numY;
        document.getElementById("hasil").innerHTML = hasil;
    }
    else{
        document.getElementById("hasil").innerHTML = hasil;
        console.log(hasil);
    }
    
}

function minus(){

    let x = document.getElementById("inputNum1").value;
    let numX = parseInt(x);
    let y = document.getElementById("inputNum2").value;
    let numY = parseInt(y);
    let z = document.getElementById("inputNum3").value;
    let numZ = parseInt(z);

    let hasil = numX-numY-numZ;

    if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
        alert('all checkbox must be checked');
    }

    else if (!checkbox1.checked) {
        let hasil = numY-numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox2.checked) {
        let hasil = numX-numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox3.checked) {
        let hasil = numX-numY;
        document.getElementById("hasil").innerHTML = hasil;
    }
    else{
        document.getElementById("hasil").innerHTML = hasil;
        console.log(hasil);
    }
}

function multiply(){

    let x = document.getElementById("inputNum1").value;
    let numX = parseInt(x);
    let y = document.getElementById("inputNum2").value;
    let numY = parseInt(y);
    let z = document.getElementById("inputNum3").value;
    let numZ = parseInt(z);

    let hasil = numX*numY*numZ;

    if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
        alert('all checkbox must be checked');
    }

    else if (!checkbox1.checked) {
        let hasil = numY*numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox2.checked) {
        let hasil = numX*numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox3.checked) {
        let hasil = numX*numY;
        document.getElementById("hasil").innerHTML = hasil;
    }
    else{
        document.getElementById("hasil").innerHTML = hasil;
        console.log(hasil);
    }
}

function division(){

    let x = document.getElementById("inputNum1").value;
    let numX = parseInt(x);
    let y = document.getElementById("inputNum2").value;
    let numY = parseInt(y);
    let z = document.getElementById("inputNum3").value;
    let numZ = parseInt(z);

    let hasil = numX/numY/numZ;

    if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
        alert('all checkbox must be checked');
    }
     else if (!checkbox1.checked) {
        let hasil = numY/numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox2.checked) {
        let hasil = numX/numZ;
        document.getElementById("hasil").innerHTML = hasil;
    }
    
    else if (!checkbox3.checked) {
        let hasil = numX/numY;
        document.getElementById("hasil").innerHTML = hasil;
    }
    else{
        document.getElementById("hasil").innerHTML = hasil;
        console.log(hasil);
    }
}