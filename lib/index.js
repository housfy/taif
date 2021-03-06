const { wdio, cypress} = require('./drivers')
const browserInteractions = require('./browser-interactions')

/** The main objective of this class is to expose the general browserInteractions and the runner of the test automation technology to the bin **/

module.exports = {
    browserInteractions: browserInteractions,
    run (driver, personalizedConfPath) {
        if (driver === 'wdio') {
            wdio.run(personalizedConfPath)
        }
    }
}
