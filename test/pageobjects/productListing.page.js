import { $, browser, expect } from '@wdio/globals';
import Page from '../../vaah-webdriverio/Page.js';
import Selector from '../../vaah-webdriverio/Selector.js';
import Helper from '../../vaah-webdriverio/Helper.js';
import ProductListing from '../data/productListing.js';

const Sl = new Selector();

class ProductListingPage extends Page {
    
    async openPDP(){
        const product_card = await Sl.testid(ProductListing.element.product_card_test_id)
        await Helper.scrollIntoView(product_card);
        await Helper.waitForClickable(product_card, this.long_pause);
        await product_card.click();
        await browser.pause(this.medium_pause);
    }
}

export default new ProductListingPage();
