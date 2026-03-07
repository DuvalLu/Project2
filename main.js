const button = document.getElementById("searchBtn");
const resultsDiv = document.getElementById("results");

button.addEventListener("click", async () => {
  const keyword = document.getElementById("searchInput").value;

  const myApi = "ioTvN6JBuQyd7qdLS9HQxWgem1AHNkOg";

  const url = `https://api.giphy.com/v1/gifs/search?api_key=ioTvN6JBuQyd7qdLS9HQxWgem1AHNkOg&q=${keyword}&limit=12`;

  const response = await fetch(url);
  const data = await response.json();

  resultsDiv.innerHTML = "";

  data.data.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url;
    resultsDiv.appendChild(img);
  });
});
