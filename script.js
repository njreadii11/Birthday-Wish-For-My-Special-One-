<script>
function checkPassword() {
  const correctPassword = "khusheadii";
  const input = document.getElementById("password").value;

  if (input === correctPassword) {
    // 🎶 optional: success sound
    // new Audio("success.mp3").play();

    window.location.href = "birthday.html";
  } else {
    // ❌ wrong password animation + clear input
    alert("Wrong Password ❌");
    document.getElementById("password").value = "";
  }
}

// 🔘 ENTER key support
document.getElementById("password").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});
</script>
