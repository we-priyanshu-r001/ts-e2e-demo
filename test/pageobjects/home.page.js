import { $, browser, expect } from '@wdio/globals';
import Page from '../../vaah-webdriverio/Page.js';
import Selector from '../../vaah-webdriverio/Selector.js';
import Home from '../data/home.js';
import Helper from '../../vaah-webdriverio/Helper.js';

const Sl = new Selector();

class HomePage extends Page {
    async openCategoryPLP() {
        const category_dropdown = await Sl.testid(Home.element.category_dropdown_text_test_id);
        await category_dropdown.moveTo();
        const category_1 = await Sl.testid(Home.element.category_1_test_id);
        await category_1.moveTo();
        const sub_category_option_1_label = await Sl.testid(Home.element.sub_category_option_1_label_test_id)
        Helper.waitForClickable(sub_category_option_1_label, this.medium_pause);
        sub_category_option_1_label.click();
        await browser.pause(this.medium_pause);
    }

    async acceptCookies(){
        await browser.waitForNetworkIdle();
        const onetrust_accept_btn = await Sl.id(Home.element.onetrust_accept_btn_id);
        await Helper.waitForDisplayed(onetrust_accept_btn, this.long_pause);
        await Helper.waitForClickable(onetrust_accept_btn, this.long_pause);
        await onetrust_accept_btn.click();
        await browser.pause(this.medium_pause);
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
