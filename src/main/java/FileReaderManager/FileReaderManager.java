package FileReaderManager;

import config.ConfigFileReader;

public class FileReaderManager {

	private static FileReaderManager fileReaderManager = new FileReaderManager();
	private static ConfigFileReader configFileReader;
 
	private FileReaderManager() {
	}
 
	
 
	 public ConfigFileReader getConfigReader() {
		 return (configFileReader == null) ? new ConfigFileReader() : configFileReader;
	 }

	public static FileReaderManager getInstance() {
		 return fileReaderManager;
	}
}
