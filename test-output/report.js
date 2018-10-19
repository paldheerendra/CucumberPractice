$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/6867/eclipse-workspace/Cucumber_BDD/src/test/java/Features/ebay.feature");
formatter.feature({
  "line": 1,
  "name": "Ebay test feature",
  "description": "",
  "id": "ebay-test-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 73512067209,
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
  "duration": 69453769085,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.verify_user_is_on_registraion_page()"
});
formatter.result({
  "duration": 1464038591,
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
  "duration": 18249134513,
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
  "duration": 513634103,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_clicks_on_Create_account()"
});
formatter.result({
  "duration": 36884470,
  "status": "passed"
});
formatter.after({
  "duration": 1655475867,
  "status": "passed"
});
formatter.before({
  "duration": 23427576385,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027D9075CQ1\u0027, ip: \u0027192.168.162.130\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:179)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat StepDef.EbayStep.setUp(EbayStep.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:16562/status] to be available after 20001 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:188)\r\n\t... 47 more\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 48 more\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "EbayStep.verify_the_ebay_website_is_opened()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayStep.check_total_links_on_website_and_print_these_links_to_console()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 152960,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDef.EbayStep.tearDown(EbayStep.java:41)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 68024670290,
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
  "duration": 28679796438,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.verify_the_ebay_website_is_opened()"
});
formatter.result({
  "duration": 44786697,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_enters_value_in_Search_field_and_select_the_category()"
});
formatter.result({
  "duration": 18399533798,
  "status": "passed"
});
formatter.match({
  "location": "EbayStep.user_clicks_on_search_botton()"
});
formatter.result({
  "duration": 24162213103,
  "status": "passed"
});
formatter.after({
  "duration": 5372864426,
  "status": "passed"
});
});