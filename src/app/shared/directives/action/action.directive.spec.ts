import { ActionDirective } from './action.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiondirectiveModule } from './action.module';
import { Component } from '@angular/core';

describe( ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach( async () => {
   await TestBed.configureTestingModule({
      declarations: [ ActionDirectiveTestComponent ],
      imports: [ ActiondirectiveModule ]
    }).compileComponents();

   fixture = TestBed.createComponent(ActionDirectiveTestComponent);
   component = fixture.componentInstance;
  });

  it(`(D) (@Output appAction) should emit event with payload when ENTER key is pressed`, () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new KeyboardEvent('keyup', { key: 'Enter'});
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new Event('click');
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });
});

@Component({
  template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`
})

class ActionDirectiveTestComponent {
  private event: Event = null;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }
}
