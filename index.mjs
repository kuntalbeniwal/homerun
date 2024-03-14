
import { template } from "./template.mjs";
import { hiringblog } from "./hiringblog.mjs";
import { hiringblog2 } from "./hiringblog.mjs";
import { blocks } from "./blocks_and_startyourtrial.mjs";
import { Start_Your_Trial } from "./blocks_and_startyourtrial.mjs";
import { footer} from "./footer.mjs";
import { cardwithloops } from "./cardswithloop.mjs";
 
const maincontainer_El = document.querySelector(".main-container")

let div1 = document.createElement("div")
div1.className = "navigation";
maincontainer_El.appendChild(div1);


const navigation_El =document.querySelector(".navigation");
const logoContainer = document.createElement('div');
const logo = document.createElement('img');
logo.setAttribute('src', 'https://assets-global.website-files.com/58d684124f3644b01d649b26/58d684124f3644b01d649b98_homerun-logo-retina-black.png');
logo.setAttribute('width', '110');
logo.setAttribute('height', '24');
logo.setAttribute('alt', 'Homerun logo');
logoContainer.appendChild(logo);
navigation_El.appendChild(logoContainer);

const links = ['Product', 'Pricing', 'Use cases', 'Resources','Log In'];
links.forEach(element=>{
     const link_El = document.createElement("div");
     link_El.className = "navigation-link";
     link_El.innerHTML +=element;
     navigation_El.appendChild(link_El);
})

const button_El = document.createElement("button")
button_El.className= "blue-button";
button_El.textContent = "Get Started";
navigation_El.appendChild(button_El);


let cardContainer = document.createElement("div")
cardContainer.className = "card-container";
let mainHeading = document.createElement('div');
mainHeading.className = 'main-heading';

let heading1 = document.createElement('h1');
heading1.innerHTML = 'The people-first</br></br>';
heading1.style.lineHeight = "52%";

let heading2 = document.createElement('h1');
heading2.innerHTML = 'hiring tool for</br></br>';
heading2.style.lineHeight = "52%";

let heading3 = document.createElement('h1');
heading3.textContent = 'SMBs';

let paragraph = document.createElement('p');
paragraph.style.fontSize = "24px"
paragraph.style.lineHeight = "1.6"
paragraph.innerHTML = 'No more ping-ponging between emails, CVs and spreadsheets.</br> Organize your hiring in minutes and never let great talent fall through the cracks again.';

mainHeading.append(heading1,heading2,heading3);
cardContainer.append(mainHeading,paragraph);
cardContainer.appendChild(button_El.cloneNode(true));
maincontainer_El.appendChild(cardContainer);


{
let SMBhiring = document.createElement('div');
SMBhiring.className ='SMB-hiring';
let nestedDiv1 = document.createElement('div');
let paragraph2 = document.createElement('p');
paragraph2.textContent = 'join 1000+ SMBs hiring with homerun';
nestedDiv1.appendChild(paragraph2);
SMBhiring.appendChild(nestedDiv1);
let nestedDiv2 = document.createElement('div');
nestedDiv2.className = 'SMB';
let imageUrls = [
    'https://assets-global.website-files.com/58d684124f3644b01d649b26/64a6865b4faf9d755362c5d2_tbwa-logo.png',
    'https://assets-global.website-files.com/58d684124f3644b01d649b26/64a6865a39b7be36f1fdb863_mrmarvis-logo.png',
    'https://assets-global.website-files.com/58d684124f3644b01d649b26/64a6865b6cb644441b03a681_volkshotel-logo.png',
    'https://assets-global.website-files.com/58d684124f3644b01d649b26/64a6865bf740ca4969e6e735_patta-logo.png',
    'https://assets-global.website-files.com/58d684124f3644b01d649b26/64a6865a3d1c004d94ced853_opensocial-logo.png',
    'https://assets-global.website-files.com/58d684124f3644b01d649b26/64a68659254f51aa74fabd27_denham-logo.png',
    'https://assets-global.website-files.com/58d684124f3644b01d649b26/64a68659fe444433d7ffc312_gehl-logo.png'
];
imageUrls.forEach(element => {
    let image = document.createElement('img');
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '160');
    image.setAttribute('height', '');
    image.setAttribute('alt', 'Logo');
    image.setAttribute('src', element);
    nestedDiv2.appendChild(image);
});

SMBhiring.appendChild(nestedDiv2);
cardContainer.appendChild(SMBhiring);

}
const mainContainer1 = cardwithloops();
const mainContainer4 = template();
const mainContainer5 = hiringblog();
const mainContainer6 = hiringblog2();
const mainContainer7 = blocks();
cardContainer.append(mainContainer1,mainContainer4,mainContainer5,mainContainer6,mainContainer7);

const mainContainer8 = Start_Your_Trial();
const mainContainer9 = footer();
maincontainer_El.append(mainContainer8,mainContainer9);

 





 