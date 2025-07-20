document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre").forEach((pre) => {
    const lines = pre.innerText.split("\n");
    if (lines.length > 10) {
      pre.classList.add("code-collapsible");
      const btn = document.createElement("div");
      btn.className = "code-toggle-btn";
      btn.textContent = "Show more code";

      btn.addEventListener("click", function () {
        pre.classList.toggle("expanded");
        btn.textContent = pre.classList.contains("expanded")
          ? "Show less"
          : "Show more code";
      });

      pre.parentNode.insertBefore(btn, pre.nextSibling);
    }
  });
});
