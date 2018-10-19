$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/6867/eclipse-workspace/Cucumber_BDD/src/test/java/Features/ebay.feature");
formatter.feature({
  "line": 1,
  "name": "Ebay test feature",
  "description": "",
  "id": "ebay-test-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7218517620,
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
  "duration": 12607444853,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.verify_user_is_on_registraion_page()"
});
formatter.result({
  "duration": 949836108,
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
  "duration": 536724154,
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
  "duration": 1230793737,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_clicks_on_Create_account()"
});
formatter.result({
  "duration": 41745642,
  "status": "passed"
});
formatter.after({
  "duration": 2362573362,
  "status": "passed"
});
formatter.before({
  "duration": 6586732349,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 49,
      "value": "#\t| test\t\t\t\t\t| test@123|"
    },
    {
      "line": 50,
      "value": "#\t| Bob\t\t\t\t    | password\t|"
    },
    {
      "line": 51,
      "value": "#    | Helen                 | Hello123\t|"
    },
    {
      "line": 52,
      "value": "#    | Dave                  | pa£sword\t|"
    }
  ],
  "line": 56,
  "name": "Check the total links on website home page",
  "description": "",
  "id": "ebay-test-feature;check-the-total-links-on-website-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "ebay website is opened in brower",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "verify the ebay website is opened",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "check total links on website and print these links to console",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStep.ebay_website_is_opened_in_brower()"
});
formatter.result({
  "duration": 3612661562,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.verify_the_ebay_website_is_opened()"
});
formatter.result({
  "duration": 19337237,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.check_total_links_on_website_and_print_these_links_to_console()"
});
formatter.result({
  "duration": 14198349201,
  "status": "passed"
});
formatter.after({
  "duration": 2099208477,
  "status": "passed"
});
formatter.before({
  "duration": 6142087457,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Search items Test",
  "description": "",
  "id": "ebay-test-feature;search-items-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 61,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "ebay website is opened in brower",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "verify the ebay website is opened",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User enters value in Search field and select the category",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "user clicks on search botton",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStep.ebay_website_is_opened_in_brower()"
});
formatter.result({
  "duration": 3807197722,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.verify_the_ebay_website_is_opened()"
});
formatter.result({
  "duration": 80034808,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_enters_value_in_Search_field_and_select_the_category()"
});
formatter.result({
  "duration": 3070440787,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_clicks_on_search_botton()"
});
formatter.result({
  "duration": 3173617658,
  "status": "passed"
});
formatter.after({
  "duration": 2361982397,
  "status": "passed"
});
});