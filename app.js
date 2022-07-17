const petsList = [
    {
        id: 1,
        name:"Dunga",
        age:"2 anos",
        size:"Porte pequeno",
        profile:"Calmo e educado",
        city:"Rio de janeiro (RJ)",
        img:"./assets/item-1.png",
    },
    {
        id: 2,
        name:"Felícia",
        age:"3 meses",
        size:"Porte pequeno",
        profile:"Ativa e carinhosa",
        city:"Nova Iguaçu (RJ)",
        img:"./assets/item-2.png",
    },
    {
        id: 3,
        name:"Sirius",
        age:"6 meses",
        size:"Porte grande",
        profile:"Ativo e educado",
        city:"Duque de caxias (RJ)",
        img:"./assets/item-3.png",
    },
    {
        id: 4,
        name:"Fiona",
        age:"3 anos",
        size:"Porte pequeno",
        profile:"Calma e carinhosa",
        city:"São Gonçalo (RJ)",
        img:"./assets/item-4.png",
    },
    {
        id: 5,
        name:"Sid",
        age:"8 meses",
        size:"Porte medio/grande",
        profile:"Brincalhão e amável",
        city:"Rio de janeiro (RJ)",
        img:"./assets/item-5.png",
    },
    {
        id: 6,
        name:"Yoda",
        age:"1 ano",
        size:"Porte médio",
        profile:"Ativo e carinhoso",
        city:"Nova Iguaçu (RJ)",
        img:"./assets/item-6.png",
    },
    {
        id: 7,
        name:"Lua",
        age:"6 meses",
        size:"Porte médio",
        profile:"Ativa e carinhosa",
        city:"Duque de caxias (RJ)",
        img:"./assets/item-7.png",
    },
    {
        id: 8,
        name:"Amora",
        age:"45 dias",
        size:"Porte grande",
        profile:" Calma e racinhosa",
        city:"São Gonçalo (RJ)",
        img:"./assets/item-8.png",
    },
    {
        id: 9,
        name:"Zelda",
        age:"5 meses",
        size:"Porte médio",
        profile:"Ativa e amável",
        city:"Rio de janeiro (RJ)",
        img:"./assets/item-9.png",
    },
];

const sectionPets = document.querySelector('.petsList');

window.addEventListener("DOMContentLoaded", function(){
    let displayPetsList = petsList.map(function (item){
        //console.log(item);

        return ` <article class="pets">
            <img src=${item.img} class="photo" alt="">
            <div class="pet-info">
                <header>
                    <h2 class="name">${item.name}</h2>
                    <h4 class="age">${item.age}</h4>
                    <h4 class="size">${item.size}</h4>
                    <h4 class="profile">${item.profile}</h4>
                </header>
                <p class="city">${item.city}</p>
                <ul>
                    <li>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.085 8.0325C5.34 8.0325 5.55375 7.94625 5.72625 7.77375C5.89875 7.60125 5.985 7.3875 5.985 7.1325C5.985 6.8775 5.89875 6.66375 5.72625 6.49125C5.55375 6.31875 5.34 6.2325 5.085 6.2325C4.83 6.2325 4.61625 6.31875 4.44375 6.49125C4.27125 6.66375 4.185 6.8775 4.185 7.1325C4.185 7.3875 4.27125 7.60125 4.44375 7.77375C4.61625 7.94625 4.83 8.0325 5.085 8.0325ZM9.0675 8.0325C9.3225 8.0325 9.53625 7.94625 9.70875 7.77375C9.88125 7.60125 9.9675 7.3875 9.9675 7.1325C9.9675 6.8775 9.88125 6.66375 9.70875 6.49125C9.53625 6.31875 9.3225 6.2325 9.0675 6.2325C8.8125 6.2325 8.59875 6.31875 8.42625 6.49125C8.25375 6.66375 8.1675 6.8775 8.1675 7.1325C8.1675 7.3875 8.25375 7.60125 8.42625 7.77375C8.59875 7.94625 8.8125 8.0325 9.0675 8.0325ZM12.8925 8.0325C13.1475 8.0325 13.3612 7.94625 13.5337 7.77375C13.7063 7.60125 13.7925 7.3875 13.7925 7.1325C13.7925 6.8775 13.7063 6.66375 13.5337 6.49125C13.3612 6.31875 13.1475 6.2325 12.8925 6.2325C12.6375 6.2325 12.4237 6.31875 12.2513 6.49125C12.0787 6.66375 11.9925 6.8775 11.9925 7.1325C11.9925 7.3875 12.0787 7.60125 12.2513 7.77375C12.4237 7.94625 12.6375 8.0325 12.8925 8.0325ZM0 18V1.35C0 1.005 0.135 0.69375 0.405 0.41625C0.675 0.13875 0.99 0 1.35 0H16.65C16.995 0 17.3062 0.13875 17.5837 0.41625C17.8612 0.69375 18 1.005 18 1.35V13.05C18 13.395 17.8612 13.7063 17.5837 13.9838C17.3062 14.2612 16.995 14.4 16.65 14.4H3.6L0 18ZM1.35 14.7375L3.0375 13.05H16.65V1.35H1.35V14.7375ZM1.35 1.35V13.05V14.7375V1.35Z" fill="#36D6AD"/>
                        </svg>   
                    </li>
                    <li>
                        Falar com responsável
                    </li>
                </ul>
            
            </div>

    </article>`;
    });
    displayPetsList = displayPetsList.join("");
    sectionPets.innerHTML = displayPetsList;
});