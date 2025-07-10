
document.getElementById("darkModeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
});

function downloadThumbnail() {
  const videoId = document.getElementById("videoIdInput").value.trim();
  const quality = document.getElementById("qualitySelect").value;
  if (!videoId) {
    alert("Please enter a video ID");
    return;
  }

  const loader = document.getElementById("loader");
  loader.style.display = "block";

  const downloadUrl = `https://youtube-thumbnail-backend.onrender.com/thumbnail?videoId=${videoId}&quality=${quality}`;

  setTimeout(() => {
    document.getElementById("thumbnailResult").innerHTML = \`
      <a href="\${downloadUrl}" download>
        <img src="\${downloadUrl}" alt="Thumbnail" />
      </a>
    \`;
    loader.style.display = "none";
  }, 1000);
}

function generateTags() {
  const input = document.getElementById("tagInput").value.trim();
  if (!input) {
    alert("Please enter video keywords");
    return;
  }

  const baseWords = input.toLowerCase().split(" ").map(w => w.replace(/[^\w]/g, ''));
  const extraWords = ["2024", "official", "full hd", "viral", "tutorial", "guide", "tips"];
  const allWords = [...new Set([...baseWords, ...extraWords])];

  const tags = allWords.filter(Boolean).slice(0, 12);
  document.getElementById("tagsResult").innerText = tags.join(", ");
}

function generateHashtags() {
  const input = document.getElementById("tagInput").value.trim();
  if (!input) {
    alert("Please enter video keywords");
    return;
  }

  const baseWords = input.toLowerCase().split(" ").map(w => w.replace(/[^\w]/g, ''));
  const hashtags = baseWords.map(w => "#" + w).filter(Boolean).slice(0, 12);
  document.getElementById("hashtagsResult").innerText = hashtags.join(" ");
}

function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  });
}
