// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


export function getParam(param){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}


// function to take a list of objects and a template and insert the objects as HTML into the DOM

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}


export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  if(callback) {
      callback(data);
  }
}

async function loadTemplate(path){
  const html = await fetch(path);
  const template = await html.text();
  return template;
}

export async function loadHeaderFooter(){
  const header = await loadTemplate("../partials/header.html");
  const indexHeader = document.getElementById("main-header");
  const footer = await loadTemplate("../partials/footer.html");
  const indexFooter = document.getElementById("main-footer");
  renderWithTemplate(header, indexHeader)
  renderWithTemplate(footer, indexFooter)
  document.getElementById("currYear").textContent = new Date().getFullYear();
  if (getLocalStorage("account")){
    document.getElementById("curraccount").textContent = getLocalStorage("account");
  }
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}