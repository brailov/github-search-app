import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybookmarksComponent } from './mybookmarks.component';

describe('MybookmarksComponent', () => {
  let component: MybookmarksComponent;
  let fixture: ComponentFixture<MybookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MybookmarksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
