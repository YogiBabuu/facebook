import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {

    let pipe;

    beforeEach(() => {
        pipe = new MyDatePipe();
    })

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return null when pass invalid date string', () =>{
        const input ='ciasteczko';
        const output = null;
        expect(pipe.transform(input)).toEqual(output);
    } );

    it('should return proper date string', () =>{
        const input ='Fri Oct 26 2018 22:09:13 GMT+0200 (czas środkowoeuropejski letni)';
        const output = '26 października 2018, 22:09:13';
        expect(pipe.transform(input)).toEqual(output);
    } )

});

