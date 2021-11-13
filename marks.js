function mark() {
  var mark1 = parseInt(prompt("Enter sub 1 marks"));
  var mark2 = parseInt(prompt("Enter sub 2 marks"));
  var mark3 = parseInt(prompt("Enter sub 3 marks"));
  var mark4 = parseInt(prompt("Enter sub 4 marks"));
  var mark5 = parseInt(prompt("Enter sub 5 marks"));

  var marks;
  marks = ((mark1 + mark2 + mark3 + mark4 + mark5) / 500) * 100;

  document.getElementById("para").innerText = "Your Calculated Percentage is : ";
  document.getElementById("percent").innerHTML = marks.toFixed(2);
  document.getElementById("percent").classList.add("addclass");
}
