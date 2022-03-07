const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office manager',
        img: 'img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'img/scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg'
    },

]


const cardsContainer = document.querySelector('.team-container');


for (let i = 0; i < members.length; i++) {

    ////////// CREAZIONE CARD VUOTA ////////// 

    const card = document.createElement('div');
    card.classList.add('team-card');
    cardsContainer.append(card);
    
    ////////// CREAZIONE CONTAINER IMG  ////////// 
    const cardImageContainer = document.createElement('div');
    cardImageContainer.classList.add('card-image');
    card.append(cardImageContainer);

    ////////// INSERIMENTO IMG ////////// 
    cardImageContainer.innerHTML = `<img src="${members[i].img}" alt="${members[i].name}"/>`;
    
    ////////// CREAZIONE CONTAINER TESTO  ////////// 
    const cardTextContainer = document.createElement('div');
    cardTextContainer.classList.add('card-text');
    card.append(cardTextContainer);

    ////////// INSERIMENTO TESTO //////////
    cardTextContainer.innerHTML = `<h3>${members[i].name}</h3> <p>${members[i].role}</p>`;
    
}



////////// BONUS //////////

const addBtn = document.querySelector('#addMemberButton');
const nameInput = document.querySelector('#name');
const roleInput = document.querySelector('#role');
const imageInput = document.querySelector('#image');


addBtn.addEventListener('click', newCard);



function newCard() {
    
    ////////// CREAZIONE NUOVO OGGETTO ARRAY //////////
    members.push(
        {
           name: nameInput.value,
           role: roleInput.value,
           img: imageInput.value,
        }
    )
    
    let lastIndex = members.length - 1

    ////////// RESET VALORI //////////
    nameInput.value = '';
    roleInput.value = '';
    imageInput.value = '';

    ////////// CREAZIONE CARD VUOTA  ////////// 
    const card = document.createElement('div');
    card.classList.add('team-card');
    cardsContainer.append(card);

    ////////// CREAZIONE CONTAINER IMG  ////////// 
    const cardImageContainer = document.createElement('div');
    cardImageContainer.classList.add('card-image');
    card.append(cardImageContainer);

    ////////// INSERIMENTO IMG //////////
    cardImageContainer.innerHTML = `<img src="${members[lastIndex].img}" alt="${members[lastIndex].name}"/>`;

    ////////// CREAZIONE CONTAINER TESTO  ////////// 
    const cardTextContainer = document.createElement('div');
    cardTextContainer.classList.add('card-text');
    card.append(cardTextContainer);

    ////////// INSERIMENTO TESTO //////////
    cardTextContainer.innerHTML = `<h3>${members[lastIndex].name}</h3> <p>${members[lastIndex].role}</p>`;
}

////////// BONUS EXTRA //////////

const searchBtn = document.querySelector('#filterCardsButton');
const filterWord = document.querySelector('#filter');

// searchBtn.addEventListener('click', filterFunction);

filterWord.addEventListener('input', filterFunction);

function filterFunction(event) {
    const cardList = document.querySelectorAll('.team-card');

    for (let i = 0; i < members.length; i++) {
        cardList[i].classList.remove('hide');

        if (!members[i].name.toLowerCase().includes(filterWord.value.toLowerCase())) {
            cardList[i].classList.add('hide');
        }
        
    }
    // filterWord.value = '';
}