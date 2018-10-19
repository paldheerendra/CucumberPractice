package TestRunner;

import java.io.File;
import java.io.IOException;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import FileReaderManager.FileReaderManager;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="C:\\Users\\6867\\eclipse-workspace\\Cucumber_BDD\\src\\test\\java\\Features\\ebay.feature",
		glue="StepDef",
//		dryRun=true,
//		strict=false,
		plugin= {"pretty", "html:test-output", "json: Test_Reports/cucumber.json", 
				
				"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"
				//Needs to check this line"
				
				
		},
		tags= {"@Smoke"}
		
		
		)

public final class MyRunner {
	

	@AfterClass
	public static void writeExtentReport() throws IOException {
		
		Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
	}

}
