
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var capabilities = {
  'browserName' : 'chrome',
  'chromeOptions': {
        'isJavascriptEnabled':'false'
    }
  'javascriptEnabled' : 'false'
}


// var driver_fx = new webdriver.Builder()
//     .withCapabilities({'browserName' : 'firefox'})
//     .build();

var driver_chr = new webdriver.Builder()
    .withCapabilities(capabilities)
    .build();

// searchTest(driver_fx);
searchTest(driver_chr);

function searchTest(driver) {
  driver.get('https://www.quintoandar.com.br/');

  driver.sleep(2000).then(function() {
    driver.getTitle().then(function(title) {
      if(title === 'O jeito fácil de alugar imóveis, casas e apartamentos - QuintoAndar') {
        console.log('Test passed');
      } else {
        console.log('Test failed');
      }
      //driver.quit();
    });
  });
}
