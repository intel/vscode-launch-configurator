export default {
  deprecatedExtension: (deprExtName: string, actualExtName: string) => { return `${deprExtName} is a deprecated version of the ${actualExtName}. This may lead to the unavailability of overlapping functions.`; },
  goToUninstall: 'Uninstall deprecated',
  choiceIgnore: 'Ignore',
  choiceReload: 'Reload',
  autoSearch: (toolName: string) => { return `Find ${toolName}`; },
  completedUninstalling: (deprExtName: string) => { return `Completed uninstalling the ${deprExtName} extension. Please reload Visual Studio Code.`; },
  updateSettingJson: (folderName: string) => { return `Should this ONEAPI_ROOT update change the setting.json file in the ${folderName} folder?`; },
  choiceUpdate: 'Update',
  choiceSkip: 'Skip',
  updateVuneRoot: 'Should this ONEAPI_ROOT update change the root path to VTune?',
  vtuneRootWasUpdated: 'VTune root path was updated',
  updateAdvisorRoot: 'Should this ONEAPI_ROOT update change the root path to Advisor?',
  advisorRootWasUpdated: 'Advisor root path was updated',
  kernelAttrLearnMore: '[Learn more](https://www.intel.com/content/www/us/en/develop/documentation/oneapi-fpga-optimization-guide/top/quick-reference/fpga-kernel-attributes.html)',
  loopAttrLearnMore: '[Learn more](https://www.intel.com/content/www/us/en/develop/documentation/oneapi-fpga-optimization-guide/top/quick-reference/fpga-loop-directives.html)',
  memoryAttrLearnMore: '[Learn more](https://www.intel.com/content/www/us/en/develop/documentation/oneapi-fpga-optimization-guide/top/quick-reference/fpga-memory-attributes.html)',
  unrollAttrDescr: 'Unrolls a loop in the kernel code.\n\n[Learn more](https://www.intel.com/content/www/us/en/develop/documentation/oneapi-fpga-optimization-guide/top/quick-reference/fpga-loop-directives.html)',
  unrollAttrSignature: '#pragma unroll N',
  warnLaunchingAdvisor: 'Launching Intel Advisor on a remote connection is not currently supported.',
  warnLaunchingVTune: 'Launching Intel VTune Profiler on a remote connection is not currently supported.',
  updateBinaryPath: 'Binary path was updated. It will change VTune and Advisor app path.',
  updateAdvisorInstallRoot: 'Advisor install root was updated.',
  updateAdvisorProjectFolder: 'Advisor project folder was updated.',
  updateVtuneInstallRoot: 'VTune install root was updated.',
  updateVtuneProjectFolder: 'VTune project folder was updated.',
  updateOneApiRoot: 'ONEAPI_ROOT was updated. It will update settings.json file from your .vscode folder and may update VTune & Advisor root paths',
  choiceInstall: 'Install',
  installEnvConfigurator: 'The Environment Configurator for Intel Software Developer Tools is required to configure your oneAPI C/++ projects. Please install it',
  installCpp: 'No extension for C/C++ was found. Please install it to configure your oneAPI C/++ projects.',
  failedGenerateTasks: 'Generating tasks failed. The project does not contain CMakeLists.txt or MakeFile. Add one of those files to your working directory and try again.',
  chooseTask: (buildSystem: string) => `Choose target from ${buildSystem} or push ESC to exit.`,
  selectNewTarget: 'Select a new target',
  choiceClose: 'Close',
  createNewTask: 'Do you want to create a new task?',
  duplicatedTask: (label: string) => `Task for "${label}" was skipped as duplicate.`,
  addedTask: (label: string) => `Task for "${label}" was added.`,
  specifyOneApi: 'Specify the path to your oneAPI installation. Open settings and search for "oneapi-analysis-configurator: ONEAPI_ROOT". Add the absolute path to your installation',
  openSettings: 'Open settings',
  configureCppProperties: 'C++ properties are successfully edited. Please check .vscode/settings.json for more details.',
  oneApiFromConfigurator: 'ONEAPI_ROOT is taken from your Analysis Configurator extension\'s settings',
  oneApiFromProcEnv: 'ONEAPI_ROOT is taken from your process environment variables',
  oneApiFromEnvConf: 'ONEAPI_ROOT is taken from your Environment Configurator extension\'s settings',
  editCppProperties: 'C++ properties are successfully edited. Please check .vscode/settings.json for more details.',
  provideCppIncludeFiles: 'Please provide your additional cpp include files in .vscode/settings.json or in C++ extension settings.',
  errOneApiEnvRequired: 'oneAPI environment is required. Press Ctrl+Shift+P and execute "Intel oneAPI: Initialize environment variables".',
  errCompilerPath: 'Failed to find the selected compiler. Make sure it\'s installed',
  errInitEnvVars: 'Quick build failed. Initialize the oneAPI environment. Press Ctrl+Shift+P and execute "Intel oneAPI: Initialize environment variables".',
  errCppSettings: 'Failed to edit C++ properties. Initialize the oneAPI environment. Press Ctrl+Shift+P and execute "Intel oneAPI: Initialize environment variables".',
  errCppConfiguration: 'Configure C++ properties command failed.',
  errNoOneApiPath: 'ONEAPI_PATH is not provided in your environment variables.',
  errNoOpenFile: 'Quick build failed. No open file.',
  errCppFile: 'Quick build failed. The open file must be a cpp file.',
  errReadScript: (scriptPath: string, err: Error) => `Failed to read ${scriptPath} file. ${err}`,
  errLog: (logPath: string) => `Quick build failed. See compile log: ${logPath}`,
  errExecFile: (normalizedBinaryPath: string) => `${normalizedBinaryPath} is not an executable file. Please check the app name and path and also make sure that the file has sufficient permissions to launch.`,
  launchAdvisor: 'Intel oneAPI: Launch Advisor',
  launchVTune: 'Intel oneAPI: Launch VTune Profiler',
  saveProjPath: 'Save the path to the project?',
  saveToolPath: (toolName: string) => `Save the path to the ${toolName}?`,
  builtFile: (dest: string) => `File ${dest} was built.`,
  skipTarget: 'Skip target',
  renameTask: 'Rename task',
  existedTask: (label: string) => `Task for target "${label}" already exists. Do you want to rename current task or skip target?`,
  newTaskName: 'Please provide new task name:',
  errPowerShell: 'Failed to determine version of Windows PowerShell. Unable to retrieve targets from CMake lists.',
  errGetTargets: (err: any) => `Failed to get targets. ${err}`,
  choiceExit: 'Exit',
  changeBinary: 'Change binary',
  chooseExec: 'You can choose the executable file or change the settings by yourself.',
  chooseExecFile: 'Choose the executable file.',
  choiceOnce: 'Once',
  choiceSave: 'Save',
  saveFilePath: 'Save the path to the file for analysis?',
  couldNotFindPath: (toolName: string, toolInstallFolder: string) => `Could not find ${toolName} by path "${toolInstallFolder}". You can ignore this problem and continue automatic search or specify the location manually.`,
  couldNotFind: (toolName: string) => `Could not find ${toolName}. Please specify the path manually.`,
  couldNotFindExec: 'Could not find executable files in workspace.',
  specifyPrFolder: 'Please specify the analyzer project folder',
  errWorkingDir: 'Can not find the working directory.',
  addWorkingDir: 'Please add one or more working directories and try again.',
  errNoWorkingDir: 'No open working directory.',
  failedReadScript: (scriptPath: string, err: any) => `Failed to read ${scriptPath} file. ${err}`,
  zzz: 'end of message list, do not use in application'
};
