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
            'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'about-h4': 'About',
        'about-content':
            'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'middle-img-src': 'img/mid-page-accent.jpg',
        'services-h4': 'Services',
        'services-content':
            'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'product-h4': 'Product',
        'product-content':
            'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'vision-h4': 'Vision',
        'vision-content':
            'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
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

// Create new Nav Elements

// Nav
let nav = document.querySelectorAll('nav a');
for (let i = 0; i < nav.length; i++) {
    nav[i].textContent = siteContent['nav'][`nav-item-${i}`];
    nav[i].style.color = 'green';
}

// Nav Logo
let logo = document.getElementById('logo-img');
// Nav Logo IMG
logo.setAttribute('src', siteContent['nav']['img-src']);

// CTA
// CTA Logo IMG
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
console.log(mainH4);
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
console.log('mainP', mainP);

// contact title

// contact

// footer
