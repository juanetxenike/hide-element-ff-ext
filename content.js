let clickedElement = null;

document.addEventListener("contextmenu", function(event) {
  clickedElement = event.target;
}, true);

browser.runtime.onMessage.addListener((message) => {
  if (message.action === "hideElement" && clickedElement) {
    hideElementImportant(clickedElement);
  }
});

function hideElementImportant(element) {
  const uniqueClass = `hide-${Date.now()}`;
  element.classList.add(uniqueClass);
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `.${uniqueClass} { display: none !important; }`;
  document.head.appendChild(styleSheet);
}
