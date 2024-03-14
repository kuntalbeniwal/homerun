export function hiringblog(){
    const hiringblog_el = document.createElement("div");
    hiringblog_el.className = "hiringblog";

    const bloghead_el = document.createElement("div");
    bloghead_el.className = "bloghead";
    bloghead_el.textContent ="HiRiNG BLOG";

    const h2_el = document.createElement("h2")
    h2_el.innerHTML = "Resources that help you</br> hire with intention";

    const p_el = document.createElement("p")
    p_el.innerHTML = "Not an expert?No worries!We have got guides and articles </br>packed with hiringbest practices and tips";
    hiringblog_el.append(bloghead_el,h2_el,p_el);
    
 return hiringblog_el;
}
export function hiringblog2(){
    const hiringblog_el = document.createElement("div");
    hiringblog_el.className = "hiringblog";

    const bloghead_el = document.createElement("div");
    bloghead_el.className = "bloghead";
    bloghead_el.textContent ="WHY TEAMS LOVE HOMERUN'S HIRING SOFTWARe";

    const h2_el = document.createElement("h2")
    h2_el.textContent = "Join the club";

    const p_el = document.createElement("p")
    p_el.innerHTML = "Homerun customers share apassion for nurturing company culture </br>We alll agree hiring can be more meaningful and persnal";
    const button_el = document.createElement("button");
    button_el.className = "customerbutton";
    button_el.textContent ="About our customers"
    hiringblog_el.append(bloghead_el,h2_el,p_el,button_el);
    
 return hiringblog_el;
}




