import { Component } from '@angular/core';  
import { TimeoutInfo } from 'rxjs';
import { Node } from '@angular/compiler'; 
@Component({ 
    selector: 'app-root', 
    templateUrl: 'app.component.html' 
}) 
export class AppComponent { 
    nclicks : number = 0; 
	met1(){
		if(this.nclicks<10){
			this.nclicks++;
		}
	}

	met2(){
		if(this.nclicks>0){
			this.nclicks--;
		}
	}
}