import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ListHeroesPage } from './list-heroes.page';
import { IonicModule } from '@ionic/angular';
import { ApiMarvelService } from '../api/api-marvel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MOCK_HEROES } from './mock-heroes';

describe('ListHeroesPage', () => {
  let component: ListHeroesPage;
  let fixture: ComponentFixture<ListHeroesPage>;
  let apiService: ApiMarvelService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListHeroesPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [ApiMarvelService]
    }).compileComponents();

    fixture = TestBed.createComponent(ListHeroesPage);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiMarvelService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMarvelHeroes() on initialization', () => {
    spyOn(component, 'getMarvelHeroes');
    component.ngOnInit();
    expect(component.getMarvelHeroes).toHaveBeenCalled();
  });

  it('should fetch marvel heroes', () => {
    spyOn(apiService, 'getAllSuperheroes').and.returnValue(of(MOCK_HEROES));
    component.ngOnInit();
    expect(component.marvelHeroes$).toEqual(of(MOCK_HEROES));
  });
});
