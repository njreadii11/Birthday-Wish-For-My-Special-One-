function checkPassword() {
  const correctPassword = "khusheadii"; // 👉 apna password yahan set karo
  const input = document.getElementById("khusheadii").value;

  if (input === correctPassword) {
    window.location.href = "birthday.html";
  } else {
    alert("Wrong Password ❌");
  }
}
