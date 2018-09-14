// Creating a shape (circle or box) with random size, random position and random colour.

function whichShape() {
    //randomize between cirlce and a box
    let shapeNum = Math.floor((Math.random() * 2) + 0);// if equals 0 then box if equals 1 then circle
    console.log(shapeNum);
    if (shapeNum === 0) {
        document.getElementById("shape").style.borderRadius = "0%";
    } else {
        document.getElementById("shape").style.borderRadius = "50%";
    }
}

function positionShape() {
    let top = Math.random() * 500;
    let left = Math.random() * 1650;
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
    console.log("Top: " + top);
    console.log("Left: " + left)
}

function colorShape() {
    let colors = ["red", "blue", "green", "yellow", "orange", "purple", "aqua", "magenta", "black"];
    let colorsIndex = Math.floor((Math.random() * colors.length) + 0);
    let color = colors[colorsIndex];
    document.getElementById("shape").style.backgroundColor = color;
}

function sizeShape() {
    let width = Math.floor((Math.random() * 250) + 50);
    let height = width
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = height + "px";
}


function makeShape() {
    whichShape();
    positionShape();
    colorShape();
    sizeShape();
}




// Calculating reaction time

let start;

function startTime() {
    start = new Date().getTime();
    return start;
}

function generateShapeStartTime() {
    let rNum = Math.random() * 2000;
    setTimeout(makeShape, rNum); // every 2 seconds do this
    setTimeout(startTime, rNum); // ""
    console.log(rNum);
}

function calculateTimeTaken() {
    document.getElementById("shape").style.display = "none";

    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";
    return timeTaken;
    
}


// start and stop button, with some functionality to calculate the average time taken.
document.getElementById("start").onclick = function() {
    generateShapeStartTime();
    let times = [];
    document.getElementById("shape").onclick = function() {
        times.push(calculateTimeTaken());
        generateShapeStartTime();
    }
    document.getElementById("stop").onclick = function() {
        document.getElementById("shape").style.display = "none";
        let total = 0;
        for (let i = 0; i < times.length; i++) {
            total += times[i];
        }
        let averageTime = total / times.length;
        averageTime = averageTime.toFixed(2);
        document.getElementById("averageTime").innerHTML = averageTime + " seconds";
        console.log(times);
    }
}

