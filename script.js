const toggle = document.getElementById("toggle");
const label = document.getElementById("toggle-label");

toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark");
  toggleSwitch();
});

let isToggled = true;

function toggleSwitch() {
  if (isToggled) {
    label.style.transform = "translateX(-100px)";
  } else {
    label.style.transform = "translateX(0)";
  }
  isToggled = !isToggled;
}
