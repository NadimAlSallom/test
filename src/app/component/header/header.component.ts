
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public totalItem : number = 0;

  constructor(private carService : CarService) { }

  ngOnInit(): void {
    this.carService.getProducts()
    .subscribe((res: any)=>{
      this.totalItem = res.length;
    })
  }
}
