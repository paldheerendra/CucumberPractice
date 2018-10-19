package config;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigFileReader {

	Properties prop;

	public String getReportConfigPath() throws IOException {
		prop = new Properties();
		FileInputStream fis = new FileInputStream("/Cucumber_BDD/config.properties");

		prop.load(fis);

		String reportConfigPath = prop.getProperty("reportConfigPath");
		if (reportConfigPath != null)
			return reportConfigPath;

		else
			throw new RuntimeException(
					"Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath");

	}

}
