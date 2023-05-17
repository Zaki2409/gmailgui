import { Component } from '@angular/core';

@Component({
  selector: 'app-eamil',
  templateUrl: './eamil.component.html',
  styleUrls: ['./eamil.component.css']
})
export class EamilComponent {
  data={
    to: "" ,
    subject: "" ,
    message:"" 
  }

  dosubmit() {
    console.log("emaail sent"),
    console.log("DATA" , this.data)
  }

}
