function login() {
  const username = document.getElementById("username").value.trim();
  if (!username) {
    alert("Enter a username");
    return;
  }

  const user = {
    name: username,
    balance: 100000, // starting FC
    spins: 3,
    referrals: 0
  };

  localStorage.setItem("fikUser", JSON.stringify(user));
  window.location.href = "dashboard.html";
}

function protect() {
  if (!localStorage.getItem("fikUser")) {
    window.location.href = "auth.html";
  }
}

function loadDashboard() {
  const user = JSON.parse(localStorage.getItem("fikUser"));
  document.getElementById("userDisplay").innerText = "Hello, " + user.name;
  document.getElementById("balance").innerText = user.balance;
}
