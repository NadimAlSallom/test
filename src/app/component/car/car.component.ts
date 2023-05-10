import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent  implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private carService : CarService) { }

  ngOnInit(): void {
    this.carService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.carService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.carService.removeCartItem(item);
  }
  emptycart(){
    this.carService.removeAllCart();
  }

}
