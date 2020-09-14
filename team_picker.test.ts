import {pickRando, pickSomebody, pickJohnOrJacob} from './team_picker';

describe('team_picker', () => {
    describe('pickSomebody', () => {
        it('should throw an error if n < 0', () => {
            try {
                pickSomebody(-1);
            } catch (e) {
                expect(e.message).toEqual("somebody messed up");
            }
        });
        it('should return john if n == 0', () => {
            const expected = pickSomebody(0);
            expect(expected).toEqual('john');
        });
        it('should return jacob if n == 1', () => {
            const expected = pickSomebody(1);
            expect(expected).toEqual('jacob');
        });
        it('should return jingleheimer if n == 2', () => {
            const expected = pickSomebody(2);
            expect(expected).toEqual('jingleheimer');
        });
        it('should return smith if n == 3', () => {
            const expected = pickSomebody(3);
            expect(expected).toEqual('smith');
        });
        it('should throw an error if n > 3', () => {
            try {
                pickSomebody(93845098430);
            } catch (e) {
                expect(e.message).toEqual("somebody messed up");
            };
        });
    });

    describe('pickRando', () => {
        it('should pick one of the people', () => {
            const potentialValues = ['john', 'jacob', 'jingleheimer', 'smith'];
            const expected = pickRando();
            expect(potentialValues.includes(expected)).toBeTruthy();
        });
    });

    describe('pickJohnOrJacob', () => {
        it('should return jacob if Math.random < 0.5', () => {
            jest.spyOn(global.Math, 'random').mockReturnValue(0.4);
            const expected = pickJohnOrJacob();
            expect(expected).toEqual('jacob');
        });
        it('should return john otherwise', () => {
            jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
            const expected = pickJohnOrJacob();
            expect(expected).toEqual('john');
        });
    });
});