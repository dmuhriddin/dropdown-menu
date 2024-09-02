const container = document.querySelector(".container"),
  dropdownTogglerBtn = document.querySelector(".dropdown__toggler button"),
  dropdownToggler = document.querySelector(".dropdown__toggler");
plusIcon = document.querySelector(".fa-plus");

let toggle = false;

dropdownTogglerBtn.addEventListener("click", () => {
  toggle = !toggle;

  if (toggle) {
    plusIcon.classList.add("active");
    container.classList.add("active");
    dropdownToggler.style.background = "#2196f4";
    setTimeout(() => {
      container.style.width = "16rem";
    }, 500);
  } else {
    container.style.width = "3rem";
    plusIcon.classList.remove("active");
    dropdownToggler.style.background = "#fa3e80";
    setTimeout(() => {
      container.classList.remove("active");
    }, 500);
  }
});
