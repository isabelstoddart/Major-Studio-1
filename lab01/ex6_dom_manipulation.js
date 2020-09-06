/*
  Exercise 6
  DOM manipulation with vanilla JS
*/

// Task
// What does DOM stand for?
// Document Object Model

// Task
// Open the file index.html in AWS Cloud9. Click "Preview" > "Preview File index.html". (Note that you can open it in a new window). What do you see?
// I see one tall pink rectangle with green edges.

// Task
// Delete the div with the class rectangle from index.html and refresh the preview.
// This gets rid of the rectangle, leaving just a white page.

// Task
// What does the following code do?
// This code creates a new div as a child of the viz element.
// The new child is a random sized rectangle that shows up when you click anywhere on the page.

const viz = document.body.querySelector(".viz");
const button = document.body.querySelector("#button");

console.log(viz, viz.children);

const addChildToViz = () => {
  const newChild = document.createElement("div");
  newChild.className = "rectangle";
  newChild.style.height = Math.random() * 100 + "px";
  viz.appendChild(newChild);
};

viz.addEventListener("click", addChildToViz);

// Task
// Where can you see the results of the console.log below? How is it different from in previous exercises?
// You see it in the json data and you can see it as an html collection in the console as opposed to before you just saw the output in the console.

function drawIrisData() {
  window
    .fetch("./iris_json.json")
    .then(data => data.json())
    .then(data => {
      console.log(data);
    });
}

drawIrisData();


// Task
// Modify the code above to visualize the Iris dataset in the preview of index.html.
// Feel free to add additional CSS properties in index.html, or using JavaScript, as you see fit.
// This code makes it so that everytime you click and add a new rectangle, there is one rectangle per petal item/length, instead of random sized rectangles. 

function drawIrisData() {
  window
    .fetch("./iris_json.json")
    .then(data => data.json())
    .then(data => {
      data.forEach(e => {
        addChildToViz(e.petallength);
      });
    });
}

drawIrisData();
