import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IncidentViewComponent } from './incident-view.component';

describe('IncidentViewComponent', () => {
  let component: IncidentViewComponent;
  let fixture: ComponentFixture<IncidentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentViewComponent],
      providers: [
        provideHttpClient(),       // Proporciona HttpClient en producción
        provideHttpClientTesting() // Proporciona HttpClient en pruebas
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
