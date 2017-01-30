import {expect} from 'chai';
import {
    observableFromIterable,
    observableFromSet,
    observableFromMap
} from './fromIterable';

describe('Validate Exports', () => {
    it('tests Set as Observable', () => {
        const s = new Set([1, 2, 3, 3, 4, 4, 4, 5, 6, 7]);
        return observableFromSet(s)
            .map(a => a * 2)
            .toArray()
            .toPromise()
            .then(values => {
                expect(values).to.be.deep.equal([2, 4, 6, 8, 10, 12, 14]);
            });
    });

    it('tests Map as Observable', () => {
        const text = 'This is some sample text. For letter frequency testing.';
        // Calc letter frequency
        const freq = text.split('').reduce((m, t) => m.set(t, (m.get(t) || 0) + 1), new Map<string, number>());
        return observableFromMap(freq)
            .filter(([, freq]) => freq > 2)
            .map(([t]) => t)
            .toArray()
            .toPromise()
            .then(letters => {
                expect(letters.sort()).to.deep.equal([' ', 'e', 'i', 'r', 's', 't']);
            });
    });

    it('tests using Generators with Observable', () => {
        function* inc() {
            let i = 0;
            while (true) {
                yield(i++);
            }
        }

        const infiniteSeries = inc();
        return observableFromIterable(infiniteSeries)
            .skip(3)
            .take(5)
            .toArray()
            .toPromise()
            .then(values => {
                expect(values).to.be.deep.equal([3, 4, 5, 6, 7]);
            });
    });

});
