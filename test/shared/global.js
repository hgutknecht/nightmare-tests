// Tests to run on all templates / pages / etc.
import { expect } from 'chai'
import Nightmare from 'nightmare'

function globalTests(params) {

  const nightmare = Nightmare({
    show: true,
    // openDevTools: true,
  })

  describe(`Global Testing`, function () {
    this.timeout(60000)

    it('should not have noindex nofollow', (done) => {
      nightmare
        .goto(params.url)
        .evaluate(() => document.querySelector('meta[name=robots]'))
        .then((robots) => {
          try {
            expect(robots).to.be.null
            done()
          } catch (error) {
            done(error)
          }
        })
        .catch((error) => {
          done(error)
        })
    })

    it('should render a title', (done) => {
      nightmare
        .evaluate(() => document.querySelector('h1.hide_mobile').innerHTML)
        .then((headline) => {
          try {
            expect(headline).to.be.a('string')
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
}

export default globalTests
