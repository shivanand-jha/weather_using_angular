import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
  providers:[WeatherService]
})
export class WeatherComponent implements OnInit{
cityName:string = "Delhi";


data ={
  temp :'',
  feelsLike :'',
  pressure:'',
  humidity:'',
  imgUrl:'',
  visibility:'',
  description:''
}

constructor(private readonly weather:WeatherService){
  
}

ngOnInit(): void {
    this.loadData()
}
loadData(){
  if(!this.cityName){
    this.weather.fetchData().subscribe(
     { next:(data)=>{
        console.log(data);
     },
     error:(err)=>{
      console.log("error while fetching data",err);
     }
     
    }
    )
  }
}
}
