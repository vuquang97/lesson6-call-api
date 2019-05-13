import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorParentComponent } from './actor-parent.component';

describe('ActorParentComponent', () => {
  let component: ActorParentComponent;
  let fixture: ComponentFixture<ActorParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
