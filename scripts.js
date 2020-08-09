function buttonPress(id, text, color) {
    document.getElementById(id).innerHTML = text;
    document.getElementById(id).style.backgroundColor = color;
    db.collection("bread").doc(id).set({
        elementText: text,
        elementColor: color
    });
}