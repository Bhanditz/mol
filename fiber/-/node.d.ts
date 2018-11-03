declare namespace $ { }
export = $;
declare namespace $ {
    function $mol_func_name(func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}
declare namespace $ {
}
declare namespace $ {
    let $mol_fail_catched: WeakSet<any>;
    function $mol_fail_hidden(error: any): never;
}
declare namespace $ {
    type $mol_ambient_context = Window & {
        Promise: PromiseConstructor;
        Math: Math;
        XMLHttpRequest: typeof XMLHttpRequest;
    } & (typeof $.$$) & (typeof $);
    function $mol_ambient(overrides: Partial<$mol_ambient_context>): $mol_ambient_context;
}
declare namespace $ {
    namespace $$ { }
    class $mol_object2 {
        static $: $mol_ambient_context;
        static readonly $$: $mol_ambient_context;
        $: $mol_ambient_context;
        readonly $$: $mol_ambient_context;
        static make<Instance>(this: {
            new (): Instance;
        }, init?: (instance: Instance) => void): Instance;
        static toString(): string;
        destructor(): void;
        [Symbol.toStringTag]: string;
        toString(): string;
    }
}
declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}
declare namespace $ {
    function $mol_log(path: any, ...values: any[]): void;
}
declare namespace $ {
    function $mol_log_context(next?: () => void): () => void;
}
declare namespace $ {
    function $mol_log_debug(next?: () => void): () => void;
}
declare namespace $ {
    var $mol_log_filter: (next?: string) => string;
}
declare namespace $ {
    function $mol_log_group<Task extends Function>(name: string, task: Task): Task;
}
declare namespace $ {
    let $mol_fiber_stack: $mol_fiber<any>[];
    function $mol_fiber_make<Result = void>(handler: () => Result, abort?: void | (() => void)): $mol_fiber<Result>;
    function $mol_fiber_start<Result = void>(handler: () => Result): Result;
    function $mol_fiber_defer<Result = void>(handler: () => Result): void;
    function $mol_fiber_func<Handler extends (...args: any[]) => Result, Result = void>(handler: Handler): Handler;
    function $mol_fiber_method<Host, Result>(obj: Host, name: string, descr: TypedPropertyDescriptor<(...args: any[]) => Result>): void;
    function $mol_fiber_sync<Args extends any[], Result = void>(request: (...args: Args) => PromiseLike<Result>): (...args: Args) => Result;
    function $mol_fiber_async<Result = void>(request: (back: (response: (...args: any[]) => Result) => (...args: any[]) => void) => {
        (): any;
    } | void): Result;
    function $mol_fiber_warp(): void;
    function $mol_fiber_fence(func: () => any): void;
    class $mol_fiber<Result = any> extends $mol_object2 {
        slave: $mol_fiber;
        handler: () => Result;
        abort?: void | (() => void);
        static quant: number;
        static current: $mol_fiber;
        static scheduled: number;
        static deadline: number;
        static tick(): void;
        static schedule(): void;
        static queue: (() => void)[];
        constructor(id: string, slave: $mol_fiber, handler: () => Result, abort?: void | (() => void));
        destructor(): void;
        masters: $mol_fiber<any>[];
        cursor: number;
        error: Error | Promise<Result>;
        result: Result;
        protected _done: (result: Result) => void;
        done(result: Result): Result;
        static catched: WeakSet<object>;
        fail(error: Error | Promise<Result>): Error | Promise<Result>;
        schedule(): Promise<{}>;
        limit(): void;
        start(): Result;
        step(): number;
        master: $mol_fiber;
    }
}
