import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificNoteComponent } from './specific-note.component';

describe('SpecificNoteComponent', () => {
  let component: SpecificNoteComponent;
  let fixture: ComponentFixture<SpecificNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
