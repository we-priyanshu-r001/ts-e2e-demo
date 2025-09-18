import { $, browser, expect } from '@wdio/globals';
import Page from '../../vaah-webdriverio/Page.js';
import Selector from '../../vaah-webdriverio/Selector.js';
import ProductDescription from '../data/productDescription.js';
import Helper from '../../vaah-webdriverio/Helper.js';

const Sl = new Selector();

class ProductDescriptionPage extends Page {
    async addProductToTrolley(){
        const product_delivery_btn = await Sl.testid(ProductDescription.element.product_delivery_btn_test_id);
        await Helper.waitForClickable(product_delivery_btn, this.medium_pause);
        await product_delivery_btn.click();
        const trolley_add_btn = await Sl.testid(ProductDescription.element.trolley_add_btn_test_id);
        await Helper.waitForClickable(trolley_add_btn, this.medium_pause);
        await trolley_add_btn.click();
        await browser.pause(this.medium_pause);
    }

    // /**
    //  * overwrite specific options to adapt it to page object
    //  */
}

export default new ProductDescriptionPage();
