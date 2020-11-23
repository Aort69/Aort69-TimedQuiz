var points = 0
var counter = 0;
var count = 40;
var button = document.getElementById("#btn")

document.getElementById("game").style.display = "none"

function quizStart() {
  document.getElementById("game").style.display="block";
  document.getElementById("btn").style.display = "none"
  var interval = setInterval(function () {
  document.querySelector("div1").innerHTML = count;
  count--;
  if (count === -1) {
    clearInterval(interval);
    // or...
    alert("You're out of time!");
  }
}, 1000);
}
var questions = [
  ["1. Console log is used by coders to debug and track their code.", "True", "False", "True"],
  ["2. Your computer identifies Java Script files by looking for .css at the end of the file name.", "True", "False", "True"],
  ["3. for loops are used to track info in dev tools.", "True", "False", "False"],
  ["4. While loops and for loops are the same thing.", "True", "False", "False"],
  ["5. You cannot nest elements inside functions", "True", "False", "False"],
];
questions[0][0];
function quizEnd(){
  var finalScore = points;
  console.log(`Quiz Over! Your final score is ${finalScore}`)
}
function questioncycle(i) {
  
  if(i === 5){
    quizEnd()
  }
  //dynamically write html for choices and questions
  document.querySelector(".game").innerHTML = `<h2>
${questions[i][0]}
</h2>
<h3 id="choice1">${questions[i][1]}</h3>
<h3 id="choice2">${questions[i][2]}</h3>`;
  // add event listeners to choices
  document.querySelector("#choice1").addEventListener("click", function () {
    if (this.textContent === questions[i][3]) {
      points += 10;
      console.log(points)
      console.log("correct")
    } else {
      count -= 5;
      console.log(points)
      console.log("incorrect")
    }
    console.log(this.textContent);
    counter++;
    questioncycle(counter);
  });
  document.querySelector("#choice2").addEventListener("click", function () {
    if (this.textContent === questions[i][3]) {
      points += 10;
      console.log(points)
      console.log("correct")
    } else {
      count -= 5;
      console.log(points)
      console.log("incorrect")
    }
    console.log(this.textContent);
    counter++;
    questioncycle(counter);
  });
}
questioncycle(counter);
quizEnd();
// save high scores in local storage
