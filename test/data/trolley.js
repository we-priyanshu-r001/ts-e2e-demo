import Page from '../../vaah-webdriverio/Page.js'

class Trolley extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            trolley_checkout_btn_test_id: 'trolley-continue-checkout-cta',
            
        }
        this.value = {
        }
    }
}

export default new Trolley();