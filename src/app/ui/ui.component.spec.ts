import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Formula } from '../formula/formula.component'
import { UiComponent } from './ui.component';
import { By } from '@angular/platform-browser';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call Formula', () => {
    spyOn(component, 'getFormula');
    component.getFormula();
    expect(component.getFormula).toHaveBeenCalled();
  });

  it('Should call Formula with 20 and 4', () => {
    let resultado = 0;
    resultado = Formula(20, 5);
    expect(resultado).toEqual(50);
  });

  it('should update altura correctly', () => {
    const inputElement = document.createElement('input');
    inputElement.value = '5';
    const event = { target: inputElement } as unknown as Event;
    component.Actualizar_altura(event);
    expect(component.altura).toBe(5);
  });

  it('should update base correctly', () => {
    const inputElement = document.createElement('input');
    inputElement.value = '2';
    const event = { target: inputElement } as unknown as Event;
    component.Actualizar_base(event);
    expect(component.base).toBe(2);
  });

  it('Should set operator2 model through ngModel', async () => {
    await fixture.whenStable();
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]'));

    if (inputElement) {
      inputElement.nativeElement.value = '2.71';
      inputElement.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.base).toEqual(2.71);
    } else {
      fail('Input element with name "operator2" not found.');
    }
  });

  it('Should set operator1 model through ngModel', async () => {
    await fixture.whenStable();
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]'));

    if (inputElement) {
      inputElement.nativeElement.value = '3.14';
      inputElement.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.altura).toEqual(3.14);
    } else {
      fail('Input element with name "operator1" not found.');
    }
  });

  it('Should call getFormula when button is clicked', async () => {
    spyOn(component, 'getFormula');
    await fixture.whenStable();
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('.ObtenerResultado'));
    if (buttonElement) {
      buttonElement.nativeElement.click();
      expect(component.getFormula).toHaveBeenCalled();
    } else {
      fail('Button element not found.');
    }
  });

  it('Should display result when button is clicked', async () => {
    await fixture.whenStable();
    fixture.detectChanges();


    const buttonElement = fixture.debugElement.query(By.css('.ObtenerResultado'));
    if (buttonElement) {
      component.altura = 5;
      component.base = 2;
      buttonElement.nativeElement.click();
      fixture.detectChanges();
      const resultElement = fixture.debugElement.query(By.css('.Resultado'));
      expect(resultElement.nativeElement.textContent).toEqual('Resultado  5');
    } else {
      fail('Button element not found.');
    }
  });


});
