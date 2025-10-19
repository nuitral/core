import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js';
import type {NuitralClass, NuitralIconPosition, NuitralInputType} from "@nuitral/types";
import type {NuitralIconsId} from "@nuitral/icons";
import '../icon'


@customElement('nuitral-core-input')
export default class NuitralInput extends LitElement {

    @property({ type: String, reflect: true })
    value: string = '';

    @property()
    classes: NuitralClass = '';

    @property()
    type: NuitralInputType = 'text';

    @property()
    iconPosition: NuitralIconPosition = 'left';

    @property()
    icon: NuitralIconsId | null = null;

    @property()
    placeholder: string = '';

    @property()
    disabled: boolean = false;

    private onInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.value = target.value;

        this.dispatchEvent(new CustomEvent('value-change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }

    private iconOrderClass() {
        return this.iconPosition === 'left' ? 'order-1' : 'order-2';
    }

    private inputOrderClass() {
        return this.iconPosition === 'left' ? 'order-2' : 'order-1';
    }

    iconRender() {
        return html`
            ${this.icon ? html`<nuitral-core-icon icon="${this.icon}" class="${this.iconOrderClass()}"></nuitral-core-icon>` : ''}
        `
    }

    inputRender() {
        return html`
            <input
                    .value=${this.value}
                    @input=${this.onInput}
                    type=${this.type}
                    placeholder=${this.placeholder}
                    ?disabled=${this.disabled}
                    class="nuitral-input-element ${this.inputOrderClass()}"
            />
        `
    }

    protected createRenderRoot() {
        return this
    }

    render() {
        return html`
            <div class="nuitral-input nuitral-input-text-color ${this.classes}">
                ${this.iconRender()}
                ${this.inputRender()}
            </div>
        `
    }
}