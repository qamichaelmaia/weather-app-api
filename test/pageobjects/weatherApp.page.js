import { $ } from '@wdio/globals'

class WeatherAppPage {

    async openMenu(menu){
        await $(`id:com.weather.forecast.radar:id/tvTitle`).click()
    }

}

export default new WeatherAppPage();
