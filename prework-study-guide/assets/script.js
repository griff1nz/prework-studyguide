var topics = ["HTML", "CSS", "Git", "JavaScript"];
var search = "JavaSkript";
var present = false;
for (var x = 0; x < topics.length; x++){
    if (topics[x] === search){
        console.log(search + " is present!");
        present = true;
    }
    if (x === topics.length - 1 && present === false){
        console.log(`${search} is not present, please try again!`);
    }
}
/*if (topic === 'HTML') {
    console.log("Let's study HTML!");
} else if (topic === 'CSS') {
    console.log("Let's study CSS!");
} else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
} else {
    console.log('Please try again!');
}*/
/*
var shapes = ["triangle", "square", "pentagon", "circle"];
for (var x = 0; x < shapes.length; x++) {
    if (shapes[x] === 'triangle') {
        console.log(shapes[x]);
    }
}*/