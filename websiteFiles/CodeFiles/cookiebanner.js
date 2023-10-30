// node.className = 'test';
// node.framebroder = '0';
// node['data-message']='0';
// node.setAttribute('data-message', 'Test');

//non-standard attributes require the use of 'setAtrribute'

document.body.style.height = '200pt';

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js';
script.id = 'cookiebanner';
script['data-height'] = '20px';
script['data-position'] = 'top';
script['data-message'] = 'We use cookies!';
document.head.appendChild(script);

script.onload = function(){
    console.log('loaded script');
}
console.log('ready');