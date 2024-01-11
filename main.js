function Check() {
  var number = document.querySelector("#number").value;
  if (number == "" || number == 0) {
    document.getElementById("warning").style.display = "inline-block";
  } else {
    document.getElementById("warning").style.display = "none";
    isArmstrong(number);
    isPalindrome(number);
    isPrime(number);
    isSpy(number);
    isSpecial(number);
  }
}

function isArmstrong(number) {
  let temp = number;
  let num = number;
  let l = temp.length;
  let count = temp.length;
  let remainder = 0;
  let sum = 0;
  if (count < 3) {
    document.getElementById("Armstrong_cross").style.display = "block";
    document.getElementById("Armstrong_check").style.display = "none";
  } else {
    while (count > 0) {
      remainder = temp % 10;
      sum = sum + Math.pow(remainder, l);
      temp = parseInt(temp / 10);
      count--;
    }
    if (sum == num) {
      document.getElementById("Armstrong_cross").style.display = "none";
      document.getElementById("Armstrong_check").style.display = "block";
    } else {
      document.getElementById("Armstrong_cross").style.display = "block";
      document.getElementById("Armstrong_check").style.display = "none";
    }
  }
}

function isPalindrome(number) {
  let remainder = 0,
    rev = 0,
    num = number,
    temp = number;
  while (temp > 0) {
    remainder = temp % 10;
    rev = rev * 10 + remainder;
    temp = parseInt(temp / 10);
  }
  if (rev == num) {
    document.getElementById("Palindrome_cross").style.display = "none";
    document.getElementById("Palindrome_check").style.display = "block";
  } else {
    document.getElementById("Palindrome_cross").style.display = "block";
    document.getElementById("Palindrome_check").style.display = "none";
  }
}

function isPrime(number) {
  let count = 0;
  let temp = number;
  let i;
  for (i = 1; i <= temp; i++) {
    if (temp % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    document.getElementById("Prime_cross").style.display = "none";
    document.getElementById("Prime_check").style.display = "block";
  } else {
    document.getElementById("Prime_cross").style.display = "block";
    document.getElementById("Prime_check").style.display = "none";
  }
}

function isSpy(number) {
  let temp = number;
  let rem = 0,
    sum = 0,
    product = 1;
  while (temp > 0) {
    rem = temp % 10;
    sum = sum + rem;
    product = product * rem;
    temp = parseInt(temp / 10);
  }
  if (sum == product) {
    document.getElementById("Spy_cross").style.display = "none";
    document.getElementById("Spy_check").style.display = "block";
  } else {
    document.getElementById("Spy_cross").style.display = "block";
    document.getElementById("Spy_check").style.display = "none";
  }
}

function isSpecial(number) {
  let num = number,
    temp = number;
  let factorial = 1,
    sum = 0,
    rem = 0;
  let length = temp.length;
  console.log(length);
  while (length > 0) {
    rem = temp % 10;
    factorial = 1;
    for (let i = rem; i > 0; i--) {
      factorial = factorial * i;
    }
    sum = sum + factorial;
    temp = parseInt(temp / 10);
    length--;
  }
  if (num == sum) {
    document.getElementById("Special_cross").style.display = "none";
    document.getElementById("Special_check").style.display = "block";
  } else {
    document.getElementById("Special_cross").style.display = "block";
    document.getElementById("Special_check").style.display = "none";
  }
}

function Reset() {
  document.getElementById("number").value = "";
  document.getElementById("Armstrong_cross").style.display = "block";
  document.getElementById("Armstrong_check").style.display = "none";
  document.getElementById("Special_cross").style.display = "block";
  document.getElementById("Special_check").style.display = "none";
  document.getElementById("Spy_cross").style.display = "block";
  document.getElementById("Spy_check").style.display = "none";
  document.getElementById("Palindrome_cross").style.display = "block";
  document.getElementById("Palindrome_check").style.display = "none";
  document.getElementById("Prime_cross").style.display = "block";
  document.getElementById("Prime_check").style.display = "none";
}

function light() {
  document.body.style.backgroundColor = "#DA70D6";
  document.getElementById("footer").style.backgroundColor = "#DA70D6";
  document.getElementById("footer").style.color = "#fff";
  document.getElementById("btn1").style.color = "#DA70D6";
  document.getElementById("btn2").style.color = "#DA70D6";
  document.querySelector(".light-btn").style.backgroundColor = "#BF40BF";
  document.querySelector(".dark-btn").style.backgroundColor = "#BF40BF";
}

function dark() {
  document.body.style.backgroundColor = "#2d042d";
  document.getElementById("footer").style.backgroundColor = "#2d042d";
  document.getElementById("footer").style.color = "#b413b4";
  document.getElementById("btn1").style.color = "#2d042d";
  document.getElementById("btn2").style.color = "#2d042d";
  document.querySelector(".light-btn").style.backgroundColor = "#2d042d";
  document.querySelector(".dark-btn").style.backgroundColor = "#2d042d";
}
