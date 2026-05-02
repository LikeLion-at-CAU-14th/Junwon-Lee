const params = new URLSearchParams(location.search);
const title = params.get("title");
const photographer = params.get("photographer");
const date = params.get("date");
const keyword = params.get("keyword");
const place = params.get("location");
const imageUrl = params.get("image");

const tabTitle = document.querySelector('title');
tabTitle.innerText = title;

const detail = document.getElementById("detail");

const image = document.createElement("img");
image.src = imageUrl;
image.alt = title;

const titleElement = document.createElement("h1");
titleElement.innerText = title;

const info = document.createElement("div");
info.id = info;
info.innerText = `
📅 날짜: ${date}
📷 촬영자: ${photographer}
🔍 키워드: ${keyword}
🚩 장소: ${place}`;

detail.appendChild(image);
detail.appendChild(titleElement);
detail.appendChild(info);