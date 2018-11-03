require( "source-map-support" ).install(); var exports = void 0;

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

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../mol/" ) + ".js" ] }; 

;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//mol.js.map
;

$node[ "../mol/mol.js" ] = $node[ "../mol/mol.js" ] = module.exports }.call( {} , {} )

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
//# sourceMappingURL=node.js.map