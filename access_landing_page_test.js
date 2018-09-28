
var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until;

var options = new chrome.Options();
options.setUserPreferences(
  {
    "profile": {
      "content_settings": {
        "exceptions": {
          "javascript": {
            "https://quintoandar.com.br,*": {
              "last_modified": "13182621523198729",
              "setting": 2
            },
            "www.quintoandar.com.br,*": {
              "last_modified": "13182621536256786",
              "setting": 2
            },
            "*.quintoandar.com.br,*": {
              "last_modified": "13182621536256786",
              "setting": 2
            }
          },
        },
      },
    },
  }
);

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
