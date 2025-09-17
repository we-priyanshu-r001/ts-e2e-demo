import { $ } from '@wdio/globals'
import Page from '../../vaah-webdriverio/Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
