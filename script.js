const reviews = [
    {
      id: 1,
      name: "Jeff Bezos",
      job: "CEO Amazon",
      img: "https://content.fortune.com/wp-content/uploads/2017/03/05-jeff-bezos.jpg",
      text: "Jeffrey Preston Bezos is an American entrepreneur, media proprietor, investor, and computer engineer. He is the founder and executive chairman of Amazon, where he previously served as the chairman, president, and CEO.",
    },
    {
      id: 2,
      name: "Bill Gates",
      job: "co-founder : Microsoft",
      img: "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg",
      text: "William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation, along with his late childhood friend Paul Allen",
    },
    {
      id: 3,
      name: "Mark Zuckerberg",
      job: "Chief Executive Officer : Facebook",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Mark_Zuckerberg_F8_2018_Keynote_%2841118893354%29.jpg",
      text: "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder.",
    },
    {
      id: 4,
      name: "Larry Page",
      job: "co-founders : Google",
      img: "https://resize.indiatvnews.com/en/resize/oldbucket/715_-/businessindia/-interesting-fa6465.jpg",
      text: "Lawrence Edward Page is an American business magnate, computer scientist, and Internet entrepreneur. He is best known as one of the co-founders of Google, along with Sergey Brin"
    },
    {
      id: 5,
      name: "Elon Reeve Musk",
      job: "CEO of Tesla Motors",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg",
      text: "Elon Reeve Musk FRS is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. A centibillionaire, Musk is one of the richest people in the world."
    }
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;



window.addEventListener("DOMContentLoaded", function () {
showPerson(currentItem);
});

function showPerson(person){
  const item  = reviews[person];
img.src = item.img;
author.textContent = item.name; 
job.textContent = item.job; 
info.textContent = item.text; 
}



nextBtn.addEventListener("click", function(){
  currentItem++;
  if(currentItem > reviews.length-1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length-1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function(){
currentItem = Math.floor(Math.random() * reviews.length);
// showPerson: void
  showPerson(currentItem);
});