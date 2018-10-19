package StepDef;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class EbayStep {

	WebDriver driver;

	@Before
	public void setUp() {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\6867\\Downloads\\Browsers\\chromedriver_win32\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

	}

	@After
	public void tearDown() {

		driver.close();
	}
	
	
	
	

	@Given("^user is on ebay website$")
	public void user_is_on_ebay_website() throws Throwable {

		driver.get("https://www.ebay.com/");
	}

	@When("^use clicks on sign in link$")
	public void use_clicks_on_sign_in_link() throws Throwable {

		driver.findElement(By.xpath("//a[text()='Sign in']")).click();

	}

	@Then("^user reaches on sign in page$")
	public void user_reaches_on_sign_in_page() throws Throwable {

		System.out.println("Reached on Login Page");
		Assert.assertEquals("Sign in or Register | eBay", driver.getTitle());

	}

	@When("^user clicks on register link$")
	public void user_clicks_on_register_link() throws Throwable {
		driver.findElement(By.xpath("//a[text()='register']")).click();
	}

	@Then("^User should be on registration page$")
	public void user_should_be_on_registration_page() throws Throwable {

		System.out.println("Reached on Registraion Page");
		Assert.assertEquals("Sign in or Register | eBay", driver.getTitle());
	}

	@Given("^user is on Registration Page$")
	public void user_is_on_Registration_Page() throws Throwable {

		driver.get("https://www.ebay.com/");
		driver.findElement(By.xpath("//a[text()='register']")).click();
	}

	@When("^verify user is on registraion page$")
	public void verify_user_is_on_registraion_page() throws Throwable {

		Assert.assertEquals("Sign in or Register | eBay", driver.getTitle());
		System.out.println("User is on Registration Page");
	}

	@Then("^user enters fisrt name \"([^\"]*)\" and last name \"([^\"]*)\"$")
	public void user_enters_fisrt_name_and_last_name(String fisrtName, String lastName) throws Throwable {

		WebElement userFName = driver.findElement(By.xpath("//input[@id='firstname']"));
		userFName.clear();
		userFName.sendKeys(fisrtName);

		WebElement userLName = driver.findElement(By.xpath("//input[@id='lastname']"));
		userLName.clear();
		userLName.sendKeys(lastName);

	}

	@Then("^user enters email \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_enters_email_and_password(String email, String password) throws Throwable {

		WebElement userEmail = driver.findElement(By.xpath("//input[@name='email']"));
		userEmail.clear();
		userEmail.sendKeys(email);

		WebElement userPassword = driver.findElement(By.xpath("//input[@id='PASSWORD']"));
		userPassword.clear();
		userPassword.sendKeys(password);
	}

	@Then("^user clicks on Create account$")
	public void user_clicks_on_Create_account() throws Throwable {

		WebElement createAccountButton = driver.findElement(By.xpath("//button[@id='ppaFormSbtBtn']"));

		// createAccountButton.Submit();

	}

	@Given("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {

		driver.navigate().to("https://www.ebay.com/");
		driver.findElement(By.xpath("//a[text()='Sign in']")).click();
	}

	@When("^user enters login credentials username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_enters_login_credentials_username_and_password(String userName, String password) throws Throwable {

		Assert.assertEquals("Sign in or Register | eBay", driver.getTitle());

		WebElement useremailName = driver.findElement(By.xpath("//input[@id='userid']"));
		useremailName.clear();
		useremailName.sendKeys(userName);

		WebElement userPassword = driver.findElement(By.xpath("//input[@id='pass']"));
		userPassword.clear();
		userPassword.sendKeys(password);

	}

	@Then("^user clicks on Signin botton$")
	public void user_clicks_on_Signin_botton() throws Throwable {

		WebElement SignInButton = driver.findElement(By.xpath("//button[@id='sgnBt']"));
		SignInButton.submit();
	}

	@Then("^user should be successfully logged in$")
	public void user_should_be_successfully_logged_in() throws Throwable {

		WebElement userNameLabel = driver.findElement(By.xpath("//button[@id='gh-ug']/b[1]"));
		Assert.assertEquals("Dheerendra", userNameLabel.getText());
		// Assert.assertTrue(userNameLabel.isDisplayed();
		System.out.println("User is successfully logged in to the account");

	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String userName, String password) throws Throwable {

		WebElement useremailName = driver.findElement(By.xpath("//input[@id='userid']"));
		useremailName.clear();
		useremailName.sendKeys(userName);

		WebElement userPassword = driver.findElement(By.xpath("//input[@id='pass']"));
		userPassword.clear();
		userPassword.sendKeys(password);
	}

	
	
	
	@Given("^ebay website is opened in brower$")
	public void ebay_website_is_opened_in_brower() throws Throwable {

		driver.navigate().to("https://www.ebay.com/");
	}

	@When("^verify the ebay website is opened$")
	public void verify_the_ebay_website_is_opened() throws Throwable {

        Assert.assertEquals("Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay", driver.getTitle());

	}

	@Then("^check total links on website and print these links to console$")
	public void check_total_links_on_website_and_print_these_links_to_console() throws Throwable {

		List <WebElement> links =driver.findElements(By.tagName("a"));

		System.out.println(links.size());

        for (int i=0; i< links.size();i++)
        {
            String textLink = links.get(i).getText();
            System.out.println("Link >>>>>>>>> : " + textLink);
        }
	}

	@Then("^User enters value in Search field and select the category$")
	public void user_enters_value_in_Search_field_and_select_the_category() throws Throwable {

		WebElement searchText=driver.findElement(By.id("gh-ac"));
        searchText.clear();
        searchText.sendKeys("Iphone X");

        Select select = new Select(driver.findElement(By.id("gh-cat")));
        select.selectByValue("15032");
	}

	@Then("^user clicks on search botton$")
	public void user_clicks_on_search_botton() throws Throwable {

		WebElement searchButton=driver.findElement(By.xpath("//input[@id='gh-btn']"));
        searchButton.submit();
	}

	@Then("^check if ebay logo is displayed$")
	public void check_if_ebay_logo_is_displayed() throws Throwable {
		
		WebElement logo=driver.findElement(By.id("gh-logo"));
        Boolean b=logo.isDisplayed();
        Assert.assertTrue(b);
        System.out.println("****Logo is displayed ****");
	}

}
