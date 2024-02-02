import {InjectionToken} from '@angular/core';


export const LocalStoragetoken = new InjectionToken<any>('local storage', {
    providedIn : "root",

    factory() {
        return localStorage;
    },
});

