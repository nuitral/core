import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('nuitral-example')
export default class NuitralExample extends LitElement {

    render() {
        return html`
            <div>
                nuitral Example Element
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'nuitral-example': NuitralExample
    }
}
