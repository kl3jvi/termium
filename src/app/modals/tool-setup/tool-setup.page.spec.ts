import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolSetupPage } from './tool-setup.page';

describe('ToolSetupPage', () => {
  let component: ToolSetupPage;
  let fixture: ComponentFixture<ToolSetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolSetupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
