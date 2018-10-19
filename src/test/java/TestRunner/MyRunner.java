package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="C:\\Users\\6867\\eclipse-workspace\\Cucumber_BDD\\src\\test\\java\\Features\\ebay.feature",
		glue="StepDef",
//		dryRun=true,
//		strict=false,
		plugin= {"pretty", "html:test-output"},
		tags= {"@Smoke"}
		
		
		)

public final class MyRunner {

}
