import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DnsLookupPage } from './dns-lookup.page';

describe('DnsLookupPage', () => {
  let component: DnsLookupPage;
  let fixture: ComponentFixture<DnsLookupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnsLookupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DnsLookupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
