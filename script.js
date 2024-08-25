function evaluateScore() {
  let score = document.getElementById("scoreInput").value;
  let result = document.getElementById("result");
  score = Number(score);

  if (isNaN(score)) {
    result.textContent = "Not a number ❌";
  } else if (score < 0 || score > 100) {
    result.textContent = "Invalid score ❌";
  } else if (score === 100) {
    result.textContent = "Perfect score 🏆";
  } else {
    switch (true) {
      case score >= 85:
        result.textContent = "You got an A 🎉";
        break;
      case score >= 75:
        result.textContent = "You got a B 🎉";
        break;
      case score >= 65:
        result.textContent = "You got a C 📄";
        break;
      case score >= 50:
        result.textContent = "You got a D 👌";
        break;
      default:
        result.textContent = "You got an F ❌";
        break;
    }
  }
}
