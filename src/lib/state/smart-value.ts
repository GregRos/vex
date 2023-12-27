import { useState } from "react";

export class StateValue<T> {
    private readonly _value: T;
    set: (x: T) => void;
    constructor([value, setValue]: [T, (x: T) => void]) {
        this._value = value;
        this.set = setValue;
    }

    doSet(x: T) {
        return () => this.set(x);
    }

    doMap(f: (x: T) => T) {
        return () => this.set(f(this._value));
    }

    map<U>(f: (x: T) => U): U {
        return f(this._value);
    }

    get value() {
        return this._value;
    }

    set value(x) {
        this.set(x);
    }
}

export function useSmart<T>(initialValue: T): StateValue<T> {
    return new StateValue(useState(initialValue));
}
