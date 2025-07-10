
function openTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function extractVideoID(url) {
  const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[1].length === 11) ? match[1] : null;
}

function getThumbnail() {
  const url = document.getElementById("youtubeUrl").value.trim();
  const videoID = extractVideoID(url);
  const quality = document.getElementById("quality").value;
  const thumbnail = document.getElementById("thumbnail");
  const downloadLink = document.getElementById("downloadBtn");

  if (!videoID) {
    alert("Please enter a valid YouTube URL.");
    thumbnail.style.display = "none";
    downloadLink.style.display = "none";
    return;
  }

  const thumbUrl = `https://img.youtube.com/vi/${videoID}/${quality}.jpg`;
  thumbnail.src = thumbUrl;
  thumbnail.style.display = "block";
  downloadLink.href = thumbUrl;
  downloadLink.style.display = "inline-block";
}

function generate() {
  const topic = document.getElementById("topicInput").value.trim();
  const tagsBox = document.getElementById("tags");
  const hashtagsBox = document.getElementById("hashtags");

  if (!topic) {
    alert("Please enter a video topic.");
    return;
  }

  const keywords = topic.toLowerCase().split(/\s+/).filter(w => w.length > 2);
  const extra = ["youtube", "viral", "2025", "shorts", "trending", "guide", "video", "tips"];
  const tags = [...new Set([...keywords, ...extra])].slice(0, 10);
  const hashtags = tags.map(tag => "#" + tag.replace(/[^a-z0-9]/gi, ''));

  tagsBox.innerHTML = tags.join(", ");
  hashtagsBox.innerHTML = hashtags.join(" ");
}
