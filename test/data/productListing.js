import Page from '../../vaah-webdriverio/Page.js'

class ProductListing extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            product_card_test_id: 'search-result-for-product-39550-card-card-header',
        }
        this.value = {
        }
    }
}

export default new ProductListing();