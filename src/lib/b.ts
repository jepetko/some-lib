import {Inject, Singleton} from 'typescript-ioc';
import {A} from './a';

@Singleton
export class B {
    constructor(@Inject private a: A) {
        console.info('B created, will now call this.a.method()');
        this.a.method();
    }
}
