import { $, browser, expect } from '@wdio/globals';
import Page from '../../vaah-webdriverio/Page.js';
import Selector from '../../vaah-webdriverio/Selector.js';
import Home from '../data/home.js';
import Helper from '../../vaah-webdriverio/Helper.js';

const Sl = new Selector();

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async openCategoryPLP() {

        const category_dropdown = await Sl.testid(Home.element.category_dropdown_text_test_id);
        await expect(category_dropdown).toBeDisplayed();
        await category_dropdown.moveTo();
        await browser.pause(3000)
        const category_1 = await Sl.testid(Home.element.category_1_test_id);
        await expect(category_1).toBeDisplayed();
        await category_1.moveTo();
        const sub_category_option_1_label = await Sl.testid(Home.element.sub_category_option_1_label_test_id)
        Helper.waitForClickable(sub_category_option_1_label, this.medium_pause);
        sub_category_option_1_label.click();
        await browser.pause(3000);
    }

    async acceptCookies(){
        const onetrust_accept_btn = await Sl.id(Home.element.onetrust_accept_btn_id);
        await Helper.waitForClickable(onetrust_accept_btn, this.long_pause);
        await onetrust_accept_btn.click();
        await browser.pause(10000);
        // await Assert.pauseIfHuman(10)

    }

    // /**
    //  * overwrite specific options to adapt it to page object
    //  */
    async open (url=null) {
        await browser.maximizeWindow()
        if(url){
            return super.open(url)
        }
        return super.open(this.base_url);
    }
}

export default new HomePage();
