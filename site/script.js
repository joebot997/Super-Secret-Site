document.getElementById("submit").addEventListener("click", function () {
  var answer = document.getElementById("answer").value.toLowerCase();
  if (answer == "thebestpassword") {
    document.getElementById("result").innerHTML = "Correct!";
    // Redirect to the next page
    window.location.href = "https://super-secret-site.lunarvcoding.repl.co/";
    return false; // prevent default form submission
  } else {
    document.getElementById("result").innerHTML = "Wrong. Try again.";
    return false; // prevent default form submission
  }
});