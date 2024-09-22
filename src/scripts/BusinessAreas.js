const BUSINESS_AREAS = [
  {
    img: "decisionsSoftLine.png",
    title: "Решения Softline",
    text: "ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.",
  },
  {
    img: "cybersecurity.png",
    title: "Кибербезопасность",
    text: "Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации.",
  },
  {
    img: "importSubstitution.png",
    title: "Импортозамещение",
    text: "ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.",
  },
  {
    img: "cloudSolutions.png",
    title: "Облачные решения",
    text: "Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.",
  },
  {
    img: "softwareDevelopment.png",
    title: "Цифровая трансформация и разработка ПО",
    text: "Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.",
  },
  {
    img: "technicalSupport.png",
    title: "Техническая поддержка Softline",
    text: "200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.",
  },
];


export default function getListBusinessContent() {
  let fragment = new DocumentFragment();

  for (let el of BUSINESS_AREAS) {
    let div_card = document.createElement("div");
    div_card.className = "business_areas_content_card";




    let img = document.createElement("img");
    img.src = `/${el.img}`;

    let div_content = document.createElement("div");
    div_content.className = "business_areas_content_card_content";

    let h3 = document.createElement("h3");
    h3.innerHTML = el.title;

    let p = document.createElement("p");
    p.innerHTML = el.text;

    div_card.append(img);
    div_card.append(div_content);

    div_content.append(h3);
    div_content.append(p);

    fragment.append(div_card);
  }
  return fragment;
}