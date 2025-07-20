function setDarkMode(isDark) {
  const body = document.body;
  const darkBtn = document.getElementById("darkBtn");
  const lightBtn = document.getElementById("lightBtn");

  if (isDark) {
    body.classList.add("darkmode");
    localStorage.setItem("preferredTheme", "dark");
    darkBtn.classList.add("hidden");
    lightBtn.classList.remove("hidden");
  } else {
    body.classList.remove("darkmode");
    localStorage.setItem("preferredTheme", "light");
    lightBtn.classList.add("hidden");
    darkBtn.classList.remove("hidden");
  }
}

// Set theme on initial load
(function () {
  const storedTheme = localStorage.getItem("preferredTheme");
  const isDark = storedTheme === "dark" || !storedTheme;
  document.addEventListener("DOMContentLoaded", function () {
    setDarkMode(isDark);
  });
})();
