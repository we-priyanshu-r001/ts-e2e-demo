import { expect } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';
import Home from '../data/home.js';
import ProductListingPage from '../pageobjects/productListing.page.js';
import ProductDescriptionPage from '../pageobjects/productDescription.page.js'
import TrolleyPage from '../pageobjects/trolley.page.js';

describe(Home.groups[0].name, () => {
    it(Home.groups[0].tests[0].name, async () => {
        await HomePage.open();
        await HomePage.acceptCookies();
        await HomePage.openCategoryPLP();
        await ProductListingPage.openPDP();
        await ProductDescriptionPage.addProductToTrolley();
        await TrolleyPage.trolleyCheckout();
    })
})

