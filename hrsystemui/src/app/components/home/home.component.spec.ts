import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { AuthService } from '../../services/auth.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { of } from 'rxjs';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// Mock de AuthService para evitar errores con el User ID
class MockAuthService {
  getUserFirstandLastName() {
    return of({ firstName: 'Test', lastName: 'User' }); // Devuelve un usuario simulado
  }

  getToken() {
    return 'fake-token'; // Devuelve un token simulado si es necesario
  }

  getUserId() {
    return 123; // Devuelve un ID de usuario simulado
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule,
        HomeComponent, SidebarComponent],
    providers: [
        { provide: AuthService, useClass: MockAuthService } // Mock de AuthService
        ,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
