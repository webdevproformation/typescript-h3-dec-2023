import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatriemeComponent } from './quatrieme.component';

describe('QuatriemeComponent', () => {
  let component: QuatriemeComponent;
  let fixture: ComponentFixture<QuatriemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuatriemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuatriemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
