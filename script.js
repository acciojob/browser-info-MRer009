//your JS code here. If required.
const body = document.body;
const divContainer = document.createElement("div");
divContainer.id = "browser-info";
divContainer.innerText =`You are using ${navigator.appName} version ${navigator.appVersion}`;
body.appendChild(divContainer);