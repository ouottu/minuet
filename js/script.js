/* ==============================
   층별 구역 데이터
============================== */

const floorData = {

  b1: {

    image: "images/floor-b1.png",
    svg: "areas/floor-b1.svg",

    rooms: {

      b1_wine_cellar: {
        title: "와인셀러 겸 창고",
        description: "좌측과 중앙엔 와인셀러 우측엔 손님용 침구를 보관하는 옷장과 잘 사용하지 않는 물건들을 보관하는 철제 랙이 있는 창고입니다."
      },

      b1_stairs: {
        title: "계단",
        description: "1층으로 올라가는 계단입니다."
      },

      b1_boiler_room: {
        title: "보일러실",
        description: "보일러와 배관 등 관련 장비가 모여있는 공간입니다."
      },

      b1_bathroom: {
        title: "화장실",
        description: "변기와 세면대 정도만 있는 작은 화장실입니다."
      },

      b1_guest_room: {
        title: "게스트룸",
        description: "작은 싱크대와 냉장고 넓고 큰 소파와 TV 당구대 등이 있어 방문한 손님이나 친구가 편안하게 머물 수 있도록 마련된 손님용 방 겸 맨 케이브입니다"
      },

      b1_hallway: {
        title: "복도",
        description: "지하 1층의 복도입니다."
      }

    }

  },


  "1f": {

    image: "images/floor-1f.png",
    svg: "areas/floor-1f.svg",

    rooms: {

      "1f_utility_room": {
        title: "다용도실",
        description: "좌측엔 보존식품과 실온 식품 자주 사용하지 않는 조리도구 등을 보관하는 철제 랙이 있고 우측엔 재활용 쓰레기통과 청소용품을 보관하는 다용도함이 있는 창고입니다."
      },

      "1f_laundry_room": {
        title: "런드리룸",
        description: "세탁기와 건조기 세탁용품을 보관하는 서랍이 있는 런드리룸입니다. 서랍에는 스팀 다리미도 있어 벽의 옷걸이에 걸고 다림질을 할 수도 있습니다. 세탁 바구니는 각자 구분해서 사용합니다."
      },

      "1f_stairs1": {
        title: "계단",
        description: "지하 1층으로 내려가는 계단입니다."
      },

      "1f_powder_room": {
        title: "파우더룸",
        description: "화장대와 서랍 전신거울 이동형 행거가 있는 파우더룸입니다. 서진이의 색조 화장품과 향수는 이곳에 있습니다. 고데기와 드라이기도 있고 서랍에는 여분 화장품과 욕실용품들이 있습니다. 겉옷과 입었던 옷은 이 행거에 걸어둡니다."
      },

      "1f_bathroom": {
        title: "욕실",
        description: "변기와 세면대 욕조가 있는 큰 욕실입니다."
      },

      "1f_soundproof_rehearsal_room": {
        title: "방음 연습실",
        description: "방음벽이 시공되어 있는 연습실입니다. 좌측엔 온도와 습도가 자동으로 조절되는 첼로 보관함과 악보대 정면에는 소파와 그랜드 피아노 악보 책장과 관련 물품(여분 현 송진 전자 튜너 트로피 상장 등)을 보관하는 수납장이 있습니다. "
      },

      "1f_kitchen": {
        title: "주방",
        description: "음식을 조리하고 보관하며 식사나 소통을 할 수 있는 공간입니다. 싱크대와 빌트인 식기세척기 인덕션과 오븐 겸 전자레인지 냉장고 등 다양한 주방 가구가 있습니다. 상부장 하부장 팬트리장으로 수납공간이 넓습니다. 2인이 사용할 수 있는 아일랜드 식탁과 6인용 식탁이 있습니다. 아일랜드 하부장엔 레일장으로 밥솥이 배치되어 있고 싱크대 하부장엔 음식물 처리기가 싱크대 옆에는 커피 머신과 믹서기가 있습니다. 거실과 가장 가까운 팬트리장에는 여분의 화장지와 물티슈 등이 있습니다. "
      },

      "1f_stairs2": {
        title: "계단",
        description: "2층으로 올라가는 계단입니다. 계단 하부엔 여행용 캐리어와 자주 사용하지 않는 짐을 보관하는 창고가 있습니다."
      },

      "1f_living": {
        title: "거실",
        description: "집 안의 중심이자 휴식을 위한 공간입니다. 편안하고 큰 소파와 티테이블 TV와 TV장이 있습니다. 셋톱박스와 스피커 닌텐도와 같은 게임기기 게임소프트 등도 여기에 보관되어 있습니다. "
      },

      "1f_hallway": {
        title: "복도",
        description: "1층의 복도입니다."
      },

      "1f_foyer": {
        title: "현관",
        description: "신발장과 벤치가 있는 현관입니다. 창고로 들어가는 입구와 연결되어 있습니다. 신발장 안에는 신발과 우산꽂이 신발 관련 용품들이 수납되어 있습니다."
      },

      "1f_storage": {
        title: "창고",
        description: "캠핑용품과 정원용품 등이 보관되어 있는 창고입니다. 자동과 관련 용품도 여기에 보관되어 있습니다."
      },

      "1f_deck": {
        title: "데크",
        description: "정원과 현관을 연결하는 야외공간으로 넓은 곳에서는 바베큐 파티를 즐깁니다."
      },

      "1f_porch": {
        title: "포치",
        description: "데크와 비슷하지만 지붕이 있는 공간으로 잠시 정원용품을 보관할 때도 있습니다."
      },

      "1f_garden": {
        title: "정원",
        description: "주차장으로 들어가는 길목 겸 잔디가 싱그럽게 피어있는 정원입니다. 정원사가 주 1회 관리하러 출근하기 때문에 따로 관리해 줄 일은 없습니다."
      },

      "1f_garage": {
        title: "주차장",
        description: "최대 2대까지 주차가 가능한 주차 공간입니다. 보통 1대는 서진이의 차가 주차되어 있고 남은 곳은 손님을 위한 공간입니다. 손님이 많아 주차 공간이 부족할 땐 정원에 주차하거나 집 밖에 주차해야 할 때도 있습니다."
      }

    }

  },


  "2f": {

    image: "images/floor-2f.png",
    svg: "areas/floor-2f.svg",

    rooms: {

      "2f_balcony": {
        title: "발코니",
        description: "해일이의 침실과 연결된 작은 발코니입니다."
      },

      "2f_bedroom1": {
        title: "해일 침실",
        description: "해일이의 침실입니다. 침대와 책상 빈백 등이 있습니다. 욕실로 들어가는 입구엔 빨래 바구니가 있어 매번 1층까지 내려가지 않아도 됩니다."
      },

      "2f_bathroom1": {
        title: "욕실",
        description: "해일이의 침실과 연결된 욕실입니다. 세면대와 변기 샤워부스가 있습니다. 수건장에는 수건이 샤워부스 옆 서랍장에는 여분의 화장지가 있습니다."
      },

      "2f_powder_room": {
        title: "파우더룸",
        description: "욕실 두 곳과 연결된 파우더룸입니다. 서진이의 기초화장품들은 이곳에 있는 편입니다. 고데기와 드라이기도 있습니다. "
      },

      "2f_bathroom2": {
        title: "욕실",
        description: "서진이의 침실과 연결된 욕실입니다. 세면대와 변기 샤워부스가 있습니다. 수건장에는 수건이 샤워부스 옆 서랍장에는 여분의 화장지가 있습니다."
      },

      "2f_bedroom2": {
        title: "서진 침실",
        description: "서진이의 침실입니다. 침대와 소파 티테이블과 TV가 있습니다. 욕실로 들어가는 입구엔 빨래 바구니가 있어 매번 1층까지 내려가지 않아도 됩니다."
      },

      "2f_veranda1": {
        title: "베란다",
        description: "서진이의 침실과 연결된 베란다입니다. 넓지만 쓰임새가 없어 조금 텅 비어 보입니다."
      },

      "2f_hallway": {
        title: "복도",
        description: "2층의 복도입니다. 복도 서랍장엔 주로 2층에서 사용하는 자잘한 물건들이 수납되어 있습니다."
      },

      "2f_stairs": {
        title: "계단",
        description: "1층으로 내려가는 계단입니다."
      },

      "2f_walk_in_closet1": {
        title: "해일 드레스룸",
        description: "해일이의 드레스룸입니다. 좌측엔 옷장과 모자와 가방 등을 보관하는 수납장이 있습니다. 우측엔 전신거울과 액세서리를 보관하는 액세서리장 입던 옷을 걸어두는 행거가 있습니다. 서진이가 잠깐 입었던 옷을 이곳에 걸어두기도 합니다."
      },

      "2f_walk_in_closet2": {
        title: "서진 드레스룸",
        description: "서진이의 드레스룸입니다. 우측엔 도어가 거울로 되어있는 옷장이 있고 좌측엔 스타일러와 옷장 모자와 가방 등을 보관하는 수납장이 있습니다. 중앙엔 액세서리를 보관하는 액세서리장이 있습니다. 스타일러가 2대기 때문에 서진이와 해일이의 옷 모두 넉넉히 돌릴 수 있습니다."
      },

      "2f_study": {
        title: "서재",
        description: "서진이의 서재입니다. 좌측에 책과 업무 관련 서류들이 꽂힌 책장이 있고 중앙엔 컴퓨터 책상과 의자 가정용 프린트기가 있습니다. PC와 같은 전자기기도 있습니다."
      },

      "2f_gym": {
        title: "운동실",
        description: "운동실입니다. 러닝머신과 랫 풀다운 머신 레그 프레스 머신 같은 헬스 기구와 덤벨 폼롤러 요가 매트 등 운동하는 데 사용하는 도구들이 있습니다."
      },

      "2f_veranda2": {
        title: "베란다",
        description: "운동실과 복도와 연결되어 있는 베란다입니다."
      }

    }

  }

};


/* ==============================
   HTML 요소
============================== */

const floorImage = document.getElementById("floorImage");
const svgLayer = document.getElementById("svgLayer");

const roomTitle = document.getElementById("roomTitle");
const roomDescription = document.getElementById("roomDescription");

const floorButtons = document.querySelectorAll(".floor-btn");


/* ==============================
   현재 상태
============================== */

let currentFloor = "1f";
let selectedRoom = null;
let loadVersion = 0;


/* ==============================
   Illustrator SVG ID 변환
============================== */

function decodeIllustratorId(id) {

  return id.replace(/_x([0-9a-fA-F]{2,4})_/g, (_, hex) => {

    return String.fromCharCode(parseInt(hex, 16));

  });

}


/* ==============================
   정보 패널 초기화
============================== */

function resetInfo() {

  roomTitle.textContent = "구역 이름";
  roomDescription.textContent = "구역 설명";

  selectedRoom = null;

}


/* ==============================
   구역 선택
============================== */

function selectRoom(element, room) {

  if (selectedRoom) {
    selectedRoom.classList.remove("selected");
  }

  selectedRoom = element;

  selectedRoom.classList.add("selected");

  roomTitle.textContent = room.title;
  roomDescription.textContent = room.description;

}


/* ==============================
   SVG 불러오기
============================== */

async function loadSvg(floor) {

  const version = ++loadVersion;

  const svgPath = floorData[floor].svg;

  svgLayer.innerHTML = "";

  try {

    const response = await fetch(svgPath);

    if (!response.ok) {
      throw new Error("SVG 파일을 불러오지 못했습니다.");
    }

    const svgText = await response.text();

    const parser = new DOMParser();

    const svgDocument = parser.parseFromString(
      svgText,
      "image/svg+xml"
    );

    const svgElement = svgDocument.documentElement;

    // Illustrator 원본 이미지 그룹 제거
    const originalImage = svgElement.querySelector("#Original_Image");

    if (originalImage) {
      originalImage.remove();
    }

    // PNG와 SVG 크기 맞춤
    svgElement.setAttribute("preserveAspectRatio", "none");

    svgElement.removeAttribute("width");
    svgElement.removeAttribute("height");

    const importedSvg = document.importNode(svgElement, true);

    // 이전 층의 늦은 요청 방지
    if (version !== loadVersion) {
      return;
    }

    svgLayer.appendChild(importedSvg);


    /* 구역별 이벤트 등록 */

    const allElements = importedSvg.querySelectorAll("[id]");

    let matchedCount = 0;

    allElements.forEach((element) => {

      const decodedId = decodeIllustratorId(element.id);

      const room = floorData[floor].rooms[decodedId];

      if (!room) {
        return;
      }

      matchedCount++;

      element.classList.add("room");

      element.dataset.roomId = decodedId;

      element.setAttribute("tabindex", "0");
      element.setAttribute("role", "button");
      element.setAttribute("aria-label", room.title);

      element.style.pointerEvents = "all";
      element.style.cursor = "pointer";


      // 마우스 진입
      element.addEventListener("pointerenter", () => {

        element.classList.add("is-hovered");

      });


      // 마우스 이탈
      element.addEventListener("pointerleave", () => {

        element.classList.remove("is-hovered");

      });


      // 클릭
      element.addEventListener("click", (event) => {

        event.stopPropagation();

        selectRoom(element, room);

      });


      // 키보드 선택
      element.addEventListener("keydown", (event) => {

        if (event.key === "Enter" || event.key === " ") {

          event.preventDefault();

          selectRoom(element, room);

        }

      });

    });


    console.log(
      `${floor.toUpperCase()} SVG 로드 완료: ${matchedCount}개 구역 연결`
    );

  } catch (error) {

    console.error("SVG 로드 오류:", error);

    if (version === loadVersion) {

      svgLayer.innerHTML = "";

      roomTitle.textContent = "평면도를 불러올 수 없습니다.";

      roomDescription.textContent =
        "Live Server 실행 여부와 SVG 파일 경로를 확인해 주세요.";

    }

  }

}


/* ==============================
   층 변경
============================== */

function changeFloor(floor) {

  currentFloor = floor;

  // 층 버튼 상태 변경
  floorButtons.forEach((button) => {

    const isActive = button.dataset.floor === floor;

    button.classList.toggle("active", isActive);

    button.setAttribute(
      "aria-pressed",
      String(isActive)
    );

  });


  // 평면도 이미지 변경
  floorImage.src = floorData[floor].image;

  floorImage.alt = `${floor.toUpperCase()} 평면도`;

  // 정보 패널 초기화
  resetInfo();

  // SVG 불러오기
  loadSvg(floor);

}


/* ==============================
   층 버튼 이벤트
============================== */

floorButtons.forEach((button) => {

  button.addEventListener("click", () => {

    changeFloor(button.dataset.floor);

  });

});


/* ==============================
   초기 실행
============================== */

changeFloor("1f");