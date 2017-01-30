import {expect} from 'chai';
import * as Sample from './sample';

describe('Validate Samples', () => {
    it('test uniqueWords', () => {
        const text = 'one one two one four five one four nine';
        return Sample.uniqueWords(text)
            .toArray()
            .toPromise()
            .then(words => {
                expect(words).to.be.deep.equal('one two four five nine'.split(' '));
            });
    });

    it('test fibonacci', () => {
        return Sample.fibonacci(6)
            .toArray()
            .toPromise()
            .then(values => {
                expect(values).to.be.deep.equal([1, 1, 2, 3, 5, 8]);
            });
    });
});

