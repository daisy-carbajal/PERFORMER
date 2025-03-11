import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { JobTitleConfigComponent } from './job-title-config.component';

describe('JobTitleConfigComponent', () => {
  let component: JobTitleConfigComponent;
  let fixture: ComponentFixture<JobTitleConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobTitleConfigComponent],
      providers: [
        provideHttpClient(),       // Proporciona HttpClient en producción
        provideHttpClientTesting() // Proporciona HttpClient en pruebas
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobTitleConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
