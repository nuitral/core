import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { NuitralIconsId } from '@nuitral/icons'
import type { NuitralClass, NuitralIconPosition } from '@nuitral/types'

import { ShadowlessElement } from '../shadowLess'

@customElement('nuitral-core-chip')
export class NuitralChip extends ShadowlessElement {
  @property()
  icon: NuitralIconsId | null = null
  @property()
  iconPosition: NuitralIconPosition = 'left'
  @property()
  classes: NuitralClass = ''

  private slotOrderClass() {
    return this.iconPosition === 'left' ? 'order-2' : 'order-1'
  }

  private iconOrderClass() {
    return this.iconPosition === 'left' ? 'order-1' : 'order-2'
  }

  iconRender() {
    return html`
      ${this.icon
        ? html` <nuitral-core-icon
            icon="${this.icon}"
            class="${this.iconOrderClass()}"
          ></nuitral-core-icon>`
        : null}
    `
  }

  slotRender() {
    return html` <div class="default ${this.slotOrderClass()}">${this.yield('default')}</div>`
  }

  render() {
    return html`<div class="nuitral-chip ${this.classes}">
      ${this.iconRender()} ${this.slotRender()}
    </div>`
  }
}
