import globalTests from './shared/global'

// This is only to demo the specific tests below
import Nightmare from 'nightmare'
import { expect } from 'chai'

globalTests({
  url: `https://www.discogs.com/artist/764333-Hans-Gutknecht`
});

const nightmare = Nightmare({
  show: true,
  // openDevTools: true,
})

// More specified testing for this particular url
describe(`Artist Page Testing`, function () {
  this.timeout(60000)

  it('title should say Hans', (done) => {
    nightmare
      .goto('https://www.discogs.com/artist/764333-Hans-Gutknech')
      .evaluate(() => document.querySelector('h1.hide_mobile').innerHTML)
      .then((headline) => {
        try {
          expect(headline).to.equal('Hans Gutknecht')
          done()
        } catch (error) {
          done(error)
        }
      })
      .catch((error) => {
        done(error)
      })
  })

  after(() => {
    nightmare
      .end()
      .then()
  })

})
