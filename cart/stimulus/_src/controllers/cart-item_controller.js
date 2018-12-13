import { Controller } from "stimulus"
import roundCurrency from "../lib/roundCurrency"

export default class extends Controller {
  static targets = ["quantity", "subtotal"]
  
  updateSubtotal() {
    if (!this.hasQuantityTarget || !this.hasSubtotalTarget) return
    
    const quantity = parseInt(this.quantityTarget.value, 10)
    const price = parseFloat(this.quantityTarget.getAttribute('data-item-price'))
    const subtotal = quantity * price
    
    this.subtotalTarget.textContent = roundCurrency(subtotal)
  }
}
