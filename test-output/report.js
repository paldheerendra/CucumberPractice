$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/6867/eclipse-workspace/Cucumber_BDD/src/test/java/Features/ebay.feature");
formatter.feature({
  "line": 1,
  "name": "Ebay test feature",
  "description": "",
  "id": "ebay-test-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 31330755377,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Registraion create Test",
  "description": "",
  "id": "ebay-test-feature;registraion-create-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Smoke"
    }
  ]
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
  "duration": 38215708912,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.verify_user_is_on_registraion_page()"
});
formatter.result({
  "duration": 1215227792,
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
  "duration": 2761398481,
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
  "duration": 598154014,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_clicks_on_Create_account()"
});
formatter.result({
  "duration": 29059921,
  "status": "passed"
});
formatter.after({
  "duration": 1058096232,
  "status": "passed"
});
});