let btn = document.getElementById('btn')
let divElement = document.getElementById('divElement')
let btn1 = document.getElementById('btn1')
let divElement1 = document.getElementById('divElement1')
let download = document.getElementById('downloadButton')
let download1 = document.getElementById('downloadButton1')
/////////////////////only one element opens at a time/////////////////////////////////
/////////////////////firts element click function/////////////////////////////////////
divElement.style.display = 'none';
function appear() {
    if(divElement.style.display === 'none'){
        divElement.style.display = 'block';
    }
    else {
        divElement.style.display = 'none';
    }
    if (divElement.style.display === 'block') {
        divElement1.style.display = 'none';
    }
}
btn.addEventListener('click', appear)

/////////////////////second element click function/////////////////////////////////////
divElement1.style.display = 'none';
function appear1() {
    if (divElement1.style.display === 'none') {
        divElement1.style.display = 'block';
    }
    else {
        divElement1.style.display = 'none';
    }
    if (divElement1.style.display === 'block') {
        divElement.style.display = 'none';
    }
}
btn1.addEventListener('click', appear1)
//////////////////////////download buttons redirect////////////////////////////////////////////
function redirect() {
    document.location.href = "https://github.com/exp0420/happyForg";
}
function redirect1() {
    document.location.href = "https://github.com/exp0420/happyForg/releases";
}
download.addEventListener('click', redirect)
download1.addEventListener('click', redirect1)
