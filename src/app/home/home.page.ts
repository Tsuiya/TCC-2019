import { Component } from '@angular/core';  
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Sim } from '@ionic-native/sim/ngx';
import { from } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public simInfo: any;
  public cards: any;
  subject='Denuncia';
  body='';
  to='tsuiya.hachiman@gmail.com';
  constructor(private sim: Sim, public emailComposer: EmailComposer, public geolocation: Geolocation) {} 
  

  enviar(){
    let email = {
      to: this.to,
      subject: this.subject,
      body: this.body,
      isHtml: false
    }
    this.emailComposer.open(email);
  }
 
  async getSimData() {
    try {
      let simPermission = await this.sim.requestReadPermission();
      if (simPermission == "OK") {
        let simData = await this.sim.getSimInfo();
        this.simInfo = simData;
        this.cards = simData.cards;
        console.log(simData);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
}
