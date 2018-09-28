
var webdriver = require('selenium-webdriver'),
    firefox = require('selenium-webdriver/firefox'),
    By = webdriver.By,
    until = webdriver.until;


const options = new firefox.Options().setPreference('javascript.enabled', false);

const driver = new webdriver
    .Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .usingServer()
    .build();

searchTest(driver);

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
