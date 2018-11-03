require( "source-map-support" ).install()

;
"use strict"
/// Fake namespace for optional overrides
///
/// 	namespace $ { export var x = 1 , y = 1 } // defaults
/// 	namespace $.$$ { export var x = 2 } // overrides
/// 	namespace $.$$ { console.log( x , y ) } // usage
///
var $ = Object.setPrototypeOf( module['export'+'s'] , global )
$.$$ = $

$.$mol = $  // deprecated

;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//mol.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        return func.name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
var $;
(function ($) {
    process.on('uncaughtException', (error) => {
        if (!error)
            return;
        if ('then' in error || $.$mol_fail_catched.has(error))
            return;
        console.error(error);
        $.$mol_fail_catched.add(error);
    });
    process.on('unhandledRejection', (reason) => {
        if (!reason)
            return;
        if ('then' in reason || $.$mol_fail_catched.has(reason))
            return;
        console.error(reason);
        $.$mol_fail_catched.add(reason);
    });
})($ || ($ = {}));
//fail.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_fail_catched = new WeakSet();
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    class $mol_object2 {
        constructor() {
            this.$ = this.constructor['$'];
            this[Symbol.toStringTag] = `${this.constructor}.make()`;
        }
        static get $$() { return this.$; }
        get $$() { return this.$; }
        static make(init) {
            const instance = new this;
            if (init)
                init(instance);
            return instance;
        }
        static toString() { return this.name; }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag];
        }
    }
    $mol_object2.$ = $;
    $_1.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log(path, ...values) {
        if ($.$mol_log_filter() == null)
            return;
        path = String(path);
        if (path.indexOf($.$mol_log_filter()) === -1)
            return;
        if ($.$mol_log_context())
            $.$mol_log_context()();
        console.debug(path, ...values);
        if ($.$mol_log_debug() == null)
            return;
        if (path.indexOf($.$mol_log_debug()) === -1)
            return;
        debugger;
    }
    $.$mol_log = $mol_log;
})($ || ($ = {}));
//log.js.map
;
"use strict";
var $;
(function ($) {
    let context = null;
    function $mol_log_context(next = context) {
        return context = next;
    }
    $.$mol_log_context = $mol_log_context;
})($ || ($ = {}));
//log_context.js.map
;
"use strict";
var $;
(function ($) {
    let debug;
    function $mol_log_debug(next = debug) {
        return debug = next;
    }
    $.$mol_log_debug = $mol_log_debug;
})($ || ($ = {}));
//log_debug.node.js.map
;
"use strict";
var $;
(function ($) {
    let filter;
    $.$mol_log_filter = function $mol_log_filter(next = filter) {
        return filter = next;
    };
})($ || ($ = {}));
//log_filter.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_group(name, task) {
        return function $mol_log_group_wrapper(...args) {
            const filter = $.$mol_log_filter();
            if (filter == null)
                return task.apply(this, args);
            let started = false;
            let prev = $.$mol_log_context();
            $.$mol_log_context(() => {
                if (prev)
                    prev();
                started = true;
                if (filter)
                    console.group(name);
                else
                    console.groupCollapsed(name);
                $.$mol_log_context(prev = null);
            });
            try {
                return task.apply(this, args);
            }
            finally {
                if (started)
                    console.groupEnd();
                $.$mol_log_context(prev);
            }
        };
    }
    $.$mol_log_group = $mol_log_group;
})($ || ($ = {}));
//log_group.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    function $mol_test(set) {
        for (let name in set) {
            const code = set[name];
            const test = (typeof code === 'string') ? new Function('', code) : code;
            $_1.$mol_test_all.push(test);
        }
        $mol_test_schedule();
    }
    $_1.$mol_test = $mol_test;
    $_1.$mol_test_mocks = [];
    $_1.$mol_test_all = [];
    function $mol_test_run() {
        for (var test of $_1.$mol_test_all) {
            let context = Object.create($$);
            for (let mock of $_1.$mol_test_mocks)
                mock(context);
            test(context);
        }
    }
    $_1.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout($_1.$mol_log_group('$mol_test_run()', () => {
            scheduled = false;
            $mol_test_run();
        }));
    }
    $_1.$mol_test_schedule = $mol_test_schedule;
    $_1.$mol_test_mocks.push(context => {
        let seed = 0;
        context.Math = Object.create(Math);
        context.Math.random = () => Math.sin(seed++);
        const forbidden = ['XMLHttpRequest', 'fetch'];
        for (let api of forbidden) {
            context[api] = new Proxy(function () { }, {
                get() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
                apply() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
            });
        }
    });
    $mol_test({
        'mocked Math.random'($) {
            console.assert($.Math.random() === 0);
            console.assert($.Math.random() === Math.sin(1));
        },
        'forbidden XMLHttpRequest'($) {
            try {
                console.assert(void new $.XMLHttpRequest);
            }
            catch (error) {
                console.assert(error.message === 'XMLHttpRequest is forbidden in tests');
            }
        },
        'forbidden fetch'($) {
            try {
                console.assert(void $.fetch(''));
            }
            catch (error) {
                console.assert(error.message === 'fetch is forbidden in tests');
            }
        },
    });
})($ || ($ = {}));
//test.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'must be false'() {
            $.$mol_assert_not(0);
        },
        'must be true'() {
            $.$mol_assert_ok(1);
        },
        'two must be equal'() {
            $.$mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $.$mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $.$mol_assert_unique([3], [3]);
        },
        'three must be unique'() {
            $.$mol_assert_unique([3], [3], [3]);
        },
    });
})($ || ($ = {}));
//assert.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        throw new Error(`Not true (${value})`);
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        throw new Error(`Not false (${value})`);
    }
    $.$mol_assert_not = $mol_assert_not;
    function $mol_assert_fail(handler, ErrorRight) {
        try {
            handler();
        }
        catch (error) {
            if (ErrorRight)
                if (!(error instanceof ErrorRight))
                    throw error;
            return error;
        }
        throw new Error('Not failed');
    }
    $.$mol_assert_fail = $mol_assert_fail;
    function $mol_assert_equal(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (Number.isNaN(args[i]) && Number.isNaN(args[j]))
                    continue;
                if (args[i] !== args[j])
                    throw new Error(`Not equal ( ${args[i]} ≠ ${args[j]} )`);
            }
        }
    }
    $.$mol_assert_equal = $mol_assert_equal;
    function $mol_assert_unique(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (args[i] === args[j] || (Number.isNaN(args[i]) && Number.isNaN(args[j]))) {
                    throw new Error(`Not unique ( args[${i}] = args[${j}] = ${args[i]} )`);
                }
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
})($ || ($ = {}));
//assert.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'const returns stored value'() {
            const foo = { bar: $.$mol_const(Math.random()) };
            $.$mol_assert_equal(foo.bar(), foo.bar());
            $.$mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));
//const.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_fiber_stack = [];
    function $mol_fiber_make(handler, abort) {
        if ($mol_fiber.current)
            $mol_fiber.current.step();
        let master = $mol_fiber.current && $mol_fiber.current.master;
        if (master)
            return master;
        const id = `${$mol_fiber.current || '$mol_fiber'}/${$mol_fiber.current ? $mol_fiber.current.cursor : ''}:${$.$mol_func_name(handler)}`;
        return new $mol_fiber(id, $mol_fiber.current, handler, abort);
    }
    $.$mol_fiber_make = $mol_fiber_make;
    function $mol_fiber_start(handler) {
        return $mol_fiber_make(handler).start();
    }
    $.$mol_fiber_start = $mol_fiber_start;
    function $mol_fiber_defer(handler) {
        const fiber = $mol_fiber_make(handler);
        fiber.schedule().then(fiber.start.bind(fiber));
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(handler) {
        return function $mol_fiber_func_wrapper(...args) {
            return $mol_fiber_make($.$mol_func_name_from(handler.bind(this, ...args), handler)).start();
        };
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_method(obj, name, descr) {
        const value = descr.value;
        descr.value = function $mol_fiber_method_wrapper(...args) {
            const handler = value.bind(this, ...args);
            handler[Symbol.toStringTag] = `${this}.${name}()`;
            return $mol_fiber_start(handler);
        };
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const fiber = $mol_fiber_make($.$mol_func_name_from(() => {
                return $.$mol_fail_hidden(request(...args).then(res => { fiber.done(res); }, error => { fiber.fail(error); }));
            }, request));
            return fiber.start();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    function $mol_fiber_async(request) {
        const fiber = $mol_fiber_make($.$mol_func_name_from(() => {
            const promise = new Promise((done, fail) => {
                fiber.abort = request(response => (...args) => {
                    if (!fiber.masters)
                        return;
                    new Promise(() => {
                        fiber.done(response(...args));
                    }).catch(error => {
                        fiber.fail(error);
                    });
                    if (fiber.slave)
                        fiber.slave.start();
                });
            });
            return $.$mol_fail_hidden(promise);
        }, request));
        return fiber.start();
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_warp() {
        while ($mol_fiber.queue.length)
            $mol_fiber.tick();
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    class $mol_fiber extends $.$mol_object2 {
        constructor(id, slave, handler, abort) {
            super();
            this.slave = slave;
            this.handler = handler;
            this.abort = abort;
            this.masters = [];
            this.cursor = -1;
            this.error = undefined;
            this.result = undefined;
            this.toString = $.$mol_const(id);
            if (slave) {
                slave.master = this;
                this.$ = slave.$;
            }
        }
        static tick() {
            $mol_fiber.deadline = Date.now() + $mol_fiber.quant;
            if ($mol_fiber.queue.length == 0)
                return;
            while (true) {
                const resolve = $mol_fiber.queue.shift();
                if (resolve)
                    resolve();
                else
                    break;
            }
        }
        static schedule() {
            if ($mol_fiber.scheduled)
                return;
            const schedule = this.$.requestAnimationFrame || this.$.setTimeout;
            $mol_fiber.scheduled = schedule(() => {
                $mol_fiber.scheduled = 0;
                $mol_fiber.tick();
            });
        }
        destructor() {
            if (!this.masters)
                return;
            for (let master of this.masters)
                master.destructor();
            this.masters = null;
            if (this.abort)
                this.abort();
        }
        done(result) {
            if (!this.masters)
                return;
            this.result = result;
            this.error = null;
            this.abort = null;
            this.destructor();
            this.$.$mol_log(this, result);
            return result;
        }
        fail(error) {
            if (!this.masters)
                return;
            if ('then' in error) {
                const listener = this.start.bind(this);
                error = error.then(listener, listener);
            }
            else {
                if (!$mol_fiber.catched.has(error)) {
                    if (error.stack)
                        error.stack = error.stack.replace(/.*\$mol_fiber.*[\n\r]*/g, '');
                    $mol_fiber.catched.add(error);
                }
                this.abort = null;
                this.destructor();
            }
            this.error = error;
            this.$.$mol_log(this, error);
            return error;
        }
        schedule() {
            return new Promise(done => {
                $mol_fiber.queue.push(done);
                $mol_fiber.schedule();
            });
        }
        limit() {
            const now = Date.now();
            if (now <= $mol_fiber.deadline)
                return;
            if (!$mol_fiber.current && $mol_fiber.queue.length === 0) {
                $mol_fiber.deadline = now + $mol_fiber.quant;
                return;
            }
            $.$mol_fail_hidden(this.schedule());
        }
        start() {
            if (this.masters) {
                this.$.$mol_log(this, 'start');
                const slave = $mol_fiber.current;
                try {
                    this.cursor = -1;
                    this.error = undefined;
                    this.limit();
                    $mol_fiber.current = this;
                    this.done(this.handler());
                }
                catch (error) {
                    this.fail(error);
                }
                finally {
                    $mol_fiber.current = slave;
                }
            }
            if (this.error)
                $.$mol_fail_hidden(this.error);
            return this.result;
        }
        step() {
            return ++this.cursor;
        }
        get master() {
            return this.masters[this.cursor];
        }
        set master(next) {
            this.masters[this.cursor] = next;
        }
    }
    $mol_fiber.quant = 8;
    $mol_fiber.scheduled = 0;
    $mol_fiber.deadline = Date.now() + $mol_fiber.quant;
    $mol_fiber.queue = [];
    $mol_fiber.catched = new WeakSet;
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//fiber.js.map
//# sourceMappingURL=node.test.js.map