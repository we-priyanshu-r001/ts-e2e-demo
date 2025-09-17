import Page from '../../vaah-webdriverio/Page.js'

class Home extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            category_dropdown_text_test_id: 'header-categories-text',
            category_1_test_id: 'category-list-option-1-span',
            onetrust_accept_btn_id: 'onetrust-accept-btn-handler',
            sub_category_option_1_label_test_id: 'sub-category-option-1-list-1-label',
        }
        this.value = {
        }
        this.params.page = {
            id: "LI",
            name: "Login",
            url : this.base_url + "login"
        }
        this.groups = [
            {
                count: 1,
                name: "login",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify We're able to load Home Page",
                        // expect: "The URL should be: "+this.params.page.url,
                        // assert: this.params.page.url
                    }
                ]
            }
        ]
    }
}

export default new Home();