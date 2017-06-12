import { Component,Input } from '@angular/core';
import { NavController } from 'ionic-angular';



import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [PeopleServiceProvider]
})
export class HomePage {
  public peoplebtn : string='';
  public dataArr : Array<any>;
  @Input() message;

  constructor(public navCtrl: NavController,public people:PeopleServiceProvider) {
     this.peoplebtn = this.people.showData("Hello");

  }

  setNewlabel()
  {
     this.peoplebtn = this.message;

      this.dataArr = this.people.getCategory();
          alert(this.dataArr);
  }

}
