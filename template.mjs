export function template(){
      const mainContainer = document.createElement('div');
      mainContainer.classList.add('template');
      const templateHeader = document.createElement('div');
      templateHeader.classList.add('templateheader');
      const h4Element = document.createElement('h4');
      h4Element.style.color = '#fb0';
      h4Element.textContent = 'TEMPLATES';
      const h2Element = document.createElement('h2');
      h2Element.innerHTML = 'Start hiring in minutes with helpful <br> hiring templates';
      const buttonElement = document.createElement('button');
      buttonElement.classList.add('whitebutton');
      buttonElement.textContent = 'Explore all templates';
      templateHeader.append(h4Element,h2Element,buttonElement);
      
      
      const boxData = [
        {
          text: '20+ interview<br> question template',
          imageUrl: 'https://assets-global.website-files.com/58d684124f3644b01d649b26/6453c8f55f969df00551ebde_templates-questions.png',
          imageSrcset: 'https://assets-global.website-files.com/58d684124f3644b01d649b26/6453c8f55f969df00551ebde_templates-questions-p-500.png 500w, https://assets-global.website-files.com/58d684124f3644b01d649b26/6453c8f55f969df00551ebde_templates-questions.png 800w',
          arrowUrl: 'https://assets-global.website-files.com/58d684124f3644b01d649b26/6447cf8e73e3d213102116f6_arrow.svg'
        },
        {
          text: '70+ job description<br>template',
          imageUrl: 'https://assets-global.website-files.com/58d684124f3644b01d649b26/6453c96551a0461f00517700_templates-description.png',
          imageSrcset: 'https://assets-global.website-files.com/58d684124f3644b01d649b26/6453c96551a0461f00517700_templates-description-p-500.png 500w, https://assets-global.website-files.com/58d684124f3644b01d649b26/6453c96551a0461f00517700_templates-description.png 800w',
          arrowUrl: 'https://assets-global.website-files.com/58d684124f3644b01d649b26/6447cf8e73e3d213102116f6_arrow.svg'
        },
        {
          text: '12 job post<br>template',
          imageUrl: 'https://assets-global.website-files.com/58d684124f3644b01d649b26/64549f8e4e8cbc7376fc072a_templates-jobpost.png',
          imageSrcset: 'https://assets-global.website-files.com/58d684124f3644b01d649b26/64549f8e4e8cbc7376fc072a_templates-jobpost-p-500.png 500w, https://assets-global.website-files.com/58d684124f3644b01d649b26/64549f8e4e8cbc7376fc072a_templates-jobpost.png 800w',
          arrowUrl: 'https://assets-global.website-files.com/58d684124f3644b01d649b26/6447cf8e73e3d213102116f6_arrow.svg'
        }
      ];
      const templateBottom = document.createElement('div');
      templateBottom.classList.add('templatebottom');
      
     
      boxData.forEach(element => {
        
        const box = document.createElement('div');
        box.classList.add('box');
        const boxText = document.createElement('div');
        boxText.classList.add('boxtext');
        boxText.innerHTML = element.text;
      
        
        const arrow = document.createElement('div');
        arrow.classList.add('arrow');
        const arrowImage = document.createElement('img');
        arrowImage.setAttribute('loading', 'lazy');
        arrowImage.setAttribute('alt', 'Arrow');
        arrowImage.src = element.arrowUrl;
        arrow.appendChild(arrowImage);
      
        
        const boxBottomImage = document.createElement('div');
        boxBottomImage.classList.add('boxbottomimage');
        const imageElement = document.createElement('img');
        imageElement.setAttribute('loading', 'lazy');
        imageElement.setAttribute('sizes', '400px');
        imageElement.srcset = element.imageSrcset;
        imageElement.src = element.imageUrl;
      
        
        boxBottomImage.appendChild(imageElement);
        box.append(boxText,arrow,boxBottomImage);
        templateBottom.appendChild(box);
      });
      
      
      mainContainer.append(templateHeader,templateBottom);
      
      return mainContainer;

}