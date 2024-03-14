export function footer(){
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footermaincontainer");
    
   {    
    const section_el = document.createElement("div");
    const header_el = document.createElement("h4");
    header_el.textContent = "Product";
    section_el.appendChild(header_el);
    
    const list_el = document.createElement("ul");
    const listitems1 = ["Career site & Job posts", "Application forms", "Applicant tracking", "Templates", "All features"];
   for(let element of listitems1) {
        const listItem = document.createElement("li");
        listItem.textContent = element;
        list_el.appendChild(listItem);
    };
    section_el.appendChild(list_el);
    
    const section2_el = document.createElement("div");
    section2_el.classList.add("footeritemsbottom");
    const list2_el = document.createElement("ul");
    const section2_elList = ["Pricing", "New in Homerun", "Integration", "Partners"];
   for(let item of section2_elList) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list2_el.appendChild(listItem);
    };
    section2_el.appendChild(list2_el);
    section_el.appendChild(section2_el);
    
    footerContainer.appendChild(section_el);
}
    
  { 
     const learnSection = document.createElement("div");
    const learnTitle = document.createElement("h4");
    learnTitle.textContent = "Learn";
    learnSection.appendChild(learnTitle);
    
    const learnList = document.createElement("ul");
    const learnItems = ["Blog", "Help Center"];
    learnItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        learnList.appendChild(listItem);
    });
    learnSection.appendChild(learnList);



    const guidesTitle = document.createElement("h4");
    guidesTitle.textContent = "Guides";
    learnSection.appendChild(guidesTitle);
    
    const guidesList = document.createElement("ul");
    const guidesItems = ["Hiring an Intern", "Hiring Process", "Remote Hiring", "Employer Branding", "Diversity, Equity & Inclusion", "Attract Talent", "GDPR Hiring"];
    guidesItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        guidesList.appendChild(listItem);
    });
    learnSection.appendChild(guidesList);
    
    footerContainer.appendChild(learnSection);
}
    
{
    const aboutSection = document.createElement("div");
    const aboutTitle = document.createElement("h4");
    aboutTitle.textContent = "About Homerun";
    aboutSection.appendChild(aboutTitle);
    
    const aboutList = document.createElement("ul");
    const aboutItems = ["About us", "Careers", "Contact us"];
    aboutItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        aboutList.appendChild(listItem);
    });
    aboutSection.appendChild(aboutList);
    
    const legalTitle = document.createElement("h4");
    legalTitle.textContent = "Legal";
    aboutSection.appendChild(legalTitle);
    
    const legalList = document.createElement("ul");
    const legalItems = ["Terms", "Privacy"];
    legalItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        legalList.appendChild(listItem);
    });
    aboutSection.appendChild(legalList);
    
    footerContainer.appendChild(aboutSection);
    
}
{  
      const newsletterSection = document.createElement("div");
    const newsletterTitle = document.createElement("h4");
    newsletterTitle.textContent = "Our Newsletter";
    newsletterSection.appendChild(newsletterTitle);
    
    const newsletterImg = document.createElement("img");
    newsletterImg.setAttribute("src", "https://assets-global.website-files.com/58d684124f3644b01d649b26/632da1fe11a9fa2d7b1f495f_Asset%203%402x.png");
    newsletterImg.setAttribute("alt", "The Art of Work");
    newsletterImg.setAttribute("loading", "lazy");
    newsletterImg.setAttribute("sizes", "(max-width: 479px) 100vw, 223.015625px");
    newsletterImg.setAttribute("height", "100");
    newsletterSection.appendChild(newsletterImg);
    
    const newsletterPara = document.createElement("p");
    newsletterPara.textContent = "Receive must-read articles and trends on company culture, hiring and work/life balance from leading publications.";
    newsletterSection.appendChild(newsletterPara);
    
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input");
    
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "Email");
    inputDiv.appendChild(emailInput);
    
    const signUpInput = document.createElement("input");
    signUpInput.setAttribute("type", "submit");
    signUpInput.setAttribute("value", "Sign up");
    inputDiv.appendChild(signUpInput);
    
    newsletterSection.appendChild(inputDiv);
    
    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("icons");
    
    const imageURLs = [
        "https://assets-global.website-files.com/58d684124f3644b01d649b26/5975bc28d9e5f43edc84e99f_logo-instagram.svg",
        "https://assets-global.website-files.com/58d684124f3644b01d649b26/5975bc2855f0c353c22fda33_logo-linkedin.svg",
        "https://assets-global.website-files.com/58d684124f3644b01d649b26/5975bc270f93db3c99396453_logo-twitter.svg"
    ];
    for (let items of imageURLs) {
        const iconImg = document.createElement("img");
        iconImg.setAttribute("src", items);
        iconImg.setAttribute("width", "39");
        iconImg.setAttribute("height", "39");
        iconImg.setAttribute("alt", "instagram logo");
        iconImg.style.backgroundColor ="black";
        iconImg.style.borderRadius ="50px";
        iconImg.style.marginRight ="12px";
        iconsDiv.appendChild(iconImg);
    };
    
    newsletterSection.appendChild(iconsDiv);
    
    footerContainer.appendChild(newsletterSection);
}
return footerContainer;
}

