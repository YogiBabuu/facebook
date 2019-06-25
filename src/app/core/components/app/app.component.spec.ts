import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
import { componentFactoryName } from '@angular/compiler';

describe('AppComponent', () => {

    let fixture;
    let component;
    let $component;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                MenuComponent // added after testing
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        $component = fixture.debugElement.nativeElement;

    }));

    afterEach(() => {
        $component.remove();
    });

    it('should create the app', () => {

        expect(component).toBeTruthy();
    });

    it(`should have as title 'facebook'`, () => {
        // const fixture = TestBed.createComponent(AppComponent);
        // const app = fixture.debugElement.componentInstance;
        expect(component.title).toEqual('facebook');
    });

    // it('should render title in a h1 tag', () => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   fixture.detectChanges();
    //   const compiled = fixture.debugElement.nativeElement;
    //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to facebook!');
    // });
});
