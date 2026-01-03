async function download() {
  const url = document.getElementById("url").value;
  const result = document.getElementById("result");

  if (!url) {
    alert("Masukkan link Instagram!");
    return;
  }

  result.innerHTML = "Loading...";

  try {
    const api = `https://api.tiklydown.me/api/download?url=${encodeURIComponent(url)}`;
    const res = await fetch(api);
    const data = await res.json();

    if (data.video) {
      result.innerHTML = `
        <a href="${data.video}" target="_blank">Download Video</a>
      `;
    } else {
      result.innerHTML = "Gagal ambil video.";
    }
  } catch (err) {
    result.innerHTML = "Error, coba link lain.";
  }
}