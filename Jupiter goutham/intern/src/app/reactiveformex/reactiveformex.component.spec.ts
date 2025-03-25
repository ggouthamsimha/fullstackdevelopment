import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformexComponent } from './reactiveformex.component';

describe('ReactiveformexComponent', () => {
  let component: ReactiveformexComponent;
  let fixture: ComponentFixture<ReactiveformexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveformexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
