import { $, browser, expect } from '@wdio/globals';
import Page from '../../vaah-webdriverio/Page.js';
import Selector from '../../vaah-webdriverio/Selector.js';
import Helper from '../../vaah-webdriverio/Helper.js';
import ProductListing from '../data/productListing.js';

const Sl = new Selector();

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductListingPage extends Page {
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async openPDP(){
        const product_card = await Sl.testid(ProductListing.element.product_card_test_id)
        await Helper.waitForClickable(product_card, this.long_pause);
        await product_card.click();
        await browser.pause(10000);
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

export default new ProductListingPage();
