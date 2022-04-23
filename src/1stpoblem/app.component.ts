import { Component } from '@angular/core';  
import { TimeoutInfo } from 'rxjs';
import { Node } from '@angular/compiler'; 
@Component({ 
    selector: 'app-root', 
    templateUrl: 'app.component.html' 
}) 
export class AppComponent { 
    nclicks : number = 0; 
	constructor(){
		setInterval(()=>{this.nclicks++},1000);
	}
	// myInterval : any; 
	// closeInterval:any; 
	// met1(){
	// 	clearInterval(this.closeInterval);
	// 	this.myInterval = setInterval(()=>{this.nclicks++},1000);
	// 	console.log("this is method met1()")
	// }

	// met2(){
	// 	clearInterval(this.myInterval);
	// 	this.closeInterval = setInterval(()=>{this.nclicks--},1000);
	// }
}