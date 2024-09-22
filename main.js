import "./base.scss";
import getListBusinessContent from "./src/scripts/BusinessAreas";
import {MapNavigation} from "./src/scripts/Map";



// add list card of business areas
let contentBlock = document.getElementById("business_areas_content");
contentBlock.append(getListBusinessContent());






// CorporationLife
let func = getSrcPhotoCorporationLife();

const listPhoto = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png"];
function getSrcPhotoCorporationLife() {
  let idPhoto = 0;

  return (action) => {
    if (action == "next") {
      if (listPhoto.length -1 <= idPhoto) {
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
    return listPhoto[idPhoto]
  };
}




function CorporationLife() {
    let corp_img = document.getElementById("corporation_life_photo");
    corp_img.src = "/img1.png"

    let back = document.getElementById("back");
    back.onclick = (e) => {
      corp_img.src = `/${func("back")}`;
    };

    let next = document.getElementById("next");
    next.onclick = (e) => {
       corp_img.src = `/${func("next")}`;
    };


    let linePhoto = document.getElementById("corporation_life_photo_line");

    for(let el of listPhoto){
        
    }
}

CorporationLife()


// Map

MapNavigation()



  let header = document.getElementById("map_title__button");
  header.onclick = ()=>{    
    header.classList.toggle("map_header__title_active");

  }





