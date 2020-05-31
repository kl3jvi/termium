import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SplashscreenPage } from './splashscreen.page';

describe('SplashscreenPage', () => {
  let component: SplashscreenPage;
  let fixture: ComponentFixture<SplashscreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashscreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SplashscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
