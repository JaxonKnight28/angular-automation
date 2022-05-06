import { TestBed, async, inject } from '@angular/core/testing';
import { StringUtilsComponent } from './string-utils.component';
import { FormsModule } from '@angular/forms';
import { StringUtilService } from '../../services/StringUtil.service';

describe('String utils Component', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StringUtilsComponent
            ],
            imports: [
                FormsModule
            ],
            providers: [
                StringUtilService,
            ]
        }).compileComponents();
        // compileComponents compiles all the components so they are ready to be created as needed
    }));

    it('should create the String Utils Component', async(() => {
        const fixture = TestBed.createComponent(StringUtilsComponent);
        const stringUtil = fixture.debugElement.componentInstance;
        expect(stringUtil).toBeTruthy();
    }));

    // Standard Matcher Example
    it('should return a lowercase string', async(() => {
        // Create the compiled component pertinant to our test
        const fixture = TestBed.createComponent(StringUtilsComponent);

        // Get an instance of the MathUtilsService
        const stringUtilService = fixture.debugElement.injector.get(StringUtilService);

        // Declare two numbers that can only reach a third number when added.
        let string = 'TEST'
        // Call the add method on the mathUtilsComponent, and see that the final result returns
        expect(stringUtilService.toLowercaseText(string)).toEqual('test');
    }));

    it('should return an uppercase string', async(() => {

        const fixture = TestBed.createComponent(StringUtilsComponent);

        const stringUtilService = fixture.debugElement.injector.get(StringUtilService);

        let string = 'jaxon Knight'
        expect(stringUtilService.toUppercaseText(string)).toEqual('JAXON KNIGHT');
    }));

    it('should combine two strings together', async(() => {

        const fixture = TestBed.createComponent(StringUtilsComponent);

        const stringUtilService = fixture.debugElement.injector.get(StringUtilService);

        let string1 = 'Hello '
        let string2 = 'World!'
        expect(stringUtilService.concatenateTexts(string1, string2)).toEqual('Hello World!');
    }));


});
