let requestURL = 'https://czechuuu.github.io/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const jsonData = request.response;
    alert("onload!")
    loadingData(jsonData)
}

function loadingData(jsonObj) {
    document.getElementById('poniedzialek').innerHTML = jsonObj['poniedzialek'];
    document.getElementById('wtorek').innerHTML = jsonObj['wtorek'];
    document.getElementById('sroda').innerHTML = jsonObj['sroda'];
    document.getElementById('czwartek').innerHTML = jsonObj['czwartek'];
    document.getElementById('piatek').innerHTML = jsonObj['piatek'];
    document.getElementById('sobota').innerHTML = jsonObj['sobota'];
    document.getElementById('niedziela').innerHTML = jsonObj['niedziela'];
    alert("loading data!")
    document.getElementById('poniedzialek').style.backgroundColor = jsonObj['c_poniedzialek'];
    document.getElementById('wtorek').style.backgroundColor = jsonObj['c_wtorek'];
    document.getElementById('sroda').style.backgroundColor = jsonObj['c_sroda'];
    document.getElementById('czwartek').style.backgroundColor = jsonObj['c_czwartek'];
    document.getElementById('piatek').style.backgroundColor = jsonObj['c_piatek'];
    document.getElementById('sobota').style.backgroundColor = jsonObj['c_sobota'];
    document.getElementById('niedziela').style.backgroundColor = jsonObj['c_niedziela'];
}

function buttonPress(id, text, color) {
    document.getElementById(id).innerHTML = text;
    document.getElementById(id).style.backgroundColor = color;
}