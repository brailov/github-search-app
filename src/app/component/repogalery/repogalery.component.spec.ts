import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepogaleryComponent } from './repogalery.component';


describe('RepogaleryComponent', () => {
  let component: RepogaleryComponent;
  let fixture: ComponentFixture<RepogaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepogaleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepogaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
