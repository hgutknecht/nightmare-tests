// NO import Nightmare from 'nightmare';
let Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

// nightmare
//   .goto('https://duckduckgo.com')
//   .type('#search_form_input_homepage', 'github nightmare')
//   .click('#search_button_homepage')
//   .wait('#r1-0 a.result__a')
//   .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
//   .end()
//   .then(console.log)
//   .catch((error) => {
//     console.error('Search failed:', error);
//   })


// const selector = '.dek';
// nightmare
//   .goto('http://www.travelandleisure.com/hansdlkfshldfsdlfsldkfhsdkfhsdif')
//   .evaluate((selector) => {
//     return document.querySelector(selector).innerHTML;
//    }, selector)
//   .end()
//   .then((text) => {
//     console.log(text)
//   })
//   .catch((error) => {
//     console.error('You done wrong', error);
//   })
