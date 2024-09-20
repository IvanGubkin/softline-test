
const listPhoto = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png"];

function getSrcPhotoCorporationLife() {
  let idPhoto = 0;

  return (action) => {
    if (action == "next") {
      if (listPhoto.length - 1 <= idPhoto) {
        idPhoto = 0;
      } else {
        idPhoto++;
      }
    } else if (action == "back") {
      if (idPhoto == 0) {
        idPhoto = listPhoto.length - 1;
      } else {
        idPhoto--;
      }
    }
    return listPhoto[idPhoto];
  };
}

 export default function CorporationLife() {
  let corp_img = document.getElementById("corporation_life_photo");
  corp_img.src = "./src/assets/CorporateLife/img1.png";

  let back = document.getElementById("back");
  back.onclick = (e) => {
    corp_img.src = `./src/assets/CorporateLife/${func("back")}`;
  };

  let next = document.getElementById("next");
  next.onclick = (e) => {
    corp_img.src = `./src/assets/CorporateLife/${func("next")}`;
  };

  let linePhoto = document.getElementById("corporation_life_photo_line");

  for (let el of listPhoto) {
  }
}
