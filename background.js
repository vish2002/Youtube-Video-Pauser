chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab => {
    if (tab.url.includes("youtube.com")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: resumeYouTubeVideo
      });
    } else {
      chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
          if (tab.url.includes("youtube.com")) {
            chrome.scripting.executeScript({
              target: { tabId: tab.id },
              function: pauseYouTubeVideo
            });
          }
        });
      });
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes("youtube.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: resumeYouTubeVideo
    });
  }
});

function pauseYouTubeVideo() {
  const video = document.querySelector('video');
  if (video) {
    video.pause();
  }
}

function resumeYouTubeVideo() {
  const video = document.querySelector('video');
  if (video && video.paused) {
    video.play();
  }
}
