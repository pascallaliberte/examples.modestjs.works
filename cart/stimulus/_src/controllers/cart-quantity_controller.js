import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["quantity"]
  
  updateQuantity(event) {
    if (!this.hasQuantityTarget) return
    
    if (!event.detail || !event.detail.newQuantity) return
    
    this.quantityTarget.textContent = event.detail.newQuantity
  }
}
