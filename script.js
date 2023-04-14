const selector = document.querySelector(".custom_selector");
selector.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const select = selector.children[0];
  const dropDown = document.createElement("ul");
  dropDown.className = "selector_options";
  [...select.children].forEach((option) => {
    const dropDownOption = document.createElement("li");
    dropDownOption.textContent = option.textContent;
    dropDownOption.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      select.value = option.value;
      selector.value = option.value;
      dropDown.remove();
    });
    dropDown.appendChild(dropDownOption);
  });
  selector.appendChild(dropDown);
});
