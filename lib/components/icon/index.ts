import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type {NuitralIconsId} from "@nuitral/icons";

@customElement('nuitral-core-icon')
export class NuitralIcon extends LitElement {
  @property() icon: NuitralIconsId | null = null

  protected createRenderRoot() {
    return this
  }

  render() {
    if (!this.icon) return null
    return html`<div class="nuitral-icon nuitral-icon-${this.icon}"></div>`
  }
}
