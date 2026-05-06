const baseURL = "http://apis.data.go.kr/B551011/PhotoGalleryService1";

const option = {
  serviceKey:
    "4d654d2a2cf8a846ad3a0732c5a74c7153f29a1b9756ee80017352a9395b0efb",
  numOfRows: 6,
  MobileApp: "test",
  MobileOS: "ETC",
  arrange: "A",
  _type: "json",
};

const container = document.getElementById("container");

let photoIndex = 1;

async function getData() {
    const checkUrl = `${baseURL}/galleryList1?numOfRows=1&pageNo=1&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&serviceKey=${option.serviceKey}`;
    const checkRes = await fetch(checkUrl);
    const checkJson = await checkRes.json();
    const totalCount = checkJson.response.body.totalCount;

    const totalPage = Math.floor(totalCount / option.numOfRows);
    const randomPage = Math.floor(Math.random() * totalPage) + 1;

    const url = `${baseURL}/galleryList1?numOfRows=${option.numOfRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${randomPage}&serviceKey=${option.serviceKey}`;

    const fetchData = await fetch(url);
    const toJSON = await fetchData.json();
    const datas = await toJSON.response.body.items.item; // JSON 구조에서 실제로 우리가 필요한

    datas.forEach((data, i) => {
		console.log(data);

        const list = document.createElement("div");
        list.id = "list" // 위에서 만든 <div>에 id="list"라는 이름표를 붙이게 됨

        const image = document.createElement("img");
        // 자바스크립트가 image라는 변수로 만든 <img> 태그의 주소(src) 값으로 API에서 가져온 진짜 이미지 URL을 연결
        image.src = data.galWebImageUrl;

        const info = document.createElement("span");
        info.innerText = `
        ${photoIndex++}번째 사진
        🏞️ 제목: ${data.galTitle}
        🚩 장소: ${data.galPhotographyLocation}`;

        const detailBtn = document.createElement("button");
        detailBtn.innerText = "더보기";
        detailBtn.addEventListener("click", () => {
			const params = new URLSearchParams({
				title: data.galTitle,
				photographer: data.galPhotographer,
				date: data.galPhotographyMonth,
				keyword: data.galSearchKeyword,
				location: data.galPhotographyLocation,
				image: data.galWebImageUrl,
			})
			
			location.href = `detail.html?${params.toString()}`;
        })

        list.appendChild(image);
        list.appendChild(info);
        list.appendChild(detailBtn);
        container.appendChild(list);
    });
}