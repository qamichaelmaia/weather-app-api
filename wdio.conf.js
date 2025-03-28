export const config = {
    runner: 'local',
    port: 4723,
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'appTest',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/weather-app.apk`,
        'appium:appWaitActivity': 'com.weather.forecast.radar.activities.MainActivity, com.weather.forecast.radar.activities.SettingActivity',
        'appium:disableIdLocatorAutocompletion': true,
        'appium:noReset': true,
        'appium:fullReset': false,
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async function () {
        global.driver = await browser;
    }
};
