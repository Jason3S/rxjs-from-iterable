import {expect} from 'chai';
import * as pkg from '../src';

describe('Validate that the package loads', () => {
    it('tests that some of the functions exist', () => {
        expect(pkg.observableFromIterable).is.instanceof(Function);
    });
});