export function cardwithloops(){
    const slider = [
    {
        title: "APPLICANT TRACKING",
        header: "One clear overview for smooth collaborative hiring",
        content: "No more wasting time updating spreadsheets and deciphering CVs. Keep track of all your jobs and candidates from one clear dashboard",
        buttonText: "Learn more",
        imageUrl: "https://assets-global.website-files.com/58d684124f3644b01d649b26/646f494765753f487c6d4d54_ats-cover-image.png"
    },
    {
        title: "Job Application Forms",
        header: "Application forms for a great candidate experience",
        content: "Opt out of an inbox full of resumes and opt in for user friendly application forms",
        buttonText: "Learn more",
        imageUrl: "https://assets-global.website-files.com/58d684124f3644b01d649b26/64943c25f08e5fef2333b8bc_apply-cover-image2.png"
    },
    {
        title: "CAREER Site & JOB POSTS",
        header: "The best-looking career site out there (built by you)",
        content: "With an easy no code builder you can create a custom career page and job posts that perfectly showcase your unique culture and brand",
        buttonText: "Learn more",
        imageUrl: "https://assets-global.website-files.com/58d684124f3644b01d649b26/646f4947b35f8177a426676c_career-cover-image.png"
    }
];

const mainContainer = document.createElement("div");
    mainContainer.className = "maincontainer";

for (const items of slider) {
    

    const section1 = document.createElement("div");
    section1.classList.add('section1');

    const mainHead = document.createElement('section');
    mainHead.classList.add('mainhead');

    const pElement = document.createElement('p');
    pElement.style.fontFamily = "'Oliver'";
    pElement.style.textAlign = "left";
    pElement.style.fontSize = "21px";
    pElement.style.marginBottom = "20px";
    pElement.textContent = items.title;

    const h2Element = document.createElement('h2');
    h2Element.classList.add('sectionheader');
    h2Element.textContent = items.header;

    const paraElement = document.createElement('p');
    paraElement.classList.add('sectionpara');
    paraElement.innerHTML = items.content;

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('blackbutton');
    buttonElement.textContent = items.buttonText;

    const imagePortion = document.createElement('div');
    imagePortion.classList.add('imageportion');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('loading', 'lazy');
    imgElement.setAttribute('data-w-id', '97fd4d81-5582-c658-5b78-b0d5f86b237d');
    imgElement.setAttribute('alt', 'Cover Image');
    imgElement.setAttribute('width', '810');
    imgElement.setAttribute('srcset', items.imageUrl);
    imgElement.setAttribute('sizes', '(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 86vw, (max-width: 1439px) 55vw, 54vw');
    imgElement.setAttribute('src', items.imageUrl);

    mainHead.append(pElement,h2Element,paraElement,buttonElement);
    

    imagePortion.appendChild(imgElement);
    section1.append(mainHead,imagePortion);
    mainContainer.appendChild(section1);

   
}
return mainContainer;
}