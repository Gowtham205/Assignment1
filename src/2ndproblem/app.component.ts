import { Component } from '@angular/core';  
import { TimeoutInfo } from 'rxjs';
import { Node } from '@angular/compiler'; 
@Component({ 
    selector: 'app-root', 
    templateUrl: 'app.component.html' 
}) 
export class AppComponent { 
    nclicks : number = 0; 
	closeInterval:any; 
	met1(){
		this.nclicks++;
	}

	met2(){
		this.nclicks--;
	}
}