import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarService } from 'src/app/service/car.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private carService : CarService) { }
  ngOnInit(): void {}
  addtocarts(){
    this.carService.addtoCarts();
  }
  campaignOne = new FormGroup({
    start: new FormControl(new Date(12, 10, 23)),
    end: new FormControl(new Date(13, 10, 23)),
  });
 
}
