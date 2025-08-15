// const body = document.getElementsByTagName("body")[0]

// we can use getElementsByTagName.
// and also simply  we can use just document.body also 


function setColor(name){
    document.body.style.backgroundColor = name;

}

function randomColor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
// here Math.round  Rounds the scaled number to the nearest whole integer.
// So the final color will be an integer from 0 to 255, inclusive.
    const color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = color;
}





