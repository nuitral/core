import { LitElement, type TemplateResult } from 'lit'
import type { PropertyValues } from 'lit'

export class ShadowlessElement extends LitElement {
  public _templates = new Map<string, HTMLElement>()

  connectedCallback() {
    super.connectedCallback()
    this.collectTemplates()
  }

  protected updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties)
    this.collectTemplates()
  }

  protected yield(slotName: string, fallback?: TemplateResult) {
    const template = this._templates.get(slotName)
    return template ? Array.from(template.childNodes) : fallback
  }

  private collectTemplates() {
    this._templates.clear()

    Array.from(this.childNodes).forEach((node) => {
      if (node instanceof HTMLElement && node.hasAttribute('slot')) {
        const slotName = node.getAttribute('slot')!

        const slotDiv = document.createElement('div')
        slotDiv.className = slotName

        while (node.firstChild) {
          slotDiv.appendChild(node.firstChild)
        }

        node.remove()

        this._templates.set(slotName, slotDiv)
      }
    })
  }

  protected createRenderRoot() {
    return this
  }
}
