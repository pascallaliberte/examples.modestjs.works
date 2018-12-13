import { Controller } from "stimulus"
import roundCurrency from "../lib/roundCurrency"

export default class extends Controller {
  
  static targets = ["quantity", "subtotal"]
  
  updateSubtotal() {
    if (!this.hasQuantityTarget || !this.hasSubtotalTarget) return
    
    let subtotal = 0
    
    this.quantityTargets.forEach((quantityTarget) => {
      const quantity = parseInt(quantityTarget.value, 10)
      const price = parseFloat(quantityTarget.getAttribute('data-item-price'))
      subtotal += (quantity * price)
    })
    
    this.subtotalTarget.textContent = roundCurrency(subtotal)
  }
  
  broadcastNewQuantity() {
    
  }
}
