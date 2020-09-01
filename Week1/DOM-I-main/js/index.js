const siteContent = {
    nav: {
        'nav-item-1': 'Services',
        'nav-item-2': 'Product',
        'nav-item-3': 'Vision',
        'nav-item-4': 'Features',
        'nav-item-5': 'About',
        'nav-item-6': 'Contact',
        'img-src': 'img/logo.png',
    },
    cta: {
        h1: 'DOM Is Awesome',
        button: 'Get Started',
        'img-src': 'img/header-img.png',
    },
    'main-content': {
        'features-h4': 'Features',
        'features-content':
            'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse v' +
            'el tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis ' +
            'augue justo, at imperdiet metus scelerisque quis.',
        'about-h4': 'About',
        'about-content':
            'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel ' +
            'tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis aug' +
            'ue justo, at imperdiet metus scelerisque quis.',
        'middle-img-src': 'img/mid-page-accent.jpg',
        'services-h4': 'Services',
        'services-content':
            'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse v' +
            'el tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis ' +
            'augue justo, at imperdiet metus scelerisque quis.',
        'product-h4': 'Product',
        'product-content':
            'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse ve' +
            'l tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis a' +
            'ugue justo, at imperdiet metus scelerisque quis.',
        'vision-h4': 'Vision',
        'vision-content':
            'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel' +
            ' tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis au' +
            'gue justo, at imperdiet metus scelerisque quis.',
    },
    contact: {
        'contact-h4': 'Contact',
        address: '123 Way 456 Street Somewhere, USA',
        phone: '1 (888) 888-8888',
        email: 'sales@greatidea.io',
    },
    footer: {
        copyright: 'Copyright Great Idea! 2018',
    },
};

// Nav
let nav = document.querySelectorAll('nav a');

// loop the whole Nav
for (let i = 0; i < nav.length; i++) {
    nav[i].textContent = siteContent['nav'][`nav-item-${i}`];
    nav[i].style.color = 'green';
}

// create new a tag
let newNav1 = document.createElement('a');
// create new a tag text node
let newNav1Text = document.createTextNode('append');
// style new nav
newNav1.style.color = 'green';

// create new a tag
let newNav2 = document.createElement('a');
// create new a tag text node
let newNav2Text = document.createTextNode('prepend');
// style new nav
newNav2.style.color = 'green';

// grab the nav bar
let navBar = document.querySelector('nav');

// append text node to the new a tags
newNav1.append(newNav1Text);
newNav2.append(newNav2Text);

// append new a tag to nav
navBar.appendChild(newNav1);

// prepend new a tag to nav
navBar.prepend(newNav2);

console.log('navBar', navBar);

// Nav Logo
let logo = document.getElementById('logo-img');
// Nav Logo IMG
logo.setAttribute('src', siteContent['nav']['img-src']);

// CTA CTA Logo IMG
let ctaLogo = document.getElementById('cta-img');
ctaLogo.setAttribute('src', siteContent['cta']['img-src']);
// CTA h1
let ctaH1 = document.querySelector('cta, cta-text, h1');
ctaH1.textContent = siteContent['cta']['h1'];
// CTA Button
let ctaButton = document.querySelector('cta, cta-text, button');
ctaButton.textContent = siteContent['cta']['button'];

// Main Content Image
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
console.log('mid', midImg);

// Main Content H4
let mainH4 = document.querySelectorAll('.main-content h4');
// console.log(mainH4);
mainH4[0].textContent = siteContent['main-content']['features-h4'];
mainH4[1].textContent = siteContent['main-content']['about-h4'];
mainH4[2].textContent = siteContent['main-content']['services-h4'];
mainH4[3].textContent = siteContent['main-content']['product-h4'];
mainH4[4].textContent = siteContent['main-content']['vision-h4'];

// Main Content paragraph
let mainP = document.querySelectorAll('.main-content p');
mainP[0].textContent = siteContent['main-content']['features-content'];
mainP[1].textContent = siteContent['main-content']['about-content'];
mainP[2].textContent = siteContent['main-content']['services-content'];
mainP[3].textContent = siteContent['main-content']['product-content'];
mainP[4].textContent = siteContent['main-content']['vision-content'];
// console.log('mainP', mainP); contact contact title
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];
// contact Text
let contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];
// console.log(contactText); footer text
let footerText = document.querySelector('footer');
footerText.textContent = siteContent['footer']['copyright'];
console.log('footer', footerText);
