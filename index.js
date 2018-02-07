const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const Nightmare = require('nightmare')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .get('/', (req, res) => res.render('pages/index'))

  .get('/hans', (req, res) => {
    console.log('oh hai there')
    const nightmare = Nightmare({ show: true })
    nightmare
      .goto('https://duckduckgo.com')
      .type('#search_form_input_homepage', 'github nightmare')
      .click('#search_button_homepage')
      .wait('#r1-0 a.result__a')
      .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
      .end()
      .then(console.log)
      .then(console.log('oh hans'))
      .catch((error) => {
        console.error('Search failed:', error);
      })
    res.end()
    // { response.render('pages/db', {results: result.rows} ); }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
