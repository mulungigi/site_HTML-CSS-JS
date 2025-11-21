const fishes = [
{ img: "images/1.jpg", title: "Рыбов №1", desc: "Очень редкий и слегка возмущённый рыбов." },
{ img: "images/2.jpg", title: "Рыбов №2", desc: "Этот рыбов просто плавает, не трогайте его." },
{ img: "images/3.jpg", title: "Рыбов №3", desc: "Смотрит как будто знает ваши тайны." },
{ img: "images/4.jpg", title: "Рыбов №4", desc: "Профессиональный позёр, любит фотосессии." },
{ img: "images/5.jpg", title: "Рыбов №5", desc: "Рыбов мечты, но только смотреть." },
{ img: "images/6.jpg", title: "Рыбов №6", desc: "Идеально вписывается в любой интерьер." },
{ img: "images/7.jpg", title: "Рыбов №7", desc: "Глубокомысленный. Но молчит." },
{ img: "images/8.jpg", title: "Рыбов №8", desc: "Когда спросили 'продаёте?', он всплыл вверх." },
{ img: "images/9.jpg", title: "Рыбов №9", desc: "Просто рыбов. Но хороший." }
];


const catalog = document.getElementById("catalog");


fishes.forEach(fish => {
const card = document.createElement("div");
card.className = "card";


card.innerHTML = `
<img src="${fish.img}" alt="${fish.title}">
<div class="card-title">${fish.title}</div>
<div class="card-desc">${fish.desc}</div>
`;


catalog.appendChild(card);
});