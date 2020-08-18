import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortScannerPage } from './port-scanner.page';

describe('PortScannerPage', () => {
  let component: PortScannerPage;
  let fixture: ComponentFixture<PortScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortScannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
