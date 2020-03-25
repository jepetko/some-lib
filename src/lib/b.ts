import {Inject, Singleton} from 'typescript-ioc';
import {A} from './a';

@Singleton
export class B {
    constructor(@Inject private a: A) {
        console.info('B created: ', this.a.method());
    }
}
