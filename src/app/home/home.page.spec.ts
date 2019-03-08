import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Sim } from '@ionic-native/sim/ngx';
import { HomePage } from './home.page';

constructor(private sim: Sim) { }

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
