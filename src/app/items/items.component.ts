import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor( public router: Router) { 
    var a = <HTMLButtonElement>document.getElementById("button1") ;  
    console.log('button 1 is ', a ) ; 
  }

  ngOnInit(): void {
  }

}

var a = document.getElementById("button1") ; 
console.log('button 1 is ', a ) ; 
/*
    document.getElementById("button1").addEventListener("click", function() {
      document.getElementById("name").textContent = document.getElementById("button1").textContent; 
    }) ; 
  
    console.log('button1 text is ',  document.getElementById("options1").textContent ) ; 
  
    document.getElementById("button2").addEventListener("click", function() {
      document.getElementById("name").innerText = document.getElementById("button2").textContent; 
    }) ; 
  
    document.getElementById("button3").addEventListener("click", function() {
      document.getElementById("name").innerText = document.getElementById("button3").textContent; 
    }) ; 
    */