import { CUSTOM_ELEMENTS_SCHEMA, component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Sim } from '@ionic-native/sim/ngx';
import { AlertController } from '@ionic/angular';

import { HomePage } from './home.page';
constructor(private sim: Sim) { }

@Component({
  selector: 'home.page',
  templateUrl: 'home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class AlertExample {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Você tem certeza?',
      message: 'Ao enviar a denúncia, será enviado alguns de seus dados para a polícia para que tenhamos certeza de que isso não é um trote',
      buttons: ['OK']
    });

    await alert.present();
  }


this.sim.getSimInfo().then(
  (info) => console.log('Sim info: ', info),
  (err) => console.log('Unable to get sim info: ', err)
);

this.sim.hasReadPermission().then(
  (info) => console.log('Has permission: ', info)
);

this.sim.requestReadPermission().then(
  () => console.log('Permission granted'),
  () => console.log('Permission denied')
);

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
