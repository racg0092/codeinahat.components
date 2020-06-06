import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeinahatComponentsComponent } from './codeinahat-components.component';

describe('CodeinahatComponentsComponent', () => {
  let component: CodeinahatComponentsComponent;
  let fixture: ComponentFixture<CodeinahatComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeinahatComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeinahatComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
