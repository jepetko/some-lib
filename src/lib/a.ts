import {Singleton} from 'typescript-ioc';

@Singleton
export class A {
    constructor() {
        console.info('A created');
    }

    method() {
        console.info('a: method');
    }
}
