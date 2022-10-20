module.exports = {
    e2e: {
      //baseUrl: 'http://www.booking.com',
      watchForFileChanges: true,
      downloadsFolder: 'cypress/downloads',
      fileServerFolder: 'cypress/e2e/pages',
      chromeWebSecurity: false,
      nodeVersion: 'bundled',
      supportFile:false,
      esModuleInterop: true,
      setupNodeEvents(on, config) {
        on('after:run', (arg1, arg2) => {
          console.log(config)
        })     
      },    
      }
    };
  