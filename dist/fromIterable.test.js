"use strict";
const chai_1 = require("chai");
const fromIterable_1 = require("./fromIterable");
describe('Validate Exports', () => {
    it('tests Set as Observable', () => {
        const s = new Set([1, 2, 3, 3, 4, 4, 4, 5, 6, 7]);
        return fromIterable_1.observableFromSet(s)
            .map(a => a * 2)
            .toArray()
            .toPromise()
            .then(values => {
            chai_1.expect(values).to.be.deep.equal([2, 4, 6, 8, 10, 12, 14]);
        });
    });
    it('tests Map as Observable', () => {
        const text = 'This is some sample text.';
        // Calc letter frequency
        const freq = text.split('').reduce((m, t) => m.set(t, (m.get(t) || 0) + 1), new Map());
        return fromIterable_1.observableFromMap(freq)
            .filter(([, freq]) => freq > 2)
            .map(([t]) => t)
            .toArray()
            .toPromise()
            .then(letters => {
            chai_1.expect(letters.sort()).to.deep.equal([]);
        });
    });
});
//# sourceMappingURL=fromIterable.test.js.map