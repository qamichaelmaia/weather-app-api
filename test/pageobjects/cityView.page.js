import { $ } from '@wdio/globals'

class cityPage {

    get addOption (){
        return $('android=new UiSelector().text("Add location")').click()
    }
    get addCity (){
        return $('android=new UiSelector().text("Search location")').click()
    }

}
$
export default new cityPage();
