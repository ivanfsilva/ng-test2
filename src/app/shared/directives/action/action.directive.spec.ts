import { ActionDirective } from './action.directive';
import { TestBed } from '@angular/core/testing';
import { ActiondirectiveModule } from './action.module';

describe( ActionDirective.name, () => {
  beforeEach( async () => {
   await TestBed.configureTestingModule({
      imports: [ ActiondirectiveModule ]
    }).compileComponents();
  });
});
