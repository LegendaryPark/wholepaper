// background.js
// chrome.runtime.onInstalled.addListener(function () {
//   chrome.storage.sync.set({ color: "#3A5FCD" }, function () {
//     console.log("The color is blue.");
//   });
// });

// chrome.tabs.onCreated.addListener(function () {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.executeScript(tabs[0].id, {
//       file: "vanilla-app.js",
//     });
//   });
// });

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   if (changeInfo.status === "complete") {
//     chrome.tabs.executeScript(tabId, {
//       file: "vanilla-app.js",
//     });
//   }
// });
