function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("add-result").textContent = "Please enter valid numbers.";
      return;
    }
  
    const sum = num1 + num2;
    document.getElementById("add-result").textContent = `Result: ${sum}`;
  }
  
  function getDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    document.getElementById("date-time-result").textContent = `Current Date & Time: ${formattedDateTime}`;
  }
  