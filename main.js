
const dinos = [
  {
    id: 'dino1',
    name: 'Rex',
    type: 'T-Rex',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 92,
    imageUrl: 'https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png'
  },
  {
    id: 'dino2',
    name: 'Steve',
    type: 'Velociraptor',
    age: 1,
    owner: 'Michael',
    adventures: [],
    health: 1,
    imageUrl: 'https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png'
  },
  {
    id: 'dino3',
    name: 'Susan',
    type: 'Stegosaurus',
    age: 55,
    owner: 'Luke',
    adventures: [],
    health: 0,
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg'
  },
  {
    id: 'dino4',
    name: 'Barry',
    type: 'Brontosaurus',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 100,
    imageUrl: 'https://lh3.googleusercontent.com/proxy/_rJSL88ErOEvgHl5SInWOEolOdikwIMcKWPv9iqZzt3IUkD33WdG6d9qd8TmNJFSiszTXm7JeGQPocmB_BZErKxt__25LOpW75dmnVuy0nuY0PatX2cIYA-C'
  },
  {
    id: 'dino5',
    name: 'Steph',
    type: 'Spinosaurus',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 75,
    imageUrl: 'https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2'
  },
  {
    id: 'dino6',
    name: 'Tim',
    type: 'Talarurus',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 55,
    imageUrl: 'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226'
  },
  {
    id: 'dino7',
    name: 'Tracy',
    type: 'Triceratops',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 0,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg'
  },
  {
    id: 'dino8',
    name: 'Percy',
    type: 'Pterodactyl',
    age: 10,
    owner: 'Michael',
    adventures: [],
    health: 10,
    imageUrl: 'https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg'
  },
  {
    id: 'dino9',
    name: 'Betty',
    type: 'Brontosaurus',
    age: 22,
    owner: 'Matt',
    adventures: [],
    health: 22,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD'
  },
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(`#${selector}`);
  selectedDiv.innerHTML = textToPrint
};

const dinoKennelBuilder = (arr) => {
  let domString = '';  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].health !== 0){
    domString += `
      <div class="card">
        <img class="card-img-top" src="${arr[i].imageUrl}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${arr[i].name}</h5>
          <h6>Species: ${arr[i].type} Health: ${arr[i].health} out of 100</h6>
          <h6>Owner:${arr[i].owner}</h6>     
        </div>
      </div>`   
    }
  };
  printToDom('dinoPen',domString)
};

const dinoHospitalBuilder = (arr) => {
  let domString = '';  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].health !== 0){
    domString += `
      <div class="card">
        <img class="card-img-top" src="${arr[i].imageUrl}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${arr[i].name}</h5>
          <h6>Species: ${arr[i].type} Health: ${arr[i].health} out of 100</h6>
          <h6>Owner:${arr[i].owner}</h6> 
          <button type="button" id="${arr[i].id}" class="btn btn-success">Medacine</button>
    
        </div>
      </div>` 
    }
  };
  printToDom('dinoHosp',domString)
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].health !== 0) {
      document.querySelector(`#${arr[i].id}`).addEventListener('click', healDino)
    }
  };
}

const healDino = (event) => {
  for (let i = 0; i < dinos.length; i++) {
    if(event.target.id === dinos[i].id) {
      if(dinos[i].health < 100){
        dinos[i].health += 25
        if (dinos[i].health > 100){
          dinos[i].health = 100
        }
      }
    }     
  }
  dinoHospitalBuilder(dinos)  
};


const createDino = (event) => {
  tempdino = {
    id: '',
    name: '',
    type: '',
    age: 0,
    owner: '',
    adventures: [],
    health: 0,
    imageUrl:''
  }

  tempdino.id = `dino${dinos.length+1}`

  if (document.getElementById('dinoName').value !== '') {
    tempdino.name = document.getElementById('dinoName').value
  }
  tempdino.type = document.getElementById('dinoType').value 
  tempdino.age = document.getElementById('dinoAge').value 
  tempdino.owner = document.getElementById('dinoOwner').value
  tempdino.imageUrl = document.getElementById('dinoURL').value 
  
  switch (document.getElementById('dinoType').value) {
    case 'Dino Species': alert('Please select a Species')      
      break;
    case 'T-Rex': tempdino.health = 75      
      break;
    case 'Pterodactyl': tempdino.health = 50      
      break;
    case 'Brachiosaurus': tempdino.health = 65      
      break;
    case 'Stegosaurus': tempdino.health = 52      
      break;
    case 'Triceratops': tempdino.health = 80      
      break;
    case 'Velociraptor': tempdino.health = 25      
      break;
  };

dinos.push(tempdino)
dinoKennelBuilder(dinos)

};

const clickEvents = () => {
  if (document.getElementById('dinoName')){
    document.querySelector('#create').addEventListener('click', createDino)
  };
  


};


 
const init = () => {
  if (document.getElementById('dinoPen')){
    dinoKennelBuilder(dinos)
  };
  if (document.getElementById('dinoHosp')){
    dinoHospitalBuilder(dinos)
  };
  clickEvents();
};

init();
