import { Controller } from "stimulus"
import roundCurrency from "../lib/roundCurrency"

export default class extends Controller {
  
  static targets = ["quantity", "subtotal"]
  
  updateSubtotal() {
    if (!this.hasQuantityTarget || !this.hasSubtotalTarget) return
    
    const quantity = parseInt(this.quantityTarget.value)
    const price = parseFloat(this.subtotalTarget.getAttribute('data-item-price'))
    const subtotal = quantity * price
    
    this.subtotalTarget.setAttribute('data-item-subtotal', subtotal)
    this.subtotalTarget.textContent = roundCurrency(subtotal)
  }
}
