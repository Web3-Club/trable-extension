document.getElementById('trable-button').addEventListener('click', function() {
  chrome.tabs.create({url: "https://trable-fe.vercel.app/"});
});
