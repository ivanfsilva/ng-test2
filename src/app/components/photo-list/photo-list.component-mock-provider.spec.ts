import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListModule } from './photo-list.module';

import { PhotoBoardService } from '../../shared/components/photo-board/services/photo-board.service';
import { PhotoBoardMockService } from '../../shared/components/photo-board/services/photo-board-mock.service';


describe(PhotoListComponent.name + ' Mock Provider', () => {
  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientModule
      ],
      providers: [
        {
          provide: PhotoBoardService,
          useClass: PhotoBoardMockService
        }]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it( `Should create component`, () => {
    expect(component).toBeTruthy();
  });

  it( `(D) Should display board data arrives`, () => {
    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(board)
      .withContext('Should not display board')
      .not.toBeNull();
    expect(loader)
      .withContext('Should not display loader')
      .toBeNull();
  });
});
