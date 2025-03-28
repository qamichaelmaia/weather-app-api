import { expect, driver } from '@wdio/globals'
import weatherAppPage from '../pageobjects/weatherApp.page';
import cityViewPage from '../pageobjects/cityView.page';
describe('Weather App - Teste E2E', () => {
    it('Deve abrir o aplicativo e clicar no botão', async () => {
        await weatherAppPage.openMenu('profile')
        await cityViewPage.addOption.click()
        await cityViewPage.addCity.type('Jacobina')
        await driver.pause(10000);

    });
});
