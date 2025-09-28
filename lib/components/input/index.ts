import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js';
import type {NuitralClass, NuitralInputType} from "@nuitral/types";


@customElement('nuitral-core-input')
export default class NuitralInput extends LitElement {

    @property()
    classes: NuitralClass = '';

    @property()
    type: NuitralInputType = 'text';

    @property()
    placeholder: string = '';

    inputRender() {
        return html`
            <input
                    type=${this.type}
                    placeholder=${this.placeholder}
                    class="nuitral-input-element"
            />
        `
    }

    protected createRenderRoot() {
        return this
    }

    render() {
        return html`
            <div class="nuitral-input nuitral-input-text-color ${this.classes}">
                ${this.inputRender()}
            </div>
        `
    }
}