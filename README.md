# rxjs-from-iterable


This is a simple Typescript library to help with converting iterables like Sets, Maps, and Generators into Rx.Observables.

This is a stop-gap library until Typescript 2.2, which extends support for Iterable to ES3 and ES5.

## Installation
```sh
npm install -save rxjs-from-iterable rxjs
```

## Usage

This library exposes three functions:
- `observableFromIterable`: this is for working with generator functions or any other *Iterable*
- `observableFromSet`: this is for working with Sets
- `observableFromMap`: this is for working with Maps.


## Examples

### Sets

```Typescript
import * as Rx from 'rxjs/Rx';
import {observableFromSet} from 'rxjs-from-iterable';

export function uniqueWords(text: string): Rx.Observable<string> {
    const setUniqueWords = new Set(text.split(' '));
    return observableFromSet(setUniqueWords);
}
```

### Generators

```Typescript
function* genFib() {
    let [a, b] = [0, 1];
    while (true) {
        [a, b] = [b, a + b];
        yield a;
    }
}

function fibonacci(): Rx.Observable<number> {
    return observableFromIterable(genFib());
}
```
