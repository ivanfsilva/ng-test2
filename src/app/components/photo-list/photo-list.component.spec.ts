import { PhotoListComponent } from './photo-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { PhotoListModule } from './photo-list.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardService } from '../../shared/components/photo-board/services/photo-board.service';
import { buildPhotoList } from '../../shared/components/photo-board/test/build-photo-list';


describe(PhotoListComponent.name, () => {
  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;
  let service: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService);
  });

  it( `Should create component`, () => {
    expect(component).toBeTruthy();
  });

  it( `(D) Should display board data arrives`, () => {
    fixture.detectChanges();
    const photos = buildPhotoList();
    spyOn(service, 'getPhotos')
      .and.returnValue(of(photos));
  });
});
