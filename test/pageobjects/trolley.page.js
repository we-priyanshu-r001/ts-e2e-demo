import { $, browser, expect } from '@wdio/globals';
import Page from '../../vaah-webdriverio/Page.js';
import Selector from '../../vaah-webdriverio/Selector.js';
import Trolley from '../data/trolley.js';
import Helper from '../../vaah-webdriverio/Helper.js';

const Sl = new Selector();

class TrolleyPage extends Page {

    async trolleyCheckout(){
        const trolley_checkout_btn = await Sl.testid(Trolley.element.trolley_checkout_btn_test_id);
        await Helper.scrollIntoView(trolley_checkout_btn);
        await Helper.waitForClickable(trolley_checkout_btn, this.medium_pause);
        await trolley_checkout_btn.click();
        await browser.pause(this.medium_pause);
    }

    // /**
    //  * overwrite specific options to adapt it to page object
    //  */
}

export default new TrolleyPage();
