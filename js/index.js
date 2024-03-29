const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM  <br /> Is  <br /> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br /> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Beginning Changes


// Nav
let navItem1 = document.querySelectorAll('a')[0];
navItem1.innerHTML = siteContent["nav"]["nav-item-1"];
navItem1.style.color = 'green';

let navItem2 = document.querySelectorAll('a')[1];
navItem2.innerHTML = siteContent["nav"]["nav-item-2"];
navItem2.style.color = 'green';

let navItem3 = document.querySelectorAll('a')[2];
navItem3.innerHTML = siteContent["nav"]["nav-item-3"];
navItem3.style.color = 'green';

let navItem4 = document.querySelectorAll('a')[3];
navItem4.innerHTML = siteContent["nav"]["nav-item-4"];
navItem4.style.color = 'green';

let navItem5 = document.querySelectorAll('a')[4];
navItem5.innerHTML = siteContent["nav"]["nav-item-5"];
navItem5.style.color = 'green';

let navItem6 = document.querySelectorAll('a')[5];
navItem6.innerHTML = siteContent["nav"]["nav-item-6"];
navItem6.style.color = 'green';


// CTA
let ctaH1 = document.querySelector('h1');
ctaH1.innerHTML = siteContent["cta"]["h1"]

let button = document.querySelector('button');
button.innerHTML = siteContent["cta"]["button"];
button.style.width = '100%';
button.style.fontSize = '2.25rem';
button.style.padding = '10px';
button.style.height = 'auto';

let ctaIMG = document.getElementById("cta-img");
ctaIMG.setAttribute('src', siteContent["cta"]["img-src"]);


// Main Content

let featuresH4 = document.querySelectorAll('h4')[0];
featuresH4.innerHTML = siteContent["main-content"]["features-h4"];

let featuresP = document.querySelectorAll('p')[0];
featuresP.innerHTML = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelectorAll('h4')[1];
aboutH4.innerHTML = siteContent["main-content"]["about-h4"];

let aboutP = document.querySelectorAll('p')[1];
aboutP.innerHTML = siteContent["main-content"]["about-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//   "middle-img-src": "img/mid-page-accent.jpg",

let servicesH4 = document.querySelectorAll('h4')[2];
servicesH4.innerHTML = siteContent["main-content"]["services-h4"];

let servicesP = document.querySelectorAll('p')[2];
servicesP.innerHTML = siteContent["main-content"]["services-content"];

let productH4 = document.querySelectorAll('h4')[3];
productH4.innerHTML = siteContent["main-content"]["product-h4"];

let productP = document.querySelectorAll('p')[3];
productP.innerHTML = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelectorAll('h4')[4];
visionH4.innerHTML = siteContent["main-content"]["vision-h4"];

let visionP = document.querySelectorAll('p')[4];
visionP.innerHTML = siteContent["main-content"]["vision-content"];


// Contact
let contactH4 = document.querySelectorAll('h4')[5];
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

let address = document.querySelectorAll('p')[5];
address.innerHTML = siteContent["contact"]["address"];

let phone = document.querySelectorAll('p')[6];
phone.innerHTML = siteContent["contact"]["phone"];

let email = document.querySelectorAll('p')[7];
email.innerHTML = siteContent["contact"]["email"];


// Footer
let footer = document.querySelector('footer');
footer.innerHTML = siteContent["footer"]["copyright"];

//  PATH 3 additions
const nav = document.querySelector('nav');

const navItem7 = document.createElement('a');
navItem7.innerHTML = "LAST";
navItem7.style.color = 'darkred';
navItem7.style.fontSize = '2.5rem';

const navItem0 = document.createElement('a');
navItem0.innerHTML = "FIRST";
navItem0.style.color = 'aqua';
navItem0.style.fontSize = '3.0rem';

//  Appending and prepending new nav links
nav.appendChild(navItem7);
nav.prepend(navItem0);