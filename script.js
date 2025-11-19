// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Fake email submit handler (demo only)
function handleFakeSubmit(event) {
  event.preventDefault();
  const success = document.getElementById("email-success");
  if (success) {
    success.classList.remove("hidden");
  }
  return false;
}

// FAQ toggle
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector(".faq-icon");

  if (!answer) return;

  const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

  if (isOpen) {
    answer.style.maxHeight = "0px";
    if (icon) icon.textContent = "+";
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    if (icon) icon.textContent = "–";
  }
}
