import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeroeDetailPage } from './heroe-detail.page';
import { ActivatedRoute, Router } from '@angular/router';
import { MOCK_HEROES } from '../list-heroes/mock-heroes';

describe('HeroeDetailPage', () => {
  let component: HeroeDetailPage;
  let fixture: ComponentFixture<HeroeDetailPage>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeDetailPage],
      imports: [],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { data: { heroe: MOCK_HEROES[0] } } } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroeDetailPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct hero ID in the title', () => {
    const selectedHero = route.snapshot.data['heroe'];
    const titleElement = fixture.nativeElement.querySelector('.ion-title');
    expect(titleElement.textContent).toContain(selectedHero.id.toString());
  });

  it('should navigate back to list-heroes', () => {
    const spy = spyOn(router, 'navigateByUrl');
    component.goBack();
    expect(spy).toHaveBeenCalledWith('/list-heroes');
  });
});
