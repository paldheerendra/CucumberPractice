Feature: Ebay test feature
	

@Regression
Scenario: Ebay Login page test
	Given user is on ebay website	
	When use clicks on sign in link
	Then user reaches on sign in page



Scenario: Ebay Registration Page Test
	Given user is on ebay website
	When user clicks on register link
	Then User should be on registration page


@Smoke
Scenario: Registraion create Test
	Given user is on Registration Page
	When verify user is on registraion page
	Then user enters fisrt name "Dheerendra" and last name "Singh"
	Then user enters email "dheerendras06@gmail.com" and password "dheeru@123"
	Then user clicks on Create account


@Regression
Scenario: Ebay Login with valid credentials
	Given user is on login page
	When user enters login credentials username "dheerendras06@gmail.com" and password "dheeru@123"
	Then user clicks on Signin botton
	Then user should be successfully logged in


@Regression
Scenario Outline: Login Test with multiple inputs
	Given user is on login page
	When user enters "<username>" and "<password>"
	Then user clicks on Signin botton
	Then user should be successfully logged in

Examples: 

	| username              |  password |

	|dheerendras06@gmail.com|dheeru@123|

	| admin					| admin@123|
#	| test					| test@123|
#	| Bob				    | password	|
#    | Helen                 | Hello123	| 
#    | Dave                  | pa£sword	| 

	

Scenario: Check the total links on website home page
	Given ebay website is opened in brower
	When verify the ebay website is opened
	Then check total links on website and print these links to console


Scenario: Search items Test
	Given ebay website is opened in brower
	When verify the ebay website is opened
	Then User enters value in Search field and select the category
	Then user clicks on search botton


Scenario: ebay logo test
	Given ebay website is opened in brower
	When verify the ebay website is opened
	Then check if ebay logo is displayed

