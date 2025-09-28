import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('nuitral-example')
export default class NuitralExample extends LitElement {

    protected createRenderRoot() {
        return this
    }

    render() {
        return html`
            <div class="bg-example">
                nuitral Example Element
            </div>
        `
    }
}