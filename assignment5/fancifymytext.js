function makeHuge() {
    document.getElementById('input1').style.fontSize = "4em";
}
function makeFancy() {
    let fancy = document.getElementById('input1');
    fancy.style.fontWeight = "bold";
    fancy.style.color = "blue";
    fancy.style.textDecoration = "underline";
}
function makeBoring() {
    let boring = document.getElementById('input1');
    boring.style.fontWeight = "400";
    boring.style.color = "black";
    boring.style.textDecoration = "none";
}
function moo() {
    let input1 = document.getElementById('input1');
    input1.style.textTransform = "uppercase";
    var lines = input1.value.split("\n");
    for(let i = 0; i < lines.length; i++) {
        lines[i] = lines[i] + "-Moo";
    }
    input1.value = lines.join("\n");
}
