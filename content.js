let clickedElement = null;

document.addEventListener("contextmenu", function(event) {
  clickedElement = event.target;
}, true);

browser.runtime.onMessage.addListener((message) => {
  if (message.action === "hideElement" && clickedElement) {
    clickedElement.style.display = "none";
  }
});
