import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionPlanService } from '../../services/action-plan.service';
import { ActivatedRoute } from '@angular/router';
import { ActionPlanViewComponent } from './action-plan-view.component';
import { of } from 'rxjs';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ActionPlanViewComponent', () => {
  let component: ActionPlanViewComponent;
  let fixture: ComponentFixture<ActionPlanViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule,
        ActionPlanViewComponent],
    providers: [
        ActionPlanService, // Se provee el servicio normalmente
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } } // Se asegura que ActivatedRoute tenga queryParams
        ,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionPlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and interact with ActionPlanService', () => {
    expect(component).toBeTruthy();
  });
});