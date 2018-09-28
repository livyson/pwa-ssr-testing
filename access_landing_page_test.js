
var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until;

const prefs = {
  "profile": {
    "content_settings": {
      "javascript": {
        "https://web.whatsapp.com:443,*": {
          "setting": 1
        },
        "*quintoandar.com.br,*": {
          "setting": 2
        }
      }
    }
  }
};

const options = new chrome.Options();
options.setUserPreferences(prefs);

const driver = new webdriver
    .Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
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
