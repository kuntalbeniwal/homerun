export function blocks()
{
    const block4_el = document.createElement("div");
    block4_el.classList.add("block4");
    const blackblock_el = document.createElement("div");
    blackblock_el.classList.add("blackblock")
    const h3_el = document.createElement("h3");
    h3_el.textContent ="Integration with your favourite apps";
    const p_el = document.createElement("p");
    p_el.innerHTML ="Combine your favourite tools to</br> build a personal workflow.";
    const img_el = document.createElement("img");
    img_el.classList.add("grid-image");

    img_el.setAttribute('src', 'https://assets-global.website-files.com/58d684124f3644b01d649b26/6464cf88736cd353dab929ca_ats-integrations.png');
    img_el.setAttribute('sizes', '(max-width: 991px) 100vw, (max-width: 1439px) 80vw, 860px');
    img_el.setAttribute('loading' , 'eager');
    img_el.setAttribute('alt', 'ATS Integrations');
    img_el.setAttribute('data-w-id', '0d5ba09f-7f81-8212-8249-85423d7dfded');
    img_el.setAttribute('srcset','https://assets-global.website-files.com/58d684124f3644b01d649b26/6464cf88736cd353dab929ca_ats-integrations-p-500.png 500w, https://assets-global.website-files.com/58d684124f3644b01d649b26/6464cf88736cd353dab929ca_ats-integrations-p-800.png 800w, https://assets-global.website-files.com/58d684124f3644b01d649b26/6464cf88736cd353dab929ca_ats-integrations-p-1080.png 1080w, https://assets-global.website-files.com/58d684124f3644b01d649b26/6464cf88736cd353dab929ca_ats-integrations-p-1600.png 1600w, https://assets-global.website-files.com/58d684124f3644b01d649b26/6464cf88736cd353dab929ca_ats-integrations.png 1720w');



    blackblock_el.append(h3_el,p_el,img_el);


    const blueblock_el = document.createElement("div");
    blueblock_el.classList.add("blueblock")
    const h3_el2 = document.createElement("h3");
    h3_el2.textContent = "Showcase";
    const p_el2 = document.createElement("p");
    p_el2.textContent="Get inspired by the creatiive ways our customers attract with homerun.";
    const img_el2 = document.createElement("img");

    img_el2.classList.add('home-showcase-img');
    img_el2.setAttribute('src', 'https://assets-global.website-files.com/58d684124f3644b01d649b26/5e185020d27bcfb1f0007fb3_club-logo.svg');
    img_el2.setAttribute('sizes', '(max-width: 991px) 100vw, (max-width: 1439px) 80vw, 860px');
    img_el2.setAttribute('loading' , 'eager');
    img_el2.setAttribute('width' ,'293')
    img_el2.setAttribute('alt', 'ATS Integrations');

    blueblock_el.append(h3_el2,p_el2,img_el2);




    const block3 = document.createElement('div');
    block3.classList.add('block3');
    const capterraLogo = document.createElement('img');
    capterraLogo.classList.add('revies-capterra');
    capterraLogo.alt = 'Logo Capterra';
    capterraLogo.src = 'https://assets-global.website-files.com/58d684124f3644b01d649b26/608acddd4944114a38644783_capterra-logo-2.jpg';
    const capterraRating = document.createElement('h3');
    capterraRating.textContent = '4,7';
    const capterraStars = document.createElement('img');
    capterraStars.classList.add('image-71');
    capterraStars.alt = 'Capterra image';
    capterraStars.src = 'https://assets-global.website-files.com/58d684124f3644b01d649b26/609aa24b372bb6717b0b0d30_608ace196c1fdf8a2ea9e084_reviews-stars.jpeg';
    const capterraReview = document.createElement('div');
    capterraReview.classList.add('review');
    capterraReview.innerHTML = '<p>Average review on Capterra,<br>independent review site</p>';

    block3.append(capterraLogo,capterraRating,capterraStars,capterraReview);



    const lastblock = document.createElement('div');
    lastblock.classList.add('lastblock');
    const intercomLogo = document.createElement('img');
    intercomLogo.alt = 'Logo Intercom';
    intercomLogo.src = 'https://assets-global.website-files.com/58d684124f3644b01d649b26/608acddcd521fbc86b8078c7_intercom-logo-2.jpg';
    const intercomRating = document.createElement('h3');
    intercomRating.textContent = '8,9%';
    const intercomStars = document.createElement('div');
    intercomStars.classList.add('star');
    intercomStars.innerHTML = '😃&nbsp;🤩';
    const intercomReview = document.createElement('div');
    intercomReview.classList.add('review');
    intercomReview.innerHTML = '<p>Average rating based on,<br>1500+ support conversations</p>';


    lastblock.append(intercomLogo,intercomRating,intercomStars,intercomReview);
    block4_el.append(blackblock_el,blueblock_el,block3,lastblock);

return block4_el
}



export function Start_Your_Trial(){
    const brownbox_el = document.createElement("div");
    brownbox_el.classList.add("brownbox");
    const heading_30_el = document.createElement("div");
    heading_30_el.classList.add("heading-30")
    heading_30_el.innerHTML= "Start  your </br>free Homerun</br>trial today."
    const button = document.createElement('button');
    button.classList.add('blue-button');
    button.textContent = 'Start hiring for free';   
    const combinecontent = document.createElement('div');
    combinecontent.classList.add('combinecontent');

    const smallcontent1 = document.createElement('div');
    smallcontent1.classList.add('smallcontent');
    const checkmark1 = document.createElement('img');
    checkmark1.width = '12';
    checkmark1.height = '8';
    checkmark1.src = 'https://assets-global.website-files.com/58d684124f3644b01d649b26/64521935474dcd804cc60e09_checkmark.png';
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'The first job is free';
    smallcontent1.append(checkmark1,paragraph1);

    const smallcontent2 = document.createElement('div');
    smallcontent2.classList.add('smallcontent');
    const checkmark2 = document.createElement('img');
    checkmark2.width = '12';
    checkmark2.height = '8';
    checkmark2.src = 'https://assets-global.website-files.com/58d684124f3644b01d649b26/64521935474dcd804cc60e09_checkmark.png';
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'No credit card needed';
    smallcontent2.append(checkmark2,paragraph2);
    
    combinecontent.append(smallcontent1,smallcontent2);
    brownbox_el.append(heading_30_el,button,combinecontent);
    

return brownbox_el;


}

 





