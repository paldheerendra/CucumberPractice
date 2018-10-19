$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/6867/eclipse-workspace/Cucumber_BDD/src/test/java/Features/ebay.feature");
formatter.feature({
  "line": 1,
  "name": "Ebay test feature",
  "description": "",
  "id": "ebay-test-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 38313841540,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Ebay Login page test",
  "description": "",
  "id": "ebay-test-feature;ebay-login-page-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on ebay website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "use clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user reaches on sign in page",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStep.user_is_on_ebay_website()"
});
formatter.result({
  "duration": 6081981876,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.use_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 7003831859,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_reaches_on_sign_in_page()"
});
formatter.result({
  "duration": 53061912,
  "status": "passed"
});
formatter.after({
  "duration": 517779411,
  "status": "passed"
});
formatter.before({
  "duration": 12860910483,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Ebay Registration Page Test",
  "description": "",
  "id": "ebay-test-feature;ebay-registration-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user is on ebay website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user clicks on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User should be on registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStep.user_is_on_ebay_website()"
});
formatter.result({
  "duration": 3651850349,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_clicks_on_register_link()"
});
formatter.result({
  "duration": 3449254553,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_should_be_on_registration_page()"
});
formatter.result({
  "duration": 501504102,
  "status": "passed"
});
formatter.after({
  "duration": 340817515,
  "status": "passed"
});
formatter.before({
  "duration": 6419665945,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Registraion create Test",
  "description": "",
  "id": "ebay-test-feature;registraion-create-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "user is on Registration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "verify user is on registraion page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters fisrt name \"Dheerendra\" and last name \"Singh\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user enters email \"dheerendras06@gmail.com\" and password \"dheeru@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on Create account",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStep.user_is_on_Registration_Page()"
});
formatter.result({
  "duration": 11852228402,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.verify_user_is_on_registraion_page()"
});
formatter.result({
  "duration": 810671992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dheerendra",
      "offset": 24
    },
    {
      "val": "Singh",
      "offset": 51
    }
  ],
  "location": "EbayStep.user_enters_fisrt_name_and_last_name(String,String)"
});
formatter.result({
  "duration": 443384259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dheerendras06@gmail.com",
      "offset": 19
    },
    {
      "val": "dheeru@123",
      "offset": 58
    }
  ],
  "location": "EbayStep.user_enters_email_and_password(String,String)"
});
formatter.result({
  "duration": 484904055,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_clicks_on_Create_account()"
});
formatter.result({
  "duration": 27103613,
  "status": "passed"
});
formatter.after({
  "duration": 319445951,
  "status": "passed"
});
formatter.before({
  "duration": 7603925415,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Ebay Login with valid credentials",
  "description": "",
  "id": "ebay-test-feature;ebay-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user enters login credentials username \"dheerendras06@gmail.com\" and password \"dheeru@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user clicks on Signin botton",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStep.user_is_on_login_page()"
});
formatter.result({
  "duration": 7436718371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dheerendras06@gmail.com",
      "offset": 40
    },
    {
      "val": "dheeru@123",
      "offset": 79
    }
  ],
  "location": "EbayStep.user_enters_login_credentials_username_and_password(String,String)"
});
formatter.result({
  "duration": 392133909,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_clicks_on_Signin_botton()"
});
formatter.result({
  "duration": 2980729148,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_should_be_successfully_logged_in()"
});
formatter.result({
  "duration": 276086534,
  "status": "passed"
});
formatter.after({
  "duration": 2656539056,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Login Test with multiple inputs",
  "description": "",
  "id": "ebay-test-feature;login-test-with-multiple-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user clicks on Signin botton",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user should be successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "ebay-test-feature;login-test-with-multiple-inputs;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 43,
      "id": "ebay-test-feature;login-test-with-multiple-inputs;;1"
    },
    {
      "cells": [
        "dheerendras06@gmail.com",
        "dheeru@123"
      ],
      "line": 45,
      "id": "ebay-test-feature;login-test-with-multiple-inputs;;2"
    },
    {
      "cells": [
        "admin",
        "admin@123"
      ],
      "line": 47,
      "id": "ebay-test-feature;login-test-with-multiple-inputs;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6143301551,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Login Test with multiple inputs",
  "description": "",
  "id": "ebay-test-feature;login-test-with-multiple-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user enters \"dheerendras06@gmail.com\" and \"dheeru@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user clicks on Signin botton",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStep.user_is_on_login_page()"
});
formatter.result({
  "duration": 7728090254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dheerendras06@gmail.com",
      "offset": 13
    },
    {
      "val": "dheeru@123",
      "offset": 43
    }
  ],
  "location": "EbayStep.user_enters_and(String,String)"
});
formatter.result({
  "duration": 468233174,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_clicks_on_Signin_botton()"
});
formatter.result({
  "duration": 2659749153,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_should_be_successfully_logged_in()"
});
formatter.result({
  "duration": 235334274,
  "status": "passed"
});
formatter.after({
  "duration": 2435440286,
  "status": "passed"
});
formatter.before({
  "duration": 6799022427,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Login Test with multiple inputs",
  "description": "",
  "id": "ebay-test-feature;login-test-with-multiple-inputs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user enters \"admin\" and \"admin@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user clicks on Signin botton",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStep.user_is_on_login_page()"
});
formatter.result({
  "duration": 8771786728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin@123",
      "offset": 25
    }
  ],
  "location": "EbayStep.user_enters_and(String,String)"
});
formatter.result({
  "duration": 368126444,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_clicks_on_Signin_botton()"
});
formatter.result({
  "duration": 1691592118,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_should_be_successfully_logged_in()"
});
formatter.result({
  "duration": 20423813990,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@id\u003d\u0027gh-ug\u0027]/b[1]\"}\n  (Session info: chrome\u003d67.0.3396.87)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027D9075CQ1\u0027, ip: \u0027192.168.162.130\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\6867\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63363}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.87, webStorageEnabled: true}\nSession ID: ff5529003db66fbe03a5f513f56d42fa\n*** Element info: {Using\u003dxpath, value\u003d//button[@id\u003d\u0027gh-ug\u0027]/b[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat StepDef.EbayStep.user_should_be_successfully_logged_in(EbayStep.java:156)\r\n\tat ✽.Then user should be successfully logged in(C:/Users/6867/eclipse-workspace/Cucumber_BDD/src/test/java/Features/ebay.feature:40)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 227119970,
  "status": "passed"
});
formatter.before({
  "duration": 17538609286,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 48,
      "value": "#\t| test\t\t\t\t\t| test@123|"
    },
    {
      "line": 49,
      "value": "#\t| Bob\t\t\t\t    | password\t|"
    },
    {
      "line": 50,
      "value": "#    | Helen                 | Hello123\t|"
    },
    {
      "line": 51,
      "value": "#    | Dave                  | pa£sword\t|"
    }
  ],
  "line": 55,
  "name": "Check the total links on website home page",
  "description": "",
  "id": "ebay-test-feature;check-the-total-links-on-website-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "ebay website is opened in brower",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "verify the ebay website is opened",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "check total links on website and print these links to console",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStep.ebay_website_is_opened_in_brower()"
});
formatter.result({
  "duration": 4298197575,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.verify_the_ebay_website_is_opened()"
});
formatter.result({
  "duration": 100939966,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.check_total_links_on_website_and_print_these_links_to_console()"
});
formatter.result({
  "duration": 18998058748,
  "status": "passed"
});
formatter.after({
  "duration": 433430253,
  "status": "passed"
});
formatter.before({
  "duration": 9638559292,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Search items Test",
  "description": "",
  "id": "ebay-test-feature;search-items-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "ebay website is opened in brower",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "verify the ebay website is opened",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "User enters value in Search field and select the category",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user clicks on search botton",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStep.ebay_website_is_opened_in_brower()"
});
formatter.result({
  "duration": 3840239726,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.verify_the_ebay_website_is_opened()"
});
formatter.result({
  "duration": 64349095,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_enters_value_in_Search_field_and_select_the_category()"
});
formatter.result({
  "duration": 3596336635,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_clicks_on_search_botton()"
});
formatter.result({
  "duration": 3483483960,
  "status": "passed"
});
formatter.after({
  "duration": 2142385164,
  "status": "passed"
});
formatter.before({
  "duration": 6187235507,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "ebay logo test",
  "description": "",
  "id": "ebay-test-feature;ebay-logo-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "ebay website is opened in brower",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "verify the ebay website is opened",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "check if ebay logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStep.ebay_website_is_opened_in_brower()"
});
formatter.result({
  "duration": 4016517579,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.verify_the_ebay_website_is_opened()"
});
formatter.result({
  "duration": 162651450,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.check_if_ebay_logo_is_displayed()"
});
formatter.result({
  "duration": 84017574,
  "status": "passed"
});
formatter.after({
  "duration": 2084031603,
  "status": "passed"
});
});