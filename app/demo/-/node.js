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
    function $mol_offline(uri = 'web.js') { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//offline.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_offline();
})($ || ($ = {}));
//install.js.map
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
    class $mol_object {
        get $() {
            const owner = this.object_owner();
            return (owner && owner.$ || $);
        }
        static make(config) {
            const instance = new this;
            for (let key in config)
                instance[key] = config[key];
            return instance;
        }
        static toString() {
            return this.name;
        }
        object_owner(next) {
            return this['object_owner()'] || (this['object_owner()'] = next);
        }
        object_host(next) {
            return this['object_host()'] || (this['object_host()'] = next);
        }
        object_field(next) {
            return this['object_field()'] || (this['object_field()'] = next) || '';
        }
        object_id(next) {
            return this[Symbol.toStringTag] || (this[Symbol.toStringTag] = next) || '';
        }
        toString() {
            return this.object_id();
        }
        toJSON() {
            return this.toString();
        }
        destructor() { }
    }
    $mol_object.$ = $;
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next) {
            return next || {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//window.node.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if (target === source)
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target.constructor !== source.constructor)
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target.constructor);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    $mol_conform_handler(Array, (target, source) => {
        let equal = target.length === source.length;
        for (let i = 0; i < target.length; ++i) {
            const conformed = $mol_conform(target[i], source[i]);
            if (conformed !== target[i]) {
                try {
                    target[i] = conformed;
                }
                catch (error) {
                    equal = false;
                }
            }
            if (equal && conformed !== source[i])
                equal = false;
        }
        return equal ? source : target;
    });
    $mol_conform_handler(Object, (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (conformed !== target[key])
                    equal = false;
            }
            if (conformed !== source[key])
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
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
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_state_stack = new Map();
})($ || ($ = {}));
//stack.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_atom_status;
    (function ($mol_atom_status) {
        $mol_atom_status["obsolete"] = "obsolete";
        $mol_atom_status["checking"] = "checking";
        $mol_atom_status["pulling"] = "pulling";
        $mol_atom_status["actual"] = "actual";
    })($mol_atom_status = $.$mol_atom_status || ($.$mol_atom_status = {}));
    class $mol_atom extends $.$mol_object {
        constructor(id, handler = next => next) {
            super();
            this.masters = null;
            this.slaves = null;
            this.status = $mol_atom_status.obsolete;
            this.object_id(id);
            this.handler = handler;
        }
        destructor() {
            this.unlink();
            this.status = $mol_atom_status.actual;
            const value = this['value()'];
            if (value instanceof $.$mol_object) {
                if (value.object_owner() === this)
                    value.destructor();
            }
            this['value()'] = undefined;
        }
        unlink() {
            this.disobey_all();
            if (this.slaves)
                this.check_slaves();
        }
        get(force) {
            const slave = $mol_atom.stack[0];
            if (slave) {
                this.lead(slave);
                slave.obey(this);
            }
            this.actualize(force);
            const value = this['value()'];
            if (typeof Proxy !== 'function' && value instanceof Error) {
                throw value;
            }
            return value;
        }
        actualize(force) {
            if (this.status === $mol_atom_status.pulling) {
                throw new Error(`Cyclic atom dependency of ${this}`);
            }
            if (!force && this.status === $mol_atom_status.actual)
                return;
            const slave = $mol_atom.stack[0];
            $mol_atom.stack[0] = this;
            if (!force && this.status === $mol_atom_status.checking) {
                this.masters.forEach(master => {
                    if (this.status !== $mol_atom_status.checking)
                        return;
                    master.actualize();
                });
                if (this.status === $mol_atom_status.checking) {
                    this.status = $mol_atom_status.actual;
                }
            }
            if (force || this.status !== $mol_atom_status.actual) {
                const oldMasters = this.masters;
                this.masters = null;
                if (oldMasters)
                    oldMasters.forEach(master => {
                        master.dislead(this);
                    });
                this.status = $mol_atom_status.pulling;
                const next = this.pull(force);
                if (next === undefined) {
                    this.status = $mol_atom_status.actual;
                }
                else {
                    this.push(next);
                }
            }
            $mol_atom.stack[0] = slave;
        }
        pull(force) {
            try {
                return this.handler(this._next, force);
            }
            catch (error) {
                if (error['$mol_atom_catched'])
                    return error;
                if (error instanceof $mol_atom_wait)
                    return error;
                console.error(error.stack || error);
                if (!(error instanceof Error)) {
                    error = new Error(error.stack || error);
                }
                error['$mol_atom_catched'] = true;
                return error;
            }
        }
        set(next) {
            return this.value(next);
        }
        push(next_raw) {
            if (!(next_raw instanceof $mol_atom_wait)) {
                this._ignore = this._next;
                this._next = undefined;
            }
            this.status = next_raw === undefined ? $mol_atom_status.obsolete : $mol_atom_status.actual;
            const prev = this['value()'];
            let next = (next_raw instanceof Error || prev instanceof Error) ? next_raw : $.$mol_conform(next_raw, prev);
            if (next === prev)
                return prev;
            if (prev instanceof $.$mol_object) {
                if (prev.object_owner() === this)
                    prev.destructor();
            }
            if (next instanceof $.$mol_object) {
                next.object_owner(this);
            }
            if ((typeof Proxy === 'function') && (next instanceof Error)) {
                next = new Proxy(next, {
                    get(target) {
                        return $.$mol_fail_hidden(target.valueOf());
                    },
                    ownKeys(target) {
                        return $.$mol_fail_hidden(target.valueOf());
                    },
                });
            }
            this['value()'] = next;
            $.$mol_log(this, prev, '➔', next);
            this.obsolete_slaves();
            return next;
        }
        obsolete_slaves() {
            if (!this.slaves)
                return;
            this.slaves.forEach(slave => slave.obsolete());
        }
        check_slaves() {
            if (this.slaves) {
                this.slaves.forEach(slave => slave.check());
            }
            else {
                $mol_atom.actualize(this);
            }
        }
        check() {
            if (this.status === $mol_atom_status.actual || this.status === $mol_atom_status.pulling) {
                this.status = $mol_atom_status.checking;
                this.check_slaves();
            }
        }
        obsolete() {
            if (this.status === $mol_atom_status.obsolete)
                return;
            this.status = $mol_atom_status.obsolete;
            this.check_slaves();
            return;
        }
        lead(slave) {
            if (!this.slaves) {
                this.slaves = new Set();
                $mol_atom.unreap(this);
            }
            this.slaves.add(slave);
        }
        dislead(slave) {
            if (!this.slaves)
                return;
            if (this.slaves.size === 1) {
                this.slaves = null;
                $mol_atom.reap(this);
            }
            else {
                this.slaves.delete(slave);
            }
        }
        obey(master) {
            if (!this.masters)
                this.masters = new Set();
            this.masters.add(master);
        }
        disobey(master) {
            if (!this.masters)
                return;
            this.masters.delete(master);
        }
        disobey_all() {
            if (!this.masters)
                return;
            this.masters.forEach(master => master.dislead(this));
            this.masters = null;
        }
        cache(next) {
            if (next === undefined)
                return this['value()'];
            return this['value()'] = next;
        }
        value(next, force) {
            if (force === $mol_atom_force_cache)
                return this.push(next);
            if (next !== undefined) {
                if (force === $mol_atom_force)
                    return this.push(next);
                let next_normal = $.$mol_conform(next, this._ignore);
                if (next_normal === this._ignore)
                    return this.get(force);
                if (!(this['value()'] instanceof Error)) {
                    next_normal = $.$mol_conform(next, this['value()']);
                    if (next_normal === this['value()'])
                        return this.get(force);
                }
                this._next = next_normal;
                this._ignore = next_normal;
                force = $mol_atom_force_update;
            }
            return this.get(force);
        }
        static actualize(atom) {
            $mol_atom.updating.push(atom);
            $mol_atom.schedule();
        }
        static reap(atom) {
            $mol_atom.reaping.add(atom);
            $mol_atom.schedule();
        }
        static unreap(atom) {
            $mol_atom.reaping.delete(atom);
        }
        static schedule() {
            if (this.scheduled)
                return;
            new $.$mol_defer($.$mol_log_group('$mol_atom.sync()', () => {
                if (!this.scheduled)
                    return;
                this.scheduled = false;
                this.sync();
            }));
            this.scheduled = true;
        }
        static sync() {
            this.schedule();
            while (true) {
                const atom = this.updating.shift();
                if (!atom)
                    break;
                if (this.reaping.has(atom))
                    continue;
                if (atom.status !== $mol_atom_status.actual)
                    atom.get();
            }
            while (this.reaping.size) {
                this.reaping.forEach(atom => {
                    this.reaping.delete(atom);
                    if (!atom.slaves)
                        atom.destructor();
                });
            }
            this.scheduled = false;
        }
        then(done, fail) {
            let prev;
            let next;
            const atom = new $mol_atom(`${this}.then(${done})`, () => {
                try {
                    if (prev == undefined) {
                        const val = this.get();
                        if (val instanceof $mol_atom_wait)
                            return val;
                        if (val)
                            val.valueOf();
                        prev = val;
                    }
                    if (next == undefined) {
                        const val = done(prev);
                        if (val instanceof $mol_atom_wait)
                            return val;
                        if (val)
                            val.valueOf();
                        next = val;
                    }
                    return next;
                }
                catch (error) {
                    if (error instanceof $mol_atom_wait)
                        return error;
                    if (fail)
                        return fail(error);
                    return error;
                }
            });
            $mol_atom.actualize(atom);
            return atom;
        }
        catch(fail) {
            return this.then(next => next, fail);
        }
    }
    $mol_atom.stack = [];
    $mol_atom.updating = [];
    $mol_atom.reaping = new Set();
    $mol_atom.scheduled = false;
    $.$mol_atom = $mol_atom;
    $.$mol_state_stack.set('$mol_atom.stack', $mol_atom.stack);
    function $mol_atom_current() {
        return $mol_atom.stack[0];
    }
    $.$mol_atom_current = $mol_atom_current;
    class $mol_atom_wait extends Error {
        constructor() {
            super(...arguments);
            this.name = '$mol_atom_wait';
        }
    }
    $.$mol_atom_wait = $mol_atom_wait;
    class $mol_atom_force extends Object {
        static toString() { return this.name; }
    }
    $.$mol_atom_force = $mol_atom_force;
    class $mol_atom_force_cache extends $mol_atom_force {
    }
    $.$mol_atom_force_cache = $mol_atom_force_cache;
    class $mol_atom_force_update extends $mol_atom_force {
    }
    $.$mol_atom_force_update = $mol_atom_force_update;
})($ || ($ = {}));
//atom.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object')
            return JSON.stringify(value);
        if (value instanceof Array)
            return JSON.stringify(value);
        if (value.constructor === Object)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem(obj, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        descr.value = function $mol_mem_value(next, force) {
            const host = this;
            let atom = store.get(host);
            if (!atom) {
                const id = `${host}.${name}()`;
                atom = new $.$mol_atom(id, function () {
                    const v = value.apply(host, arguments);
                    if (v instanceof $.$mol_object) {
                        if (!v.object_host()) {
                            v.object_host(host);
                            v.object_field(name);
                            v.object_id(id);
                        }
                    }
                    return v;
                });
                atom.object_owner(host);
                const destructor = atom.destructor;
                atom.destructor = () => {
                    store.delete(host);
                    destructor.call(atom);
                };
                store.set(host, atom);
            }
            return atom.value(next, force);
        };
        Object.defineProperty(obj, name + "()", { get: function () { return store.get(this); } });
        descr.value['value'] = value;
    }
    $.$mol_mem = $mol_mem;
    function $mol_mem_key(obj, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        descr.value = function $mol_mem_key_value(key, next, force) {
            const host = this;
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            let atom = dict.get(key);
            if (!atom) {
                const id = `${host}.${name}(${JSON.stringify(key)})`;
                atom = new $.$mol_atom(id, function (...args) {
                    const v = value.apply(host, [key, ...args]);
                    if (v instanceof $.$mol_object) {
                        if (!v.object_host()) {
                            v.object_host(host);
                            v.object_field(name);
                            v.object_id(id);
                        }
                    }
                    return v;
                });
                const destructor = atom.destructor;
                atom.destructor = () => {
                    dict.delete(key);
                    destructor.call(atom);
                };
                dict.set(key, atom);
            }
            return atom.value(next, force);
        };
        Object.defineProperty(obj, name + "()", { get: function () { return store.get(this); } });
        void (descr.value['value'] = value);
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $node = new Proxy({}, { get(target, field, wrapper) {
        return require(field);
    } });
//node.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = $node['jsdom'].jsdom().defaultView;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
    function $mol_dom_render_children(el, childNodes) {
        const node_list = [];
        const node_set = new Set();
        for (let i = 0; i < childNodes.length; ++i) {
            let node = childNodes[i];
            if (node == null)
                continue;
            if (Object(node) === node) {
                if (node['dom_tree'])
                    node = node['dom_tree']();
                node_list.push(node);
                node_set.add(node);
            }
            else {
                node_list.push(String(node));
            }
        }
        let nextNode = el.firstChild;
        for (let view_ of node_list) {
            const view = view_.valueOf();
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false)
                el.removeAttribute(name);
            else
                el.setAttribute(name, String(val));
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const cur = style[name];
            if (typeof val === 'number') {
                if (parseFloat(cur) == val)
                    continue;
                style[name] = `${val}px`;
            }
            if (cur !== val)
                style[name] = val;
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//render.js.map
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    let $$;
    (function ($$_1) {
        let $$;
    })($$ = $.$$ || ($.$$ = {}));
    let $mol;
    (function ($mol_1) {
        let $mol;
    })($mol = $.$mol || ($.$mol = {}));
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_tree(nodes.item(i));
                document.title = view.title();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : next ? [node] : []) || [];
            return value.indexOf(node) !== -1;
        }
        context(next) {
            return next || $;
        }
        get $() {
            return this.context();
        }
        set $(next) {
            this.context(next);
        }
        context_sub() {
            return this.context();
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return this.constructor.toString().replace('$', '');
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return null;
        }
        sub_visible() {
            const sub = this.sub();
            if (!sub)
                return sub;
            const context = this.context_sub();
            sub.forEach(child => {
                if (child instanceof $mol_view) {
                    child.$ = context;
                }
            });
            return sub;
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        minimal_height() {
            return this.content_height();
        }
        content_height() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_height());
                }
            });
            return min;
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || this.$.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            node.setAttribute('id', this.dom_id());
            $.$mol_dom_render_attributes(node, this.attr_static());
            $.$mol_dom_render_events(node, this.event());
            $.$mol_dom_render_events_async(node, this.event_async());
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                for (let plugin of this.plugins()) {
                    plugin.dom_node(node);
                    plugin.render();
                }
                this.render();
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name });
                if (error instanceof $.$mol_atom_wait)
                    return node;
                try {
                    void (node.innerText = error.message);
                }
                catch (e) { }
                if (error['$mol_atom_catched'])
                    return node;
                console.error(error);
                error['$mol_atom_catched'] = true;
            }
            return node;
        }
        render() {
            const node = this.dom_node();
            const sub = this.sub_visible();
            if (sub)
                $.$mol_dom_render_children(node, sub);
            $.$mol_dom_render_attributes(node, this.attr());
            $.$mol_dom_render_styles(node, this.style());
            const fields = this.field();
            $.$mol_dom_render_fields(node, fields);
            new $.$mol_defer(() => $.$mol_dom_render_fields(node, fields));
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = this.object_host();
            if (owner instanceof $mol_view) {
                const suffix = this.object_field();
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push($.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = $.$mol_func_name(Class);
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                'mol_view_error': false,
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "context", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "content_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next, force) {
            if (next === undefined)
                return [];
            const node = next[0];
            const atom = $.$mol_atom_current();
            new $.$mol_defer(() => {
                if (node)
                    return node.focus();
                const el = atom.cache()[0];
                if (el)
                    el.blur();
            });
            return undefined;
        }
        static position(next, force) {
            if (next !== undefined) {
                var start = next.start;
                var end = next.end;
                if (!(start <= end))
                    throw new Error(`Wrong offsets (${start},${end})`);
                var root = $.$mol_dom_context.document.getElementById(next.id);
                root.focus();
                var range = new Range;
                var cur = root.firstChild;
                while (cur !== root) {
                    while (cur.firstChild)
                        cur = cur.firstChild;
                    if (cur.nodeValue) {
                        var length = cur.nodeValue.length;
                        if (length >= start)
                            break;
                        start -= length;
                    }
                    while (!cur.nextSibling) {
                        cur = cur.parentNode;
                        if (cur === root) {
                            start = root.childNodes.length;
                            break;
                        }
                    }
                }
                range.setStart(cur, start);
                var cur = root.firstChild;
                while (cur !== root) {
                    while (cur.firstChild)
                        cur = cur.firstChild;
                    if (cur.nodeValue) {
                        var length = cur.nodeValue.length;
                        if (length >= end)
                            break;
                        end -= length;
                    }
                    while (!cur.nextSibling) {
                        cur = cur.parentNode;
                        if (cur === root) {
                            end = root.childNodes.length;
                            break;
                        }
                    }
                }
                range.setEnd(cur, end);
                var sel = $.$mol_dom_context.document.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                return next;
            }
            else {
                var sel = $.$mol_dom_context.document.getSelection();
                if (sel.rangeCount === 0)
                    return null;
                var range = sel.getRangeAt(0);
                var el = range.commonAncestorContainer;
                while (el && !el.id)
                    el = el.parentElement;
                if (!el)
                    return { id: null, start: 0, end: 0 };
                var meter = new Range;
                meter.selectNodeContents(el);
                meter.setEnd(range.startContainer, range.startOffset);
                var startOffset = meter.toString().length;
                meter.setEnd(range.endContainer, range.endOffset);
                var endOffset = meter.toString().length;
                return { id: el.id, start: startOffset, end: endOffset };
            }
        }
        static onFocus(event) {
            const parents = [];
            let element = event.target;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            this.focused(parents, $.$mol_atom_force_cache);
        }
        static onBlur(event) {
            const focused = this.focused();
            setTimeout($.$mol_log_group('$mol_view_selection blur', () => {
                if (focused !== this.focused())
                    return;
                this.focused([], $.$mol_atom_force_cache);
            }));
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "position", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        sub() {
            return this.rows();
        }
        rows() {
            return [];
        }
        Empty() {
            return null;
        }
    }
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            row_offsets() {
                var sub = this.sub();
                if (!sub)
                    return null;
                let heightLimit = this.$.$mol_view_visible_height();
                var offset = 0;
                var next = [];
                for (let child of sub) {
                    next.push(offset);
                    if (child instanceof $.$mol_view) {
                        offset += child.minimal_height();
                    }
                    if (offset > heightLimit)
                        break;
                }
                return next;
            }
            row_context(index) {
                return this.$.$mol_ambient({
                    $mol_view_visible_height: () => this.$.$mol_view_visible_height() - this.row_offsets()[index],
                });
            }
            sub_visible() {
                var sub = this.sub();
                if (!sub)
                    return sub;
                var limit = this.row_offsets().length;
                var next = [];
                for (let i = 0; i < limit; ++i) {
                    const child = sub[i];
                    if (child == null)
                        continue;
                    if (child instanceof $.$mol_view) {
                        child.$ = this.row_context(i);
                    }
                    next.push(child);
                }
                return next;
            }
            minimal_height() {
                var height = 0;
                var sub = this.sub();
                if (sub)
                    sub.forEach(child => {
                        if (child instanceof $.$mol_view) {
                            height += child.minimal_height();
                        }
                    });
                return height;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "row_offsets", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_list.prototype, "row_context", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_card extends $.$mol_list {
        attr() {
            return (Object.assign({}, super.attr(), { "mol_card_status_type": this.status() }));
        }
        status() {
            return "";
        }
        rows() {
            return [].concat(this.Content(), this.Status());
        }
        Content() {
            return ((obj) => {
                obj.sub = () => this.content();
                return obj;
            })(new this.$.$mol_view);
        }
        content() {
            return [];
        }
        Status() {
            return ((obj) => {
                obj.minimal_height = () => 30;
                obj.sub = () => [].concat(this.status_text());
                return obj;
            })(new this.$.$mol_view);
        }
        status_text() {
            return this.status();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_card.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_card.prototype, "Status", null);
    $.$mol_card = $mol_card;
})($ || ($ = {}));
//card.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_card extends $.$mol_card {
            rows() {
                return [
                    this.Content(),
                    ...this.status_text() ? [this.Status()] : [],
                ];
            }
        }
        $$.$mol_card = $mol_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//card.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_tiler extends $.$mol_view {
        sub() {
            return [].concat(this.items());
        }
        items() {
            return [];
        }
    }
    $.$mol_tiler = $mol_tiler;
})($ || ($ = {}));
//tiler.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_tiler extends $.$mol_tiler {
            sub() {
                return this.groupChilds([]);
            }
            groupItems(path) {
                var items = (path.length === 0)
                    ? this.items()
                    : this.groupItems(path.slice(0, path.length - 1));
                if (items.length < 2)
                    return items;
                if (path.length != 0) {
                    var cut = Math.floor(items.length / 2);
                    items = path[path.length - 1]
                        ? items.slice(cut)
                        : items.slice(0, cut);
                }
                return items;
            }
            groupChilds(path) {
                var items = this.groupItems(path);
                if (items.length <= 2)
                    return items.map((_, index) => this.item(path.concat(index)));
                return [
                    this.child(path.concat(0)),
                    this.child(path.concat(1)),
                ];
            }
            child(path) {
                return (this.groupItems(path).length > 1)
                    ? this.group(path)
                    : this.item(path);
            }
            group(path) {
                return $.$mol_view.make({
                    sub: () => this.groupChilds(path)
                });
            }
            item(path) {
                return $.$mol_view.make({
                    sub: () => this.groupItems(path)
                });
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_tiler.prototype, "sub", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_tiler.prototype, "groupItems", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_tiler.prototype, "groupChilds", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_tiler.prototype, "child", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_tiler.prototype, "group", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_tiler.prototype, "item", null);
        $$.$mol_tiler = $mol_tiler;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//tiler.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals;
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] || null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//arg.node.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        minimal_height() {
            return 40;
        }
        dom_name() {
            return "a";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "href": this.uri(), "title": this.hint(), "target": this.target(), "download": this.file_name(), "mol_link_current": this.current() }));
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        sub() {
            return [].concat(this.title());
        }
        arg() {
            return ({});
        }
        event() {
            return (Object.assign({}, super.event(), { "click": (event) => this.click(event) }));
        }
        click(event, force) {
            return this.event_click(event);
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                return new $.$mol_state_arg(this.state_key()).link(this.arg());
            }
            current() {
                return this.uri() === $.$mol_state_arg.href();
            }
            event_click(event) {
                setTimeout($.$mol_log_group(`${this}.event_click()`, () => this.focused(false)), 50);
            }
            file_name() {
                return null;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
//code.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event() {
            return (Object.assign({}, super.event(), { "click": (event) => this.event_activate(event), "keypress": (event) => this.event_key_press(event) }));
        }
        event_activate(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "disabled": this.disabled(), "role": "button", "tabindex": this.tab_index(), "title": this.hint() }));
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        sub() {
            return [].concat(this.title());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.event_click(next);
                this.click(next);
            }
            event_key_press(event) {
                if (event.keyCode === 13) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : null;
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        attr() {
            return (Object.assign({}, super.attr(), { "mol_theme": "$mol_theme_accent" }));
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//button_types.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "viewBox": this.view_box(), "preserveAspectRatio": this.aspect() }));
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "d": this.geometry() }));
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        sub() {
            return [].concat(this.Path());
        }
        Path() {
            return ((obj) => {
                obj.geometry = () => this.path();
                return obj;
            })(new this.$.$mol_svg_path);
        }
        path() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_attach extends $.$mol_icon {
        path() {
            return "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z";
        }
    }
    $.$mol_icon_attach = $mol_icon_attach;
})($ || ($ = {}));
//attach.view.tree.js.map
;
"use strict";
var cordova;
var $;
(function ($) {
    $.$mol_cordova = cordova || {
        plugins: {
            barcodeScanner: null
        }
    };
    function $mol_cordova_camera() {
        return navigator['camera'];
    }
    $.$mol_cordova_camera = $mol_cordova_camera;
})($ || ($ = {}));
//cordova.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_attach extends $.$mol_card {
        Content() {
            return ((obj) => {
                obj.items = () => this.content();
                return obj;
            })(new this.$.$mol_tiler);
        }
        content() {
            return [].concat(this.items(), this.Add());
        }
        items(val, force) {
            return (val !== void 0) ? val : [];
        }
        Add() {
            return ((obj) => {
                obj.file_new = (val) => this.attach_new(val);
                return obj;
            })(new this.$.$mol_attach_add);
        }
        attach_new(val, force) {
            return (val !== void 0) ? val : "";
        }
        Item(id) {
            return ((obj) => {
                obj.title = () => this.attach_title();
                return obj;
            })(new this.$.$mol_attach_item);
        }
        attach_title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_attach.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach.prototype, "items", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach.prototype, "Add", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach.prototype, "attach_new", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_attach.prototype, "Item", null);
    $.$mol_attach = $mol_attach;
})($ || ($ = {}));
(function ($) {
    class $mol_attach_item extends $.$mol_link {
        url_thumb(val, force) {
            return (val !== void 0) ? val : "";
        }
        uri(val, force) {
            return this.url_load(val);
        }
        url_load(val, force) {
            return (val !== void 0) ? val : "";
        }
        style() {
            return (Object.assign({}, super.style(), { "backgroundImage": this.style_bg() }));
        }
        style_bg() {
            return "";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "download": this.title() }));
        }
        title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_attach_item.prototype, "url_thumb", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_item.prototype, "uri", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_item.prototype, "url_load", null);
    $.$mol_attach_item = $mol_attach_item;
})($ || ($ = {}));
(function ($) {
    class $mol_attach_add extends $.$mol_button_minor {
        minimal_height() {
            return 60;
        }
        file_new(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return [].concat(this.Icon(), this.Input());
        }
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_attach);
        }
        Input() {
            return ((obj) => {
                obj.event_capture = (val) => this.event_capture(val);
                obj.event_picked = (val) => this.event_picked(val);
                return obj;
            })(new this.$.$mol_attach_add_input);
        }
        event_capture(val, force) {
            return (val !== void 0) ? val : null;
        }
        event_picked(val, force) {
            return (val !== void 0) ? val : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_attach_add.prototype, "file_new", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_add.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_add.prototype, "Input", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_add.prototype, "event_capture", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_add.prototype, "event_picked", null);
    $.$mol_attach_add = $mol_attach_add;
})($ || ($ = {}));
(function ($) {
    class $mol_attach_add_input extends $.$mol_view {
        dom_name() {
            return "input";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "type": this.type(), "accept": this.accept(), "multiple": this.multiple() }));
        }
        type() {
            return "file";
        }
        accept() {
            return "image/*;capture=camera";
        }
        multiple() {
            return true;
        }
        event_click(val, force) {
            return this.event_capture(val);
        }
        event_capture(val, force) {
            return (val !== void 0) ? val : null;
        }
        event() {
            return (Object.assign({}, super.event(), { "change": (val) => this.event_picked(val) }));
        }
        event_picked(val, force) {
            return (val !== void 0) ? val : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_attach_add_input.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_add_input.prototype, "event_capture", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_add_input.prototype, "event_picked", null);
    $.$mol_attach_add_input = $mol_attach_add_input;
})($ || ($ = {}));
//attach.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_attach extends $.$mol_attach {
            attach_new(next) {
                const items = this.items();
                const item = this.Item(items.length);
                item.url_thumb(next);
                item.url_load(next);
                this.items(items.concat(item));
                return void 0;
            }
        }
        $$.$mol_attach = $mol_attach;
        class $mol_attach_item extends $.$mol_attach_item {
            style_bg() {
                return `url("${this.url_thumb()}")`;
            }
        }
        $$.$mol_attach_item = $mol_attach_item;
        class $mol_attach_add extends $.$mol_attach_add {
            file_new(next) {
                return next;
            }
            event_capture(next) {
                if (!$.$mol_cordova_camera())
                    return;
                next.preventDefault();
                $.$mol_cordova_camera().getPicture((url) => {
                    this.file_new(url);
                }, (error) => {
                    this.file_new(error);
                }, {
                    quality: 50
                });
            }
            event_picked(next) {
                var files = [].slice.call(next.target.files);
                for (var file of files) {
                    this.file_new(URL.createObjectURL(file));
                }
            }
        }
        $$.$mol_attach_add = $mol_attach_add;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//attach.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_demo_small extends $.$mol_view {
    }
    $.$mol_demo_small = $mol_demo_small;
})($ || ($ = {}));
//small.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            return $mol_file.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return $mol_file.absolute($node.path.resolve(path).replace(/\\/g, '/'));
        }
        path() {
            return '.';
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: false,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
            });
            watcher.on('all', (type, path) => {
                const file = $mol_file.absolute(path.replace(/\\/g, '/'));
                file.stat(undefined, $.$mol_atom_force_cache);
                if (type === 'change')
                    return;
                file.parent().stat(undefined, $.$mol_atom_force_cache);
            });
            watcher.on('error', (error) => {
                this.stat(error, $.$mol_atom_force_cache);
            });
            return watcher;
        }
        stat(next, force) {
            var path = this.path();
            try {
                var stat = next || $node.fs.statSync(path);
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    return null;
                return error;
            }
            this.parent().watcher();
            return stat;
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        exists(next) {
            var exists = !!this.stat();
            if (next === void 0) {
                return exists;
            }
            else {
                if (next == exists)
                    return exists;
                if (next) {
                    this.parent().exists(true);
                    $node.fs.mkdirSync(this.path());
                }
                else {
                    $node.fs.unlinkSync(this.path());
                }
                this.stat(undefined, $.$mol_atom_force_cache);
                return next;
            }
        }
        parent() {
            return this.resolve('..');
        }
        type() {
            var stat = this.stat();
            if (stat) {
                if (stat.isFile())
                    return 'file';
                if (stat.isDirectory())
                    return 'dir';
                if (stat.isBlockDevice())
                    return 'blocks';
                if (stat.isCharacterDevice())
                    return 'chars';
                if (stat.isSymbolicLink())
                    return 'link';
                if (stat.isFIFO())
                    return 'fifo';
                if (stat.isSocket())
                    return 'socket';
            }
            else {
                return null;
            }
            throw new Error(`Unknown file type ${this.path()}`);
        }
        name() {
            return $node.path.basename(this.path());
        }
        ext() {
            var match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        content(next, force) {
            if (next === void 0) {
                return this.stat() && $node.fs.readFileSync(this.path());
            }
            this.parent().exists(true);
            $node.fs.writeFileSync(this.path(), next);
            return next;
        }
        reader() {
            return $node.fs.createReadStream(this.path());
        }
        writer() {
            return $node.fs.createWriteStream(this.path());
        }
        sub() {
            this.stat();
            switch (this.type()) {
                case 'dir':
                    return $node.fs.readdirSync(this.path())
                        .filter(name => !/^\.+$/.test(name))
                        .map(name => this.resolve(name));
            }
            return [];
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            $node.fs.appendFileSync(this.path(), next);
        }
        find(include, exclude) {
            var found = [];
            this.sub().forEach(child => {
                if (exclude && child.path().match(exclude))
                    return;
                if (!include || child.path().match(include))
                    found.push(child);
                if (child.type() === 'dir')
                    found = found.concat(child.find(include, exclude));
            });
            return found;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "version", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "content", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.node.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).content());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if (error instanceof $.$mol_atom_wait)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                console.warn(`Not translated to "${lang}": ${key}`);
            }
            return `<${key}>`;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_attach_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_attach_demo_title");
        }
        sub() {
            return [].concat(this.Filled());
        }
        Filled() {
            return ((obj) => {
                obj.items = (val) => this.filled_items(val);
                return obj;
            })(new this.$.$mol_attach);
        }
        filled_items(val, force) {
            return (val !== void 0) ? val : [].concat(this.Item1(), this.Item2(), this.Item3());
        }
        Item1() {
            return ((obj) => {
                obj.url_thumb = () => "mol/logo/logo.svg";
                obj.url_load = () => "logo/logo.svg";
                return obj;
            })(new this.$.$mol_attach_item);
        }
        Item2() {
            return ((obj) => {
                obj.url_thumb = () => "mol/logo/logo.svg";
                obj.url_load = () => "logo/logo.svg";
                return obj;
            })(new this.$.$mol_attach_item);
        }
        Item3() {
            return ((obj) => {
                obj.url_thumb = () => "mol/logo/logo.svg";
                obj.url_load = () => "logo/logo.svg";
                return obj;
            })(new this.$.$mol_attach_item);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_attach_demo.prototype, "Filled", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_demo.prototype, "filled_items", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_demo.prototype, "Item1", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_demo.prototype, "Item2", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_demo.prototype, "Item3", null);
    $.$mol_attach_demo = $mol_attach_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $.$mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//bar.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_string extends $.$mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        debounce() {
            return 200;
        }
        minimal_height() {
            return 40;
        }
        field() {
            return (Object.assign({}, super.field(), { "disabled": this.disabled(), "value": this.value_changed(), "placeholder": this.hint(), "type": this.type() }));
        }
        disabled() {
            return false;
        }
        value_changed(val, force) {
            return this.value(val);
        }
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        hint() {
            return "";
        }
        type(val, force) {
            return (val !== void 0) ? val : "text";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "maxlength": this.length_max() }));
        }
        length_max() {
            return Infinity;
        }
        event() {
            return (Object.assign({}, super.event(), { "input": (event) => this.event_change(event), "keypress": (event) => this.event_key_press(event) }));
        }
        event_change(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value_changed", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//string.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            constructor() {
                super(...arguments);
                this._timer = null;
            }
            event_change(next) {
                if (!next)
                    return;
                clearTimeout(this._timer);
                this._timer = setTimeout($.$mol_log_group(`${this}.event_change()`, () => {
                    this.value(next.target.value);
                }), this.debounce());
            }
            event_key_press(next) {
                if (!next)
                    return;
                if (next.keyCode === 13) {
                    this.value(next.target.value);
                }
            }
            disabled() {
                return !this.enabled();
            }
        }
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//string.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return (Object.assign({}, super.attr(), { "mol_check_checked": this.checked(), "aria-checked": this.checked(), "role": "checkbox" }));
        }
        checked(val, force) {
            return (val !== void 0) ? val : false;
        }
        sub() {
            return [].concat(this.Icon(), this.label());
        }
        Icon() {
            return null;
        }
        label() {
            return [].concat(this.Title());
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [].concat(this.title());
                return obj;
            })(new this.$.$mol_view);
        }
        title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            event_click(next) {
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $.$mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//tick.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_box extends $.$mol_check {
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_tick);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//box.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_bar_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_bar_demo_title");
        }
        sub() {
            return [].concat(this.Two(), this.Three());
        }
        Two() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Two_mail(), this.Two_submit());
                return obj;
            })(new this.$.$mol_bar);
        }
        Two_mail() {
            return ((obj) => {
                obj.hint = () => this.mail_hint();
                obj.value = (val) => this.mail(val);
                return obj;
            })(new this.$.$mol_string);
        }
        mail_hint() {
            return "E-mail";
        }
        mail(val, force) {
            return (val !== void 0) ? val : "";
        }
        Two_submit() {
            return ((obj) => {
                obj.title = () => this.submit_title();
                return obj;
            })(new this.$.$mol_button_minor);
        }
        submit_title() {
            return "Submit";
        }
        Three() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Three_mail(), this.Three_confirm(), this.Three_submit());
                return obj;
            })(new this.$.$mol_bar);
        }
        Three_mail() {
            return ((obj) => {
                obj.hint = () => this.mail_hint();
                obj.value = (val) => this.mail(val);
                return obj;
            })(new this.$.$mol_string);
        }
        Three_confirm() {
            return ((obj) => {
                obj.title = () => this.confirm_title();
                obj.checked = (val) => this.confirmed(val);
                return obj;
            })(new this.$.$mol_check_box);
        }
        confirm_title() {
            return "Confirm";
        }
        confirmed(val, force) {
            return (val !== void 0) ? val : false;
        }
        Three_submit() {
            return ((obj) => {
                obj.title = () => this.submit_title();
                return obj;
            })(new this.$.$mol_button_minor);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Two", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Two_mail", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "mail", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Two_submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Three", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Three_mail", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Three_confirm", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "confirmed", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Three_submit", null);
    $.$mol_bar_demo = $mol_bar_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_portion_indicator extends $.$mol_view {
        style() {
            return (Object.assign({}, super.style(), { "width": this.width_style() }));
        }
        width_style() {
            return "0";
        }
    }
    $.$mol_portion_indicator = $mol_portion_indicator;
})($ || ($ = {}));
(function ($) {
    class $mol_portion extends $.$mol_view {
        portion() {
            return 0;
        }
        sub() {
            return [].concat(this.indicator());
        }
        indicator() {
            return ((obj) => {
                obj.width_style = () => this.indicator_width_style();
                return obj;
            })(new this.$.$mol_portion_indicator);
        }
        indicator_width_style() {
            return "0";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_portion.prototype, "indicator", null);
    $.$mol_portion = $mol_portion;
})($ || ($ = {}));
//portion.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_portion extends $.$mol_portion {
            indicator_width_style() {
                return this.portion() * 100 + '%';
            }
        }
        $$.$mol_portion = $mol_portion;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//portion.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        moving_hor(val, force) {
            return (val !== void 0) ? val : false;
        }
        moving_vert(val, force) {
            return (val !== void 0) ? val : false;
        }
        field() {
            return (Object.assign({}, super.field(), { "scrollTop": this.scroll_top(), "scrollLeft": this.scroll_left(), "scrollBottom": this.scroll_bottom(), "scrollRight": this.scroll_right() }));
        }
        scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        event_async() {
            return (Object.assign({}, super.event_async(), { "scroll": (event) => this.event_scroll(event) }));
        }
        event_scroll(event, force) {
            return (event !== void 0) ? event : null;
        }
        Strut() {
            return ((obj) => {
                obj.style = () => ({
                    "transform": this.strut_transform(),
                });
                return obj;
            })(new this.$.$mol_view);
        }
        strut_transform() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "moving_hor", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "moving_vert", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "Strut", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $mol_scroll_top() {
            return 0;
        }
        $$.$mol_scroll_top = $mol_scroll_top;
        function $mol_scroll_left() {
            return 0;
        }
        $$.$mol_scroll_left = $mol_scroll_left;
        function $mol_scroll_moving() {
            return false;
        }
        $$.$mol_scroll_moving = $mol_scroll_moving;
        function $mol_scroll_moving_vert() {
            return false;
        }
        $$.$mol_scroll_moving_vert = $mol_scroll_moving_vert;
        function $mol_scroll_moving_hor() {
            return false;
        }
        $$.$mol_scroll_moving_hor = $mol_scroll_moving_hor;
        class $mol_scroll extends $.$mol_scroll {
            constructor() {
                super(...arguments);
                this._moving_task_timer = null;
            }
            scroll_bottom(next) {
                return next || 0;
            }
            scroll_right(next) {
                return next || 0;
            }
            event_scroll(next) {
                this.moving_vert(this.scroll_top() !== this.dom_node().scrollTop);
                this.moving_hor(this.scroll_left() !== this.dom_node().scrollLeft);
                this.moving_task_stop();
                new $.$mol_defer($.$mol_log_group(`${this}.event_scroll()`, () => {
                    const el = this.dom_node();
                    const top = Math.max(0, el.scrollTop);
                    const left = Math.max(0, el.scrollLeft);
                    this.scroll_top(top);
                    this.scroll_left(left);
                    this.scroll_bottom(Math.max(0, el.scrollHeight - top - el.offsetHeight));
                    this.scroll_right(Math.max(0, el.scrollWidth - left - el.offsetWidth));
                }));
            }
            event_repos(next) {
                new $.$mol_defer(() => {
                    const el = this.dom_node();
                    this.scroll_bottom(Math.max(0, el.scrollHeight - this.scroll_top() - el.offsetHeight));
                    this.scroll_right(Math.max(0, el.scrollWidth - this.scroll_left() - el.offsetWidth));
                });
            }
            moving_task_stop() {
                clearTimeout(this._moving_task_timer);
                this._moving_task_timer = setTimeout($.$mol_log_group(`${this}.moving_task_stop()`, () => {
                    this.moving_vert(false);
                    this.moving_hor(false);
                }), 50);
            }
            moving() {
                return this.moving_hor() || this.moving_vert();
            }
            context_sub() {
                return this.$.$mol_ambient({
                    $mol_view_visible_height: () => {
                        const sizeWin = $.$mol_window.size();
                        const limit = this.$.$mol_view_visible_height();
                        return this.scroll_top() + Math.min(sizeWin.height, limit);
                    },
                    $mol_view_visible_width: () => {
                        const sizeWin = $.$mol_window.size();
                        const limit = this.$.$mol_view_visible_width();
                        return this.scroll_left() + Math.min(sizeWin.width, limit);
                    },
                    $mol_scroll_top: () => this.scroll_top(),
                    $mol_scroll_left: () => this.scroll_left(),
                    $mol_scroll_moving: () => this.moving(),
                    $mol_scroll_moving_vert: () => this.moving_vert(),
                    $mol_scroll_moving_hor: () => this.moving_hor(),
                });
            }
            strut_transform() {
                try {
                    return `translate3d( 0 , ${this.content_height()}px , 0 )`;
                }
                catch (error) {
                    return '';
                }
            }
            sub_visible() {
                const sub = [
                    this.Strut(),
                    ...(this.sub() || []),
                ];
                const context = this.context_sub();
                sub.forEach(child => {
                    if (child instanceof $.$mol_view) {
                        child.$ = context;
                    }
                });
                return sub;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_right", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "context_sub", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        minimal_height() {
            return 32;
        }
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron);
        }
        level() {
            return 0;
        }
        style() {
            return (Object.assign({}, super.style(), { "paddingLeft": this.level_style() }));
        }
        level_style() {
            return "0px";
        }
        checked(val, force) {
            return this.expanded(val);
        }
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        enabled() {
            return this.expandable();
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1.25 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_view {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        parts() {
            return [];
        }
        Low(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.string(id));
                return obj;
            })(new this.$.$mol_view);
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (!needle)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? strings[index] : this.Low(index));
                }
                return chunks;
            }
            strings() {
                return this.haystack().split(new RegExp(`(${this.needle()})`, 'gi'));
            }
            string(index) {
                return this.strings()[index];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_grid extends $.$mol_scroll {
        row_ids() {
            return [];
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return ({});
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        sub() {
            return [].concat(this.Table());
        }
        Table() {
            return ((obj) => {
                obj.offset = () => this.gap_top();
                obj.sub = () => [].concat(this.rows_visible());
                return obj;
            })(new this.$.$mol_grid_table);
        }
        gap_top() {
            return 0;
        }
        rows_visible() {
            return [];
        }
        rows() {
            return [];
        }
        Head() {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.head_cells();
                return obj;
            })(new this.$.$mol_grid_row);
        }
        row_height() {
            return 40;
        }
        head_cells() {
            return [];
        }
        Row(id) {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.cells(id);
                return obj;
            })(new this.$.$mol_grid_row);
        }
        cells(id) {
            return [];
        }
        Cell(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view);
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.cell_content_text(id));
                return obj;
            })(new this.$.$mol_grid_cell);
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content(id) {
            return [];
        }
        Cell_number(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.cell_content_number(id));
                return obj;
            })(new this.$.$mol_grid_number);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        Col_head(id) {
            return ((obj) => {
                obj.dom_name = () => "th";
                obj.sub = () => [].concat(this.col_head_content(id));
                return obj;
            })(new this.$.$mol_float);
        }
        col_head_content(id) {
            return [];
        }
        Cell_branch(id) {
            return ((obj) => {
                obj.level = () => this.cell_level(id);
                obj.label = () => this.cell_content(id);
                obj.expanded = (val) => this.cell_expanded(id, val);
                return obj;
            })(new this.$.$mol_check_expand);
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val, force) {
            return (val !== void 0) ? val : false;
        }
        Cell_content(id) {
            return [].concat(this.Cell_dimmer(id));
        }
        Cell_dimmer(id) {
            return ((obj) => {
                obj.needle = () => this.needle();
                obj.haystack = () => this.cell_value(id);
                return obj;
            })(new this.$.$mol_dimmer);
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_table extends $.$mol_view {
        dom_name() {
            return "table";
        }
        style() {
            return (Object.assign({}, super.style(), { "top": this.offset() }));
        }
        offset() {
            return 0;
        }
    }
    $.$mol_grid_table = $mol_grid_table;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_gap extends $.$mol_view {
        style() {
            return (Object.assign({}, super.style(), { "top": this.offset() }));
        }
        offset() {
            return 0;
        }
    }
    $.$mol_grid_gap = $mol_grid_gap;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        style() {
            return (Object.assign({}, super.style(), { "height": this.height() }));
        }
        height() {
            return 40;
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_cell extends $.$mol_view {
        dom_name() {
            return "td";
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_number extends $.$mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            rows_visible() {
                const rows = this.rows();
                if (!rows)
                    return null;
                const view_window = this.view_window();
                return [].concat(this.Head(), rows.slice(view_window.top, view_window.bottom).valueOf());
            }
            rows_visible_max() {
                return Math.ceil(this.$.$mol_view_visible_height() / this.row_height());
            }
            view_window() {
                const rows = this.rows();
                if (!rows)
                    return null;
                const count = rows.length;
                const context = this.context_sub();
                const scrollTop = context.$mol_scroll_top();
                const top = Math.max(0, Math.floor(scrollTop / this.row_height()) - 1);
                const bottom = Math.min(count, top + this.rows_visible_max());
                return { top, bottom, count };
            }
            gap_top() {
                const view_window = this.view_window();
                return view_window.top * this.row_height();
            }
            height() {
                const view_window = this.view_window();
                return view_window.count * this.row_height();
            }
            content_height() {
                return this.rows().length * this.row_height();
            }
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return row_id.length < 3;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows_visible_max", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
        class $mol_grid_table extends $.$mol_grid_table {
            context_sub() {
                return this.$.$mol_ambient({
                    $mol_scroll_top: () => this.$.$mol_scroll_top() - this.offset(),
                });
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid_table.prototype, "context_sub", null);
        $$.$mol_grid_table = $mol_grid_table;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_sort_asc extends $.$mol_icon {
        path() {
            return "M10,11V13H18V11H10M10,5V7H14V5H10M10,17V19H22V17H10M6,7H8.5L5,3.5L1.5,7H4V20H6V7Z";
        }
    }
    $.$mol_icon_sort_asc = $mol_icon_sort_asc;
})($ || ($ = {}));
//asc.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_bench extends $.$mol_grid {
        records() {
            return this.result();
        }
        result() {
            return ({});
        }
        col_sort(val, force) {
            return (val !== void 0) ? val : "";
        }
        Col_head(id) {
            return ((obj) => {
                obj.event_click = (val) => this.event_sort_toggle(id, val);
                obj.sub = () => this.col_head_content(id);
                return obj;
            })(new this.$.$mol_bench_head);
        }
        event_sort_toggle(id, val, force) {
            return (val !== void 0) ? val : null;
        }
        col_head_content(id) {
            return [].concat(this.col_head_label(id), this.Col_head_sort(id));
        }
        col_head_label(id) {
            return [];
        }
        Col_head_sort(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_sort_asc);
        }
        cell_content_number(id) {
            return [].concat(this.result_value(id), this.Result_portion(id));
        }
        result_value(id) {
            return "";
        }
        Result_portion(id) {
            return ((obj) => {
                obj.portion = () => this.result_portion(id);
                return obj;
            })(new this.$.$mol_portion);
        }
        result_portion(id) {
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_bench.prototype, "col_sort", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_bench.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_bench.prototype, "event_sort_toggle", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_bench.prototype, "Col_head_sort", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_bench.prototype, "Result_portion", null);
    $.$mol_bench = $mol_bench;
})($ || ($ = {}));
(function ($) {
    class $mol_bench_head extends $.$mol_float {
        horizontal() {
            return false;
        }
        event() {
            return (Object.assign({}, super.event(), { "click": (val) => this.event_click(val) }));
        }
        event_click(val, force) {
            return (val !== void 0) ? val : null;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "title": this.hint() }));
        }
        hint() {
            return this.$.$mol_locale.text("$mol_bench_head_hint");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_bench_head.prototype, "event_click", null);
    $.$mol_bench_head = $mol_bench_head;
})($ || ($ = {}));
//bench.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_bench extends $.$mol_bench {
            col_sort(next) {
                return $.$mol_state_arg.value(this.state_key('sort'), next);
            }
            row_ids() {
                const result = this.result();
                const keys = Object.keys(result).map(key => ['', key]);
                const col = this.col_sort();
                if (col) {
                    keys.sort((a, b) => {
                        return this.result_number({ row: a, col }) - this.result_number({ row: b, col });
                    });
                }
                return keys;
            }
            result_value(id) {
                return this.result()[id.row[id.row.length - 1]][id.col];
            }
            result_number(id) {
                return parseInt(this.result_value(id), 10);
            }
            result_value_max(col) {
                let max = 0;
                const rows = this.row_ids();
                rows.forEach(row => {
                    const numb = this.result_number({ row, col });
                    if (numb > max)
                        max = numb;
                });
                return max;
            }
            result_portion(id) {
                return this.result_number(id) / this.result_value_max(id.col);
            }
            col_head_label(col) {
                return [col];
            }
            event_sort_toggle(col, next) {
                this.col_sort(col);
            }
            col_type(col) {
                if (col === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col];
                if (!isNaN(parseFloat(val)))
                    return 'number';
                return 'text';
            }
            cell_content_number(id) {
                return [
                    this.result_value(id),
                    ...(this.col_sort() === id.col) ? [this.Result_portion(id)] : []
                ];
            }
            col_head_content(col) {
                return [
                    this.col_head_label(col),
                    ...(this.col_sort() === col) ? [this.Col_head_sort(col)] : []
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_bench.prototype, "col_sort", null);
        __decorate([
            $.$mol_mem
        ], $mol_bench.prototype, "row_ids", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_bench.prototype, "result_value_max", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_bench.prototype, "col_type", null);
        $$.$mol_bench = $mol_bench;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bench.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_bench_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_bench_demo_title");
        }
        sub() {
            return [].concat(this.View());
        }
        View() {
            return ((obj) => {
                obj.col_sort = (val) => this.col_sort(val);
                obj.result = () => this.result();
                return obj;
            })(new this.$.$mol_bench);
        }
        col_sort(val, force) {
            return (val !== void 0) ? val : "mid";
        }
        result() {
            return ({});
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_bench_demo.prototype, "View", null);
    __decorate([
        $.$mol_mem
    ], $mol_bench_demo.prototype, "col_sort", null);
    $.$mol_bench_demo = $mol_bench_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_bench_demo extends $.$mol_bench_demo {
            result() {
                return {
                    'bubble': {
                        'algorithm': 'bubble',
                        'min': '1 ms',
                        'mid': '11 ms',
                        'max': '99 ms',
                    },
                    'qsort': {
                        'algorithm': 'qsort',
                        'min': '2 ms',
                        'mid': '5 ms',
                        'max': '10 ms',
                    },
                };
            }
        }
        $$.$mol_bench_demo = $mol_bench_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_object {
        dom_node() {
            return null;
        }
        attr_static() {
            return ({});
        }
        event() {
            return ({});
        }
        event_async() {
            return ({});
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plugin extends $.$mol_plugin {
            dom_node() {
                const node = this.object_host().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                $.$mol_dom_render_events_async(node, this.event_async());
                return node;
            }
            render() {
                return this.dom_node();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plugin.prototype, "dom_node", null);
        $$.$mol_plugin = $mol_plugin;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//plugin.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision, next, force) {
            const atom = $.$mol_atom_current();
            const handler = () => {
                atom['value()'] = Date.now();
                atom.obsolete_slaves();
                if (precision > 0) {
                    setTimeout(handler, precision);
                }
                else {
                    requestAnimationFrame(handler);
                }
            };
            handler();
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_meter extends $.$mol_plugin {
        zoom() {
            return 1;
        }
        width(val, force) {
            return (val !== void 0) ? val : 0;
        }
        height(val, force) {
            return (val !== void 0) ? val : 0;
        }
        left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        top(val, force) {
            return (val !== void 0) ? val : 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "width", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "height", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "left", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "right", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "top", null);
    $.$mol_meter = $mol_meter;
})($ || ($ = {}));
//meter.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_meter extends $.$mol_meter {
            rect() {
                const node = this.dom_node();
                if (node !== $.$mol_dom_context.document.body) {
                    $.$mol_state_time.now();
                    try {
                        const { left, top, right, bottom, width, height } = node.getBoundingClientRect();
                        return { left, top, right, bottom, width, height, zoom: window.devicePixelRatio || 1 };
                    }
                    catch (error) {
                    }
                }
                const size = $.$mol_window.size();
                return {
                    zoom: window.devicePixelRatio || 1,
                    left: 0,
                    top: 0,
                    right: size.width,
                    bottom: size.height,
                    width: size.width,
                    height: size.height,
                };
            }
            top() {
                return this.rect().top;
            }
            bottom() {
                return this.rect().bottom;
            }
            left() {
                return this.rect().left;
            }
            right() {
                return this.rect().right;
            }
            width() {
                return this.rect().width;
            }
            height() {
                return this.rect().height;
            }
            zoom() {
                return this.rect().zoom;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "rect", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "top", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "left", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "right", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "width", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "height", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "zoom", null);
        $$.$mol_meter = $mol_meter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//meter.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_touch extends $.$mol_plugin {
        start_zoom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        start_distance(val, force) {
            return (val !== void 0) ? val : 0;
        }
        zoom(val, force) {
            return (val !== void 0) ? val : 1;
        }
        start_pan(val, force) {
            return (val !== void 0) ? val : [].concat(0, 0);
        }
        pan(val, force) {
            return (val !== void 0) ? val : [].concat(0, 0);
        }
        start_pos(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_precision() {
            return 16;
        }
        swipe_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        event() {
            return (Object.assign({}, super.event(), { "touchstart": (event) => this.event_start(event), "touchmove": (event) => this.event_move(event), "touchend": (event) => this.event_end(event), "mousedown": (event) => this.event_start(event), "mousemove": (event) => this.event_move(event), "mouseup": (event) => this.event_end(event) }));
        }
        event_start(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_move(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_end(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_async() {
            return ({
                "wheel": (event) => this.event_wheel(event),
            });
        }
        event_wheel(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//touch.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                if (event instanceof TouchEvent) {
                    if (event.touches.length === 1) {
                        const pos = [event.touches[0].pageX, event.touches[0].pageY];
                        this.start_pos(pos);
                    }
                    if (event.touches.length === 2) {
                        const distance = Math.pow((Math.pow((event.touches[1].pageX - event.touches[0].pageX), 2) + Math.pow((event.touches[1].pageY - event.touches[0].pageY), 2)), .5);
                        this.start_distance(distance);
                        this.start_zoom(this.zoom());
                    }
                }
                else if (event instanceof MouseEvent) {
                    if (event.buttons === 1) {
                        const pos = [event.pageX, event.pageY];
                        this.start_pos(pos);
                    }
                }
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const start_pan = this.start_pan();
                let pos;
                if (event instanceof MouseEvent) {
                    if (event.buttons === 1)
                        pos = [event.pageX, event.pageY];
                    else
                        this.start_pos(null);
                }
                if (event instanceof TouchEvent) {
                    if (event.touches.length === 1)
                        pos = [event.touches[0].pageX, event.touches[0].pageY];
                    else
                        this.start_pos(null);
                }
                if (pos) {
                    const start_pos = this.start_pos();
                    if (!start_pos)
                        return;
                    const precision = this.swipe_precision();
                    if (this.pan !== $mol_touch.prototype.pan) {
                        this.pan([start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]]);
                        event.preventDefault();
                    }
                    if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                        || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                        || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                        && pos[0] - start_pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_right(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                        || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                        || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                        && start_pos[0] - pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_left(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                        || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                        || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                        && pos[1] - start_pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_bottom(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                        || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                        || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                        && start_pos[1] - pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_top(event);
                        event.preventDefault();
                    }
                }
                if (event instanceof TouchEvent && event.touches.length === 2) {
                    if (this.zoom === $mol_touch.prototype.zoom)
                        return;
                    const pos0 = [event.touches[0].pageX, event.touches[0].pageY];
                    const pos1 = [event.touches[1].pageX, event.touches[1].pageY];
                    const distance = Math.pow((Math.pow((pos1[0] - pos0[0]), 2) + Math.pow((pos1[1] - pos0[1]), 2)), .5);
                    const center = [pos1[0] / 2 + pos0[0] / 2, pos1[1] / 2 + pos0[1] / 2];
                    const start_zoom = this.start_zoom();
                    const mult = distance / this.start_distance();
                    this.zoom(start_zoom * mult);
                    const pan = [(start_pan[0] - center[0]) * mult + center[0], (start_pan[1] - center[1]) * mult + center[1]];
                    this.pan(pan);
                    event.preventDefault();
                }
            }
            swipe_left(event) {
                if (this.dom_node().getBoundingClientRect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.dom_node().getBoundingClientRect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
            }
            swipe_top(event) {
                if (this.dom_node().getBoundingClientRect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.dom_node().getBoundingClientRect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
            }
            event_end(event) {
                this.start_pos(null);
            }
            event_wheel(event) {
                const zoom_prev = this.zoom();
                const zoom_next = zoom_prev * (1 - .1 * Math.sign(event.deltaY));
                const mult = zoom_next / zoom_prev;
                this.zoom(zoom_next);
                const pan_prev = this.pan();
                const center = [event.layerX, event.layerY];
                const pan_next = [(pan_prev[0] - center[0]) * mult + center[0], (pan_prev[1] - center[1]) * mult + center[1]];
                this.pan(pan_next);
            }
        }
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//touch.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_ghost extends $.$mol_view {
        Sub() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//ghost.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node() {
                const node = this.Sub().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                $.$mol_dom_render_events_async(node, this.event_async());
                return node;
            }
            dom_tree() {
                const node = this.Sub().dom_tree();
                super.render();
                return node;
            }
            title() {
                return this.Sub().title();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ghost.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_book extends $.$mol_view {
        sub() {
            return this.pages_wrapped();
        }
        pages_wrapped() {
            return [];
        }
        pages() {
            return [];
        }
        plugins() {
            return [].concat(this.Meter(), this.Touch());
        }
        width() {
            return this.Meter().width();
        }
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter);
        }
        Touch() {
            return ((obj) => {
                obj.swipe_from_left = (val) => this.event_front_up(val);
                obj.swipe_to_left = (val) => this.event_front_down(val);
                return obj;
            })(new this.$.$mol_touch);
        }
        event_front_up(val, force) {
            return (val !== void 0) ? val : null;
        }
        event_front_down(val, force) {
            return (val !== void 0) ? val : null;
        }
        Page(index) {
            return ((obj) => {
                obj.Sub = () => this.page(index);
                obj.visible = () => this.page_visible(index);
                return obj;
            })(new this.$.$mol_book_page);
        }
        page(index) {
            return null;
        }
        page_visible(index) {
            return true;
        }
        Placeholder() {
            return ((obj) => {
                obj.title = () => this.title();
                return obj;
            })(new this.$.$mol_book_placeholder);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Touch", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_down", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_book.prototype, "Page", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Placeholder", null);
    $.$mol_book = $mol_book;
})($ || ($ = {}));
(function ($) {
    class $mol_book_placeholder extends $.$mol_scroll {
        minimal_width() {
            return 400;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "tabindex": null }));
        }
    }
    $.$mol_book_placeholder = $mol_book_placeholder;
})($ || ($ = {}));
(function ($) {
    class $mol_book_page extends $.$mol_ghost {
        attr() {
            return (Object.assign({}, super.attr(), { "tabindex": 0, "mol_book_page_focused": this.focused(), "mol_book_page_visible": this.visible() }));
        }
        visible() {
            return true;
        }
    }
    $.$mol_book_page = $mol_book_page;
})($ || ($ = {}));
//book.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book extends $.$mol_book {
            pages_extended() {
                return [this.Placeholder()].concat(this.pages());
            }
            break_point() {
                const pages = this.pages_extended();
                const limit = this.width();
                let width = 0;
                for (var break_point = pages.length; break_point > 0; --break_point) {
                    const page = pages[break_point - 1];
                    if (!page)
                        continue;
                    const page_width = page.minimal_width();
                    if (width + page_width > limit)
                        break;
                    width += page_width;
                }
                if (width === 0)
                    --break_point;
                return break_point;
            }
            page(index) {
                return this.pages_extended()[index];
            }
            page_visible(index) {
                return index >= this.break_point();
            }
            pages_wrapped() {
                const pages = this.pages_extended();
                const extended = [];
                for (let i = 1; i < pages.length; ++i) {
                    if (pages[i])
                        extended.push(this.Page(i));
                }
                if (pages[0])
                    extended.push(this.Page(0));
                return extended;
            }
            title() {
                return this.pages().map(page => page.title()).reverse().join(' | ');
            }
            event_front_up(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(true);
            }
            event_front_down(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(false);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_extended", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "break_point", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_wrapped", null);
        $$.$mol_book = $mol_book;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_demo_large extends $.$mol_view {
    }
    $.$mol_demo_large = $mol_demo_large;
})($ || ($ = {}));
//large.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_demo_large extends $.$mol_demo_large {
            minimal_height() {
                return $.$mol_window.size().height - 100;
            }
            minimal_width() {
                return this.$.$mol_window.size().width - 300;
            }
        }
        $$.$mol_demo_large = $mol_demo_large;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//large.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_book_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_book_demo_title");
        }
        sub() {
            return [].concat(this.View());
        }
        View() {
            return ((obj) => {
                obj.Placeholder = () => this.Placeholder();
                obj.pages = () => [].concat(this.Addon(), this.Main());
                return obj;
            })(new this.$.$mol_book);
        }
        Placeholder() {
            return ((obj) => {
                obj.minimal_width = () => 200;
                obj.sub = () => [].concat(" Placeholder");
                return obj;
            })(new this.$.$mol_book_placeholder);
        }
        Addon() {
            return ((obj) => {
                obj.minimal_width = () => 250;
                obj.sub = () => [].concat(" Addon");
                return obj;
            })(new this.$.$mol_view);
        }
        Main() {
            return ((obj) => {
                obj.minimal_width = () => 400;
                obj.sub = () => [].concat(" Main");
                return obj;
            })(new this.$.$mol_view);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book_demo.prototype, "View", null);
    __decorate([
        $.$mol_mem
    ], $mol_book_demo.prototype, "Placeholder", null);
    __decorate([
        $.$mol_mem
    ], $mol_book_demo.prototype, "Addon", null);
    __decorate([
        $.$mol_mem
    ], $mol_book_demo.prototype, "Main", null);
    $.$mol_book_demo = $mol_book_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_button_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_button_demo_title");
        }
        sub() {
            return [].concat(this.Major_enabled(), this.Major_disabled(), this.Minor_enabled(), this.Minor_disabled());
        }
        Major_enabled() {
            return ((obj) => {
                obj.title = () => this.major_label();
                return obj;
            })(new this.$.$mol_button_major);
        }
        major_label() {
            return this.$.$mol_locale.text("$mol_button_demo_major_label");
        }
        Major_disabled() {
            return ((obj) => {
                obj.title = () => this.major_label();
                obj.enabled = () => false;
                return obj;
            })(new this.$.$mol_button_major);
        }
        Minor_enabled() {
            return ((obj) => {
                obj.title = () => this.minor_label();
                return obj;
            })(new this.$.$mol_button_minor);
        }
        minor_label() {
            return this.$.$mol_locale.text("$mol_button_demo_minor_label");
        }
        Minor_disabled() {
            return ((obj) => {
                obj.title = () => this.minor_label();
                obj.enabled = () => false;
                return obj;
            })(new this.$.$mol_button_minor);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button_demo.prototype, "Major_enabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_button_demo.prototype, "Major_disabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_button_demo.prototype, "Minor_enabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_button_demo.prototype, "Minor_disabled", null);
    $.$mol_button_demo = $mol_button_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            var Base = this.constructor;
            var formatter = Base.formatter(pattern);
            return formatter.call(Base, this);
        }
    }
    $mol_time_base.patterns = {};
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//base.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $.$mol_time_base {
        constructor(config = 0) {
            super();
            this.year = 0;
            this.month = 0;
            this.day = 0;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
    }
    $mol_time_duration.patterns = {
        '#Y': (duration) => {
            if (!duration.year)
                return '';
            return duration.year + 'Y';
        },
        '#M': (duration) => {
            if (!duration.month)
                return '';
            return duration.month + 'M';
        },
        '#D': (duration) => {
            if (!duration.day)
                return '';
            return duration.day + 'D';
        },
        '#h': (duration) => {
            if (!duration.hour)
                return '';
            return duration.hour + 'H';
        },
        '#m': (duration) => {
            if (!duration.minute)
                return '';
            return duration.minute + 'M';
        },
        '#s': (duration) => {
            if (!duration.second)
                return '';
            return duration.second + 'S';
        },
        '+hh': (duration) => {
            var hour = duration.hour;
            var sign = '+';
            if (hour < 0) {
                sign = '-';
                hour = -hour;
            }
            return (hour < 10)
                ? (sign + '0' + hour)
                : (sign + hour);
        },
        'mm': (duration) => {
            return (duration.minute < 10)
                ? ('0' + duration.minute)
                : String(duration.minute);
        },
    };
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//duration.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_moment extends $.$mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                var parsed = /^(?:(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d))?)?)?(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d(?:\.\d\d\d)?))?)?(Z|[\+\-]\d\d(?::?(?:\d\d)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = Number(parsed[1]);
                if (parsed[2])
                    this.month = Number(parsed[2]) - 1;
                if (parsed[3])
                    this.day = Number(parsed[3]) - 1;
                if (parsed[4])
                    this.hour = Number(parsed[4]);
                if (parsed[5])
                    this.minute = Number(parsed[5]);
                if (parsed[6])
                    this.second = Number(parsed[6]);
                if (parsed[7])
                    this.offset = new $.$mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                var offset = -config.getTimezoneOffset();
                this.offset = new $.$mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            if (config.offset !== undefined)
                this.offset = new $.$mol_time_duration(config.offset);
        }
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        get native() {
            if (this._native)
                return this._native;
            var utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC((utc.year || 0), (utc.month || 0), (utc.day || 0) + 1, (utc.hour || 0), (utc.minute || 0), (utc.second && Math.floor(utc.second) || 0), (utc.second && Math.floor((utc.second - Math.floor(utc.second)) * 1000) || 0)));
        }
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: (this.year === undefined) ? undefined : moment.year,
                month: (this.month === undefined) ? undefined : moment.month,
                day: (this.day === undefined) ? undefined : moment.day,
                hour: (this.hour === undefined) ? undefined : moment.hour,
                minute: (this.minute === undefined) ? undefined : moment.minute,
                second: (this.second === undefined) ? undefined : moment.second,
                offset: (this.offset === undefined) ? undefined : moment.offset,
            });
        }
        merge(config) {
            var moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: (moment.year === undefined) ? this.year : moment.year,
                month: (moment.month === undefined) ? this.month : moment.month,
                day: (moment.day === undefined) ? this.day : moment.day,
                hour: (moment.hour === undefined) ? this.hour : moment.hour,
                minute: (moment.minute === undefined) ? this.minute : moment.minute,
                second: (moment.second === undefined) ? this.second : moment.second,
                offset: (moment.offset === undefined) ? this.offset : moment.offset,
            });
        }
        shift(config) {
            var duration = new $.$mol_time_duration(config);
            var moment = new $mol_time_moment().merge(this);
            var second = (moment.second + (duration.second || 0));
            var native = new Date(moment.year + (duration.year || 0), moment.month + (duration.month || 0), moment.day + 1 + (duration.day || 0), moment.hour + (duration.hour || 0), moment.minute + (duration.minute || 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: (this.year === undefined) ? undefined : native.getFullYear(),
                month: (this.month === undefined) ? undefined : native.getMonth(),
                day: (this.day === undefined) ? undefined : native.getDate() - 1,
                hour: (this.hour === undefined) ? undefined : native.getHours(),
                minute: (this.minute === undefined) ? undefined : native.getMinutes(),
                second: (this.second === undefined) ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        toOffset(config) {
            const duration = new $.$mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            const moment = this.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
    }
    $mol_time_moment.patterns = {
        'YYYY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year);
        },
        'AD': (moment) => {
            if (moment.year == null)
                return '';
            return String(Math.floor(moment.year / 100) + 1);
        },
        'YY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year % 100);
        },
        'Month': (moment) => {
            if (moment.month == null)
                return '';
            return moment.native.toLocaleString(undefined, { month: 'long' });
        },
        'DD Month': (moment) => {
            return moment.native.toLocaleString(undefined, { day: '2-digit', month: 'long' });
        },
        'D Month': (moment) => {
            return moment.native.toLocaleString(undefined, { day: 'numeric', month: 'long' });
        },
        'Mon': (moment) => {
            if (moment.month == null)
                return '';
            return moment.native.toLocaleString(undefined, { month: 'short' });
        },
        'DD Mon': (moment) => {
            return moment.native.toLocaleString(undefined, { day: '2-digit', month: 'short' });
        },
        'D Mon': (moment) => {
            return moment.native.toLocaleString(undefined, { day: 'numeric', month: 'short' });
        },
        '-MM': (moment) => {
            if (moment.month == null)
                return '';
            return '-' + $mol_time_moment.patterns['MM'](moment);
        },
        'MM': (moment) => {
            if (moment.month == null)
                return '';
            var month = moment.month + 1;
            return (month < 10)
                ? ('0' + month)
                : ('' + month);
        },
        'M': (moment) => {
            if (moment.month == null)
                return '';
            return String(moment.month + 1);
        },
        'WeekDay': (moment) => {
            if (moment.weekday == null)
                return '';
            return moment.native.toLocaleString(undefined, { weekday: 'long' });
        },
        'WD': (moment) => {
            if (moment.weekday == null)
                return '';
            return moment.native.toLocaleString(undefined, { weekday: 'short' });
        },
        '-DD': (moment) => {
            if (moment.day == null)
                return '';
            return '-' + $mol_time_moment.patterns['DD'](moment);
        },
        'DD': (moment) => {
            if (moment.day == null)
                return '';
            var day = moment.day + 1;
            return (day < 10)
                ? ('0' + day)
                : String(day);
        },
        'D': (moment) => {
            if (moment.day == null)
                return '';
            return String(moment.day + 1);
        },
        'Thh': (moment) => {
            if (moment.hour == null)
                return '';
            return 'T' + $mol_time_moment.patterns['hh'](moment);
        },
        'hh': (moment) => {
            if (moment.hour == null)
                return '';
            return (moment.hour < 10)
                ? ('0' + moment.hour)
                : String(moment.hour);
        },
        'h': (moment) => {
            if (moment.hour == null)
                return '';
            return String(moment.hour);
        },
        ':mm': (moment) => {
            if (moment.minute == null)
                return '';
            return ':' + $mol_time_moment.patterns['mm'](moment);
        },
        'mm': (moment) => {
            if (moment.minute == null)
                return '';
            return (moment.minute < 10)
                ? ('0' + moment.minute)
                : String(moment.minute);
        },
        'm': (moment) => {
            if (moment.minute == null)
                return '';
            return String(moment.minute);
        },
        ':ss': (moment) => {
            if (moment.second == null)
                return '';
            return ':' + $mol_time_moment.patterns['ss'](moment);
        },
        'ss': (moment) => {
            if (moment.second == null)
                return '';
            var second = Math.floor(moment.second);
            return (second < 10)
                ? ('0' + second)
                : String(second);
        },
        's': (moment) => {
            if (moment.second == null)
                return '';
            return String(Math.floor(moment.second));
        },
        '.sss': (moment) => {
            if (moment.second == null)
                return '';
            if (moment.second - Math.floor(moment.second) === 0)
                return '';
            return '.' + $mol_time_moment.patterns['sss'](moment);
        },
        'sss': (moment) => {
            if (moment.second == null)
                return '';
            var millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
            return (millisecond < 10)
                ? ('00' + millisecond)
                : (millisecond < 100)
                    ? ('0' + millisecond)
                    : String(millisecond);
        },
        'Z': (moment) => {
            var offset = moment.offset;
            if (!offset)
                return '';
            return offset.toString('+hh:mm');
        }
    };
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//moment.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $.$mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $.$mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $.$mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $.$mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $.$mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $.$mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $.$mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $.$mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $.$mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $.$mol_time_duration(config.duration);
        }
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $.$mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));
//interval.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_calendar extends $.$mol_list {
        sub() {
            return [].concat(this.Title(), this.Weekdays(), this.Weeks());
        }
        Title() {
            return ((obj) => {
                obj.minimal_height = () => 24;
                obj.sub = () => [].concat(this.title());
                return obj;
            })(new this.$.$mol_view);
        }
        title() {
            return "";
        }
        Weekdays() {
            return ((obj) => {
                obj.sub = () => [].concat(this.weekdays());
                return obj;
            })(new this.$.$mol_view);
        }
        weekdays() {
            return [];
        }
        Weeks() {
            return ((obj) => {
                obj.rows = () => [].concat(this.weeks());
                return obj;
            })(new this.$.$mol_list);
        }
        weeks() {
            return [];
        }
        Weekday(index) {
            return ((obj) => {
                obj.holiday = () => this.weekend(index);
                obj.sub = () => [].concat(this.weekday(index));
                return obj;
            })(new this.$.$mol_calendar_day);
        }
        weekend(index) {
            return false;
        }
        weekday(index) {
            return "";
        }
        Week(row) {
            return ((obj) => {
                obj.sub = () => [].concat(this.week_days(row));
                return obj;
            })(new this.$.$mol_view);
        }
        week_days(row) {
            return [];
        }
        Day(day) {
            return ((obj) => {
                obj.ghost = () => this.day_ghost(day);
                obj.holiday = () => this.day_holiday(day);
                obj.selected = () => this.day_selected(day);
                obj.sub = () => this.day_content(day);
                return obj;
            })(new this.$.$mol_calendar_day);
        }
        day_ghost(day) {
            return false;
        }
        day_holiday(day) {
            return false;
        }
        day_selected(day) {
            return false;
        }
        day_content(day) {
            return [].concat(this.day_text(day));
        }
        day_text(day) {
            return "";
        }
        month_string() {
            return "";
        }
        month_moment() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_time_moment);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_calendar.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_calendar.prototype, "Weekdays", null);
    __decorate([
        $.$mol_mem
    ], $mol_calendar.prototype, "Weeks", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_calendar.prototype, "Weekday", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_calendar.prototype, "Week", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_calendar.prototype, "Day", null);
    __decorate([
        $.$mol_mem
    ], $mol_calendar.prototype, "month_moment", null);
    $.$mol_calendar = $mol_calendar;
})($ || ($ = {}));
(function ($) {
    class $mol_calendar_day extends $.$mol_view {
        minimal_height() {
            return 32;
        }
        minimal_width() {
            return 36;
        }
        attr() {
            return ({
                "mol_calendar_holiday": this.holiday(),
                "mol_calendar_ghost": this.ghost(),
                "mol_calendar_selected": this.selected(),
            });
        }
        holiday() {
            return false;
        }
        ghost() {
            return false;
        }
        selected() {
            return false;
        }
    }
    $.$mol_calendar_day = $mol_calendar_day;
})($ || ($ = {}));
//calendar.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $mol;
    (function ($mol) {
        class $mol_calendar extends $.$mol_calendar {
            month_moment() {
                const moment = new $.$mol_time_moment(this.month_string() || undefined);
                return new $.$mol_time_moment({ year: moment.year, month: moment.month });
            }
            title() {
                return this.month_moment().toString('Month YYYY');
            }
            day_first() {
                return this.month_moment().merge({ day: 0 });
            }
            day_last() {
                return this.day_first().shift('P1M');
            }
            day_draw_from() {
                let weekday = this.day_first().weekday;
                return this.day_first().shift({ day: -weekday });
            }
            weekdays() {
                const next = [];
                for (let index = 0; index < 7; ++index) {
                    next.push(this.Weekday(index));
                }
                return next;
            }
            weekday(index) {
                return this.day_draw_from().shift({ day: index }).toString('WD');
            }
            weekend(index) {
                return [5, 6].indexOf(index) >= 0;
            }
            weeks_count() {
                const interval = new $.$mol_time_interval({
                    start: this.day_draw_from(),
                    end: this.day_last(),
                });
                return Math.ceil(interval.duration.count({ day: 7 }));
            }
            weeks() {
                const weeks = [];
                let count = this.weeks_count();
                for (let i = 0; i < count; ++i) {
                    weeks.push(this.Week(i));
                }
                return weeks;
            }
            week_days(index) {
                const days = [];
                let start = this.day_draw_from().shift({ day: index * 7 });
                for (let i = 0; i < 7; ++i) {
                    days.push(this.Day(start.shift({ day: i }).toString('YYYY-MM-DD')));
                }
                return days;
            }
            day_text(day) {
                return new $.$mol_time_moment(day).toString("D");
            }
            day_holiday(day) {
                return this.weekend(new $.$mol_time_moment(day).weekday);
            }
            day_ghost(day) {
                return new $.$mol_time_moment(day).toString('YYYY-MM') !== this.day_first().toString('YYYY-MM');
            }
            day_selected(day) {
                return new $.$mol_time_moment().toString('YYYY-MM-DD') === day;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "month_moment", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "day_first", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "day_last", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "day_draw_from", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "weekdays", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "weekday", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "weeks_count", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "weeks", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "week_days", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "day_text", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "day_holiday", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "day_ghost", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "day_selected", null);
        $mol.$mol_calendar = $mol_calendar;
    })($mol = $.$mol || ($.$mol = {}));
})($ || ($ = {}));
//calendar.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_calendar_demo_holiday extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_calendar_demo_holiday_title");
        }
        holidays() {
            return [].concat("2018-01-01", "2018-01-02", "2018-01-03", "2018-01-04", "2018-01-05", "2018-01-06", "2018-01-07", "2018-01-08", "2018-01-13", "2018-01-14", "2018-01-20", "2018-01-21", "2018-01-27", "2018-01-28");
        }
        sub() {
            return [].concat(this.Calendar());
        }
        Calendar() {
            return ((obj) => {
                obj.month_string = () => this.month();
                obj.day_holiday = (day) => this.holiday(day);
                return obj;
            })(new this.$.$mol_calendar);
        }
        month() {
            return "2018-01";
        }
        holiday(day) {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_calendar_demo_holiday.prototype, "Calendar", null);
    $.$mol_calendar_demo_holiday = $mol_calendar_demo_holiday;
})($ || ($ = {}));
//holiday.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar_demo_holiday extends $.$mol_calendar_demo_holiday {
            holiday(day) {
                return this.holidays().indexOf(day) >= 0;
            }
        }
        $$.$mol_calendar_demo_holiday = $mol_calendar_demo_holiday;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//holiday.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_calendar_demo_selection extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_calendar_demo_selection_title");
        }
        interval_config() {
            return ({
                "start": "2018-01-10",
                "end": "2018-01-20",
            });
        }
        sub() {
            return [].concat(this.Calendar());
        }
        Calendar() {
            return ((obj) => {
                obj.month_string = () => this.month();
                obj.day_selected = (day) => this.selected(day);
                return obj;
            })(new this.$.$mol_calendar);
        }
        month() {
            return "2018-01";
        }
        selected(day) {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_calendar_demo_selection.prototype, "Calendar", null);
    $.$mol_calendar_demo_selection = $mol_calendar_demo_selection;
})($ || ($ = {}));
//selection.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar_demo_selection extends $.$mol_calendar_demo_selection {
            interval() {
                return new $.$mol_time_interval(this.interval_config());
            }
            selected(day) {
                const interval = this.interval();
                return (day >= interval.start.toString()) && (day < interval.end.toString());
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_calendar_demo_selection.prototype, "interval", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar_demo_selection.prototype, "selected", null);
        $$.$mol_calendar_demo_selection = $mol_calendar_demo_selection;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//selection.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_calendar_demo_simple extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_calendar_demo_simple_title");
        }
        sub() {
            return [].concat(this.Calendar());
        }
        Calendar() {
            return ((obj) => {
                obj.month_moment = () => this.today();
                return obj;
            })(new this.$.$mol_calendar);
        }
        today() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_time_moment);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_calendar_demo_simple.prototype, "Calendar", null);
    __decorate([
        $.$mol_mem
    ], $mol_calendar_demo_simple.prototype, "today", null);
    $.$mol_calendar_demo_simple = $mol_calendar_demo_simple;
})($ || ($ = {}));
//simple.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar_demo_simple extends $.$mol_calendar_demo_simple {
            month_name() {
                return this.today().toString('Month YYYY');
            }
        }
        $$.$mol_calendar_demo_simple = $mol_calendar_demo_simple;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//simple.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $.$mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
(function ($) {
    class $mol_row_sub extends $.$mol_view {
    }
    $.$mol_row_sub = $mol_row_sub;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_row extends $.$mol_row {
            item_offsets_top() {
                let next = [];
                let sub = this.sub();
                if (!sub)
                    return next;
                const context = this.context_sub();
                const widthLimit = context.$mol_view_visible_width();
                let allHeight = 0;
                let rowWidth = 0;
                let row_height = 0;
                for (let child of sub) {
                    next.push(allHeight);
                    if (!(child instanceof $.$mol_view))
                        continue;
                    const width = child.minimal_width();
                    const height = child.minimal_height();
                    rowWidth += width;
                    if (rowWidth > widthLimit) {
                        allHeight += row_height;
                        rowWidth = width;
                        row_height = height;
                    }
                    else {
                        row_height = Math.max(row_height, height);
                    }
                }
                next.push(allHeight + row_height);
                return next;
            }
            sub_visible() {
                const sub = this.sub();
                const visible = [];
                const context = this.context_sub();
                const heightLimit = context.$mol_view_visible_height();
                const offsets = this.item_offsets_top();
                let height = 0;
                for (let i = 0; i < offsets.length - 1; ++i) {
                    if (offsets[i] > heightLimit)
                        break;
                    const child = sub[i];
                    if (child instanceof $.$mol_view) {
                        child.context(context);
                    }
                    visible.push(child);
                }
                return visible;
            }
            minimal_height() {
                const offsets = this.item_offsets_top();
                return offsets[offsets.length - 1];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_row.prototype, "item_offsets_top", null);
        $$.$mol_row = $mol_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_card_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_card_demo_title");
        }
        sub() {
            return [].concat(this.Simple(), this.Pending());
        }
        Simple() {
            return ((obj) => {
                obj.Content = () => ((obj) => {
                    obj.sub = () => [].concat("Hello world!");
                    return obj;
                })(new this.$.$mol_row);
                return obj;
            })(new this.$.$mol_card);
        }
        Pending() {
            return ((obj) => {
                obj.Content = () => ((obj) => {
                    obj.sub = () => [].concat("Hello pending!");
                    return obj;
                })(new this.$.$mol_row);
                obj.status = () => "pending";
                return obj;
            })(new this.$.$mol_card);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_card_demo.prototype, "Simple", null);
    __decorate([
        $.$mol_mem
    ], $mol_card_demo.prototype, "Pending", null);
    $.$mol_card_demo = $mol_card_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_pane extends $.$mol_svg_root {
        aspect() {
            return "none";
        }
        hue_base(val, force) {
            return (val !== void 0) ? val : NaN;
        }
        hue_shift(val, force) {
            return (val !== void 0) ? val : 111;
        }
        gap() {
            return 24;
        }
        gap_hor() {
            return this.gap();
        }
        gap_vert() {
            return this.gap();
        }
        gap_left() {
            return this.gap_hor();
        }
        gap_right() {
            return this.gap_hor();
        }
        gap_top() {
            return this.gap_vert();
        }
        gap_bottom() {
            return this.gap_vert();
        }
        shift() {
            return [].concat(0, 0);
        }
        scale() {
            return [].concat(1, 1);
        }
        size_real() {
            return [].concat(1, 1);
        }
        sub() {
            return this.graphs_sorted();
        }
        graphs_sorted() {
            return this.graphs_colored();
        }
        graphs_colored() {
            return this.graphs_positioned();
        }
        graphs_positioned() {
            return this.graphs();
        }
        graphs() {
            return [];
        }
        plugins() {
            return [].concat(this.Meter());
        }
        width() {
            return this.Meter().width();
        }
        height() {
            return this.Meter().height();
        }
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "hue_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "hue_shift", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "Meter", null);
    $.$mol_plot_pane = $mol_plot_pane;
})($ || ($ = {}));
//pane.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_pane extends $.$mol_plot_pane {
            dimensions() {
                const graphs = this.graphs();
                const next = [
                    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
                    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
                ];
                for (let graph of graphs) {
                    const dims = graph.dimensions();
                    if (dims[0][0] < next[0][0])
                        next[0][0] = dims[0][0];
                    if (dims[0][1] < next[0][1])
                        next[0][1] = dims[0][1];
                    if (dims[1][0] > next[1][0])
                        next[1][0] = dims[1][0];
                    if (dims[1][1] > next[1][1])
                        next[1][1] = dims[1][1];
                }
                return next;
            }
            size() {
                const dims = this.dimensions();
                return [
                    (dims[1][0] - dims[0][0]) || 1,
                    (dims[1][1] - dims[0][1]) || 1,
                ];
            }
            dimensions_expanded() {
                const dims = this.dimensions();
                const size = this.size();
                const gap = [0, 0];
                return [
                    [dims[0][0] - size[0] * gap[0], dims[0][1] - size[1] * gap[1]],
                    [dims[1][0] + size[0] * gap[0], dims[1][1] + size[1] * gap[1]],
                ];
            }
            size_expaned() {
                const dims = this.dimensions_expanded();
                return [
                    (dims[1][0] - dims[0][0]) || 1,
                    (dims[1][1] - dims[0][1]) || 1,
                ];
            }
            graph_hue(index) {
                return (360 + (this.hue_base() + this.hue_shift() * index) % 360) % 360;
            }
            graphs_colored() {
                const graphs = this.graphs_positioned();
                graphs.forEach((graph, index) => {
                    graph.hue = () => this.graph_hue(index);
                });
                return graphs;
            }
            size_real() {
                return [this.width(), this.height()];
            }
            view_box() {
                const size = this.size_real();
                return `0 0 ${size[0]} ${size[1]}`;
            }
            scale() {
                const size = this.size_expaned();
                const real = this.size_real();
                return [
                    +(real[0] - this.gap_left() - this.gap_right()) / size[0],
                    -(real[1] - this.gap_top() - this.gap_bottom()) / size[1],
                ];
            }
            shift() {
                const dims = this.dimensions_expanded();
                const scale = this.scale();
                return [
                    Math.round(this.gap_left() - dims[0][0] * scale[0]),
                    Math.round(this.gap_top() - dims[1][1] * scale[1]),
                ];
            }
            graphs_positioned() {
                const graphs = this.graphs();
                graphs.forEach((graph, index) => {
                    graph.shift = () => this.shift();
                    graph.scale = () => this.scale();
                    graph.dimensions_expanded = () => this.dimensions_expanded();
                    graph.size_real = () => this.size_real();
                });
                return graphs;
            }
            graphs_sorted() {
                const graphs = this.graphs_colored();
                const sorted = [];
                for (let graph of graphs)
                    sorted.push(...graph.back());
                for (let graph of graphs)
                    sorted.push(...graph.front());
                return sorted;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "dimensions", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "size", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "dimensions_expanded", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "size_expaned", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "graphs_colored", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "scale", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "shift", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "graphs_positioned", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "graphs_sorted", null);
        $$.$mol_plot_pane = $mol_plot_pane;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pane.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_chart extends $.$mol_view {
        sub() {
            return [].concat(this.Plot(), this.Legend());
        }
        Plot() {
            return ((obj) => {
                obj.graphs = () => this.graphs();
                obj.gap_hor = () => 48;
                obj.gap_vert = () => 24;
                obj.hue_base = (val) => this.hue_base();
                obj.hue_shift = (val) => this.hue_shift();
                return obj;
            })(new this.$.$mol_plot_pane);
        }
        graphs() {
            return [];
        }
        hue_base() {
            return 140;
        }
        hue_shift() {
            return 111;
        }
        Legend() {
            return ((obj) => {
                obj.graphs = () => this.graphs();
                return obj;
            })(new this.$.$mol_chart_legend);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chart.prototype, "Plot", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart.prototype, "Legend", null);
    $.$mol_chart = $mol_chart;
})($ || ($ = {}));
//chart.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_chart_legend extends $.$mol_scroll {
        graphs() {
            return [];
        }
        sub() {
            return this.graph_legends();
        }
        graph_legends() {
            return [];
        }
        Graph_legend(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.Graph_sample_box(id), this.Graph_title(id));
                return obj;
            })(new this.$.$mol_view);
        }
        Graph_sample_box(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.Graph_sample(id));
                return obj;
            })(new this.$.$mol_view);
        }
        Graph_sample(id) {
            return null;
        }
        Graph_title(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.graph_title(id));
                return obj;
            })(new this.$.$mol_view);
        }
        graph_title(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_legend", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_sample_box", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_title", null);
    $.$mol_chart_legend = $mol_chart_legend;
})($ || ($ = {}));
//legend.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chart_legend extends $.$mol_chart_legend {
            graphs_front() {
                return this.graphs().filter(graph => graph.Sample());
            }
            graph_legends() {
                return this.graphs_front().map((graph, index) => this.Graph_legend(index));
            }
            graph_title(index) {
                return this.graphs_front()[index].title();
            }
            Graph_sample(index) {
                return this.graphs_front()[index].Sample();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_chart_legend.prototype, "graphs_front", null);
        $$.$mol_chart_legend = $mol_chart_legend;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//legend.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_group extends $.$mol_svg {
        dom_name() {
            return "g";
        }
    }
    $.$mol_svg_group = $mol_svg_group;
})($ || ($ = {}));
//group.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_graph extends $.$mol_svg_group {
        series() {
            return ({});
        }
        points() {
            return this.points_scaled();
        }
        points_scaled() {
            return this.points_raw();
        }
        points_raw() {
            return [];
        }
        threshold() {
            return 4;
        }
        shift() {
            return [].concat(0, 0);
        }
        scale() {
            return [].concat(1, 1);
        }
        dimensions_expanded() {
            return this.dimensions();
        }
        dimensions() {
            return [].concat([], []);
        }
        size_real() {
            return [].concat(0, 0);
        }
        hue() {
            return NaN;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_plot_graph_type": this.type() }));
        }
        type() {
            return "solid";
        }
        style() {
            return (Object.assign({}, super.style(), { "color": this.color() }));
        }
        color() {
            return "";
        }
        Sample() {
            return null;
        }
        front() {
            return [];
        }
        back() {
            return [];
        }
    }
    $.$mol_plot_graph = $mol_plot_graph;
})($ || ($ = {}));
(function ($) {
    class $mol_plot_graph_sample extends $.$mol_view {
        attr() {
            return (Object.assign({}, super.attr(), { "mol_plot_graph_type": this.type() }));
        }
        type() {
            return "solid";
        }
        style() {
            return (Object.assign({}, super.style(), { "color": this.color() }));
        }
        color() {
            return "black";
        }
    }
    $.$mol_plot_graph_sample = $mol_plot_graph_sample;
})($ || ($ = {}));
//graph.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_graph extends $.$mol_plot_graph {
            points_raw() {
                const series = this.series();
                return Object.keys(series).map((key, index) => [
                    isNaN(Number(key)) ? index : Number(key),
                    series[key],
                ]);
            }
            points_scaled() {
                const shift = this.shift();
                const scale = this.scale();
                return this.points_raw().map(point => [
                    Math.round(shift[0] + point[0] * scale[0]),
                    Math.round(shift[1] + point[1] * scale[1]),
                ]);
            }
            points() {
                const threshold = this.threshold();
                if (!threshold)
                    return this.points_scaled();
                const res = [];
                let last = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
                this.points_scaled().forEach(point => {
                    check: {
                        if (Math.abs(point[0] - last[0]) >= threshold)
                            break check;
                        if (Math.abs(point[1] - last[1]) >= threshold)
                            break check;
                        return;
                    }
                    res.push(last = point);
                });
                return res;
            }
            dimensions() {
                const points = this.points_raw();
                const next = [
                    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
                    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
                ];
                for (let point of points) {
                    if (point[0] < next[0][0])
                        next[0][0] = point[0];
                    if (point[1] < next[0][1])
                        next[0][1] = point[1];
                    if (point[0] > next[1][0])
                        next[1][0] = point[0];
                    if (point[1] > next[1][1])
                        next[1][1] = point[1];
                }
                return next;
            }
            color() {
                const hue = this.hue();
                return hue ? `hsl( ${hue} , 100% , 35% )` : '';
            }
            front() {
                return [this];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_graph.prototype, "points_scaled", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_graph.prototype, "points", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_graph.prototype, "dimensions", null);
        $$.$mol_plot_graph = $mol_plot_graph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//graph.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_text extends $.$mol_svg {
        dom_name() {
            return "text";
        }
        pos() {
            return [];
        }
        attr() {
            return (Object.assign({}, super.attr(), { "x": this.pos_x(), "y": this.pos_y(), "text-anchor": this.align() }));
        }
        pos_x() {
            return "";
        }
        pos_y() {
            return "";
        }
        align() {
            return "middle";
        }
        sub() {
            return [].concat(this.text());
        }
        text() {
            return "";
        }
    }
    $.$mol_svg_text = $mol_svg_text;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_text extends $.$mol_svg_text {
            pos_x() {
                return this.pos()[0];
            }
            pos_y() {
                return this.pos()[1];
            }
        }
        $$.$mol_svg_text = $mol_svg_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_math_round_expand(val, gap = 1) {
        if (val === 0)
            return 0;
        const val_abs = Math.abs(val);
        const val_sign = val ? Math.round(val / val_abs) : 0;
        const digits = Math.floor(Math.log(val_abs) / Math.log(10));
        const precission = Math.pow(10, digits - gap);
        const val_expanded = precission * Math.ceil(val_abs / precission);
        return val_sign * val_expanded;
    }
    $.$mol_math_round_expand = $mol_math_round_expand;
})($ || ($ = {}));
//expand.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_ruler_vert extends $.$mol_plot_graph {
        front() {
            return [];
        }
        color() {
            return null;
        }
        sub() {
            return [].concat(this.Curve(), this.labels(), this.Title());
        }
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path);
        }
        curve() {
            return "";
        }
        labels() {
            return [];
        }
        Title() {
            return ((obj) => {
                obj.pos = () => this.title_pos();
                obj.align = () => "end";
                obj.sub = () => [].concat(this.title());
                return obj;
            })(new this.$.$mol_svg_text);
        }
        title_pos() {
            return [].concat(this.title_pos_x(), this.title_pos_y());
        }
        title_pos_x() {
            return "36px";
        }
        title_pos_y() {
            return "14px";
        }
        Label(index) {
            return ((obj) => {
                obj.pos = () => this.label_pos(index);
                obj.align = () => "end";
                obj.text = () => this.label_text(index);
                return obj;
            })(new this.$.$mol_svg_text);
        }
        label_pos(index) {
            return [].concat(this.label_pos_x(index), this.label_pos_y(index));
        }
        label_pos_x(index) {
            return this.title_pos_x();
        }
        label_pos_y(index) {
            return "";
        }
        label_text(index) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler_vert.prototype, "Curve", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler_vert.prototype, "Title", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_plot_ruler_vert.prototype, "Label", null);
    $.$mol_plot_ruler_vert = $mol_plot_ruler_vert;
})($ || ($ = {}));
//vert.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
            dimensions() {
                const series = this.series();
                const next = [
                    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
                    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
                ];
                for (let key of Object.keys(series)) {
                    if (series[key] < next[0][1])
                        next[0][1] = series[key];
                    if (series[key] > next[1][1])
                        next[1][1] = series[key];
                }
                return next;
            }
            step() {
                const dims = this.dimensions_expanded();
                const size = $.$mol_math_round_expand((dims[1][1] - dims[0][1]), -1);
                const count = Math.max(1, Math.pow(10, Math.floor(Math.log(-size * this.scale()[1] / 24) / Math.log(10))));
                const step = size / count;
                return step;
            }
            points_raw() {
                const dims = this.dimensions_expanded();
                const step = this.step();
                const next = [];
                const start = Math.round(dims[0][1] / step) * step;
                const end = Math.round(dims[1][1] / step) * step;
                for (let val = start; val <= end; val += step) {
                    next.push([0, Number(val.toFixed(10))]);
                }
                return next;
            }
            curve() {
                const shift = this.shift();
                const points = this.points();
                if (points.length < 1)
                    return '';
                const last = points[points.length - 1];
                return points.map(point => `M 0 ${point[1]} H 2000 `).join(' ');
            }
            labels() {
                return this.points().map((point, index) => this.Label(index));
            }
            label_pos_y(index) {
                return this.points()[index][1] + 'px';
            }
            label_text(index) {
                const step = this.step();
                const precision = Math.max(0, Math.min(15, (step - Math.floor(step)).toString().length - 2));
                return this.points_raw()[index][1].toFixed(precision);
            }
            back() {
                return [this];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_ruler_vert.prototype, "step", null);
        $$.$mol_plot_ruler_vert = $mol_plot_ruler_vert;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//vert.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_ruler_hor extends $.$mol_plot_graph {
        front() {
            return [];
        }
        color() {
            return null;
        }
        sub() {
            return [].concat(this.Curve(), this.labels(), this.Title());
        }
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path);
        }
        curve() {
            return "";
        }
        labels() {
            return [];
        }
        Title() {
            return ((obj) => {
                obj.pos = () => this.title_pos();
                obj.align = () => "start";
                obj.sub = () => [].concat(this.title());
                return obj;
            })(new this.$.$mol_svg_text);
        }
        title_pos() {
            return [].concat(this.title_pos_x(), this.title_pos_y());
        }
        title_pos_x() {
            return "0";
        }
        title_pos_y() {
            return "100%";
        }
        Label(index) {
            return ((obj) => {
                obj.pos = () => this.label_pos(index);
                obj.text = () => this.label_text(index);
                return obj;
            })(new this.$.$mol_svg_text);
        }
        label_pos(index) {
            return [].concat(this.label_pos_x(index), this.label_pos_y(index));
        }
        label_pos_x(index) {
            return "";
        }
        label_pos_y(index) {
            return this.title_pos_y();
        }
        label_text(index) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler_hor.prototype, "Curve", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler_hor.prototype, "Title", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_plot_ruler_hor.prototype, "Label", null);
    $.$mol_plot_ruler_hor = $mol_plot_ruler_hor;
})($ || ($ = {}));
//hor.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
            count() {
                return this.points_raw().length * this.scale()[0] / 100;
            }
            step() {
                const count = this.count();
                let points = this.points_scaled();
                let step = Math.max(1, Math.ceil(points.length / count));
                return step;
            }
            keys_visible() {
                const res = [];
                const keys = Object.keys(this.series());
                if (keys.length === 0)
                    return [];
                let step = this.step();
                let limit = Math.floor(keys.length - step / 2);
                for (let i = 0; i < limit; i += step) {
                    res.push(keys[i]);
                }
                res.push(keys[keys.length - 1]);
                return res;
            }
            points() {
                const points = this.points_scaled();
                const keys = Object.keys(this.series());
                return this.keys_visible().map(key => points[keys.indexOf(key)]);
            }
            curve() {
                const shift = this.shift();
                const points = this.points();
                if (points.length < 1)
                    return '';
                const last = points[points.length - 1];
                return points.map(point => `M ${point[0]} 1000 V 0`).join(' ');
            }
            labels() {
                return this.keys_visible().map(key => this.Label(key));
            }
            label_pos_x(key) {
                return String(this.points()[this.keys_visible().indexOf(key)][0]);
            }
            label_text(key) {
                return key;
            }
            back() {
                return [this];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_ruler_hor.prototype, "step", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_ruler_hor.prototype, "keys_visible", null);
        $$.$mol_plot_ruler_hor = $mol_plot_ruler_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hor.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_bar extends $.$mol_plot_graph {
        style() {
            return (Object.assign({}, super.style(), { "stroke-width": this.stroke_width() }));
        }
        stroke_width() {
            return "1rem";
        }
        sub() {
            return [].concat(this.Curve());
        }
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path);
        }
        curve() {
            return "";
        }
        Sample() {
            return ((obj) => {
                obj.color = () => this.color();
                return obj;
            })(new this.$.$mol_plot_graph_sample);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_bar.prototype, "Curve", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_bar.prototype, "Sample", null);
    $.$mol_plot_bar = $mol_plot_bar;
})($ || ($ = {}));
//bar.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_bar extends $.$mol_plot_bar {
            curve() {
                const shift = this.shift();
                const points = this.points();
                if (points.length < 1)
                    return '';
                return points.map(point => `M ${point[0]} ${shift[1]} V ${point[1]}`).join(' ');
            }
            stroke_width() {
                return (8 / Math.sqrt(this.points().length)).toPrecision(2) + '%';
            }
            color() {
                return `hsl( ${this.hue()} , 70% , 85% )`;
            }
            dimensions() {
                const points = this.points_raw();
                const next = [
                    [Number.POSITIVE_INFINITY, 0],
                    [Number.NEGATIVE_INFINITY, 0],
                ];
                for (let point of points) {
                    if (point[0] < next[0][0])
                        next[0][0] = point[0];
                    if (point[1] < next[0][1])
                        next[0][1] = point[1];
                    if (point[0] > next[1][0])
                        next[1][0] = point[0];
                    if (point[1] > next[1][1])
                        next[1][1] = point[1];
                }
                const gap = (next[1][0] - next[0][0]) / points.length || 0.00000001;
                next[0][0] -= gap;
                next[1][0] += gap;
                return next;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_bar.prototype, "dimensions", null);
        $$.$mol_plot_bar = $mol_plot_bar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bar.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_group extends $.$mol_plot_graph {
        sub() {
            return this.graphs_enriched();
        }
        graphs_enriched() {
            return this.graphs();
        }
        graphs() {
            return [];
        }
        Sample() {
            return ((obj) => {
                obj.sub = () => this.graph_samples();
                return obj;
            })(new this.$.$mol_plot_graph_sample);
        }
        graph_samples() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_group.prototype, "Sample", null);
    $.$mol_plot_group = $mol_plot_group;
})($ || ($ = {}));
//group.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_group extends $.$mol_plot_group {
            graphs_enriched() {
                const graphs = this.graphs();
                for (let graph of graphs) {
                    graph.hue = () => this.hue();
                    graph.points = () => this.points();
                    graph.shift = () => this.shift();
                    graph.scale = () => this.scale();
                    graph.size_real = () => this.size_real();
                    graph.dimensions_expanded = () => this.dimensions_expanded();
                }
                return graphs;
            }
            graph_samples() {
                return this.graphs().map(graph => graph.Sample());
            }
            back() {
                const graphs = this.graphs_enriched();
                const next = [];
                for (let graph of graphs)
                    next.push(...graph.back());
                return next;
            }
            front() {
                const graphs = this.graphs_enriched();
                const next = [];
                for (let graph of graphs)
                    next.push(...graph.front());
                return next;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_group.prototype, "graphs_enriched", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_group.prototype, "graph_samples", null);
        $$.$mol_plot_group = $mol_plot_group;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//group.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_line extends $.$mol_plot_graph {
        color_fill() {
            return "none";
        }
        sub() {
            return [].concat(this.Curve());
        }
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path);
        }
        curve() {
            return "";
        }
        Sample() {
            return ((obj) => {
                obj.color = () => this.color();
                obj.type = () => this.type();
                return obj;
            })(new this.$.$mol_plot_graph_sample);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_line.prototype, "Curve", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_line.prototype, "Sample", null);
    $.$mol_plot_line = $mol_plot_line;
})($ || ($ = {}));
//line.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_line extends $.$mol_plot_line {
            curve() {
                const points = this.points();
                if (points.length < 1)
                    return '';
                return 'M ' + points[0].join(' ') + ' ' + points.map(point => 'L ' + point.join(' ')).join(' ');
            }
        }
        $$.$mol_plot_line = $mol_plot_line;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//line.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_dot extends $.$mol_plot_graph {
        style() {
            return (Object.assign({}, super.style(), { "stroke-width": this.diameter() }));
        }
        diameter() {
            return 8;
        }
        sub() {
            return [].concat(this.Curve());
        }
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path);
        }
        curve() {
            return "";
        }
        Sample() {
            return ((obj) => {
                obj.color = () => this.color();
                return obj;
            })(new this.$.$mol_plot_graph_sample);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_dot.prototype, "Curve", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_dot.prototype, "Sample", null);
    $.$mol_plot_dot = $mol_plot_dot;
})($ || ($ = {}));
//dot.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_dot extends $.$mol_plot_dot {
            points_visible() {
                const size = this.size_real();
                const radius = this.diameter() / 2;
                return this.points().filter(point => {
                    if (point[0] < -radius)
                        return false;
                    if (point[1] < -radius)
                        return false;
                    if (point[0] > size[0] + radius)
                        return false;
                    if (point[1] > size[1] + radius)
                        return false;
                    return true;
                });
            }
            curve() {
                const points = this.points_visible();
                if (points.length < 1)
                    return '';
                return points.map(point => 'M ' + point.join(' ') + ' v 0').join(' ');
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_dot.prototype, "points_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_dot.prototype, "curve", null);
        $$.$mol_plot_dot = $mol_plot_dot;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dot.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_chart_demo_simple extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_chart_demo_simple_title");
        }
        sub() {
            return [].concat(this.Chart());
        }
        Chart() {
            return ((obj) => {
                obj.graphs = () => [].concat(this.Vert_ruler(), this.Hor_ruler(), this.Plan(), this.Fact());
                return obj;
            })(new this.$.$mol_chart);
        }
        Vert_ruler() {
            return ((obj) => {
                obj.title = () => this.vert_title();
                return obj;
            })(new this.$.$mol_plot_ruler_vert);
        }
        vert_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_simple_vert_title");
        }
        Hor_ruler() {
            return ((obj) => {
                obj.title = () => this.hor_title();
                obj.series = () => this.plan();
                obj.label_text = (key) => this.hor_label_text(key);
                return obj;
            })(new this.$.$mol_plot_ruler_hor);
        }
        hor_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_simple_hor_title");
        }
        hor_label_text(key) {
            return "";
        }
        Plan() {
            return ((obj) => {
                obj.title = () => this.plan_title();
                obj.series = () => this.plan();
                return obj;
            })(new this.$.$mol_plot_bar);
        }
        plan_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_simple_plan_title");
        }
        plan() {
            return ({
                "january": 10,
                "february": 20,
                "march": 30,
                "april": 40,
            });
        }
        Fact() {
            return ((obj) => {
                obj.title = () => this.fact_title();
                obj.series = () => this.fact();
                obj.graphs = () => [].concat(this.Fact_line(), this.Fact_dots());
                return obj;
            })(new this.$.$mol_plot_group);
        }
        fact_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_simple_fact_title");
        }
        fact() {
            return ({
                "january": 5,
                "february": 10,
                "march": 30,
            });
        }
        Fact_line() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_plot_line);
        }
        Fact_dots() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_plot_dot);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Chart", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Vert_ruler", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Hor_ruler", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Plan", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Fact", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Fact_line", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Fact_dots", null);
    $.$mol_chart_demo_simple = $mol_chart_demo_simple;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chart_demo_simple extends $.$mol_chart_demo_simple {
            hor_label_text(key) {
                return key.replace(/^\w/, letter => letter.toUpperCase());
            }
        }
        $$.$mol_chart_demo_simple = $mol_chart_demo_simple;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_fill extends $.$mol_plot_graph {
        front() {
            return [];
        }
        sub() {
            return [].concat(this.Curve());
        }
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path);
        }
        curve() {
            return "";
        }
        Sample() {
            return ((obj) => {
                obj.color = () => this.color();
                return obj;
            })(new this.$.$mol_plot_graph_sample);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_fill.prototype, "Curve", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_fill.prototype, "Sample", null);
    $.$mol_plot_fill = $mol_plot_fill;
})($ || ($ = {}));
//fill.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_fill extends $.$mol_plot_fill {
            curve() {
                const shift = this.shift();
                const points = this.points();
                if (points.length < 1)
                    return '';
                const main = points.map(point => 'L ' + point.join(' ')).join(' ');
                return `M ${points[0].join(' ')} ${main} V ${shift[1]} H ${points[0][0]}`;
            }
            back() {
                return [this];
            }
        }
        $$.$mol_plot_fill = $mol_plot_fill;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//fill.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_chart_demo_styles extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_chart_demo_styles_title");
        }
        samples_count() {
            return 15;
        }
        sub() {
            return [].concat(this.Chart());
        }
        Chart() {
            return ((obj) => {
                obj.graphs = () => [].concat(this.Energy(), this.Day(), this.Receipts(), this.Receipts_confirmed(), this.Maximum(), this.Waste(), this.Purchases(), this.Taxes());
                return obj;
            })(new this.$.$mol_chart);
        }
        Energy() {
            return ((obj) => {
                obj.title = () => this.energy_title();
                return obj;
            })(new this.$.$mol_plot_ruler_vert);
        }
        energy_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_styles_energy_title");
        }
        Day() {
            return ((obj) => {
                obj.title = () => this.day_title();
                obj.series = () => this.series_1();
                return obj;
            })(new this.$.$mol_plot_ruler_hor);
        }
        day_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_styles_day_title");
        }
        series_1() {
            return [];
        }
        Receipts() {
            return ((obj) => {
                obj.title = () => this.receipts_title();
                obj.series = () => this.series_2();
                return obj;
            })(new this.$.$mol_plot_bar);
        }
        receipts_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_styles_receipts_title");
        }
        series_2() {
            return [];
        }
        Receipts_confirmed() {
            return ((obj) => {
                obj.title = () => this.receipts_confirmed_title();
                obj.series = () => this.series_3();
                return obj;
            })(new this.$.$mol_plot_bar);
        }
        receipts_confirmed_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_styles_receipts_confirmed_title");
        }
        series_3() {
            return [];
        }
        Maximum() {
            return ((obj) => {
                obj.title = () => this.maximum_title();
                obj.series = () => this.series_1();
                return obj;
            })(new this.$.$mol_plot_dot);
        }
        maximum_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_styles_maximum_title");
        }
        Waste() {
            return ((obj) => {
                obj.type = () => "dashed";
                obj.title = () => this.waste_title();
                obj.series = () => this.series_4();
                return obj;
            })(new this.$.$mol_plot_line);
        }
        waste_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_styles_waste_title");
        }
        series_4() {
            return [];
        }
        Purchases() {
            return ((obj) => {
                obj.title = () => this.purchases_title();
                obj.series = () => this.series_5();
                obj.graphs = () => [].concat(this.Purchases_fill(), this.Purchases_line(), this.Purchases_dots());
                return obj;
            })(new this.$.$mol_plot_group);
        }
        purchases_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_styles_purchases_title");
        }
        series_5() {
            return [];
        }
        Purchases_fill() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_plot_fill);
        }
        Purchases_line() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_plot_line);
        }
        Purchases_dots() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_plot_dot);
        }
        Taxes() {
            return ((obj) => {
                obj.title = () => this.taxes_title();
                obj.series = () => this.series_6();
                obj.graphs = () => [].concat(this.Taxes_fill(), this.Taxes_line(), this.Taxes_dots());
                return obj;
            })(new this.$.$mol_plot_group);
        }
        taxes_title() {
            return this.$.$mol_locale.text("$mol_chart_demo_styles_taxes_title");
        }
        series_6() {
            return [];
        }
        Taxes_fill() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_plot_fill);
        }
        Taxes_line() {
            return ((obj) => {
                obj.type = () => "dashed";
                return obj;
            })(new this.$.$mol_plot_line);
        }
        Taxes_dots() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_plot_dot);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Chart", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Energy", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Day", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Receipts", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Receipts_confirmed", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Maximum", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Waste", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Purchases", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Purchases_fill", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Purchases_line", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Purchases_dots", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Taxes", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Taxes_fill", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Taxes_line", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Taxes_dots", null);
    $.$mol_chart_demo_styles = $mol_chart_demo_styles;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chart_demo_styles extends $.$mol_chart_demo_styles {
            series() {
                const next = [];
                const shift = 10;
                const limit = shift + this.samples_count();
                for (let i = shift; i < limit; ++i) {
                    next[i] = Number((6.5 + Math.sin(8 * i / limit)).toFixed(3));
                }
                return next;
            }
            series_1() {
                return this.series().map(val => (val - 1).toFixed(3)).map(Number);
            }
            series_2() {
                return this.series().map(val => (val - 2).toFixed(3)).map(Number);
            }
            series_3() {
                return this.series().map(val => (val - 3).toFixed(3)).map(Number);
            }
            series_4() {
                return this.series().map(val => (val - 4).toFixed(3)).map(Number);
            }
            series_5() {
                return this.series().map(val => (val - 5).toFixed(3)).map(Number);
            }
            series_6() {
                return this.series().map(val => (val - 6).toFixed(3)).map(Number);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_1", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_2", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_3", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_4", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_5", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_6", null);
        $$.$mol_chart_demo_styles = $mol_chart_demo_styles;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_box_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_check_box_demo_title");
        }
        sub() {
            return [].concat(this.Labeled_base(), this.Labeled_checked(), this.Labeled_disabled(), this.Alone_base(), this.Alone_checked(), this.Alone_disabled());
        }
        Labeled_base() {
            return ((obj) => {
                obj.checked = (val) => this.base_checked(val);
                obj.title = () => this.c1Label();
                return obj;
            })(new this.$.$mol_check_box);
        }
        base_checked(val, force) {
            return (val !== void 0) ? val : false;
        }
        c1Label() {
            return this.$.$mol_locale.text("$mol_check_box_demo_c1Label");
        }
        Labeled_checked() {
            return ((obj) => {
                obj.title = () => this.c2Label();
                obj.checked = (val) => this.checked_checked(val);
                return obj;
            })(new this.$.$mol_check_box);
        }
        c2Label() {
            return this.$.$mol_locale.text("$mol_check_box_demo_c2Label");
        }
        checked_checked(val, force) {
            return (val !== void 0) ? val : true;
        }
        Labeled_disabled() {
            return ((obj) => {
                obj.title = () => this.c6Label();
                obj.checked = () => true;
                obj.enabled = () => false;
                return obj;
            })(new this.$.$mol_check_box);
        }
        c6Label() {
            return this.$.$mol_locale.text("$mol_check_box_demo_c6Label");
        }
        Alone_base() {
            return ((obj) => {
                obj.checked = (val) => this.base_checked(val);
                return obj;
            })(new this.$.$mol_check_box);
        }
        Alone_checked() {
            return ((obj) => {
                obj.checked = (val) => this.checked_checked(val);
                return obj;
            })(new this.$.$mol_check_box);
        }
        Alone_disabled() {
            return ((obj) => {
                obj.checked = () => true;
                obj.enabled = () => false;
                return obj;
            })(new this.$.$mol_check_box);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Labeled_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "base_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Labeled_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "checked_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Labeled_disabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Alone_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Alone_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Alone_disabled", null);
    $.$mol_check_box_demo = $mol_check_box_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_expand_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_check_expand_demo_title");
        }
        sub() {
            return [].concat(this.Labeled_base(), this.Labeled_expanded(), this.Empty_base(), this.Empty_expanded(), this.Disabled());
        }
        Labeled_base() {
            return ((obj) => {
                obj.checked = (val) => this.base_expanded(val);
                obj.title = () => this.c1Label();
                return obj;
            })(new this.$.$mol_check_expand);
        }
        base_expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        c1Label() {
            return this.$.$mol_locale.text("$mol_check_expand_demo_c1Label");
        }
        Labeled_expanded() {
            return ((obj) => {
                obj.title = () => this.c2Label();
                obj.checked = (val) => this.expanded_expanded(val);
                return obj;
            })(new this.$.$mol_check_expand);
        }
        c2Label() {
            return this.$.$mol_locale.text("$mol_check_expand_demo_c2Label");
        }
        expanded_expanded(val, force) {
            return (val !== void 0) ? val : true;
        }
        Empty_base() {
            return ((obj) => {
                obj.checked = (val) => this.base_expanded(val);
                return obj;
            })(new this.$.$mol_check_expand);
        }
        Empty_expanded() {
            return ((obj) => {
                obj.checked = (val) => this.expanded_expanded(val);
                return obj;
            })(new this.$.$mol_check_expand);
        }
        Disabled() {
            return ((obj) => {
                obj.title = () => this.c5Label();
                obj.disabled = () => true;
                return obj;
            })(new this.$.$mol_check_expand);
        }
        c5Label() {
            return this.$.$mol_locale.text("$mol_check_expand_demo_c5Label");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "Labeled_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "base_expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "Labeled_expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "expanded_expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "Empty_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "Empty_expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "Disabled", null);
    $.$mol_check_expand_demo = $mol_check_expand_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $.$mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_microphone extends $.$mol_icon {
        path() {
            return "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z";
        }
    }
    $.$mol_icon_microphone = $mol_icon_microphone;
})($ || ($ = {}));
//microphone.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_icon_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_check_icon_demo_title");
        }
        sub() {
            return [].concat(this.Base(), this.Checked(), this.Disabled());
        }
        Base() {
            return ((obj) => {
                obj.Icon = () => this.Base_icon();
                obj.checked = (val) => this.base_checked(val);
                return obj;
            })(new this.$.$mol_check_icon);
        }
        Base_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_microphone);
        }
        base_checked(val, force) {
            return (val !== void 0) ? val : false;
        }
        Checked() {
            return ((obj) => {
                obj.Icon = () => this.Checked_icon();
                obj.checked = (val) => this.checked_checked(val);
                return obj;
            })(new this.$.$mol_check_icon);
        }
        Checked_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_microphone);
        }
        checked_checked(val, force) {
            return (val !== void 0) ? val : true;
        }
        Disabled() {
            return ((obj) => {
                obj.Icon = () => this.Disabled_icon();
                obj.checked = () => true;
                obj.enabled = () => false;
                return obj;
            })(new this.$.$mol_check_box);
        }
        Disabled_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_microphone);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Base", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Base_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "base_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Checked_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "checked_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Disabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Disabled_icon", null);
    $.$mol_check_icon_demo = $mol_check_icon_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_pop extends $.$mol_view {
        showed(val, force) {
            return (val !== void 0) ? val : false;
        }
        plugins() {
            return [].concat(this.Meter());
        }
        top() {
            return this.Meter().top();
        }
        bottom() {
            return this.Meter().bottom();
        }
        left() {
            return this.Meter().left();
        }
        right() {
            return this.Meter().right();
        }
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter);
        }
        sub() {
            return [].concat(this.Anchor(), this.Bubble());
        }
        Anchor() {
            return null;
        }
        Bubble() {
            return ((obj) => {
                obj.align = () => this.align();
                obj.content = () => this.bubble_content();
                obj.height_max = () => this.height_max();
                return obj;
            })(new this.$.$mol_pop_bubble);
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
})($ || ($ = {}));
(function ($) {
    class $mol_pop_bubble extends $.$mol_scroll {
        sub() {
            return this.content();
        }
        content() {
            return [];
        }
        style() {
            return (Object.assign({}, super.style(), { "maxHeight": this.height_max() }));
        }
        height_max() {
            return 9999;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_pop_align": this.align(), "tabindex": 0 }));
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//pop.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            sub() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                return this.$.$mol_window.size().height * 0.33;
            }
            align() {
                const viewport = this.$.$mol_window.size();
                const vert = this.top() > (viewport.height - this.bottom()) ? 'top' : 'bottom';
                const hor = this.left() > (viewport.width - this.right()) ? 'left' : 'right';
                return `${vert}_${hor}`;
            }
        }
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pop.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_nav extends $.$mol_plugin {
        cycle(val, force) {
            return (val !== void 0) ? val : false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val, force) {
            return (val !== void 0) ? val : [];
        }
        keys_y(val, force) {
            return (val !== void 0) ? val : [];
        }
        current_x(val, force) {
            return (val !== void 0) ? val : "";
        }
        current_y(val, force) {
            return (val !== void 0) ? val : "";
        }
        event_up(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_down(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_left(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_right(event, force) {
            return (event !== void 0) ? event : null;
        }
        event() {
            return (Object.assign({}, super.event(), { "keydown": (event) => this.event_key(event) }));
        }
        event_key(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//nav.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case 38: return this.event_up(event);
                    case 40: return this.event_down(event);
                    case 37: return this.event_left(event);
                    case 39: return this.event_right(event);
                    case 33: return this.event_up(event);
                    case 34: return this.event_down(event);
                }
            }
            event_up(event) {
                const keys = this.keys_y();
                if (keys.length < 2)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                const keys = this.keys_y();
                if (keys.length < 2)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                const keys = this.keys_x();
                if (keys.length < 2)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                const keys = this.keys_x();
                if (keys.length < 2)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//nav.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//text.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_select extends $.$mol_pop {
        dictionary() {
            return ({});
        }
        options() {
            return [];
        }
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        minimal_height() {
            return 40;
        }
        Option_row(id) {
            return ((obj) => {
                obj.event_click = (event) => this.event_select(id, event);
                obj.sub = () => this.option_content(id);
                return obj;
            })(new this.$.$mol_button_minor);
        }
        event_select(id, event, force) {
            return (event !== void 0) ? event : null;
        }
        option_content(id) {
            return [].concat(this.Option_label(id));
        }
        Option_label(id) {
            return ((obj) => {
                obj.minimal_height = () => 40;
                obj.haystack = () => this.option_label(id);
                obj.needle = () => this.filter_pattern();
                return obj;
            })(new this.$.$mol_dimmer);
        }
        option_label(id) {
            return "";
        }
        filter_pattern(val, force) {
            return (val !== void 0) ? val : "";
        }
        No_options() {
            return ((obj) => {
                obj.sub = () => [].concat(this.no_options_message());
                return obj;
            })(new this.$.$mol_view);
        }
        no_options_message() {
            return this.$.$mol_locale.text("$mol_select_no_options_message");
        }
        plugins() {
            return [].concat(this.Nav());
        }
        Nav() {
            return ((obj) => {
                obj.keys_y = () => this.nav_components();
                obj.current_y = (component) => this.option_focused(component);
                obj.cycle = (val) => this.nav_cycle(val);
                return obj;
            })(new this.$.$mol_nav);
        }
        nav_components() {
            return [].concat(this.Filter(), this.option_rows());
        }
        option_focused(component, force) {
            return (component !== void 0) ? component : null;
        }
        nav_cycle(val, force) {
            return (val !== void 0) ? val : true;
        }
        showed() {
            return this.options_showed();
        }
        options_showed() {
            return false;
        }
        Anchor() {
            return this.Trigger();
        }
        Trigger() {
            return ((obj) => {
                obj.sub = () => this.trigger_content();
                return obj;
            })(new this.$.$mol_button_minor);
        }
        trigger_content() {
            return [].concat(this.option_content_current(), this.Filter(), this.Trigger_icon());
        }
        option_content_current() {
            return [];
        }
        Filter() {
            return ((obj) => {
                obj.value = (val) => this.filter_pattern(val);
                obj.hint = () => this.filter_hint();
                obj.debounce = () => this.debounce();
                return obj;
            })(new this.$.$mol_string);
        }
        filter_hint() {
            return this.hint();
        }
        hint() {
            return this.$.$mol_locale.text("$mol_select_hint");
        }
        debounce() {
            return 200;
        }
        Trigger_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron);
        }
        bubble_content() {
            return [].concat(this.Bubble_content());
        }
        Bubble_content() {
            return ((obj) => {
                obj.rows = () => [].concat(this.Filter(), this.option_rows());
                return obj;
            })(new this.$.$mol_list);
        }
        option_rows() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Trigger", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Bubble_content", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//select.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                if (!this.focused())
                    return '';
                return next || '';
            }
            options_showed() {
                const showed = this.focused() || this.filter_pattern().length > 0;
                if (showed && this.Filter())
                    new $.$mol_defer(() => this.Filter().focused(true));
                return showed;
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($.$mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options.splice(index, 1);
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return value == null ? id : value;
            }
            option_rows() {
                if (this.options_filtered().length === 0)
                    return [this.No_options()];
                let options = this.options_filtered().map((option) => this.Option_row(option));
                return options;
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return this.Filter();
                }
                if (this.options_showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.focused(false);
            }
            nav_components() {
                return [this.Filter(), ...this.option_rows()];
            }
            option_content_current() {
                return this.option_content(this.value());
            }
            trigger_content() {
                return (!this.value() && this.Filter())
                    ? [this.Filter()]
                    : [...this.option_content_current(), this.Trigger_icon()];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options_showed", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//select.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $.$mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_search extends $.$mol_bar {
        query(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return [].concat(this.Suggest(), this.Clear());
        }
        Suggest() {
            return ((obj) => {
                obj.value = (val) => this.suggest_selected(val);
                obj.filter_pattern = (val) => this.suggest_selected(val);
                obj.hint = () => this.hint();
                obj.filter_pattern = (val) => this.query(val);
                obj.options_showed = () => this.suggests_showed();
                obj.options = () => this.suggests();
                obj.Trigger_icon = () => null;
                obj.debounce = () => this.debounce();
                return obj;
            })(new this.$.$mol_select);
        }
        suggest_selected(val, force) {
            return (val !== void 0) ? val : "";
        }
        hint() {
            return this.$.$mol_locale.text("$mol_search_hint");
        }
        suggests_showed() {
            return false;
        }
        suggests() {
            return [];
        }
        debounce() {
            return 200;
        }
        Clear() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Clear_icon());
                obj.event_click = (val) => this.event_clear(val);
                return obj;
            })(new this.$.$mol_button_minor);
        }
        Clear_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross);
        }
        event_clear(val, force) {
            return (val !== void 0) ? val : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "suggest_selected", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "event_clear", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//search.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            suggests_showed() {
                if (!this.focused())
                    return false;
                return this.suggests().length > 1;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.Suggest().Filter().focused(true);
                this.query(next);
            }
            sub() {
                return [
                    this.Suggest(),
                    ...(this.query().length > 0) ? [this.Clear()] : [],
                ];
            }
            event_clear(event) {
                this.query('');
            }
        }
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//search.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_code extends $.$mol_view {
        sub() {
            return [].concat(this.Manual(), this.Scan());
        }
        Manual() {
            return ((obj) => {
                obj.query = (val) => this.value(val);
                obj.hint = () => this.hint();
                obj.debounce = () => this.debounce();
                return obj;
            })(new this.$.$mol_search);
        }
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        hint() {
            return this.format();
        }
        format() {
            return "";
        }
        debounce() {
            return 200;
        }
        Scan() {
            return ((obj) => {
                obj.event_click = (val) => this.event_scan(val);
                obj.sub = () => [].concat(this.scan_label());
                return obj;
            })(new this.$.$mol_button);
        }
        event_scan(val, force) {
            return (val !== void 0) ? val : null;
        }
        scan_label() {
            return this.$.$mol_locale.text("$mol_code_scan_label");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_code.prototype, "Manual", null);
    __decorate([
        $.$mol_mem
    ], $mol_code.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_code.prototype, "Scan", null);
    __decorate([
        $.$mol_mem
    ], $mol_code.prototype, "event_scan", null);
    $.$mol_code = $mol_code;
})($ || ($ = {}));
//code.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_code extends $.$mol_code {
            scan_support() {
                return Boolean($.$mol_cordova.plugins.barcodeScanner);
            }
            Scan() {
                return this.scan_support() ? super.Scan() : null;
            }
            event_scan() {
                $.$mol_cordova.plugins.barcodeScanner.scan((result) => {
                    if (result.cancelled)
                        return;
                    this.value(result.text);
                }, (error) => {
                    alert("Scanning failed: " + error);
                });
            }
        }
        $$.$mol_code = $mol_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_code_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_code_demo_title");
        }
        sub() {
            return [].concat(this.Qr(), this.Matrix(), this.Upc_e(), this.Upc_a(), this.Ean_8(), this.Ean_13(), this.Code_128(), this.Code_39(), this.Itf());
        }
        Qr() {
            return ((obj) => {
                obj.format = () => "QR_CODE";
                return obj;
            })(new this.$.$mol_code);
        }
        Matrix() {
            return ((obj) => {
                obj.format = () => "DATA_MATRIX";
                return obj;
            })(new this.$.$mol_code);
        }
        Upc_e() {
            return ((obj) => {
                obj.format = () => "UPC_E";
                return obj;
            })(new this.$.$mol_code);
        }
        Upc_a() {
            return ((obj) => {
                obj.format = () => "UPC_A";
                return obj;
            })(new this.$.$mol_code);
        }
        Ean_8() {
            return ((obj) => {
                obj.format = () => "EAN_8";
                return obj;
            })(new this.$.$mol_code);
        }
        Ean_13() {
            return ((obj) => {
                obj.format = () => "EAN_13";
                return obj;
            })(new this.$.$mol_code);
        }
        Code_128() {
            return ((obj) => {
                obj.format = () => "CODE_128";
                return obj;
            })(new this.$.$mol_code);
        }
        Code_39() {
            return ((obj) => {
                obj.format = () => "CODE_39";
                return obj;
            })(new this.$.$mol_code);
        }
        Itf() {
            return ((obj) => {
                obj.format = () => "ITF";
                return obj;
            })(new this.$.$mol_code);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Qr", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Matrix", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Upc_e", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Upc_a", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Ean_8", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Ean_13", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Code_128", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Code_39", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Itf", null);
    $.$mol_code_demo = $mol_code_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_try(handler) {
        try {
            return handler();
        }
        catch (error) {
            return error;
        }
    }
    $.$mol_try = $mol_try;
})($ || ($ = {}));
//try.node.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_date extends $.$mol_pop {
        Anchor() {
            return this.Input();
        }
        Input() {
            return ((obj) => {
                obj.value = (val) => this.value(val);
                obj.hint = () => this.hint();
                obj.length_max = () => 10;
                return obj;
            })(new this.$.$mol_string);
        }
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        hint() {
            return "YYYY-MM-DD";
        }
        bubble_content() {
            return [].concat(this.Calendar());
        }
        Calendar() {
            return ((obj) => {
                obj.month_string = () => this.value();
                obj.day_selected = (day) => this.day_selected(day);
                obj.day_click = (day, event) => this.day_click(day, event);
                return obj;
            })(new this.$.$mol_date_calendar);
        }
        day_selected(day) {
            return false;
        }
        day_click(day, event, force) {
            return (event !== void 0) ? event : null;
        }
        value_number(val, force) {
            return (val !== void 0) ? val : NaN;
        }
        value_moment(val, force) {
            return (val !== void 0) ? val : ((obj) => {
                return obj;
            })(new this.$.$mol_time_moment);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "Input", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "Calendar", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_date.prototype, "day_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "value_number", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "value_moment", null);
    $.$mol_date = $mol_date;
})($ || ($ = {}));
(function ($) {
    class $mol_date_calendar extends $.$mol_calendar {
        day_content(day) {
            return [].concat(this.Day_button(day));
        }
        Day_button(day) {
            return ((obj) => {
                obj.title = () => this.day_text(day);
                obj.event_click = (event) => this.day_click(day, event);
                return obj;
            })(new this.$.$mol_button);
        }
        day_click(day, event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_date_calendar.prototype, "Day_button", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_date_calendar.prototype, "day_click", null);
    $.$mol_date_calendar = $mol_date_calendar;
})($ || ($ = {}));
//date.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_date extends $.$mol_date {
            value(val) {
                if (val === '')
                    val = null;
                const moment1 = $.$mol_try(() => val && new $.$mol_time_moment(val.replace(/-$/, '')));
                if (moment1 instanceof Error)
                    return val;
                const moment2 = this.value_moment(moment1);
                return moment2 && moment2.toString('YYYY-MM-DD');
            }
            value_moment(val) {
                const stamp = this.value_number(val && val.valueOf());
                return isNaN(stamp) ? null : new $.$mol_time_moment(stamp);
            }
            showed(next) {
                const moment = $.$mol_try(() => new $.$mol_time_moment(this.value()));
                if (moment instanceof Error)
                    return false;
                if (moment.year === undefined)
                    return false;
                if (moment.month === undefined)
                    return false;
                if (!this.focused(next))
                    return false;
                return true;
            }
            day_selected(day) {
                return this.value() === day;
            }
            day_click(day) {
                this.value(day);
                this.showed(false);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_date.prototype, "value", null);
        __decorate([
            $.$mol_mem
        ], $mol_date.prototype, "value_moment", null);
        $$.$mol_date = $mol_date;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//date.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_date_demo extends $.$mol_demo_small {
        sub() {
            return [].concat(this.View());
        }
        View() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Date(), this.Formatted());
                return obj;
            })(new this.$.$mol_view);
        }
        Date() {
            return ((obj) => {
                obj.value_moment = (val) => this.date(val);
                return obj;
            })(new this.$.$mol_date);
        }
        date(val, force) {
            return (val !== void 0) ? val : ((obj) => {
                return obj;
            })(new this.$.$mol_time_moment);
        }
        Formatted() {
            return ((obj) => {
                obj.sub = () => [].concat(this.formatted());
                return obj;
            })(new this.$.$mol_view);
        }
        formatted() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_date_demo.prototype, "View", null);
    __decorate([
        $.$mol_mem
    ], $mol_date_demo.prototype, "Date", null);
    __decorate([
        $.$mol_mem
    ], $mol_date_demo.prototype, "date", null);
    __decorate([
        $.$mol_mem
    ], $mol_date_demo.prototype, "Formatted", null);
    $.$mol_date_demo = $mol_date_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_date_demo extends $.$mol_date_demo {
            formatted() {
                return this.date() && this.date().toString('DD Month YYYY');
            }
        }
        $$.$mol_date_demo = $mol_date_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_switch extends $.$mol_view {
        minimal_height() {
            return 40;
        }
        Option(id) {
            return ((obj) => {
                obj.checked = (val) => this.option_checked(id, val);
                obj.title = () => this.option_title(id);
                obj.enabled = () => this.option_enabled(id);
                return obj;
            })(new this.$.$mol_check);
        }
        option_checked(id, val, force) {
            return (val !== void 0) ? val : false;
        }
        option_title(id) {
            return "";
        }
        option_enabled(id) {
            return this.enabled();
        }
        enabled() {
            return true;
        }
        value(val, force) {
            return (val !== void 0) ? val : null;
        }
        options() {
            return ({});
        }
        sub() {
            return this.items();
        }
        items() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_switch.prototype, "Option", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_switch.prototype, "option_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_switch.prototype, "value", null);
    $.$mol_switch = $mol_switch;
})($ || ($ = {}));
//switch.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $.$mol_state_session.value(`${this}.value()`, next);
            }
            options() {
                return {};
            }
            items() {
                return Object.keys(this.options()).map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key];
            }
            option_checked(key, next) {
                if (next === void 0)
                    return this.value() == key;
                this.value(next ? key : null);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_switch.prototype, "items", null);
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//switch.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_deck extends $.$mol_list {
        items() {
            return [].concat(({
                "title": "",
                "Content": ((obj) => {
                    return obj;
                })(new this.$.$mol_view),
            }));
        }
        rows() {
            return [].concat(this.Switch(), this.Content());
        }
        Switch() {
            return ((obj) => {
                obj.value = (val) => this.current(val);
                obj.options = () => this.switch_options();
                return obj;
            })(new this.$.$mol_switch);
        }
        current(val, force) {
            return (val !== void 0) ? val : "0";
        }
        switch_options() {
            return ({});
        }
        Content() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_deck.prototype, "items", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck.prototype, "Switch", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck.prototype, "current", null);
    $.$mol_deck = $mol_deck;
})($ || ($ = {}));
//deck.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_deck extends $.$mol_deck {
            current(next) {
                return $.$mol_state_session.value(`${this}.current()`, next) || '0';
            }
            switch_options() {
                let options = {};
                this.items().forEach((item, index) => {
                    options[String(index)] = item.title;
                });
                return options;
            }
            Content() {
                return this.items()[this.current()].Content;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_deck.prototype, "Content", null);
        $$.$mol_deck = $mol_deck;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//deck.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_deck_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_deck_demo_title");
        }
        sub() {
            return [].concat(this.Deck());
        }
        Deck() {
            return ((obj) => {
                obj.items = () => [].concat(this.greeterItem(), this.questerItem(), this.commanderItem());
                return obj;
            })(new this.$.$mol_deck);
        }
        greeterItem() {
            return ({
                "title": this.greeterLabel(),
                "Content": this.greeterContent(),
            });
        }
        greeterLabel() {
            return this.$.$mol_locale.text("$mol_deck_demo_greeterLabel");
        }
        greeterContent() {
            return ((obj) => {
                obj.sub = () => [].concat(this.greeterMessager());
                return obj;
            })(new this.$.$mol_row);
        }
        greeterMessager() {
            return ((obj) => {
                obj.sub = () => [].concat(this.greeterMessage());
                return obj;
            })(new this.$.$mol_view);
        }
        greeterMessage() {
            return this.$.$mol_locale.text("$mol_deck_demo_greeterMessage");
        }
        questerItem() {
            return ({
                "title": this.questerLabel(),
                "Content": this.questerContent(),
            });
        }
        questerLabel() {
            return this.$.$mol_locale.text("$mol_deck_demo_questerLabel");
        }
        questerContent() {
            return ((obj) => {
                obj.sub = () => [].concat(this.questerMessager());
                return obj;
            })(new this.$.$mol_row);
        }
        questerMessager() {
            return ((obj) => {
                obj.sub = () => [].concat(this.questerMessage());
                return obj;
            })(new this.$.$mol_view);
        }
        questerMessage() {
            return this.$.$mol_locale.text("$mol_deck_demo_questerMessage");
        }
        commanderItem() {
            return ({
                "title": this.commanderLabel(),
                "Content": this.commanderContent(),
            });
        }
        commanderLabel() {
            return this.$.$mol_locale.text("$mol_deck_demo_commanderLabel");
        }
        commanderContent() {
            return ((obj) => {
                obj.sub = () => [].concat(this.commanderMessager());
                return obj;
            })(new this.$.$mol_row);
        }
        commanderMessager() {
            return ((obj) => {
                obj.sub = () => [].concat(this.commanderMessage());
                return obj;
            })(new this.$.$mol_view);
        }
        commanderMessage() {
            return this.$.$mol_locale.text("$mol_deck_demo_commanderMessage");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_deck_demo.prototype, "Deck", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck_demo.prototype, "greeterContent", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck_demo.prototype, "greeterMessager", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck_demo.prototype, "questerContent", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck_demo.prototype, "questerMessager", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck_demo.prototype, "commanderContent", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck_demo.prototype, "commanderMessager", null);
    $.$mol_deck_demo = $mol_deck_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_dimmer_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_dimmer_demo_title");
        }
        sub() {
            return [].concat(this.one(), this.two(), this.three(), this.four(), this.five(), this.six());
        }
        one() {
            return ((obj) => {
                obj.haystack = () => "Don't put all your eggs in one basket";
                obj.needle = () => "eggs";
                return obj;
            })(new this.$.$mol_dimmer);
        }
        two() {
            return ((obj) => {
                obj.haystack = () => "Don't look a gift horse in the mouth.";
                obj.needle = () => "oo";
                return obj;
            })(new this.$.$mol_dimmer);
        }
        three() {
            return ((obj) => {
                obj.haystack = () => "There is no word you are looking for";
                obj.needle = () => "luck";
                return obj;
            })(new this.$.$mol_dimmer);
        }
        four() {
            return ((obj) => {
                obj.haystack = () => "ooAAooAAoo";
                obj.needle = () => "oo";
                return obj;
            })(new this.$.$mol_dimmer);
        }
        five() {
            return ((obj) => {
                obj.haystack = () => "Let's search this string";
                obj.needle = () => "Let's search this string";
                return obj;
            })(new this.$.$mol_dimmer);
        }
        six() {
            return ((obj) => {
                obj.haystack = () => "Let's search nothing";
                obj.needle = () => "";
                return obj;
            })(new this.$.$mol_dimmer);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "one", null);
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "two", null);
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "three", null);
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "four", null);
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "five", null);
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "six", null);
    $.$mol_dimmer_demo = $mol_dimmer_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_expander extends $.$mol_list {
        rows() {
            return [].concat(this.Label(), this.Content());
        }
        Label() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Trigger(), this.tools());
                return obj;
            })(new this.$.$mol_view);
        }
        Trigger() {
            return ((obj) => {
                obj.checked = (val) => this.expanded(val);
                obj.label = () => this.label();
                return obj;
            })(new this.$.$mol_check_expand);
        }
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        label() {
            return [].concat(this.title());
        }
        tools() {
            return [];
        }
        Content() {
            return ((obj) => {
                obj.sub = () => this.content();
                return obj;
            })(new this.$.$mol_view);
        }
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "Label", null);
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "Trigger", null);
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "Content", null);
    $.$mol_expander = $mol_expander;
})($ || ($ = {}));
//expander.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
        }
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expander.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_filler extends $.$mol_view {
        minimal_height() {
            return 500;
        }
        sub() {
            return [].concat("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.", "Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.", "Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.", "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.", "Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.", "Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.", "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel.");
        }
    }
    $.$mol_filler = $mol_filler;
})($ || ($ = {}));
//filler.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_expander_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_expander_demo_title");
        }
        sub() {
            return [].concat(this.Expander());
        }
        Expander() {
            return ((obj) => {
                obj.title = () => "Lorem Ipsum";
                obj.Content = () => ((obj) => {
                    return obj;
                })(new this.$.$mol_filler);
                return obj;
            })(new this.$.$mol_expander);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_expander_demo.prototype, "Expander", null);
    $.$mol_expander_demo = $mol_expander_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_float_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_float_demo_title");
        }
        sub() {
            return [].concat(this.Scroll());
        }
        Scroll() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Head(), this.content());
                return obj;
            })(new this.$.$mol_scroll);
        }
        Head() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Head_card());
                return obj;
            })(new this.$.$mol_float);
        }
        Head_card() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Head_row());
                return obj;
            })(new this.$.$mol_card);
        }
        Head_row() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Head_content());
                return obj;
            })(new this.$.$mol_row);
        }
        Head_content() {
            return ((obj) => {
                obj.sub = () => [].concat("Float header");
                return obj;
            })(new this.$.$mol_view);
        }
        content() {
            return [].concat(this.Content());
        }
        Content() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Filler1(), this.Filler2());
                return obj;
            })(new this.$.$mol_row);
        }
        Filler1() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_filler);
        }
        Filler2() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_filler);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Scroll", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Head_card", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Head_row", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Head_content", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Filler1", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Filler2", null);
    $.$mol_float_demo = $mol_float_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_form extends $.$mol_view {
        submit_blocked() {
            return false;
        }
        sub() {
            return [].concat(this.Bar_fields(), this.Bar_buttons());
        }
        Bar_fields() {
            return ((obj) => {
                obj.sub = () => this.form_fields();
                return obj;
            })(new this.$.$mol_view);
        }
        form_fields() {
            return [];
        }
        Bar_buttons() {
            return ((obj) => {
                obj.sub = () => this.buttons();
                return obj;
            })(new this.$.$mol_row);
        }
        buttons() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_fields", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_buttons", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//form.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            submit_blocked() {
                return this.form_fields().some(field => field.bid());
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_form.prototype, "submit_blocked", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//form.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_labeler extends $.$mol_view {
        sub() {
            return [].concat(this.Title(), this.Content());
        }
        Title() {
            return ((obj) => {
                obj.sub = () => this.label();
                return obj;
            })(new this.$.$mol_view);
        }
        label() {
            return [].concat(this.title());
        }
        Content() {
            return ((obj) => {
                obj.sub = () => [].concat(this.content());
                return obj;
            })(new this.$.$mol_view);
        }
        content() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//labeler.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_form_field extends $.$mol_labeler {
        label() {
            return [].concat(this.name(), this.Bid());
        }
        name() {
            return "";
        }
        Bid() {
            return ((obj) => {
                obj.sub = () => [].concat(this.bid());
                return obj;
            })(new this.$.$mol_view);
        }
        bid() {
            return "";
        }
        Content() {
            return this.control();
        }
        control() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//field.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_form_demo extends $.$mol_demo_small {
        sub() {
            return [].concat(this.Form());
        }
        submit_blocked() {
            return this.Form().submit_blocked();
        }
        Form() {
            return ((obj) => {
                obj.title = () => this.$.$mol_locale.text("$mol_form_demo_Form");
                obj.form_fields = () => [].concat(this.loginField(), this.passwordField());
                obj.buttons = () => [].concat(this.submit());
                return obj;
            })(new this.$.$mol_form);
        }
        loginField() {
            return ((obj) => {
                obj.name = () => this.loginLabel();
                obj.control = () => this.loginControl();
                return obj;
            })(new this.$.$mol_form_field);
        }
        loginLabel() {
            return this.$.$mol_locale.text("$mol_form_demo_loginLabel");
        }
        loginControl() {
            return ((obj) => {
                obj.value = (val) => this.login(val);
                return obj;
            })(new this.$.$mol_string);
        }
        login(val, force) {
            return (val !== void 0) ? val : "";
        }
        passwordField() {
            return ((obj) => {
                obj.name = () => this.passwordLabel();
                obj.control = () => this.passControl();
                return obj;
            })(new this.$.$mol_form_field);
        }
        passwordLabel() {
            return this.$.$mol_locale.text("$mol_form_demo_passwordLabel");
        }
        passControl() {
            return ((obj) => {
                obj.value = (val) => this.password(val);
                obj.type = () => "password";
                return obj;
            })(new this.$.$mol_string);
        }
        password(val, force) {
            return (val !== void 0) ? val : "";
        }
        submit() {
            return ((obj) => {
                obj.sub = () => [].concat(this.submit_text());
                obj.event_click = (val) => this.event_submit(val);
                obj.disabled = () => this.submit_blocked();
                return obj;
            })(new this.$.$mol_button_major);
        }
        submit_text() {
            return this.$.$mol_locale.text("$mol_form_demo_submit_text");
        }
        event_submit(val, force) {
            return (val !== void 0) ? val : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form_demo.prototype, "Form", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo.prototype, "loginField", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo.prototype, "loginControl", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo.prototype, "login", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo.prototype, "passwordField", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo.prototype, "passControl", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo.prototype, "password", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo.prototype, "event_submit", null);
    $.$mol_form_demo = $mol_form_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_range_in(source) {
        return new $mol_range_lazy(source);
    }
    $.$mol_range_in = $mol_range_in;
    class $mol_range_common {
        item(id) {
            return;
        }
        get length() {
            return 0;
        }
        get '0'() {
            throw new Error('Direct access to items not supported. Use item( id : number ) method instead.');
        }
        forEach(handle) {
            const length = this.length;
            for (let i = 0; i < length; ++i) {
                handle(this.item(i), i);
            }
        }
        valueOf() {
            const list = [];
            this.forEach(val => list.push(val));
            return list;
        }
        concat(...args) {
            const ranges = args.map(range => range.valueOf());
            return this.valueOf().concat(...ranges);
        }
        slice(start = 0, end) {
            const source = this;
            return new $mol_range_lazy({
                item(id) {
                    return source.item(id + start);
                },
                get length() {
                    return Math.min(end, source.length) - start;
                }
            });
        }
        map(proceed) {
            const source = this;
            return new $mol_range_lazy({
                item(id) {
                    return proceed(source.item(id), id);
                },
                get length() {
                    return source.length;
                }
            });
        }
        join(delim = ',') {
            const list = [];
            this.forEach(val => list.push(val));
            return list.join(delim);
        }
        every(check) {
            let res = true;
            this.forEach((val, id) => {
                if (!res)
                    return;
                res = check(val, id);
            });
            return res;
        }
        some(check) {
            let res = false;
            this.forEach((val, id) => {
                if (res)
                    return;
                res = check(val, id);
            });
            return res;
        }
    }
    $.$mol_range_common = $mol_range_common;
    class $mol_range_lazy extends $mol_range_common {
        constructor(source = {
            item(id) { return undefined; },
            length: 0
        }) {
            super();
            this.source = source;
        }
        item(id) {
            return this.source.item(id);
        }
        get length() {
            return this.source.length;
        }
    }
    $.$mol_range_lazy = $mol_range_lazy;
})($ || ($ = {}));
//range.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_grid_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_grid_demo_title");
        }
        sub() {
            return [].concat(this.Grid());
        }
        Grid() {
            return ((obj) => {
                obj.row_height = () => 40;
                obj.records = () => this.records();
                obj.col_head_content = (col) => this.col_head_content(col);
                return obj;
            })(new this.$.$mol_grid);
        }
        records() {
            return ({});
        }
        col_head_content(col) {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid_demo.prototype, "Grid", null);
    $.$mol_grid_demo = $mol_grid_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid_demo extends $.$mol_grid_demo {
            records() {
                return $.$mol_range_in({
                    length: 1000,
                    item: index => {
                        return $.$mol_range_in({
                            length: 10,
                            item: colId => colId === 0
                                ? `Row ${index + 1}`
                                : `Row ${index + 1} Cell ${colId}`
                        }).valueOf();
                    }
                }).valueOf();
            }
            col_head_content(id) {
                if (id == '0')
                    return [];
                return [`Col ${id}`];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid_demo.prototype, "records", null);
        $$.$mol_grid_demo = $mol_grid_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_icon_demo_title");
        }
        sub() {
            return this.icons();
        }
        icons() {
            return [];
        }
    }
    $.$mol_icon_demo = $mol_icon_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_icon_demo extends $.$mol_icon_demo {
            names() {
                var next = [];
                for (var name in this.$) {
                    if (!/^\$mol_icon_/i.test(name))
                        continue;
                    if (/^\$mol_icon_demo/.test(name))
                        continue;
                    if (typeof this.$[name] !== 'function')
                        continue;
                    next.push(name);
                }
                return next;
            }
            icons() {
                return this.names().map(name => this.Icon(name));
            }
            Icon(name) {
                var Class = this.$[name];
                return new Class();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_icon_demo.prototype, "names", null);
        __decorate([
            $.$mol_mem
        ], $mol_icon_demo.prototype, "icons", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_icon_demo.prototype, "Icon", null);
        $$.$mol_icon_demo = $mol_icon_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_labeler_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_labeler_demo_title");
        }
        sub() {
            return [].concat(this.Provider(), this.Name());
        }
        Provider() {
            return ((obj) => {
                obj.title = () => "Provider";
                obj.content = () => "ACME Provider Inc.";
                return obj;
            })(new this.$.$mol_labeler);
        }
        Name() {
            return ((obj) => {
                obj.title = () => "User name";
                obj.Content = () => this.Name_control();
                return obj;
            })(new this.$.$mol_labeler);
        }
        Name_control() {
            return ((obj) => {
                obj.hint = () => "Jack Sparrow";
                obj.value = (val) => this.user_name(val);
                return obj;
            })(new this.$.$mol_string);
        }
        user_name(val, force) {
            return (val !== void 0) ? val : "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_labeler_demo.prototype, "Provider", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler_demo.prototype, "Name", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler_demo.prototype, "Name_control", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler_demo.prototype, "user_name", null);
    $.$mol_labeler_demo = $mol_labeler_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_link_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_link_demo_title");
        }
        sub() {
            return [].concat(this.This(), this.Red(), this.Green(), this.Blue(), this.External());
        }
        This() {
            return ((obj) => {
                obj.sub = () => [].concat(this.this_label());
                return obj;
            })(new this.$.$mol_link);
        }
        this_label() {
            return this.$.$mol_locale.text("$mol_link_demo_this_label");
        }
        Red() {
            return ((obj) => {
                obj.arg = () => ({
                    "color": "red",
                });
                obj.sub = () => [].concat(this.red_label());
                return obj;
            })(new this.$.$mol_link);
        }
        red_label() {
            return this.$.$mol_locale.text("$mol_link_demo_red_label");
        }
        Green() {
            return ((obj) => {
                obj.arg = () => ({
                    "color": "green",
                });
                obj.sub = () => [].concat(this.green_label());
                return obj;
            })(new this.$.$mol_link);
        }
        green_label() {
            return this.$.$mol_locale.text("$mol_link_demo_green_label");
        }
        Blue() {
            return ((obj) => {
                obj.arg = () => ({
                    "color": "blue",
                });
                obj.sub = () => [].concat(this.blue_label());
                return obj;
            })(new this.$.$mol_link);
        }
        blue_label() {
            return this.$.$mol_locale.text("$mol_link_demo_blue_label");
        }
        External() {
            return ((obj) => {
                obj.uri = () => "http://example.org";
                obj.title = () => "example.org";
                obj.hint = () => this.external_hint();
                return obj;
            })(new this.$.$mol_link);
        }
        external_hint() {
            return this.$.$mol_locale.text("$mol_link_demo_external_hint");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "This", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "Red", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "Green", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "Blue", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "External", null);
    $.$mol_link_demo = $mol_link_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return (Object.assign({}, super.field(), { "src": this.uri(), "alt": this.title() }));
        }
        uri() {
            return "";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_link_iconed extends $.$mol_link {
        sub() {
            return [].concat(this.Icon(), this.content());
        }
        Icon() {
            return ((obj) => {
                obj.uri = () => this.icon();
                return obj;
            })(new this.$.$mol_image);
        }
        icon() {
            return "";
        }
        content() {
            return [].concat(this.title());
        }
        title() {
            return this.uri();
        }
        host() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//iconed.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,255,0&size=32`;
            }
            host() {
                const url = new URL(this.uri());
                return url.hostname;
            }
            title() {
                return decodeURIComponent(this.uri().split(this.host(), 2)[1]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//iconed.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_link_iconed_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_link_iconed_demo_title");
        }
        sub() {
            return [].concat(this.Input(), this.Output());
        }
        Input() {
            return ((obj) => {
                obj.value = (val) => this.uri(val);
                return obj;
            })(new this.$.$mol_string);
        }
        uri(val, force) {
            return (val !== void 0) ? val : "https://www.google.com/search?q=%24mol";
        }
        Output() {
            return ((obj) => {
                obj.uri = () => this.uri();
                return obj;
            })(new this.$.$mol_link_iconed);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed_demo.prototype, "Input", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed_demo.prototype, "uri", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed_demo.prototype, "Output", null);
    $.$mol_link_iconed_demo = $mol_link_iconed_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_list_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_list_demo_title");
        }
        sub() {
            return [].concat(this.Scroll());
        }
        Scroll() {
            return ((obj) => {
                obj.sub = () => [].concat(this.List());
                return obj;
            })(new this.$.$mol_scroll);
        }
        List() {
            return ((obj) => {
                obj.rows = () => this.rows();
                return obj;
            })(new this.$.$mol_list);
        }
        rows() {
            return [];
        }
        Row(id) {
            return ((obj) => {
                obj.title = () => this.row_text(id);
                obj.content = () => [].concat(this.Content(id));
                return obj;
            })(new this.$.$mol_expander);
        }
        row_text(id) {
            return "";
        }
        Content(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.Text());
                return obj;
            })(new this.$.$mol_row);
        }
        Text() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_filler);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_list_demo.prototype, "Scroll", null);
    __decorate([
        $.$mol_mem
    ], $mol_list_demo.prototype, "List", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_list_demo.prototype, "Text", null);
    $.$mol_list_demo = $mol_list_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list_demo extends $.$mol_list_demo {
            rows() {
                var next = [];
                for (var id = 0; id < 1000; ++id) {
                    next.push(this.Row(id));
                }
                return next;
            }
            row_text(id) {
                return `Row #${id + 1}`;
            }
        }
        $$.$mol_list_demo = $mol_list_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_import {
        static script(uri, next, force) {
            const doc = $.$mol_dom_context.document;
            const found = doc.querySelector(`script[src="${uri}"]`);
            if (found)
                return $.$mol_dom_context;
            const script = doc.createElement('script');
            script.src = uri;
            script.onload = () => this.script(uri, $.$mol_dom_context, $.$mol_atom_force_cache);
            doc.head.appendChild(script);
            throw new $.$mol_atom_wait(`Import ${uri}`);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_import, "script", null);
    $.$mol_import = $mol_import;
})($ || ($ = {}));
//import.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_map_yandex extends $.$mol_view {
        zoom(val, force) {
            return (val !== void 0) ? val : 2;
        }
        center(val, force) {
            return (val !== void 0) ? val : [].concat(0, 0);
        }
        objects() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex.prototype, "center", null);
    $.$mol_map_yandex = $mol_map_yandex;
})($ || ($ = {}));
//yandex.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_map_yandex extends $.$mol_map_yandex {
            static api() {
                return $.$mol_import.script(`https://api-maps.yandex.ru/2.1/?lang=${$.$mol_locale.lang()}`).ymaps;
            }
            api(next, force) {
                const ymaps = $mol_map_yandex.api();
                if (!ymaps.Map) {
                    ymaps.ready(() => this.api(undefined, $.$mol_atom_force_cache));
                    throw new $.$mol_atom_wait('Loading maps api modules...');
                }
                const api = new ymaps.Map(this.dom_node(), {
                    center: [0, 0],
                    zoom: 0,
                });
                api.controls.remove('fullscreenControl');
                api.controls.remove('typeSelector');
                api.events.add(['actionend'], (event) => this.update(event));
                return api;
            }
            update(event) {
                this.zoom(this.api().getZoom());
                this.center(this.api().getCenter());
            }
            render() {
                const api = this.api();
                api.setCenter(this.center(), this.zoom());
                api.geoObjects.removeAll();
                for (let obj of this.objects()) {
                    api.geoObjects.add(obj.object());
                }
                super.render();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex.prototype, "api", null);
        $$.$mol_map_yandex = $mol_map_yandex;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//yandex.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_map_yandex_mark extends $.$mol_object {
        pos() {
            return [].concat(0, 0);
        }
        hint() {
            return "";
        }
        title() {
            return "";
        }
        content() {
            return "";
        }
    }
    $.$mol_map_yandex_mark = $mol_map_yandex_mark;
})($ || ($ = {}));
//mark.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_map_yandex_mark extends $.$mol_map_yandex_mark {
            object() {
                const ymaps = $$.$mol_map_yandex.api();
                return new ymaps.Placemark(this.pos(), {
                    hintContent: this.hint(),
                    iconContent: this.title(),
                    balloonContent: this.content(),
                }, {
                    preset: "islands#redStretchyIcon",
                });
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex_mark.prototype, "object", null);
        $$.$mol_map_yandex_mark = $mol_map_yandex_mark;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mark.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_map_yandex_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_map_yandex_demo_title");
        }
        sub() {
            return [].concat(this.Map());
        }
        Map() {
            return ((obj) => {
                obj.center = (val) => this.center(val);
                obj.zoom = (val) => this.zoom(val);
                obj.objects = () => [].concat(this.Place());
                return obj;
            })(new this.$.$mol_map_yandex);
        }
        center(val, force) {
            return (val !== void 0) ? val : [].concat(59.9, 30.3);
        }
        zoom(val, force) {
            return (val !== void 0) ? val : 10;
        }
        Place() {
            return ((obj) => {
                obj.pos = () => this.place_pos();
                obj.title = () => this.place_title();
                obj.content = () => this.place_content();
                return obj;
            })(new this.$.$mol_map_yandex_mark);
        }
        place_pos() {
            return [].concat(59.9, 30.3);
        }
        place_title() {
            return "Saint-Petersburg";
        }
        place_content() {
            return "It is Russia's second-largest city after Moscow";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_demo.prototype, "Map", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_demo.prototype, "center", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_demo.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_demo.prototype, "Place", null);
    $.$mol_map_yandex_demo = $mol_map_yandex_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax {
        constructor(lexems) {
            this['lexems()'] = lexems;
        }
        lexems() {
            return this['lexems()'];
        }
        rules() {
            let rules = this['rules()'];
            if (rules)
                return rules;
            rules = [];
            let lexems = this.lexems();
            for (let name in lexems) {
                rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            return this['rules()'] = rules;
        }
        regExp() {
            let regExp = this['regExp()'];
            if (regExp)
                return regExp;
            const parts = '(' + this.rules().map(rule => rule.regExp.source).join(')|(') + ')';
            regExp = RegExp(`([^]*?)(?:(${parts})|$(?![^]))`, 'gm');
            return this['regExp()'] = regExp;
        }
        tokenize(text) {
            const tokens = [];
            const rules = this.rules();
            const regExp = this.regExp();
            const regExpSize = RegExp('^$|' + regExp.source).exec('').length - 1;
            let position = 0;
            parsing: while (position < text.length) {
                regExp.lastIndex = position;
                var found = regExp.exec(text);
                if (position === regExp.lastIndex)
                    throw new Error('Empty token');
                position = regExp.lastIndex;
                var prefix = found[1];
                if (prefix) {
                    tokens.push({
                        name: '',
                        found: prefix,
                        chunks: [],
                    });
                }
                var suffix = found[2];
                if (suffix) {
                    let offset = 4;
                    for (let rule of rules) {
                        if (found[offset - 1]) {
                            tokens.push({
                                name: rule.name,
                                found: suffix,
                                chunks: found.slice(offset, offset + rule.size)
                            });
                            continue parsing;
                        }
                        offset += rule.size + 1;
                    }
                    throw new Error('Something wrong');
                }
            }
            return tokens;
        }
    }
    $.$mol_syntax = $mol_syntax;
})($ || ($ = {}));
//syntax.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax_md_flow = new $.$mol_syntax({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax_md_line = new $.$mol_syntax({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax_md_code = new $.$mol_syntax({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/)/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-keyword': /\b(class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:)/,
        'code-global': /[$]\w*/,
        'code-decorator': /@.*?$/,
        'code-tag': /<\/?[\w-]+\/?>?/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#\$%&\*_\+\\\/\|'";:\.,\^]/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [];
        }
        Quote(id) {
            return ((obj) => {
                obj.text = () => this.quote_text(id);
                return obj;
            })(new this.$.$mol_text);
        }
        quote_text(id) {
            return "";
        }
        Row(id) {
            return ((obj) => {
                obj.sub = () => this.block_content(id);
                obj.type = () => this.block_type(id);
                return obj;
            })(new this.$.$mol_text_row);
        }
        block_content(id) {
            return [];
        }
        block_type(id) {
            return "";
        }
        Span(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_span);
        }
        Link(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_link);
        }
        Image(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_image);
        }
        Header(id) {
            return ((obj) => {
                obj.level = () => this.header_level(id);
                obj.content = () => this.header_content(id);
                return obj;
            })(new this.$.$mol_text_header);
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [];
        }
        Table(id) {
            return ((obj) => {
                obj.head_cells = () => this.table_head_cells(id);
                obj.rows = () => this.table_rows(id);
                return obj;
            })(new this.$.$mol_grid);
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        Table_row(id) {
            return ((obj) => {
                obj.cells = () => this.table_cells(id);
                return obj;
            })(new this.$.$mol_grid_row);
        }
        table_cells(id) {
            return [];
        }
        Table_cell(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_grid_cell);
        }
        table_cell_content(id) {
            return [];
        }
        Table_cell_head(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_float);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
})($ || ($ = {}));
(function ($) {
    class $mol_text_row extends $.$mol_view {
        minimal_height() {
            return 40;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_type": this.type() }));
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
})($ || ($ = {}));
(function ($) {
    class $mol_text_header extends $.$mol_view {
        dom_name() {
            return "h";
        }
        minimal_height() {
            return 50;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_header_level": this.level() }));
        }
        level(val, force) {
            return (val !== void 0) ? val : 0;
        }
        sub() {
            return this.content();
        }
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
})($ || ($ = {}));
(function ($) {
    class $mol_text_span extends $.$mol_view {
        dom_name() {
            return "span";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_type": this.type() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return this.content();
        }
        content(val, force) {
            return (val !== void 0) ? val : [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
(function ($) {
    class $mol_text_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_type": this.type(), "href": this.link() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return this.content();
        }
        content(val, force) {
            return (val !== void 0) ? val : [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    $.$mol_text_link = $mol_text_link;
})($ || ($ = {}));
(function ($) {
    class $mol_text_image extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_type": this.type(), "data": this.link() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return [].concat(this.title());
        }
        title(val, force) {
            return (val !== void 0) ? val : "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                return $.$mol_syntax_md_flow.tokenize(this.text());
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                return $.$mol_syntax_md_line.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    switch (token.name) {
                        case 'text-link': {
                            if (/^#|(\w+script+:)+/.test(token.chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                            else {
                                const span = this.Link(id);
                                span.type(token.name);
                                span.link(this.uri_resolve(token.chunks[1]));
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(token.chunks[1]);
                            span.type(token.name);
                            span.link(this.uri_resolve(token.chunks[1]));
                            span.title(token.chunks[0]);
                            return span;
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, token.chunks[0]));
                            return span;
                        }
                    }
                    const span = this.Span(id);
                    span.type(token.name);
                    span.content(token.name
                        ? [].concat.apply([], token.chunks.map((text, index) => this.text2spans(`${id}/${index}`, text)))
                        : [token.found]);
                    return span;
                });
            }
            code2spans(prefix, text) {
                return $.$mol_syntax_md_code.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    const span = this.Span(id);
                    span.type(token.name);
                    switch (token.name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, token.found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([token.found[0], ...this.code2spans(`${id}/${index}`, token.found.slice(1, token.found.length - 1)), token.found[token.found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([token.found]);
                            return span;
                        }
                    }
                });
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                    case 'code': return this.code2spans(`${indexBlock}`, token.chunks[2]);
                    case 'code-indent': return this.code2spans(`${indexBlock}`, token.chunks[0].replace(/[\n\r]*$/, '\n').replace(/^\t/gm, ''));
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_message extends $.$mol_view {
        moment() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_time_moment);
        }
        sub() {
            return [].concat(this.Info(), this.Avatar_link(), this.Text());
        }
        Info() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Name(), this.Moment());
                return obj;
            })(new this.$.$mol_row);
        }
        Name() {
            return ((obj) => {
                obj.sub = () => [].concat(this.name());
                return obj;
            })(new this.$.$mol_view);
        }
        name() {
            return " ";
        }
        Moment() {
            return ((obj) => {
                obj.sub = () => [].concat(this.moment_string());
                return obj;
            })(new this.$.$mol_view);
        }
        moment_string() {
            return "";
        }
        Avatar_link() {
            return ((obj) => {
                obj.uri = () => this.avatar_link();
                obj.sub = () => [].concat(this.Avatar());
                return obj;
            })(new this.$.$mol_link);
        }
        avatar_link() {
            return "";
        }
        Avatar() {
            return ((obj) => {
                obj.title = () => "";
                obj.uri = () => this.avatar();
                return obj;
            })(new this.$.$mol_image);
        }
        avatar() {
            return "";
        }
        Text() {
            return ((obj) => {
                obj.text = () => this.text();
                return obj;
            })(new this.$.$mol_text);
        }
        text() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "moment", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Info", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Name", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Moment", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Avatar_link", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Avatar", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Text", null);
    $.$mol_message = $mol_message;
})($ || ($ = {}));
//message.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_message extends $.$mol_message {
            moment_string() {
                return this.moment().toString('YYYY-MM-DD hh:mm:ss');
            }
        }
        $$.$mol_message = $mol_message;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//message.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_message_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_message_demo_title");
        }
        sub() {
            return [].concat(this.Message_short(), this.Message_long());
        }
        Message_short() {
            return ((obj) => {
                obj.name = () => "Jin";
                obj.moment = () => ((obj) => {
                    return obj;
                })(new this.$.$mol_time_moment);
                obj.avatar = () => "https://avatars3.githubusercontent.com/u/442988?v=4";
                obj.avatar_link = () => "https://github.com/nin-jin";
                obj.text = () => "Hello, **everybody!**";
                return obj;
            })(new this.$.$mol_message);
        }
        Message_long() {
            return ((obj) => {
                obj.name = () => "Great Teacher Onizuka";
                obj.moment = () => ((obj) => {
                    return obj;
                })(new this.$.$mol_time_moment);
                obj.avatar_link = () => "https://en.wikipedia.org/wiki/Great_Teacher_Onizuka";
                obj.text = () => "The story focuses on 22-year-old ex-[bōsōzoku](https://en.wikipedia.org/wiki/Bōsōzoku) member Eikichi Onizuka, who becomes a teacher at a private middle school, Holy Forest Academy, in [Tokyo](https://en.wikipedia.org/wiki/Tokyo), [Japan](https://en.wikipedia.org/wiki/Japan). It won the 1998 [Kodansha Manga Award](https://en.wikipedia.org/wiki/Kodansha_Manga_Award) for shōnen and is a continuation of Tohru Fujisawa's other manga series [Shonan Junai Gumi](https://en.wikipedia.org/wiki/Shonan_Junai_Gumi) (lit. \"Shōnan True Love Group\") and Bad Company, both of which focus on the life of Onizuka before he becomes a teacher in Great Teacher Onizuka.";
                return obj;
            })(new this.$.$mol_message);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_message_demo.prototype, "Message_short", null);
    __decorate([
        $.$mol_mem
    ], $mol_message_demo.prototype, "Message_long", null);
    $.$mol_message_demo = $mol_message_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_meter_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_meter_demo_title");
        }
        plugins() {
            return [].concat(this.Meter());
        }
        top() {
            return this.Meter().top();
        }
        height() {
            return this.Meter().height();
        }
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter);
        }
        sub() {
            return [].concat(this.Top(), this.Height());
        }
        Top() {
            return ((obj) => {
                obj.sub = () => [].concat("Offset from top: ", this.top());
                return obj;
            })(new this.$.$mol_view);
        }
        Height() {
            return ((obj) => {
                obj.sub = () => [].concat("Component height: ", this.height());
                return obj;
            })(new this.$.$mol_view);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_meter_demo.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter_demo.prototype, "Top", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter_demo.prototype, "Height", null);
    $.$mol_meter_demo = $mol_meter_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_minus extends $.$mol_icon {
        path() {
            return "M19 13H5v-2h14v2z";
        }
    }
    $.$mol_icon_minus = $mol_icon_minus;
})($ || ($ = {}));
//minus.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $.$mol_icon {
        path() {
            return "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//plus.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_number extends $.$mol_view {
        precision_view() {
            return this.precision();
        }
        precision() {
            return 1;
        }
        precision_change() {
            return this.precision();
        }
        value(val, force) {
            return (val !== void 0) ? val : NaN;
        }
        sub() {
            return [].concat(this.String(), this.Dec(), this.Inc());
        }
        String() {
            return ((obj) => {
                obj.type = () => "number";
                obj.value = (val) => this.value_string(val);
                obj.hint = () => this.hint();
                obj.enabled = () => this.string_enabled();
                obj.debounce = () => this.debounce();
                return obj;
            })(new this.$.$mol_string);
        }
        value_string(val, force) {
            return (val !== void 0) ? val : "";
        }
        hint() {
            return "";
        }
        string_enabled() {
            return this.enabled();
        }
        enabled() {
            return true;
        }
        debounce() {
            return 200;
        }
        Dec() {
            return ((obj) => {
                obj.event_click = (val) => this.event_dec(val);
                obj.enabled = () => this.dec_enabled();
                obj.sub = () => [].concat(this.dec_icon());
                return obj;
            })(new this.$.$mol_button_minor);
        }
        event_dec(val, force) {
            return (val !== void 0) ? val : null;
        }
        dec_enabled() {
            return this.enabled();
        }
        dec_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_minus);
        }
        Inc() {
            return ((obj) => {
                obj.event_click = (val) => this.event_inc(val);
                obj.enabled = () => this.inc_enabled();
                obj.sub = () => [].concat(this.inc_icon());
                return obj;
            })(new this.$.$mol_button_minor);
        }
        event_inc(val, force) {
            return (val !== void 0) ? val : null;
        }
        inc_enabled() {
            return this.enabled();
        }
        inc_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_plus);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "String", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "value_string", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "Dec", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "event_dec", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "dec_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "Inc", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "event_inc", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "inc_icon", null);
    $.$mol_number = $mol_number;
})($ || ($ = {}));
//number.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_number extends $.$mol_number {
            event_dec(next) {
                this.value((this.value() || 0) - this.precision_change());
            }
            event_inc(next) {
                this.value((Number(this.value()) || 0) + this.precision_change());
            }
            value_string(next) {
                if (next !== void 0) {
                    this.value(next === '' ? null : Number(next));
                }
                const precisionView = this.precision_view();
                const value = next ? Number(next) : this.value();
                if (value === null)
                    return '';
                if (precisionView >= 1) {
                    return (value / precisionView).toFixed();
                }
                else {
                    const fixedNumber = Math.log(1 / precisionView) / Math.log(10);
                    return value.toFixed(fixedNumber);
                }
            }
        }
        $$.$mol_number = $mol_number;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//number.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_number_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_number_demo_title");
        }
        sub() {
            return [].concat(this.zero(), this.one(), this.two(), this.three(), this.four(), this.five(), this.six(), this.seven(), this.eight(), this.nine());
        }
        zero() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_number);
        }
        one() {
            return ((obj) => {
                obj.value = (val) => this.year(val);
                return obj;
            })(new this.$.$mol_number);
        }
        year(val, force) {
            return (val !== void 0) ? val : NaN;
        }
        two() {
            return ((obj) => {
                obj.value = (val) => this.year(val);
                obj.hint = () => "2016";
                return obj;
            })(new this.$.$mol_number);
        }
        three() {
            return ((obj) => {
                obj.value = (val) => this.age(val);
                obj.hint = () => "18-99";
                obj.enabled = () => false;
                return obj;
            })(new this.$.$mol_number);
        }
        age(val, force) {
            return (val !== void 0) ? val : 32;
        }
        four() {
            return ((obj) => {
                obj.value = (val) => this.year(val);
                obj.string_enabled = () => false;
                return obj;
            })(new this.$.$mol_number);
        }
        five() {
            return ((obj) => {
                obj.value = (val) => this.age(val);
                obj.dec_enabled = () => false;
                return obj;
            })(new this.$.$mol_number);
        }
        six() {
            return ((obj) => {
                obj.value = (val) => this.year(val);
                obj.inc_enabled = () => false;
                return obj;
            })(new this.$.$mol_number);
        }
        seven() {
            return ((obj) => {
                obj.value = (val) => this.year(val);
                obj.precision_change = () => 10;
                return obj;
            })(new this.$.$mol_number);
        }
        eight() {
            return ((obj) => {
                obj.value = (val) => this.year(val);
                obj.precision_view = () => 0.01;
                return obj;
            })(new this.$.$mol_number);
        }
        nine() {
            return ((obj) => {
                obj.value = (val) => this.year(val);
                obj.precision = () => 1000;
                return obj;
            })(new this.$.$mol_number);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "zero", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "one", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "year", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "two", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "three", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "age", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "four", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "five", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "six", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "seven", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "eight", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "nine", null);
    $.$mol_number_demo = $mol_number_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        sub() {
            return [].concat(this.Head(), this.Body(), this.Foot());
        }
        Head() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.head();
                return obj;
            })(new this.$.$mol_view);
        }
        head() {
            return [].concat(this.Title(), this.Tools());
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [].concat(this.title());
                obj.event_click = (val) => this.event_top(val);
                return obj;
            })(new this.$.$mol_button);
        }
        event_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        Tools() {
            return ((obj) => {
                obj.sub = () => this.tools();
                return obj;
            })(new this.$.$mol_view);
        }
        tools() {
            return [];
        }
        Body() {
            return ((obj) => {
                obj.scroll_top = (val) => this.body_scroll_top(val);
                obj.sub = () => this.body();
                return obj;
            })(new this.$.$mol_scroll);
        }
        body_scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        body() {
            return [];
        }
        Foot() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.foot();
                return obj;
            })(new this.$.$mol_view);
        }
        foot() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "event_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_page_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_page_demo_title");
        }
        sub() {
            return [].concat(this.Page());
        }
        Page() {
            return ((obj) => {
                obj.tools = () => [].concat(this.Button());
                obj.body = () => [].concat(this.Content());
                obj.foot = () => [].concat(this.Foot_content());
                return obj;
            })(new this.$.$mol_page);
        }
        Button() {
            return ((obj) => {
                obj.title = () => "Toolbar Button";
                return obj;
            })(new this.$.$mol_button_minor);
        }
        Content() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Text());
                return obj;
            })(new this.$.$mol_row);
        }
        Text() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_filler);
        }
        Foot_content() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Foot_text());
                return obj;
            })(new this.$.$mol_row);
        }
        Foot_text() {
            return ((obj) => {
                obj.sub = () => [].concat("Footer");
                return obj;
            })(new this.$.$mol_view);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page_demo.prototype, "Page", null);
    __decorate([
        $.$mol_mem
    ], $mol_page_demo.prototype, "Button", null);
    __decorate([
        $.$mol_mem
    ], $mol_page_demo.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_page_demo.prototype, "Text", null);
    __decorate([
        $.$mol_mem
    ], $mol_page_demo.prototype, "Foot_content", null);
    __decorate([
        $.$mol_mem
    ], $mol_page_demo.prototype, "Foot_text", null);
    $.$mol_page_demo = $mol_page_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_plot_demo_title");
        }
        count(val, force) {
            return (val !== void 0) ? val : 20;
        }
        sub() {
            return [].concat(this.Plot());
        }
        Plot() {
            return ((obj) => {
                obj.gap = () => 48;
                obj.graphs = () => [].concat(this.Saturation(), this.Input(), this.Output(), this.Voltage(), this.Time());
                return obj;
            })(new this.$.$mol_plot_pane);
        }
        Saturation() {
            return ((obj) => {
                obj.series = () => this.saturation_series();
                obj.graphs = () => [].concat(this.Saturation_fill(), this.Saturation_line());
                return obj;
            })(new this.$.$mol_plot_group);
        }
        saturation_series() {
            return [];
        }
        Saturation_fill() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_plot_fill);
        }
        Saturation_line() {
            return ((obj) => {
                obj.type = () => "dashed";
                return obj;
            })(new this.$.$mol_plot_line);
        }
        Input() {
            return ((obj) => {
                obj.series = () => this.input_series();
                obj.graphs = () => [].concat(this.Input_line(), this.Input_dots());
                return obj;
            })(new this.$.$mol_plot_group);
        }
        input_series() {
            return [];
        }
        Input_line() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_plot_line);
        }
        Input_dots() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_plot_dot);
        }
        Output() {
            return ((obj) => {
                obj.series = () => this.output_series();
                return obj;
            })(new this.$.$mol_plot_bar);
        }
        output_series() {
            return [];
        }
        Voltage() {
            return ((obj) => {
                obj.title = () => this.Voltage_title();
                return obj;
            })(new this.$.$mol_plot_ruler_vert);
        }
        Voltage_title() {
            return this.$.$mol_locale.text("$mol_plot_demo_Voltage_title");
        }
        Time() {
            return ((obj) => {
                obj.title = () => this.Time_title();
                obj.series = () => this.output_series();
                return obj;
            })(new this.$.$mol_plot_ruler_hor);
        }
        Time_title() {
            return this.$.$mol_locale.text("$mol_plot_demo_Time_title");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "count", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Plot", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Saturation", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Saturation_fill", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Saturation_line", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Input", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Input_line", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Input_dots", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Output", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Voltage", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Time", null);
    $.$mol_plot_demo = $mol_plot_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_demo extends $.$mol_plot_demo {
            input_series() {
                return $.$mol_range_in({
                    length: this.count(),
                    item(index) {
                        return Math.sin(index / 2) * 2;
                    }
                }).valueOf();
            }
            output_series() {
                $.$mol_state_time.now(125);
                const input = this.input_series();
                return $.$mol_range_in({
                    length: this.count(),
                    item(index) {
                        return input[index] * Math.random();
                    }
                }).valueOf();
            }
            saturation_series() {
                const input = this.output_series();
                const prev = ($.$mol_atom_current().cache() || []);
                return input.map((val, i) => {
                    const next = (val + 9 * (prev[i] || 0)) / 10;
                    return (Math.abs(next) > Math.abs(val)) ? next : val;
                });
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_demo.prototype, "input_series", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_demo.prototype, "output_series", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_demo.prototype, "saturation_series", null);
        $$.$mol_plot_demo = $mol_plot_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_pop_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_pop_demo_title");
        }
        sub() {
            return [].concat(this.Pop());
        }
        Pop() {
            return ((obj) => {
                obj.Anchor = () => this.Show();
                obj.showed = () => this.showed();
                obj.bubble_content = () => [].concat(this.Content());
                return obj;
            })(new this.$.$mol_pop);
        }
        Show() {
            return ((obj) => {
                obj.title = () => this.show_text();
                return obj;
            })(new this.$.$mol_button_minor);
        }
        show_text() {
            return this.$.$mol_locale.text("$mol_pop_demo_show_text");
        }
        showed() {
            return this.focused();
        }
        Content() {
            return ((obj) => {
                obj.sub = () => [].concat(this.bubble_hint());
                return obj;
            })(new this.$.$mol_row);
        }
        bubble_hint() {
            return this.$.$mol_locale.text("$mol_pop_demo_bubble_hint");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop_demo.prototype, "Pop", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_demo.prototype, "Show", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_demo.prototype, "Content", null);
    $.$mol_pop_demo = $mol_pop_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_pop_over extends $.$mol_pop {
        showed() {
            return this.hovered();
        }
        hovered(val, force) {
            return (val !== void 0) ? val : false;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "tabindex": 0 }));
        }
        event() {
            return (Object.assign({}, super.event(), { "mouseenter": (event) => this.event_show(event), "mouseleave": (event) => this.event_hide(event) }));
        }
        event_show(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_hide(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop_over.prototype, "hovered", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over.prototype, "event_show", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over.prototype, "event_hide", null);
    $.$mol_pop_over = $mol_pop_over;
})($ || ($ = {}));
//over.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop_over extends $.$mol_pop_over {
            event_show(event) {
                this.hovered(true);
            }
            event_hide(event) {
                this.hovered(false);
            }
            showed() {
                return this.focused() || this.hovered();
            }
        }
        $$.$mol_pop_over = $mol_pop_over;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//over.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_pop_over_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_pop_over_demo_title");
        }
        sub() {
            return [].concat(this.Menu());
        }
        Menu() {
            return ((obj) => {
                obj.sub = () => [].concat(this.File(), this.Help());
                return obj;
            })(new this.$.$mol_row);
        }
        File() {
            return ((obj) => {
                obj.align = () => "bottom_right";
                obj.Anchor = () => this.file_title();
                obj.bubble_content = () => [].concat(this.File_menu());
                return obj;
            })(new this.$.$mol_pop_over);
        }
        file_title() {
            return this.$.$mol_locale.text("$mol_pop_over_demo_file_title");
        }
        File_menu() {
            return ((obj) => {
                obj.rows = () => [].concat(this.Open(), this.Export(), this.Save());
                return obj;
            })(new this.$.$mol_list);
        }
        Open() {
            return ((obj) => {
                obj.title = () => this.open_title();
                return obj;
            })(new this.$.$mol_button_minor);
        }
        open_title() {
            return this.$.$mol_locale.text("$mol_pop_over_demo_open_title");
        }
        Export() {
            return ((obj) => {
                obj.title = () => this.export_title();
                return obj;
            })(new this.$.$mol_button_minor);
        }
        export_title() {
            return this.$.$mol_locale.text("$mol_pop_over_demo_export_title");
        }
        Save() {
            return ((obj) => {
                obj.title = () => this.save_title();
                return obj;
            })(new this.$.$mol_button_minor);
        }
        save_title() {
            return this.$.$mol_locale.text("$mol_pop_over_demo_save_title");
        }
        Help() {
            return ((obj) => {
                obj.align = () => "bottom_right";
                obj.Anchor = () => this.help_title();
                obj.bubble_content = () => [].concat(this.Help_menu());
                return obj;
            })(new this.$.$mol_pop_over);
        }
        help_title() {
            return this.$.$mol_locale.text("$mol_pop_over_demo_help_title");
        }
        Help_menu() {
            return ((obj) => {
                obj.rows = () => [].concat(this.Updates(), this.About());
                return obj;
            })(new this.$.$mol_list);
        }
        Updates() {
            return ((obj) => {
                obj.title = () => this.updates_title();
                return obj;
            })(new this.$.$mol_button_minor);
        }
        updates_title() {
            return this.$.$mol_locale.text("$mol_pop_over_demo_updates_title");
        }
        About() {
            return ((obj) => {
                obj.title = () => this.about_title();
                return obj;
            })(new this.$.$mol_button_minor);
        }
        about_title() {
            return this.$.$mol_locale.text("$mol_pop_over_demo_about_title");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Menu", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "File", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "File_menu", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Open", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Export", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Save", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Help", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Help_menu", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Updates", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "About", null);
    $.$mol_pop_over_demo = $mol_pop_over_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_portion_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_portion_demo_title");
        }
        sub() {
            return [].concat(this.Empty(), this.Partial(), this.Full());
        }
        Empty() {
            return ((obj) => {
                obj.portion = () => this.fist();
                return obj;
            })(new this.$.$mol_portion);
        }
        fist() {
            return 0;
        }
        Partial() {
            return ((obj) => {
                obj.portion = () => this.second();
                return obj;
            })(new this.$.$mol_portion);
        }
        second() {
            return 0.5;
        }
        Full() {
            return ((obj) => {
                obj.portion = () => this.third();
                return obj;
            })(new this.$.$mol_portion);
        }
        third() {
            return 1;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_portion_demo.prototype, "Empty", null);
    __decorate([
        $.$mol_mem
    ], $mol_portion_demo.prototype, "Partial", null);
    __decorate([
        $.$mol_mem
    ], $mol_portion_demo.prototype, "Full", null);
    $.$mol_portion_demo = $mol_portion_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_row_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_row_demo_title");
        }
        sub() {
            return [].concat(this.Row());
        }
        Row() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Name(), this.Count(), this.Progress(), this.Publish(), this.Drop());
                return obj;
            })(new this.$.$mol_row);
        }
        Name() {
            return ((obj) => {
                obj.hint = () => this.name_hint();
                obj.query = (val) => this.name(val);
                obj.suggests = () => [].concat(this.suggest1(), this.suggest2());
                return obj;
            })(new this.$.$mol_search);
        }
        name_hint() {
            return this.$.$mol_locale.text("$mol_row_demo_name_hint");
        }
        name(val, force) {
            return (val !== void 0) ? val : "";
        }
        suggest1() {
            return this.$.$mol_locale.text("$mol_row_demo_suggest1");
        }
        suggest2() {
            return this.$.$mol_locale.text("$mol_row_demo_suggest2");
        }
        Count() {
            return ((obj) => {
                obj.hint = () => this.count_hint();
                obj.value = (val) => this.count(val);
                return obj;
            })(new this.$.$mol_number);
        }
        count_hint() {
            return this.$.$mol_locale.text("$mol_row_demo_count_hint");
        }
        count(val, force) {
            return (val !== void 0) ? val : null;
        }
        Progress() {
            return ((obj) => {
                obj.portion = () => this.progress();
                return obj;
            })(new this.$.$mol_portion);
        }
        progress() {
            return 0.33;
        }
        Publish() {
            return ((obj) => {
                obj.title = () => this.publish_label();
                obj.checked = (val) => this.publish(val);
                return obj;
            })(new this.$.$mol_check_box);
        }
        publish_label() {
            return this.$.$mol_locale.text("$mol_row_demo_publish_label");
        }
        publish(val, force) {
            return (val !== void 0) ? val : false;
        }
        Drop() {
            return ((obj) => {
                obj.title = () => this.drop_title();
                return obj;
            })(new this.$.$mol_button_minor);
        }
        drop_title() {
            return this.$.$mol_locale.text("$mol_row_demo_drop_title");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_row_demo.prototype, "Row", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo.prototype, "Name", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo.prototype, "name", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo.prototype, "Count", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo.prototype, "count", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo.prototype, "Progress", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo.prototype, "Publish", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo.prototype, "publish", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo.prototype, "Drop", null);
    $.$mol_row_demo = $mol_row_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_scroll_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_scroll_demo_title");
        }
        sub() {
            return [].concat(this.Scroll());
        }
        Scroll() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Content());
                return obj;
            })(new this.$.$mol_scroll);
        }
        Content() {
            return ((obj) => {
                obj.sub = () => [].concat(this.One(), this.Two(), this.Tree());
                return obj;
            })(new this.$.$mol_row);
        }
        One() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_filler);
        }
        Two() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_filler);
        }
        Tree() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_filler);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Scroll", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "One", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Two", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Tree", null);
    $.$mol_scroll_demo = $mol_scroll_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_unit extends $.$mol_object {
        constructor(value) {
            super();
            this['valueOf()'] = value;
        }
        prefix() {
            return '';
        }
        postfix() {
            return '';
        }
        valueOf() {
            return this['valueOf()'];
        }
        delimiter() {
            return ' ';
        }
        value_view() {
            return this.valueOf().toLocaleString();
        }
        toString() {
            return this.prefix() + this.value_view() + this.postfix();
        }
        static summ(a, b) {
            var Class = a.constructor;
            if (Class !== b.constructor)
                throw new Error(`Not same measure: ${Class} , ${b.constructor}`);
            return new Class(a.valueOf() + b.valueOf());
        }
        mult(m) {
            var Class = this.constructor;
            return new Class(this.valueOf() * m);
        }
    }
    $.$mol_unit = $mol_unit;
})($ || ($ = {}));
//unit.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_unit_money extends $.$mol_unit {
    }
    $.$mol_unit_money = $mol_unit_money;
    class $mol_unit_money_usd extends $mol_unit_money {
        prefix() {
            return '$';
        }
    }
    $.$mol_unit_money_usd = $mol_unit_money_usd;
    class $mol_unit_money_rur extends $mol_unit_money {
        postfix() {
            return ' ₽';
        }
    }
    $.$mol_unit_money_rur = $mol_unit_money_rur;
})($ || ($ = {}));
//money.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_stub_select_random(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
    $.$mol_stub_select_random = $mol_stub_select_random;
    function $mol_stub_strings(prefix = '', count = 10, length = 10) {
        if (prefix.length >= length)
            return [];
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
        let strings = [];
        for (let i = 0; i < count; i++) {
            let text = prefix;
            for (let j = prefix.length; j < length; j++) {
                text += $mol_stub_select_random(possible);
            }
            strings.push(text);
        }
        return strings;
    }
    $.$mol_stub_strings = $mol_stub_strings;
    function $mol_stub_code(length = 8) {
        var max = Math.pow(16, length);
        var min = Math.pow(16, length - 1);
        var value = min + Math.floor(Math.random() * (max - min));
        return value.toString(16).toUpperCase();
    }
    $.$mol_stub_code = $mol_stub_code;
    function $mol_stub_price(max = 1000) {
        var min = Math.floor(max / 16 / 16);
        var value = min + Math.floor(Math.random() * (max - min));
        return new $.$mol_unit_money_usd(value);
    }
    $.$mol_stub_price = $mol_stub_price;
    function $mol_stub_product_name() {
        var name = $mol_stub_select_random([
            'Monitor 15"',
            'Monitor 17"',
            'Monitor 19"',
            'Graphics card',
            'Frame grabber card'
        ]);
        var port = $mol_stub_select_random(['D-SUB', 'DVI', 'HDMI']);
        var resolution = $mol_stub_select_random(['VGA', 'Full HD', '4K']);
        return [name, port, resolution].join(', ');
    }
    $.$mol_stub_product_name = $mol_stub_product_name;
    function $mol_stub_company_name_big() {
        var product = $mol_stub_select_random(['Everything', 'Something', 'Anything', 'Nothing']);
        var type = $mol_stub_select_random(['Company', 'Corporation', 'Holding']);
        return `A ${type} that makes ${product}`;
    }
    $.$mol_stub_company_name_big = $mol_stub_company_name_big;
    function $mol_stub_company_name_small() {
        return $mol_stub_select_random(['ACME inc.', 'Dream Company', 'Just Company']);
    }
    $.$mol_stub_company_name_small = $mol_stub_company_name_small;
    function $mol_stub_company_name() {
        return $mol_stub_select_random([$mol_stub_company_name_small, $mol_stub_company_name_big])();
    }
    $.$mol_stub_company_name = $mol_stub_company_name;
    function $mol_stub_person_name() {
        var first = $mol_stub_select_random(['Ivan', 'Petr', 'Sidor']);
        var last = $mol_stub_select_random(['Ivanov', 'Petrov', 'Sidorov']);
        return `${first} ${last}`;
    }
    $.$mol_stub_person_name = $mol_stub_person_name;
    function $mol_stub_city() {
        return $mol_stub_select_random(['Moscow', 'London', 'Washington', 'Buenos Aires']);
    }
    $.$mol_stub_city = $mol_stub_city;
    function $mol_stub_time(maxShift = 60 * 24 * 365) {
        return new $.$mol_time_moment().shift({ minute: Math.round(Math.random() * maxShift) });
    }
    $.$mol_stub_time = $mol_stub_time;
})($ || ($ = {}));
//stub.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_search_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_search_demo_title");
        }
        sub() {
            return [].concat(this.Search());
        }
        query() {
            return this.Search().query();
        }
        Search() {
            return ((obj) => {
                obj.suggests = () => this.suggests();
                return obj;
            })(new this.$.$mol_search);
        }
        suggests() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_search_demo.prototype, "Search", null);
    $.$mol_search_demo = $mol_search_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search_demo extends $.$mol_search_demo {
            suggests() {
                const query = this.query();
                if (query.length < 2)
                    return [];
                return $.$mol_stub_strings(this.query(), 30);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_search_demo.prototype, "suggests", null);
        $$.$mol_search_demo = $mol_search_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_section extends $.$mol_list {
        rows() {
            return [].concat(this.Head(), this.Content());
        }
        Head() {
            return ((obj) => {
                obj.sub = () => [].concat(this.head());
                return obj;
            })(new this.$.$mol_view);
        }
        head() {
            return null;
        }
        Content() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_section.prototype, "Head", null);
    $.$mol_section = $mol_section;
})($ || ($ = {}));
//section.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_section_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_section_demo_title");
        }
        sub() {
            return [].concat(this.Text());
        }
        Text() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Section());
                return obj;
            })(new this.$.$mol_row);
        }
        Section() {
            return ((obj) => {
                obj.head = () => "Section header";
                obj.Content = () => this.Section_content();
                return obj;
            })(new this.$.$mol_section);
        }
        Section_content() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_filler);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_section_demo.prototype, "Text", null);
    __decorate([
        $.$mol_mem
    ], $mol_section_demo.prototype, "Section", null);
    __decorate([
        $.$mol_mem
    ], $mol_section_demo.prototype, "Section_content", null);
    $.$mol_section_demo = $mol_section_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_colors = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
    };
})($ || ($ = {}));
//colors.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_select_demo_colors extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_select_demo_colors_title");
        }
        sub() {
            return [].concat(this.Color());
        }
        Color() {
            return ((obj) => {
                obj.value = (val) => this.color(val);
                obj.dictionary = () => this.colors();
                obj.option_label = (id) => this.color_name(id);
                obj.option_content = (id) => this.option_content(id);
                return obj;
            })(new this.$.$mol_select);
        }
        color(val, force) {
            return (val !== void 0) ? val : "";
        }
        colors() {
            return ({});
        }
        color_name(id) {
            return "";
        }
        option_content(id) {
            return [].concat(this.Color_option(id));
        }
        Color_option(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.Color_preview(id), this.color_name(id));
                obj.minimal_height = () => 40;
                return obj;
            })(new this.$.$mol_row);
        }
        Color_preview(id) {
            return ((obj) => {
                obj.color = () => this.option_color(id);
                return obj;
            })(new this.$.$mol_select_colors_color_preview);
        }
        option_color(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_colors.prototype, "Color", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_colors.prototype, "color", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select_demo_colors.prototype, "Color_option", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select_demo_colors.prototype, "Color_preview", null);
    $.$mol_select_demo_colors = $mol_select_demo_colors;
})($ || ($ = {}));
(function ($) {
    class $mol_select_colors_color_preview extends $.$mol_view {
        style() {
            return (Object.assign({}, super.style(), { "background": this.color() }));
        }
        color() {
            return "";
        }
    }
    $.$mol_select_colors_color_preview = $mol_select_colors_color_preview;
})($ || ($ = {}));
//colors.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select_demo_colors extends $.$mol_select_demo_colors {
            color_name(id) {
                return id;
            }
            option_color(id) {
                return this.colors()[id];
            }
            colors() {
                return Object.assign({ '': 'transparent' }, $.$mol_colors);
            }
        }
        $$.$mol_select_demo_colors = $mol_select_demo_colors;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//colors.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_select_demo_month extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_select_demo_month_title");
        }
        sub() {
            return [].concat(this.Month());
        }
        Month() {
            return ((obj) => {
                obj.no_options_message = () => "Not found";
                obj.value = (val) => this.month(val);
                obj.dictionary = () => this.months();
                return obj;
            })(new this.$.$mol_select);
        }
        month(val, force) {
            return (val !== void 0) ? val : "jan";
        }
        months() {
            return ({
                "jan": "January",
                "feb": "February",
                "mar": "March",
                "apr": "April",
                "may": "May",
                "jun": "June",
                "jul": "July",
                "aug": "August",
                "sep": "September",
                "oct": "October",
                "nov": "November",
                "dec": "December",
            });
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_month.prototype, "Month", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_month.prototype, "month", null);
    $.$mol_select_demo_month = $mol_select_demo_month;
})($ || ($ = {}));
//month.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_select_demo_priority extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_select_demo_priority_title");
        }
        sub() {
            return [].concat(this.Priority());
        }
        Priority() {
            return ((obj) => {
                obj.Filter = () => null;
                obj.value = (val) => this.priority(val);
                obj.options = () => [].concat("Highest ", "High", "Medium", "Low", "Lowest");
                return obj;
            })(new this.$.$mol_select);
        }
        priority(val, force) {
            return (val !== void 0) ? val : "Lowest";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_priority.prototype, "Priority", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_priority.prototype, "priority", null);
    $.$mol_select_demo_priority = $mol_select_demo_priority;
})($ || ($ = {}));
//priority.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $.$mol_view {
        attr() {
            return ({
                "mol_theme": "$mol_theme_accent",
            });
        }
        sub() {
            return [].concat(this.value());
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//speck.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_settings extends $.$mol_icon {
        path() {
            return "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z\r";
        }
    }
    $.$mol_icon_settings = $mol_icon_settings;
})($ || ($ = {}));
//settings.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_menu extends $.$mol_icon {
        path() {
            return "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z";
        }
    }
    $.$mol_icon_menu = $mol_icon_menu;
})($ || ($ = {}));
//menu.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_speck_demo extends $.$mol_demo_small {
        sub() {
            return [].concat(this.Link(), this.String(), this.Button(), this.Card());
        }
        Link() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Link_speck(), this.Link_icon());
                return obj;
            })(new this.$.$mol_link);
        }
        Link_speck() {
            return ((obj) => {
                obj.value = () => "β";
                return obj;
            })(new this.$.$mol_speck);
        }
        Link_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_settings);
        }
        String() {
            return ((obj) => {
                obj.sub = () => [].concat(this.String_speck(), this.String_field());
                return obj;
            })(new this.$.$mol_view);
        }
        String_speck() {
            return ((obj) => {
                obj.value = () => this.string_speck();
                return obj;
            })(new this.$.$mol_speck);
        }
        string_speck() {
            return this.$.$mol_locale.text("$mol_speck_demo_string_speck");
        }
        String_field() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_string);
        }
        Button() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Button_speck(), this.Button_icon());
                return obj;
            })(new this.$.$mol_button_minor);
        }
        Button_speck() {
            return ((obj) => {
                obj.value = () => this.notification_count();
                return obj;
            })(new this.$.$mol_speck);
        }
        notification_count() {
            return 8;
        }
        Button_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_menu);
        }
        Card() {
            return ((obj) => {
                obj.content = () => [].concat(this.Card_speck());
                obj.status = () => this.card_status();
                return obj;
            })(new this.$.$mol_card);
        }
        Card_speck() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_speck);
        }
        card_status() {
            return this.$.$mol_locale.text("$mol_speck_demo_card_status");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Link", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Link_speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Link_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "String", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "String_speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "String_field", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Button", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Button_speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Button_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Card", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Card_speck", null);
    $.$mol_speck_demo = $mol_speck_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_speech extends $.$mol_plugin {
        static api() {
            const API = window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition'];
            const api = new API;
            api.interimResults = true;
            api.maxAlternatives = 1;
            api.continuous = true;
            api.lang = $.$mol_locale.lang();
            api.onnomatch = (event) => {
                this.text('');
            };
            api.onresult = (event) => {
                this.event_result(event);
            };
            api.onerror = (event) => {
                console.error(new Error(event.error));
                this.text('');
                this.listening(false);
            };
            return api;
        }
        static listening(next) {
            if (next === undefined)
                return false;
            if (next) {
                this.api().start();
            }
            else {
                this.api().stop();
            }
            return next;
        }
        static event_result(event) {
            const text = [].slice.call(event.results)
                .map((result) => {
                return result[0].transcript;
            })
                .join('')
                .toLowerCase()
                .trim();
            this.text(text);
        }
        static text(next = '') {
            return next;
        }
        render() {
            const text = $mol_speech.text().replace(/[,\.]/g, '');
            for (let matcher of this.matchers()) {
                const found = text.match(matcher);
                if (!found)
                    continue;
                new $.$mol_defer(() => this.event_catch(found.slice(1).map(text => text.toLowerCase())));
                break;
            }
            return null;
        }
        event_catch(found) {
            console.log(found);
        }
        patterns() {
            return [];
        }
        matchers() {
            return this.patterns().map(pattern => {
                return new RegExp(this.prefix() + pattern + this.suffix(), 'i');
            });
        }
        prefix() {
            return '';
        }
        suffix() {
            return '[,\\s]+(?:please|would you kindly|пожалуйста|пожалуй 100|будь любезен)\.?$';
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_speech.prototype, "render", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech.prototype, "matchers", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "api", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "listening", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "text", null);
    $.$mol_speech = $mol_speech;
})($ || ($ = {}));
//speech.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_speech_demo extends $.$mol_demo_small {
        sub() {
            return [].concat(this.Toggle(), this.Message());
        }
        Toggle() {
            return ((obj) => {
                obj.Icon = () => this.Toggle_icon();
                obj.checked = (val) => this.listening(val);
                return obj;
            })(new this.$.$mol_check_icon);
        }
        Toggle_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_microphone);
        }
        listening(val, force) {
            return (val !== void 0) ? val : false;
        }
        Message() {
            return ((obj) => {
                obj.sub = () => [].concat(this.message());
                return obj;
            })(new this.$.$mol_view);
        }
        message() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_speech_demo.prototype, "Toggle", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech_demo.prototype, "Toggle_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech_demo.prototype, "listening", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech_demo.prototype, "Message", null);
    $.$mol_speech_demo = $mol_speech_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_speech_demo extends $.$mol_speech_demo {
            listening(next) {
                return $.$mol_speech.listening(next);
            }
            message() {
                let text = $.$mol_speech.text()
                    .replace(/ё/g, 'е')
                    .replace(/^.*? сотри все (пожалуйста|приз|please)\s*/, '')
                    .replace(/\s*точка/g, '.')
                    .replace(/\s*запятая/g, ',')
                    .replace(/\s*восклицательный знак/g, '!')
                    .replace(/\s*вопросительный знак/g, '?')
                    .replace(/\s*точка с запятой/g, ';')
                    .replace(/\s*двоеточие/g, ':')
                    .replace(/\s*тире/g, ' -')
                    .replace(/\s*новая строка/g, ' \n');
                while (true) {
                    let text2 = text
                        .replace(/\s+?\S+ сотри слово (пожалуйста|плиз|please)/, '')
                        .replace(/^(.*?) сотри (\d+) (слово|слова|слов) (пожалуйста|плиз|please)/, (str, text, count) => text.replace(new RegExp(`(\\s\\S+){${count}}$`), ''));
                    if (text === text2)
                        break;
                    text = text2;
                }
                return text
                    .replace(/цитата (.*?) конец цитаты/g, ' "$1"')
                    .replace(/(?:^|[.!?]\s)\S/g, str => str.toUpperCase());
            }
        }
        $$.$mol_speech_demo = $mol_speech_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_string_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_string_demo_title");
        }
        sub() {
            return [].concat(this.Simple(), this.Hint(), this.Filled(), this.Disabled());
        }
        Simple() {
            return ((obj) => {
                obj.value = (val) => this.name(val);
                return obj;
            })(new this.$.$mol_string);
        }
        name(val, force) {
            return (val !== void 0) ? val : "";
        }
        Hint() {
            return ((obj) => {
                obj.hint = () => "Batman";
                obj.value = (val) => this.name(val);
                return obj;
            })(new this.$.$mol_string);
        }
        Filled() {
            return ((obj) => {
                obj.value = (val) => this.name2(val);
                return obj;
            })(new this.$.$mol_string);
        }
        name2(val, force) {
            return (val !== void 0) ? val : "Jocker";
        }
        Disabled() {
            return ((obj) => {
                obj.disabled = () => true;
                obj.value = (val) => this.name2(val);
                return obj;
            })(new this.$.$mol_string);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "Simple", null);
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "name", null);
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "Hint", null);
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "Filled", null);
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "name2", null);
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "Disabled", null);
    $.$mol_string_demo = $mol_string_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_switch_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_switch_demo_title");
        }
        sub() {
            return [].concat(this.Enabled(), this.Disabled());
        }
        Enabled() {
            return ((obj) => {
                obj.value = (val) => this.color(val);
                obj.options = () => ({
                    "red": this.option_red(),
                    "green": this.option_green(),
                    "blue": this.option_blue(),
                });
                return obj;
            })(new this.$.$mol_switch);
        }
        color(val, force) {
            return (val !== void 0) ? val : "red";
        }
        option_red() {
            return this.$.$mol_locale.text("$mol_switch_demo_option_red");
        }
        option_green() {
            return this.$.$mol_locale.text("$mol_switch_demo_option_green");
        }
        option_blue() {
            return this.$.$mol_locale.text("$mol_switch_demo_option_blue");
        }
        Disabled() {
            return ((obj) => {
                obj.value = (val) => this.color(val);
                obj.enabled = () => false;
                obj.options = () => ({
                    "red": this.option_red(),
                    "green": this.option_green(),
                    "blue": this.option_blue(),
                });
                return obj;
            })(new this.$.$mol_switch);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_switch_demo.prototype, "Enabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_switch_demo.prototype, "color", null);
    __decorate([
        $.$mol_mem
    ], $mol_switch_demo.prototype, "Disabled", null);
    $.$mol_switch_demo = $mol_switch_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_text_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text("$mol_text_demo_title");
        }
        sub() {
            return [].concat(this.Scroll());
        }
        Scroll() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Text());
                return obj;
            })(new this.$.$mol_scroll);
        }
        Text() {
            return ((obj) => {
                obj.text = () => "# [Benchmarks](app/bench)\n## Benchmark 1\n### Benchmark 1.1\n#### Benchmark 1.1.1\n##### Benchmark 1.1.1.1\n\n* [$mol_app_bench_list](app/bench/list) - Frameworks comparison ([online](http://eigenmethod.github.io/mol/app/bench/#becnh=list#sort=fill#))\n* [ToDoMVC benchmark](https://github.com/eigenmethod/todomvc/tree/master/benchmark) ([online](http://eigenmethod.github.io/mol/app/bench/#bench=http:%2F%2Feigenmethod.github.io%2Ftodomvc%2Fbenchmark%2F#sample=angular2%7Eangularjs%7Eknockoutjs%7Emol%7Epolymer%7Ereact-alt%7Evanillajs%7Evue#sort=fill#))\n* [WebPageTest - Loading progress of ToDOMVC applications on some frameworks](https://www.webpagetest.org/video/compare.php?tests=161217_V8_6RFK%2C161217_G9_6RFM%2C161217_YZ_6RFN%2C161217_DM_6RFP%2C161217_2B_6RFQ%2C161217_RJ_6RFR%2C161217_2R_6RFS%2C161217_H5_6RFT%2C161217_CW_6RFV&thumbSize=150&ival=100&end=all)\n* [Line charts comparison](app/bench/chart/rope) ([online](http://eigenmethod.github.io/mol/app/bench/#bench=chart%2Frope%2F/sort=fill/sample=hcharts~mol))\n* [Bar charts comparison](app/bench/chart/bar) ([online](http://eigenmethod.github.io/mol/app/bench/#bench=chart%2Fbar%2F/sort=fill/sample=hcharts~mol))\n\n# Quick start\n\n**Create MAM project**\n\nEasy way is checkout [this preconfigured ~~PMS~~MAM repository](http://github.com/eigenmethod/mam/) and start dev server:\n\n```sh\ngit clone https://github.com/eigenmethod/mam.git ./mam && cd mam\nnpm start\n```\n\n|           | **Column 1** | **Column 2** | **Column 3**\n|-----------|--------------|--------------|---------\n| **Row 1** | Cell 1x1     | Cell 2x1     | Cell 3x1\n| **Row 2** | Cell 1x2     | Cell 2x2     | Cell 3x2\n| **Row 3** | Cell 1x3     | Cell 2x3     | Cell 3x3\n| **Row 4** | Cell 1x4     | Cell 2x4     | Cell 3x4\n| **Row 5** | Cell 1x5     | Cell 2x5     | Cell 3x5\n| **Row 6** | Cell 1x6     | Cell 2x6     | Cell 3x6\n| **Row 7** | Cell 1x7     | Cell 2x7     | Cell 3x7\n| **Row 8** | Cell 1x8     | Cell 2x8     | Cell 3x8\n| **Row 9** | Cell 1x9     | Cell 2x9     | Cell 3x9\n\nBuild status: [![Build Status](https://travis-ci.org/eigenmethod/mol.svg?branch=master)](https://travis-ci.org/eigenmethod/mol)\n";
                return obj;
            })(new this.$.$mol_text);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_demo.prototype, "Scroll", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_demo.prototype, "Text", null);
    $.$mol_text_demo = $mol_text_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_textarea extends $.$mol_view {
        sub() {
            return [].concat(this.Edit(), this.View());
        }
        Edit() {
            return ((obj) => {
                obj.dom_name = () => "textarea";
                obj.value = (val) => this.value(val);
                obj.hint = () => this.hint();
                obj.debounce = () => 0;
                obj.enabled = () => this.enabled();
                return obj;
            })(new this.$.$mol_string);
        }
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        hint() {
            return "";
        }
        enabled() {
            return true;
        }
        View() {
            return ((obj) => {
                obj.text = () => this.text();
                return obj;
            })(new this.$.$mol_text);
        }
        text() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
})($ || ($ = {}));
//textarea.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            text() {
                return this.value().replace(/^/mg, '\t');
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//textarea.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_textarea_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text("$mol_textarea_demo_title");
        }
        sub() {
            return [].concat(this.Empty_descr(), this.Filled_descr(), this.Disabled());
        }
        Empty_descr() {
            return ((obj) => {
                obj.hint = () => "source code";
                obj.value = (val) => this.empty_descr(val);
                return obj;
            })(new this.$.$mol_textarea);
        }
        empty_descr(val, force) {
            return (val !== void 0) ? val : "";
        }
        Filled_descr() {
            return ((obj) => {
                obj.value = (val) => this.filled_descr(val);
                return obj;
            })(new this.$.$mol_textarea);
        }
        filled_descr(val, force) {
            return (val !== void 0) ? val : "function hello( name = 'World' ) {\n\treturn `Hello, ${ name }!`\n}";
        }
        Disabled() {
            return ((obj) => {
                obj.enabled = () => false;
                obj.value = (val) => this.filled_descr(val);
                return obj;
            })(new this.$.$mol_textarea);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_textarea_demo.prototype, "Empty_descr", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea_demo.prototype, "empty_descr", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea_demo.prototype, "Filled_descr", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea_demo.prototype, "filled_descr", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea_demo.prototype, "Disabled", null);
    $.$mol_textarea_demo = $mol_textarea_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_source extends $.$mol_icon {
        path() {
            return "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z";
        }
    }
    $.$mol_icon_source = $mol_icon_source;
})($ || ($ = {}));
//source.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_typeof(value) {
        var str = {}.toString.apply(value);
        var type = str.substring(8, str.length - 1);
        return type;
    }
    $.$mol_typeof = $mol_typeof;
})($ || ($ = {}));
//typeof.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_tree {
        constructor(config = {}) {
            this.type = config.type || '';
            if (config.value) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = sub.concat(config.sub || []);
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1
            }));
        }
        clone(config) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                value: config.value
            });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var lines = String(str).split(/\n/);
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    throw new Error(`Syntax error at ${baseUri}:${row}\n${line}`);
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    throw new Error(`Too many tabs at ${baseUri}:${row}\n${line}`);
                stack.length = deep + 1;
                var parent = stack[deep];
                types.forEach(type => {
                    if (!type)
                        throw new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`);
                    var next = new $mol_tree({
                        type: type,
                        baseUri: baseUri,
                        row: row
                    });
                    parent.sub.push(next);
                    parent = next;
                });
                if (data) {
                    var next = new $mol_tree({
                        data: data.substring(1),
                        baseUri: baseUri,
                        row: row
                    });
                    parent.sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            var type = $.$mol_typeof(json);
            switch (type) {
                case 'Boolean':
                case 'Null':
                case 'Number':
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case 'String':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case 'Array':
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case 'Date':
                    return new $mol_tree({
                        type: "",
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                case 'Object':
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri
                            });
                        }
                        child.sub.push($mol_tree.fromJSON(json[key], baseUri));
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
            throw new Error(`Unsupported type (${type}) at ${baseUri}`);
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            if (String(Number(this.type)) == this.type.trim())
                return Number(this.type);
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree_trim_remarks(def) {
        return def.transform(([node], sub) => (node.type === '-') ? null : node.clone({ sub: sub() }));
    }
    $.$mol_view_tree_trim_remarks = $mol_view_tree_trim_remarks;
    function $mol_view_tree_classes(defs) {
        return $mol_view_tree_trim_remarks(defs);
    }
    $.$mol_view_tree_classes = $mol_view_tree_classes;
    function $mol_view_tree_class_name(val) {
        return val.type;
    }
    $.$mol_view_tree_class_name = $mol_view_tree_class_name;
    function $mol_view_tree_super_name(val) {
        if (val.sub.length != 1)
            throw val.error('Wrong sub count');
        return val.sub[0].type;
    }
    $.$mol_view_tree_super_name = $mol_view_tree_super_name;
    function $mol_view_tree_class_props(def) {
        const props = {};
        const catch_prop = (prop) => {
            if (prop.sub.length === 0)
                return;
            if (prop.sub[0].type === '-')
                return;
            props[prop.type] = props[prop.type];
            const def = prop.clone({
                sub: [prop.sub[0].transform(([node, ...stack], sub) => {
                        if (['<=', '<=>', '=>'].indexOf(node.type) === -1)
                            return node.clone({ sub: sub() });
                        catch_prop(node.sub[0]);
                        return node.clone({
                            sub: [node.sub[0].clone({
                                    sub: []
                                })]
                        });
                    })]
            });
            if (props[prop.type]) {
                if (props[prop.type].toString() !== def.toString()) {
                    throw def.error('Property already defined with another default value');
                }
            }
            else {
                props[prop.type] = def;
            }
        };
        def.sub[0].sub.map(catch_prop);
        return def.clone({
            type: '',
            sub: Object.keys(props).map(name => props[name]),
        });
    }
    $.$mol_view_tree_class_props = $mol_view_tree_class_props;
    function $mol_view_tree_prop_name(prop) {
        return (prop.type.match(/^\w+/) || [])[0] || '';
    }
    $.$mol_view_tree_prop_name = $mol_view_tree_prop_name;
    function $mol_view_tree_prop_key(prop) {
        return (prop.type.match(/!(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_key = $mol_view_tree_prop_key;
    function $mol_view_tree_prop_next(prop) {
        return (prop.type.match(/\?(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_next = $mol_view_tree_prop_next;
    function $mol_view_tree_prop_value(prop) {
        if (prop.sub.length != 1)
            throw prop.error(`Wrong sub count (${prop.sub.length})`);
        return prop.sub[0];
    }
    $.$mol_view_tree_prop_value = $mol_view_tree_prop_value;
    function $mol_view_tree_value_type(val) {
        switch (val.type) {
            case 'true': return 'bool';
            case 'false': return 'bool';
            case 'null': return 'null';
            case '*': return 'dict';
            case '/': return 'list';
            case '@': return 'locale';
            case '': return 'string';
            case '<=': return 'get';
            case '<=>': return 'bind';
            case '=>': return 'put';
        }
        if (val.type[0] === '$')
            return 'object';
        if (Number(val.type).toString() == val.type)
            return 'number';
        throw val.error('Wrong value');
    }
    $.$mol_view_tree_value_type = $mol_view_tree_value_type;
    function $mol_view_tree_compile(tree) {
        var content = '';
        var locales = {};
        for (let def of $mol_view_tree_classes(tree).sub) {
            if (!/^\$\w+$/.test(def.type))
                throw def.error('Wrong component name');
            var parent = def.sub[0];
            var propDefs = {};
            var members = {};
            for (let param of $mol_view_tree_class_props(def).sub) {
                try {
                    var needSet = false;
                    var needReturn = true;
                    var needCache = false;
                    var keys = [];
                    if (param.type === '<=>') {
                        param = param.sub[0];
                    }
                    if (param.type === '<=') {
                        param = param.sub[0];
                    }
                    var propName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(param.type);
                    if (propName[3]) {
                        needSet = true;
                        needCache = true;
                    }
                    const getValue = (value) => {
                        try {
                            switch (true) {
                                case (value.type === ''):
                                    return JSON.stringify(value.value);
                                case (value.type === '@'):
                                    const key = `${def.type}_${param.type.replace(/[?!].*/, '')}`;
                                    locales[key] = value.value;
                                    return `this.$.$mol_locale.text( ${JSON.stringify(key)} )`;
                                case (value.type === '-'):
                                    return null;
                                case (value.type === '/'):
                                    var items = [];
                                    value.sub.forEach(item => {
                                        if (item.type === '-')
                                            return;
                                        if (item.type === '^') {
                                            items.push(`...super.${param.type}()`);
                                            return;
                                        }
                                        var val = getValue(item);
                                        if (val)
                                            items.push(val);
                                    });
                                    return '[]' + (items.length ? '.concat( ' + items.join(' , ') + ' )' : ' as any[]');
                                case (value.type[0] === '$'):
                                    needCache = true;
                                    var overs = [];
                                    value.sub.forEach(over => {
                                        if (/^-?$/.test(over.type))
                                            return '';
                                        var overName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                        var ns = needSet;
                                        if (over.sub[0].type === '=>') {
                                            if (over.sub[0].sub.length === 1) {
                                                const method_name = over.sub[0].sub[0].type;
                                                members[method_name] = `\t${method_name}(){\n\t\treturn this.${param.type}().${over.type}()\n\t}\n\n`;
                                                return;
                                            }
                                        }
                                        var v = getValue(over.sub[0]);
                                        let args = [];
                                        if (overName[2])
                                            args.push(` ${overName[2]} : any `);
                                        if (overName[3])
                                            args.push(` ${overName[3]}? : any `);
                                        overs.push('\t\t\tobj.' + overName[1] + ' = (' + args.join(',') + ') => ' + v + '\n');
                                        needSet = ns;
                                    });
                                    return '(( obj )=>{\n' + overs.join('') + '\t\t\treturn obj\n\t\t})( new this.$.' + value.type + ' )';
                                case (value.type === '*'):
                                    var opts = [];
                                    value.sub.forEach(opt => {
                                        if (opt.type === '-')
                                            return '';
                                        if (opt.type === '^') {
                                            opts.push(`\t\t\t...super.${param.type}() ,\n`);
                                            return;
                                        }
                                        var key = /(.*?)(?:\?(\w+))?$/.exec(opt.type);
                                        keys.push(key[1]);
                                        var ns = needSet;
                                        var v = getValue(opt.sub[0]);
                                        var arg = key[2] ? ` ( ${key[2]}? : any )=> ` : '';
                                        opts.push('\t\t\t"' + key[1] + '" : ' + arg + ' ' + v + ' ,\n');
                                        needSet = ns;
                                    });
                                    return '({\n' + opts.join('') + '\t\t})';
                                case (value.type === '>'):
                                    throw new Error('Deprecated syntax `>`. Use `<=>` instead.');
                                case (value.type === '<=>'):
                                    needSet = true;
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))$/.exec(value.sub[0].type);
                                        return 'this.' + type[1] + '(' + (type[2] ? type[2] + ' ,' : '') + ' ' + type[3] + ' )';
                                    }
                                    break;
                                case (value.type === '<'):
                                    throw new Error('Deprecated syntax `<`. Use `<=` instead.');
                                case (value.type === '<='):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(value.sub[0].type);
                                        return 'this.' + type[1] + '(' + (type[2] ? type[2] : '') + ')';
                                    }
                                    break;
                            }
                            switch (value.type) {
                                case 'true':
                                case 'false':
                                    return value.type;
                                case 'null':
                                    return 'null as any';
                            }
                            if (Number(value.type).toString() == value.type)
                                return value.type;
                            throw value.error('Wrong value');
                        }
                        catch (err) {
                            err.message += `\n${value.baseUri}:${value.row}:${value.col}\n${value}`;
                            throw err;
                        }
                    };
                    if (param.sub.length > 1)
                        throw new Error('Too more sub');
                    param.sub.forEach(child => {
                        var val = getValue(child);
                        if (!val)
                            return;
                        propDefs[propName[1]] = param;
                        var args = [];
                        if (propName[2])
                            args.push(` ${propName[2]} : any `);
                        if (propName[3])
                            args.push(` ${propName[3]}? : any , force? : $${''}mol_atom_force `);
                        if (needSet && param.sub[0].type !== '<=>')
                            val = (needReturn ? `( ${propName[3]} !== void 0 ) ? ${propName[3]} : ` : `if( ${propName[3]} !== void 0 ) return ${propName[3]}\n\t\t`) + val;
                        if (needReturn)
                            val = 'return ' + val;
                        var decl = '\t' + propName[1] + '(' + args.join(',') + ') {\n\t\t' + val + '\n\t}\n\n';
                        if (needCache) {
                            if (propName[2])
                                decl = '\t@ $' + 'mol_mem_key\n' + decl;
                            else
                                decl = '\t@ $' + 'mol_mem\n' + decl;
                        }
                        decl = param.toString().trim().replace(/^/gm, '\t/// ') + '\n' + decl;
                        members[propName[1]] = decl;
                    });
                }
                catch (err) {
                    err.message += `\n${param.baseUri}:${param.row}:${param.col}\n${param}`;
                    throw err;
                }
            }
            var body = Object.keys(members).map(function (name) {
                return members[name] || '\t' + name + '() { return null as any }\n\t}\n';
            }).join('');
            var classes = 'namespace $ { export class ' + def.type + ' extends ' + parent.type + ' {\n\n' + body + '} }\n';
            content += classes + '\n';
        }
        return { script: content, locales: locales };
    }
    $.$mol_view_tree_compile = $mol_view_tree_compile;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_app_studio_field extends $.$mol_expander {
        path() {
            return [];
        }
        Trigger() {
            return ((obj) => {
                obj.checked = (val) => this.expanded(val);
                obj.title = () => this.title();
                obj.type = () => this.type();
                return obj;
            })(new this.$.$mol_app_studio_field_title);
        }
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        tools() {
            return [].concat(this.Type(), this.Object());
        }
        Type() {
            return ((obj) => {
                obj.value = (val) => this.type(val);
                obj.hint = () => this.type_hint();
                obj.Trigger_icon = () => null;
                obj.dictionary = () => this.types();
                return obj;
            })(new this.$.$mol_select);
        }
        type(val, force) {
            return (val !== void 0) ? val : "null";
        }
        type_hint() {
            return this.$.$mol_locale.text("$mol_app_studio_field_type_hint");
        }
        types() {
            return ({
                "get": "<=",
                "bind": "<=>",
                "object": "Object",
                "string": "Text",
                "locale": "Localization",
                "number": "Number",
                "bool": "Flag",
                "list": "List",
                "dict": "Dictionary",
                "null": "None",
            });
        }
        Object() {
            return ((obj) => {
                obj.value = (val) => this.class(val);
                obj.options = () => this.object_options();
                obj.hint = () => this.object_hint();
                obj.Trigger_icon = () => null;
                return obj;
            })(new this.$.$mol_select);
        }
        class(val, force) {
            return (val !== void 0) ? val : null;
        }
        object_options() {
            return [];
        }
        object_hint() {
            return this.$.$mol_locale.text("$mol_app_studio_field_object_hint");
        }
        content() {
            return [].concat(this.Bool(), this.Number(), this.String(), this.Bind(), this.List(), this.Dict(), this.Overs());
        }
        Bool() {
            return ((obj) => {
                obj.value = (val) => this.value_bool(val);
                obj.options = () => ({
                    "true": "True",
                    "false": "False",
                });
                return obj;
            })(new this.$.$mol_switch);
        }
        value_bool(val, force) {
            return (val !== void 0) ? val : null;
        }
        Number() {
            return ((obj) => {
                obj.value = (val) => this.value_number(val);
                obj.hint = () => this.hint();
                return obj;
            })(new this.$.$mol_number);
        }
        value_number(val, force) {
            return (val !== void 0) ? val : NaN;
        }
        hint() {
            return "";
        }
        String() {
            return ((obj) => {
                obj.value = (val) => this.value_string(val);
                obj.hint = () => this.hint();
                return obj;
            })(new this.$.$mol_string);
        }
        value_string(val, force) {
            return (val !== void 0) ? val : null;
        }
        Bind() {
            return ((obj) => {
                obj.value = (val) => this.bind(val);
                obj.options = () => this.bind_options();
                obj.hint = () => this.bind_hint();
                obj.No_options = () => this.Prop_add();
                obj.Trigger_icon = () => null;
                return obj;
            })(new this.$.$mol_select);
        }
        bind(val, force) {
            return (val !== void 0) ? val : null;
        }
        bind_options() {
            return [];
        }
        bind_hint() {
            return this.$.$mol_locale.text("$mol_app_studio_field_bind_hint");
        }
        Prop_add() {
            return ((obj) => {
                obj.title = () => this.prop_add_label();
                obj.event_click = (val) => this.event_prop_add(val);
                return obj;
            })(new this.$.$mol_button_minor);
        }
        prop_add_label() {
            return this.$.$mol_locale.text("$mol_app_studio_field_prop_add_label");
        }
        event_prop_add(val, force) {
            return (val !== void 0) ? val : null;
        }
        List() {
            return ((obj) => {
                obj.rows = () => [].concat(this.list_rows(), this.Add());
                return obj;
            })(new this.$.$mol_list);
        }
        list_rows() {
            return [];
        }
        Add() {
            return ((obj) => {
                obj.hint = () => this.add_hint();
                obj.value = (val) => this.add_item(val);
                obj.dictionary = () => this.item_types();
                obj.Trigger_icon = () => this.List_trigger_icon();
                return obj;
            })(new this.$.$mol_select);
        }
        add_hint() {
            return this.$.$mol_locale.text("$mol_app_studio_field_add_hint");
        }
        add_item(val, force) {
            return (val !== void 0) ? val : "";
        }
        item_types() {
            return ({
                "get": "<=",
                "string": "Text",
                "number": "Number",
                "bool": "Flag",
                "list": "List",
                "dict": "Dictionary",
                "null": "None",
            });
        }
        List_trigger_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_plus);
        }
        Dict() {
            return ((obj) => {
                obj.rows = () => [].concat(this.pairs(), this.Add_pair());
                return obj;
            })(new this.$.$mol_list);
        }
        pairs() {
            return [];
        }
        Add_pair() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Add_pair_key(), this.Add_pair_submit());
                return obj;
            })(new this.$.$mol_bar);
        }
        Add_pair_key() {
            return ((obj) => {
                obj.hint = () => this.add_pair_hint();
                obj.query = (val) => this.add_pair_key(val);
                obj.suggests = () => this.key_suggests();
                return obj;
            })(new this.$.$mol_search);
        }
        add_pair_hint() {
            return this.$.$mol_locale.text("$mol_app_studio_field_add_pair_hint");
        }
        add_pair_key(val, force) {
            return (val !== void 0) ? val : "";
        }
        key_suggests() {
            return [];
        }
        Add_pair_submit() {
            return ((obj) => {
                obj.event_click = (val) => this.add_pair(val);
                obj.sub = () => [].concat(this.Add_pair_submit_icon());
                return obj;
            })(new this.$.$mol_button_minor);
        }
        add_pair(val, force) {
            return (val !== void 0) ? val : "";
        }
        Add_pair_submit_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_plus);
        }
        Overs() {
            return ((obj) => {
                obj.rows = () => [].concat(this.overs(), this.Add_over());
                return obj;
            })(new this.$.$mol_list);
        }
        overs() {
            return [];
        }
        Add_over() {
            return ((obj) => {
                obj.hint = () => this.add_over_hint();
                obj.value = (val) => this.add_over(val);
                obj.Trigger_icon = () => this.Overs_trigger_icon();
                obj.options = () => this.over_options();
                return obj;
            })(new this.$.$mol_select);
        }
        add_over_hint() {
            return this.$.$mol_locale.text("$mol_app_studio_field_add_over_hint");
        }
        add_over(val, force) {
            return (val !== void 0) ? val : "";
        }
        Overs_trigger_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_plus);
        }
        over_options() {
            return [];
        }
        Prop(id) {
            return ((obj) => {
                obj.path = () => this.prop_path(id);
                obj.prop_arg = (id) => this.prop_arg(id);
                obj.prop = (path, val) => this.prop(path, val);
                obj.props = (name, val) => this.props(name, val);
                obj.prop_value = (id) => this.prop_value(id);
                obj.bind_options = () => this.bind_options();
                obj.prop_add = (val) => this.prop_add(val);
                obj.object_options = () => this.object_options();
                return obj;
            })(new this.$.$mol_app_studio_field);
        }
        prop_path(id) {
            return [];
        }
        prop_arg(id) {
            return ({});
        }
        prop(path, val, force) {
            return (val !== void 0) ? val : ((obj) => {
                return obj;
            })(new this.$.$mol_tree);
        }
        props(name, val, force) {
            return (val !== void 0) ? val : ((obj) => {
                return obj;
            })(new this.$.$mol_tree);
        }
        prop_value(id) {
            return null;
        }
        prop_add(val, force) {
            return (val !== void 0) ? val : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Trigger", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Type", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Object", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "class", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Bool", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "value_bool", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Number", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "value_number", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "String", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "value_string", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Bind", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "bind", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Prop_add", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "event_prop_add", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "List", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Add", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "add_item", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "List_trigger_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Dict", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Add_pair", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Add_pair_key", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "add_pair_key", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Add_pair_submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "add_pair", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Add_pair_submit_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Overs", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Add_over", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "add_over", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "Overs_trigger_icon", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_studio_field.prototype, "Prop", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_studio_field.prototype, "prop", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_studio_field.prototype, "props", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_field.prototype, "prop_add", null);
    $.$mol_app_studio_field = $mol_app_studio_field;
})($ || ($ = {}));
(function ($) {
    class $mol_app_studio_field_title extends $.$mol_check_expand {
        attr() {
            return (Object.assign({}, super.attr(), { "mol_app_studio_field_title_type": this.type() }));
        }
        type() {
            return "null";
        }
    }
    $.$mol_app_studio_field_title = $mol_app_studio_field_title;
})($ || ($ = {}));
//field.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_app_studio_field extends $.$mol_app_studio_field {
            prop_current(next) {
                return this.prop(this.path(), next);
            }
            title() {
                const path = this.path().slice();
                if (['/', '*', '<=', '<=>', '@', '', null].indexOf(path[path.length - 1]) >= 0)
                    path.pop();
                return String(path.pop());
            }
            title_arg() {
                return this.prop_arg(this.path());
            }
            value(next) {
                return this.prop_current(next);
            }
            type(next) {
                if (next) {
                    let val;
                    switch (next) {
                        case 'null':
                            val = new $.$mol_tree({ type: 'null' });
                            break;
                        case 'bool':
                            val = new $.$mol_tree({ type: 'false' });
                            break;
                        case 'number':
                            val = new $.$mol_tree({ type: 'NaN' });
                            break;
                        case 'string':
                            val = new $.$mol_tree({});
                            break;
                        case 'locale':
                            val = new $.$mol_tree({ type: '@', sub: [new $.$mol_tree({})] });
                            break;
                        case 'get':
                            val = new $.$mol_tree({ type: '<=', sub: [new $.$mol_tree({ type: '?' })] });
                            break;
                        case 'bind':
                            val = new $.$mol_tree({ type: '<=>', sub: [new $.$mol_tree({ type: '?' })] });
                            break;
                        case 'list':
                            val = new $.$mol_tree({ type: '/' });
                            break;
                        case 'dict':
                            val = new $.$mol_tree({ type: '*' });
                            break;
                        case 'object':
                            val = new $.$mol_tree({ type: '$mol_view' });
                            break;
                        default: throw new Error(`Unsupported type: ${next}`);
                    }
                    this.value(val);
                }
                const val = this.value();
                if (!val || val.type === '-')
                    return;
                return $.$mol_view_tree_value_type(this.value());
            }
            expanded(next = ['bool', 'number', 'string', 'locale'].indexOf(this.type()) >= 0) {
                return next;
            }
            class(next) {
                return this.value(next && new $.$mol_tree({ type: next })).type;
            }
            bind(next) {
                return this.value(next && this.value().clone({ sub: [new $.$mol_tree({ type: next, sub: [new $.$mol_tree({ type: '-' })] })] })).sub[0].type;
            }
            value_bool(next) {
                return this.value(next === undefined ? undefined : new $.$mol_tree({ type: String(next) })).type;
            }
            value_number(next) {
                return this.value(next === undefined ? undefined : new $.$mol_tree({ type: String(next) })).type;
            }
            value_string(next) {
                let next2;
                if (next !== undefined) {
                    next2 = new $.$mol_tree({ value: next });
                    if (this.type() === 'locale')
                        next2 = new $.$mol_tree({ type: '@', sub: [next2] });
                }
                return this.value(next2).value;
            }
            pairs() {
                return this.value().sub.map(pair => this.Prop([...this.path(), pair.type, null]));
            }
            overs() {
                return this.value().sub.map(over => this.Prop([...this.path(), over.type, null]));
            }
            hint() {
                return this.prop_value(this.path());
            }
            tools() {
                const type = this.type();
                return [
                    this.Type(),
                    ...(type === 'get') ? [this.Bind()] : [],
                    ...(type === 'bind') ? [this.Bind()] : [],
                    ...(['object'].indexOf(type) >= 0) ? [this.Object()] : [],
                ];
            }
            content() {
                const type = this.type();
                return [
                    (type === 'bool') ? this.Bool() : null,
                    (type === 'number') ? this.Number() : null,
                    (type === 'string') ? this.String() : null,
                    (type === 'locale') ? this.String() : null,
                    (type === 'list') ? this.List() : null,
                    (type === 'dict') ? this.Dict() : null,
                    (type === 'object') ? this.Overs() : null,
                    ...(['get', 'bind'].indexOf(type) >= 0 && this.bind()) ? [this.Prop([this.Bind().value(), null])] : [],
                ];
            }
            item_value(index, next) {
                return next;
            }
            item_class(index, next) {
                return next;
            }
            list_rows() {
                return this.value().sub.map((item, index) => this.Prop([...this.path(), index]));
            }
            prop_path(path) {
                return path;
            }
            add_item(type) {
                if (!type)
                    return null;
                const items = this.value();
                this.value(items.insert(new $.$mol_tree({ type }), items.sub.length));
                this.list_rows()[items.sub.length].type(type);
                return null;
            }
            over_options() {
                return this.props(this.class()).sub.map(item => item.type);
            }
            add_over(name) {
                if (!name)
                    return null;
                this.value(this.value().insert(new $.$mol_tree({ type: name }), name));
                return null;
            }
            add_pair(event) {
                if (!event)
                    return;
                const name = this.add_pair_key();
                this.add_pair_key('');
                this.value(this.value().insert(new $.$mol_tree, name, null));
            }
            event_prop_add(event) {
                const name = this.Bind().filter_pattern();
                this.prop_add(name);
                this.Bind().value(name);
                this.Bind().filter_pattern('');
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_app_studio_field.prototype, "expanded", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio_field.prototype, "item_value", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio_field.prototype, "item_class", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_studio_field.prototype, "list_rows", null);
        $$.$mol_app_studio_field = $mol_app_studio_field;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//field.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_http extends $.$mol_object {
        static resource(uri) {
            const resolver = $.$mol_dom_context.document.createElement('a');
            resolver.href = uri;
            return this.resource_absolute(resolver.href);
        }
        static resource_absolute(uri) {
            return $mol_http.make({
                uri: $.$mol_const(uri)
            });
        }
        uri() { return ''; }
        method_get() { return 'Get'; }
        method_put() { return 'Put'; }
        credentials() {
            return null;
        }
        headers() {
            return {};
        }
        response_type() {
            return '';
        }
        request() {
            if (this['request()'])
                return this['request()'];
            var next = this['request()'] = new $.$mol_dom_context.XMLHttpRequest;
            next.withCredentials = Boolean(this.credentials());
            next.onload = $.$mol_log_group(this.object_id() + ' load', (event) => {
                if ((next.status === 0) || (Math.floor(next.status / 100) === 2)) {
                    this.response(next, $.$mol_atom_force_cache);
                }
                else {
                    this.response(new Error(next.statusText || next.responseText || `HTTP error ${next.status}`), $.$mol_atom_force_cache);
                }
            });
            next.onerror = $.$mol_log_group(this.object_id() + ' error', (event) => {
                const right_event = event;
                new $.$mol_defer(() => {
                    this.response(right_event.error || new Error('Unknown HTTP error'), $.$mol_atom_force_cache);
                });
            });
            return next;
        }
        destructor() {
            const native = this['request()'];
            if (native)
                native.abort();
        }
        response(next, force) {
            const creds = this.credentials();
            const native = this.request();
            const method = (next === void 0) ? this.method_get() : this.method_put();
            const uri = this.uri();
            native.open(method, uri, true, creds && creds.login, creds && creds.password);
            native.responseType = this.response_type();
            const headers = this.headers();
            for (let name in headers)
                native.setRequestHeader(name, headers[name]);
            native.send(...$.$mol_maybe(next));
            return $.$mol_fail_hidden(new $.$mol_atom_wait(`${method} ${uri}`));
        }
        text(next, force) {
            return this.response(next, force).responseText;
        }
        xml(next, force) {
            return this.response(next, force).responseXML;
        }
        json(next, force) {
            const next2 = next && JSON.stringify(next, null, '\t');
            return JSON.parse(this.text(next2, force));
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_http.prototype, "response", null);
    __decorate([
        $.$mol_mem
    ], $mol_http.prototype, "json", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_http, "resource_absolute", null);
    $.$mol_http = $mol_http;
})($ || ($ = {}));
//http.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return function (host, field, descr) {
            const value = descr.value;
            descr.value = function $mol_deprecated_wrapper() {
                console.warn(`${host.constructor}::${field} is deprecated. ${message}`);
                return value.apply(this, arguments);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_http_resource extends $.$mol_http {
        static item(uri) {
            return $.$mol_http.resource(uri);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_http.resource insted.')
    ], $mol_http_resource, "item", null);
    $.$mol_http_resource = $mol_http_resource;
    class $mol_http_resource_json {
        static item(uri) {
            return $.$mol_http.resource(uri);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_http.resource insted.')
    ], $mol_http_resource_json, "item", null);
    $.$mol_http_resource_json = $mol_http_resource_json;
})($ || ($ = {}));
//resource.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_app_studio extends $.$mol_book {
        value_overrided(id, val, force) {
            return (val !== void 0) ? val : null;
        }
        pages() {
            return [].concat(this.Preview_page(), this.Editor_page(), this.Source_page());
        }
        Preview_page() {
            return ((obj) => {
                obj.title = () => this.preview_title();
                obj.tools = () => [].concat(this.Source_link(), this.Edit(), this.tools_main());
                obj.body = () => [].concat(this.Selector());
                obj.minimal_width = () => 400;
                return obj;
            })(new this.$.$mol_page);
        }
        preview_title() {
            return this.$.$mol_locale.text("$mol_app_studio_preview_title");
        }
        Source_link() {
            return ((obj) => {
                obj.hint = () => this.source_title();
                obj.sub = () => [].concat(this.Source_icon());
                obj.arg = () => this.source_arg();
                return obj;
            })(new this.$.$mol_link);
        }
        Source_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_source);
        }
        source_arg() {
            return ({
                "source": "",
            });
        }
        Edit() {
            return ((obj) => {
                obj.hint = () => this.editor_title();
                obj.sub = () => [].concat(this.Edit_icon());
                obj.arg = () => ({
                    "path": "",
                    "source": null,
                });
                return obj;
            })(new this.$.$mol_link);
        }
        Edit_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_settings);
        }
        tools_main() {
            return [];
        }
        Selector() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Block());
                obj.path = (val) => this.path(val);
                return obj;
            })(new this.$.$mol_app_studio_selector);
        }
        Block() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view);
        }
        path(val, force) {
            return (val !== void 0) ? val : [];
        }
        Editor_page() {
            return ((obj) => {
                obj.plugins = () => [].concat(this.Speech_filter());
                obj.title = () => this.editor_title();
                obj.event_top = (val) => this.event_front_up(val);
                obj.tools = () => [].concat(this.Editor_close());
                obj.body = () => [].concat(this.Filter(), this.Fields());
                obj.minimal_width = () => 400;
                return obj;
            })(new this.$.$mol_page);
        }
        Speech_filter() {
            return ((obj) => {
                obj.event_catch = (val) => this.speech_filter(val);
                obj.patterns = () => this.speech_filter_patterns();
                return obj;
            })(new this.$.$mol_speech);
        }
        speech_filter(val, force) {
            return (val !== void 0) ? val : null;
        }
        speech_filter_patterns() {
            return [].concat("find (.+?)");
        }
        editor_title() {
            return this.$.$mol_locale.text("$mol_app_studio_editor_title");
        }
        Editor_close() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Editor_close_icon());
                obj.arg = () => this.editor_close_arg();
                return obj;
            })(new this.$.$mol_link);
        }
        Editor_close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross);
        }
        editor_close_arg() {
            return ({
                "path": null,
            });
        }
        Filter() {
            return ((obj) => {
                obj.hint = () => this.filter_hint();
                obj.query = (val) => this.prop_filter(val);
                return obj;
            })(new this.$.$mol_search);
        }
        filter_hint() {
            return this.$.$mol_locale.text("$mol_app_studio_filter_hint");
        }
        prop_filter(val, force) {
            return (val !== void 0) ? val : "";
        }
        Fields() {
            return ((obj) => {
                obj.rows = () => this.fields();
                obj.Empty = () => this.Prop_add();
                return obj;
            })(new this.$.$mol_list);
        }
        fields() {
            return [];
        }
        Prop_add() {
            return ((obj) => {
                obj.event_click = (val) => this.event_add(val);
                obj.title = () => this.prop_add_label();
                return obj;
            })(new this.$.$mol_button_major);
        }
        event_add(val, force) {
            return (val !== void 0) ? val : null;
        }
        prop_add_label() {
            return this.$.$mol_locale.text("$mol_app_studio_prop_add_label");
        }
        Source_page() {
            return ((obj) => {
                obj.title = () => this.source_title();
                obj.minimal_width = () => 400;
                obj.tools = () => [].concat(this.Source_close());
                obj.body = () => [].concat(this.Source());
                return obj;
            })(new this.$.$mol_page);
        }
        source_title() {
            return this.$.$mol_locale.text("$mol_app_studio_source_title");
        }
        Source_close() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Source_close_icon());
                obj.arg = () => this.source_close_arg();
                return obj;
            })(new this.$.$mol_link);
        }
        Source_close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross);
        }
        source_close_arg() {
            return ({
                "source": null,
            });
        }
        Source() {
            return ((obj) => {
                obj.text = () => this.source();
                return obj;
            })(new this.$.$mol_text);
        }
        source() {
            return "";
        }
        Placeholder() {
            return null;
        }
        Prop(id) {
            return ((obj) => {
                obj.path = () => this.prop_path(id);
                obj.prop = (path, val) => this.prop_default(path, val);
                obj.props = (name, val) => this.props_all(name, val);
                obj.prop_arg = (id) => this.prop_arg(id);
                obj.prop_value = (id) => this.prop_value_base(id);
                obj.bind_options = () => this.prop_options();
                obj.object_options = () => this.view_options();
                obj.prop_add = (val) => this.prop_add(val);
                return obj;
            })(new this.$.$mol_app_studio_field);
        }
        prop_path(id) {
            return [];
        }
        prop_default(path, val, force) {
            return (val !== void 0) ? val : ((obj) => {
                return obj;
            })(new this.$.$mol_tree);
        }
        props_all(name, val, force) {
            return (val !== void 0) ? val : ((obj) => {
                return obj;
            })(new this.$.$mol_tree);
        }
        prop_arg(id) {
            return ({});
        }
        prop_value_base(id) {
            return null;
        }
        prop_options() {
            return [];
        }
        view_options() {
            return [];
        }
        prop_add(val, force) {
            return (val !== void 0) ? val : "";
        }
        class_name_self(val, force) {
            return (val !== void 0) ? val : "App";
        }
        class_name_base(val, force) {
            return (val !== void 0) ? val : "$mol_view";
        }
        class_self(val, force) {
            return (val !== void 0) ? val : ((obj) => {
                return obj;
            })(new this.$.$mol_tree);
        }
        classes() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_tree);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_app_studio.prototype, "value_overrided", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Preview_page", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Source_link", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Source_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Edit", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Edit_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Selector", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Block", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "path", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Editor_page", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Speech_filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "speech_filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Editor_close", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Editor_close_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "prop_filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Fields", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Prop_add", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "event_add", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Source_page", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Source_close", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Source_close_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "Source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_studio.prototype, "Prop", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_studio.prototype, "prop_default", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_studio.prototype, "props_all", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "prop_add", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "class_name_self", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "class_name_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "class_self", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio.prototype, "classes", null);
    $.$mol_app_studio = $mol_app_studio;
})($ || ($ = {}));
(function ($) {
    class $mol_app_studio_selector extends $.$mol_demo_large {
        event() {
            return ({
                "contextmenu": (event) => this.select(event),
                "dblclick": (event) => this.select(event),
            });
        }
        select(event, force) {
            return (event !== void 0) ? event : null;
        }
        path(val, force) {
            return (val !== void 0) ? val : [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_selector.prototype, "select", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_studio_selector.prototype, "path", null);
    $.$mol_app_studio_selector = $mol_app_studio_selector;
})($ || ($ = {}));
//studio.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_app_studio extends $.$mol_app_studio {
            pages() {
                return [
                    this.Preview_page(),
                    ...this.source_show()
                        ? [this.Source_page()]
                        : (this.path() == null)
                            ? []
                            : [this.Editor_page()],
                ];
            }
            classes_static() {
                const view_tree = '$mol_view $mol_object\n\ttitle \\\n\tsub /\n\tstyle *\n\tattr *\n\tevent *\n\tdom_name \\\n\n';
                const source = view_tree + $.$mol_http.resource('web.view.tree').text();
                return $.$mol_view_tree_classes($.$mol_tree.fromString(source));
            }
            classes(next) {
                if (next)
                    return next;
                return this.classes_static().insert(new $.$mol_tree({ type: this.class_name_base() }), this.class_name_self(), null);
            }
            class(name, next) {
                if (next !== undefined) {
                    this.classes(this.classes().insert(next, name));
                }
                return this.classes().select(name).sub[0];
            }
            class_self(next) {
                return this.class(this.class_name_self(), next);
            }
            props_self(name) {
                const def = this.class(name);
                if (!def)
                    return new $.$mol_tree;
                return $.$mol_view_tree_class_props(def);
            }
            props_all(name, next, force) {
                if (next)
                    return next;
                const props_all = {};
                const collect = (name) => {
                    const sup = this.class(name);
                    if (sup)
                        collect($.$mol_view_tree_super_name(sup));
                    const props = this.props_self(name);
                    for (let prop of props.sub)
                        props_all[prop.type] = prop;
                };
                collect(name);
                return this.classes().clone({ type: '', sub: Object.keys(props_all).map(name => props_all[name]) });
            }
            view_class(name) {
                if (!$[name])
                    throw new Error(`View class not found: ${name}`);
                return $[name];
            }
            fields() {
                const path = this.path();
                return this.props_all(this.prop_class(path)).sub
                    .filter(prop => !$.$mol_view_tree_prop_key(prop))
                    .filter($.$mol_match_text(this.prop_filter(), (prop) => [$.$mol_view_tree_prop_name(prop)]))
                    .map(prop => this.Prop([...path, prop.type, null]));
            }
            prop_overs(path) {
                return this.prop_default(path).sub.map(over => over.type);
            }
            prop_path(path) {
                return path;
            }
            prop_title(path) {
                return path[path.length - 1];
            }
            prop_arg(path) {
                return { path: path.join(',') };
            }
            prop(path, next) {
                const props = this.props_all(this.class_name_self());
                let prop = props.select(path[0]).sub[0] || new $.$mol_tree({ type: String(path[0]) });
                if (next) {
                    prop = prop.insert(next, ...path.slice(1));
                    this.class_self(this.class_self().insert(prop, 0, path[0]));
                    this.props_all(this.class_name_self(), undefined, $.$mol_atom_force_cache);
                }
                return prop.select(...path.slice(1)).sub[0];
            }
            prop_self(path) {
                return this.class_self().select(null, ...path).sub[0];
            }
            prop_type(path) {
                const prop = this.prop(path);
                return (prop && prop.type !== '-') ? $.$mol_view_tree_value_type(prop) : undefined;
            }
            prop_key(path, next) {
                return $.$mol_view_tree_prop_key(this.prop(path.slice(0, path.length - 1)));
            }
            prop_next(path, next) {
                return $.$mol_view_tree_prop_next(this.prop(path.slice(0, path.length - 1)));
            }
            prop_default(path, next) {
                return this.prop(path, next);
            }
            path(next) {
                const str = $.$mol_state_arg.value(this.state_key('path'), next && next.join(','));
                return (str == null) ? null : (str ? str.split(',') : []);
            }
            view_options() {
                return Object.keys($).filter(name => {
                    if (name.length < 2)
                        return false;
                    if (name[0] !== '$')
                        return false;
                    const val = $[name];
                    if (typeof val !== 'function')
                        return false;
                    if (!(val.prototype instanceof $.$mol_object))
                        return false;
                    return true;
                });
            }
            prop_options() {
                return this.props_all(this.class_name_self()).sub.map(prop => prop.type);
            }
            overrided_all(next) {
                return next || {};
            }
            overrided(key, next) {
                return this.overrided_all((next === undefined) ? undefined : Object.assign({}, this.overrided_all(), { [key]: next }))[key];
            }
            prop_value_base(path, next) {
                const path2 = path.slice();
                while (path2[path2.length - 1] === null)
                    path2.pop();
                const element = this.Element([]);
                const field = String(path2.shift()).replace(/[?!].*/, '');
                let val = element[field] && element[field]['$mol_app_studio_original'];
                if (typeof val === 'function') {
                    val = val.call(element, next);
                    while (val && path2.length) {
                        const field = path2.shift();
                        if (field === null)
                            continue;
                        val = val[field];
                    }
                }
                return val;
            }
            prop_class(path, next) {
                if (path.length === 0)
                    return this.class_name_self();
                const over = this.overrided(`prop_class(${JSON.stringify(path)})`, next);
                if (over)
                    return over;
                switch (this.prop_type(path)) {
                    case 'get':
                    case 'bind':
                    case 'object':
                        const def = this.prop_default(path);
                        return def && def.type;
                }
                throw new Error(`Wrong type ${this.prop_type(path)}`);
            }
            prop_value_view(path, next) {
                const over = this.prop_self(path);
                switch (this.prop_type(path)) {
                    case 'bool': return over && (over.type === 'true');
                    case 'string': return over && over.value;
                    case 'locale': return over && over.sub[0].value;
                    case 'number': return over && over.type;
                    case 'get':
                    case 'bind': return over && this.prop_value_view([over.sub[0].type, null]);
                    case 'object': return this.Element(path);
                    case 'list': return over && over.sub.map((item, index) => this.prop_value_view([...path, index]));
                    case 'dict': return over && over.sub.reduce((dict, item) => (Object.assign({}, dict, { [item.type]: this.prop_value_view([...path, item.type, null]) })), {});
                }
                return undefined;
            }
            Element(path) {
                const prop_self = this.prop_self(path);
                const obj = (path.length && !prop_self)
                    ? this.prop_value_base(path)
                    : new (this.view_class(path.length === 0 ? this.class_name_base() : prop_self.type));
                if (!obj || typeof obj !== 'object')
                    return obj;
                const props = this.props_all(this.prop_class(path));
                for (let prop of props.sub) {
                    if (this.prop_key([...path, prop.type]))
                        continue;
                    const field = prop.type.replace(/[?!].*/, '');
                    let value = obj[field];
                    if (!value || value['$mol_app_studio_original'])
                        continue;
                    obj[field] = (next) => {
                        const val = this.prop_value_view([...path, prop.type, null]);
                        if (next === undefined) {
                            if (val !== undefined)
                                return val;
                        }
                        return value.call(obj, next);
                    };
                    obj[field]['$mol_app_studio_original'] = value;
                }
                return obj;
            }
            Block() {
                return this.Element([]);
            }
            preview_title() {
                return super.preview_title() + this.Element([]).title();
            }
            event_add(event) {
                this.prop_add(this.prop_filter());
            }
            prop_add(name) {
                this.prop([name], new $.$mol_tree({ type: name, sub: [new $.$mol_tree] }));
            }
            speech_enabled(next) {
                return this.$.$mol_speech.listening(next);
            }
            speech_filter([filter]) {
                this.prop_filter(filter);
            }
            source_show() {
                return this.$.$mol_state_arg.value(this.state_key('source')) != null;
            }
            source() {
                return '```tree\n' + this.class_self() + '```';
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_app_studio.prototype, "classes_static", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_studio.prototype, "classes", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio.prototype, "class", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio.prototype, "props_self", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio.prototype, "props_all", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio.prototype, "prop", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio.prototype, "prop_self", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio.prototype, "prop_type", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio.prototype, "prop_key", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio.prototype, "prop_next", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio.prototype, "prop_default", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_studio.prototype, "view_options", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_studio.prototype, "prop_options", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_studio.prototype, "overrided_all", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio.prototype, "prop_value_base", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_studio.prototype, "Element", null);
        $$.$mol_app_studio = $mol_app_studio;
        class $mol_app_studio_selector extends $.$mol_app_studio_selector {
            select(event) {
                const target = event.target.id;
                const self = this.dom_node().id;
                if (target.substring(0, self.length) === self) {
                    const suffix = event.target.id.substring(this.dom_node().id.length + 1);
                    this.path(suffix.replace(/\(.*?\)/g, '').split('.').filter(v => v));
                }
                else {
                    this.path(JSON.parse(target.replace(/^.*?Element\(/g, '').replace(/\).*$/g, '')));
                }
                event.preventDefault();
            }
        }
        $$.$mol_app_studio_selector = $mol_app_studio_selector;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//studio.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_status extends $.$mol_view {
        status() {
            return null;
        }
        minimal_height() {
            return 24;
        }
        minimal_width() {
            return 0;
        }
        sub() {
            return [].concat(this.message());
        }
        message() {
            return "";
        }
    }
    $.$mol_status = $mol_status;
})($ || ($ = {}));
//status.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_status extends $.$mol_status {
            message() {
                try {
                    let status = this.status();
                    if (status)
                        status.valueOf();
                    return null;
                }
                catch (error) {
                    if (error instanceof $.$mol_atom_wait)
                        throw error;
                    return error.message;
                }
            }
        }
        $$.$mol_status = $mol_status;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//status.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_app_demo extends $.$mol_book {
        editor_title() {
            return this.detail_title();
        }
        detail_title() {
            return "$mol";
        }
        source_prefix() {
            return "https://github.com/eigenmethod/mol/tree/master/";
        }
        Placeholder() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_app_demo_placeholder);
        }
        pages() {
            return this.blocks();
        }
        blocks() {
            return [];
        }
        attr() {
            return ({
                "mol_theme": this.theme(),
            });
        }
        Menu() {
            return ((obj) => {
                obj.hierarchy = () => this.nav_hierarchy();
                obj.option = (id) => this.nav_option(id);
                obj.filter = (val) => this.filter_string(val);
                obj.theme = (val) => this.theme(val);
                return obj;
            })(new this.$.$mol_app_demo_menu);
        }
        nav_hierarchy() {
            return null;
        }
        nav_option(id) {
            return null;
        }
        filter_string(val, force) {
            return (val !== void 0) ? val : "";
        }
        theme(val, force) {
            return (val !== void 0) ? val : "$mol_theme_dark";
        }
        Detail() {
            return ((obj) => {
                obj.minimal_width = () => 600;
                obj.title = () => this.detail_title();
                obj.source_link = () => this.source_link();
                obj.body = () => [].concat(this.Detail_list());
                obj.event_top = (val) => this.event_front_up(val);
                return obj;
            })(new this.$.$mol_app_demo_detail);
        }
        source_link() {
            return "";
        }
        Detail_list() {
            return ((obj) => {
                obj.rows = () => this.main_content();
                return obj;
            })(new this.$.$mol_list);
        }
        main_content() {
            return [];
        }
        Editor(id) {
            return ((obj) => {
                obj.minimal_width = () => 1000;
                obj.title = () => this.editor_title();
                obj.class_name_base = () => this.selected_class_name();
                obj.tools_main = () => [].concat(this.Close());
                return obj;
            })(new this.$.$mol_app_studio);
        }
        selected_class_name() {
            return "";
        }
        Close() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Close_icon());
                obj.arg = () => this.close_arg();
                return obj;
            })(new this.$.$mol_link);
        }
        Close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross);
        }
        close_arg() {
            return ({
                "edit": null,
            });
        }
        Welcome() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Welcome_text());
                return obj;
            })(new this.$.$mol_scroll);
        }
        Welcome_text() {
            return ((obj) => {
                obj.text = () => this.welcome_text();
                return obj;
            })(new this.$.$mol_text);
        }
        welcome_text() {
            return "";
        }
        Detail_empty_message() {
            return ((obj) => {
                obj.sub = () => [].concat(this.detail_empty_prefix(), this.selected(), this.detail_empty_postfix());
                return obj;
            })(new this.$.$mol_status);
        }
        detail_empty_prefix() {
            return this.$.$mol_locale.text("$mol_app_demo_detail_empty_prefix");
        }
        selected() {
            return "";
        }
        detail_empty_postfix() {
            return this.$.$mol_locale.text("$mol_app_demo_detail_empty_postfix");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Placeholder", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Menu", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "filter_string", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "theme", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Detail", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Detail_list", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_demo.prototype, "Editor", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Welcome", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Welcome_text", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Detail_empty_message", null);
    $.$mol_app_demo = $mol_app_demo;
})($ || ($ = {}));
(function ($) {
    class $mol_app_demo_menu extends $.$mol_page {
        minimal_width() {
            return 240;
        }
        title() {
            return this.$.$mol_locale.text("$mol_app_demo_menu_title");
        }
        sub() {
            return [].concat(this.Head(), this.Filter(), this.Nav(), this.Themes());
        }
        Filter() {
            return ((obj) => {
                obj.query = (val) => this.filter(val);
                return obj;
            })(new this.$.$mol_search);
        }
        filter(val, force) {
            return (val !== void 0) ? val : "";
        }
        Nav() {
            return ((obj) => {
                obj.hierarchy = () => this.hierarchy();
                obj.record = (id) => this.option(id);
                obj.needle = () => this.filter();
                return obj;
            })(new this.$.$mol_app_demo_nav);
        }
        hierarchy() {
            return null;
        }
        option(id) {
            return null;
        }
        Themes() {
            return ((obj) => {
                obj.value = (val) => this.theme(val);
                obj.options = () => ({
                    "$mol_theme_light": this.theme_light_title(),
                    "$mol_theme_dark": this.theme_dark_title(),
                });
                return obj;
            })(new this.$.$mol_switch);
        }
        theme(val, force) {
            return (val !== void 0) ? val : "$mol_theme_dark";
        }
        theme_light_title() {
            return this.$.$mol_locale.text("$mol_app_demo_menu_theme_light_title");
        }
        theme_dark_title() {
            return this.$.$mol_locale.text("$mol_app_demo_menu_theme_dark_title");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "Filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "Nav", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "Themes", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "theme", null);
    $.$mol_app_demo_menu = $mol_app_demo_menu;
})($ || ($ = {}));
(function ($) {
    class $mol_app_demo_detail extends $.$mol_page {
        tools() {
            return [].concat(this.Source_link(), this.Edit(), this.Close());
        }
        Source_link() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Source_icon());
                obj.uri = () => this.source_link();
                obj.target = () => "_blank";
                return obj;
            })(new this.$.$mol_link);
        }
        Source_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_source);
        }
        source_link() {
            return "";
        }
        Edit() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Edit_speck(), this.Edit_icon());
                obj.arg = () => ({
                    "edit": "",
                    "path": "",
                });
                return obj;
            })(new this.$.$mol_link);
        }
        Edit_speck() {
            return ((obj) => {
                obj.value = () => "β";
                return obj;
            })(new this.$.$mol_speck);
        }
        Edit_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_settings);
        }
        Close() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Close_icon());
                obj.arg = () => this.close_arg();
                return obj;
            })(new this.$.$mol_link);
        }
        Close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross);
        }
        close_arg() {
            return ({
                "demo": null,
            });
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Source_link", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Source_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Edit", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Edit_speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Edit_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Close_icon", null);
    $.$mol_app_demo_detail = $mol_app_demo_detail;
})($ || ($ = {}));
(function ($) {
    class $mol_app_demo_nav extends $.$mol_grid {
        row_height() {
            return 40;
        }
        hierarchy_col() {
            return "title";
        }
        Head() {
            return null;
        }
        Option(id) {
            return ((obj) => {
                obj.arg = () => this.arg(id);
                obj.sub = () => [].concat(this.Expand(id), this.Content(id));
                return obj;
            })(new this.$.$mol_link);
        }
        arg(id) {
            return ({});
        }
        Expand(id) {
            return ((obj) => {
                obj.expanded = (val) => this.cell_expanded(id, val);
                obj.level = () => this.cell_level(id);
                return obj;
            })(new this.$.$mol_check_expand);
        }
        Content(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.cell_content(id));
                return obj;
            })(new this.$.$mol_view);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_app_demo_nav.prototype, "Option", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_demo_nav.prototype, "Expand", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_demo_nav.prototype, "Content", null);
    $.$mol_app_demo_nav = $mol_app_demo_nav;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_app_demo extends $.$mol_app_demo {
            detail_title() {
                const selected = this.selected();
                if (selected) {
                    const names = this.names_demo();
                    return `$${selected}`;
                }
                return super.title();
            }
            theme(next) {
                return this.$.$mol_state_local.value('$mol_app_demo_theme', next) || super.theme();
            }
            names_demo_all() {
                var next = [];
                for (var name in this.$) {
                    if (!/^\$.*_demo($|_)/i.test(name))
                        continue;
                    if (/^\$mol_demo/.test(name))
                        continue;
                    if (/^\$mol_app_demo/.test(name))
                        continue;
                    if (typeof this.$[name] !== 'function')
                        continue;
                    next.push(name.substring(1));
                }
                return next.sort();
            }
            names_demo_filtered() {
                const filter = this.filter_string().toLowerCase();
                const names = this.names_demo_all().filter(name => (name.toLowerCase().indexOf(filter) != -1));
                return names;
            }
            nav_hierarchy() {
                const names = this.names_demo_filtered();
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                names.forEach(name => {
                    const chunks = name.split(/(?=[_.-])/);
                    let branch = root;
                    for (let i = 1; i <= chunks.length; ++i) {
                        const prefix = chunks.slice(0, i).join('');
                        if (!hierarchy[prefix]) {
                            branch.sub.push(hierarchy[prefix] = {
                                id: prefix,
                                parent: branch,
                                sub: [],
                            });
                        }
                        branch = hierarchy[prefix];
                    }
                });
                hierarchy[''].sub.map(child => reduce(child));
                function reduce(node) {
                    if (names.indexOf(node.id) >= 0)
                        return node;
                    node.sub = node.sub.map(child => reduce(child));
                    if (node.sub.length !== 1)
                        return node;
                    node.sub[0].parent = node.parent;
                    return node.sub[0];
                }
                return hierarchy;
            }
            nav_option(id) {
                const parent = this.nav_hierarchy()[id].parent;
                const title = `$${id}`
                    .substring(parent.id.length + 1)
                    .replace(/^[-._]|[-._]demo$/g, '')
                    .replace(/_/g, ' ')
                    .replace(/^(\w)/, letter => letter.toUpperCase());
                return { title };
            }
            selected() {
                return $.$mol_state_arg.value('demo') || '';
            }
            selected_class_name() {
                return '$' + this.selected();
            }
            editing() {
                return $.$mol_state_arg.value('edit') != null;
            }
            Widget(name) {
                const Class = this.$['$' + name];
                return new Class();
            }
            names_demo() {
                const selected = this.selected();
                const all = this.names_demo_all();
                const root = this.nav_hierarchy()[selected];
                if (!root)
                    return [];
                const names = [];
                const collect = (node) => {
                    const demo = `${node.id}_demo`;
                    if (all.indexOf(demo) !== -1) {
                        if (names.indexOf(demo) === -1)
                            names.push(demo);
                    }
                    else if (all.indexOf(node.id) !== -1) {
                        if (names.indexOf(node.id) === -1)
                            names.push(node.id);
                    }
                    else {
                        node.sub.forEach(child => collect(child));
                    }
                };
                if (root.sub.length)
                    root.sub.forEach(child => collect(child));
                collect(root);
                return names;
            }
            blocks() {
                let sub = [];
                sub.push(this.Menu());
                if (this.selected()) {
                    if (this.editing() && this.names_demo().length === 1)
                        sub.push(...this.Editor(this.selected()).pages());
                    else
                        sub.push(this.Detail());
                }
                return sub;
            }
            Placeholder() {
                return this.selected() ? null : super.Placeholder();
            }
            main_content() {
                const names = this.names_demo();
                switch (names.length) {
                    case 0:
                        return [this.Detail_empty_message()];
                    default:
                        return this.names_demo().map(name => this.Widget(name));
                }
            }
            logo_uri() {
                return $.$mol_file.relative('/mol/logo/logo.svg').path();
            }
            source_link() {
                var pieces = $.$mol_state_arg.value('demo').split('_').slice(1);
                var source_link = this.source_prefix() + pieces.join('/');
                return source_link;
            }
            chat_link() {
                return $.$mol_state_arg.make_link({ demo: this.selected() });
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_app_demo.prototype, "names_demo_all", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_demo.prototype, "names_demo_filtered", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_demo.prototype, "nav_hierarchy", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_app_demo.prototype, "Widget", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_demo.prototype, "names_demo", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_demo.prototype, "main_content", null);
        $$.$mol_app_demo = $mol_app_demo;
        class $mol_app_demo_nav extends $.$mol_app_demo_nav {
            Cell(id) {
                if (id.col === 'title')
                    return this.Option(id);
                return super.cell(id);
            }
            arg(id) {
                return { 'demo': id.row[id.row.length - 1] };
            }
        }
        $$.$mol_app_demo_nav = $mol_app_demo_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_mol extends $.$mol_icon {
        view_box() {
            return "-39 0 287 326";
        }
        path() {
            return "M183.9,224.1c-4.6,0-8.8,1.3-12.5,3.4l-60.8-66.5V48.9c4.3-1.1,8.2-3.3,11.3-6.3l36.8,26.8c-0.7,2.3-1.1,4.8-1.1,7.4c0,13.7,11.1,24.8,24.8,24.8s24.8-11.1,24.8-24.8S196.2,52,182.5,52c-6.4,0-12.3,2.5-16.7,6.5l-37.2-27.1c0.6-2.1,0.9-4.3,0.9-6.5c0-13.7-11.1-24.8-24.8-24.8S79.9,11.1,79.9,24.8c0,2.6,0.4,5.1,1.2,7.5L42.3,59.2C37.8,54.7,31.6,52,24.8,52C11.1,52,0,63.1,0,76.8s11.1,24.8,24.8,24.8c4.1,0,8-1,11.5-2.8L97.7,166v110.9c-4.2,1.1-8,3.3-11,6.2l-36.8-26.8c0.7-2.3,1.1-4.8,1.1-7.4c0-13.7-11.1-24.8-24.8-24.8S1.4,235.2,1.4,248.9s11.1,24.8,24.8,24.8c6.4,0,12.3-2.5,16.7-6.5l37.2,27.1c-0.6,2.1-0.9,4.3-0.9,6.5c0,13.7,11.1,24.8,24.8,24.8s24.8-11.1,24.8-24.8c0-2.6-0.4-5.1-1.2-7.5l38.8-26.9c4.5,4.5,10.7,7.2,17.5,7.2c13.7,0,24.8-11.1,24.8-24.8S197.6,224.1,183.9,224.1z M182.5,64.9c6.5,0,11.9,5.3,11.9,11.9c0,6.5-5.3,11.9-11.9,11.9c-6.5,0-11.9-5.3-11.9-11.9C170.6,70.2,175.9,64.9,182.5,64.9z M104.7,12.9c6.5,0,11.9,5.3,11.9,11.9c0,6.5-5.3,11.9-11.9,11.9c-6.5,0-11.9-5.3-11.9-11.9C92.8,18.3,98.1,12.9,104.7,12.9z M24.8,88.6c-6.5,0-11.9-5.3-11.9-11.9c0-6.5,5.3-11.9,11.9-11.9s11.9,5.3,11.9,11.9C36.7,83.3,31.3,88.6,24.8,88.6z M45.8,89.9c2.4-3.8,3.8-8.3,3.8-13.2c0-2.2-0.3-4.3-0.8-6.3l39.3-27.3c2.7,2.5,6,4.4,9.6,5.4v98.2L45.8,89.9z M162.3,236.7c-2,3.6-3.2,7.8-3.2,12.2c0,2.2,0.3,4.3,0.9,6.3l-39.3,27.3c-2.8-2.6-6.2-4.5-10-5.5v-96.8L162.3,236.7z M26.2,260.7c-6.5,0-11.9-5.3-11.9-11.9c0-6.5,5.3-11.9,11.9-11.9c6.5,0,11.9,5.3,11.9,11.9C38.1,255.4,32.8,260.7,26.2,260.7z M104,312.7c-6.5,0-11.9-5.3-11.9-11.9c0-6.5,5.3-11.9,11.9-11.9c6.5,0,11.9,5.3,11.9,11.9C115.9,307.4,110.5,312.7,104,312.7z M183.9,260.7c-6.5,0-11.9-5.3-11.9-11.9c0-6.5,5.3-11.9,11.9-11.9c6.5,0,11.9,5.3,11.9,11.9C195.7,255.4,190.4,260.7,183.9,260.7z";
        }
    }
    $.$mol_icon_mol = $mol_icon_mol;
})($ || ($ = {}));
//mol.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_app_demo_placeholder extends $.$mol_book_placeholder {
        sub() {
            return [].concat(this.Content());
        }
        Content() {
            return ((obj) => {
                obj.content = () => [].concat(this.Title(), this.Description(), this.Advantages(), this.Links());
                return obj;
            })(new this.$.$mol_card);
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Logo(), this.title());
                return obj;
            })(new this.$.$mol_view);
        }
        Logo() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_mol);
        }
        title() {
            return "mol";
        }
        Description() {
            return ((obj) => {
                obj.sub = () => [].concat(this.description());
                return obj;
            })(new this.$.$mol_view);
        }
        description() {
            return this.$.$mol_locale.text("$mol_app_demo_placeholder_description");
        }
        Advantages() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Technology(), this.Code(), this.Programming());
                return obj;
            })(new this.$.$mol_view);
        }
        Technology() {
            return ((obj) => {
                obj.image = () => "mol/app/demo/placeholder/technology.svg";
                obj.title = () => this.technology();
                return obj;
            })(new this.$.$mol_app_placeholder_advantage);
        }
        technology() {
            return this.$.$mol_locale.text("$mol_app_demo_placeholder_technology");
        }
        Code() {
            return ((obj) => {
                obj.image = () => "mol/app/demo/placeholder/code_rate.svg";
                obj.title = () => this.code_rate();
                return obj;
            })(new this.$.$mol_app_placeholder_advantage);
        }
        code_rate() {
            return this.$.$mol_locale.text("$mol_app_demo_placeholder_code_rate");
        }
        Programming() {
            return ((obj) => {
                obj.image = () => "mol/app/demo/placeholder/programming.svg";
                obj.title = () => this.programming();
                return obj;
            })(new this.$.$mol_app_placeholder_advantage);
        }
        programming() {
            return this.$.$mol_locale.text("$mol_app_demo_placeholder_programming");
        }
        Links() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Github_link(), this.Showcase_link());
                return obj;
            })(new this.$.$mol_row);
        }
        Github_link() {
            return ((obj) => {
                obj.uri = () => "https://github.com/eigenmethod/mol";
                return obj;
            })(new this.$.$mol_link_iconed);
        }
        Showcase_link() {
            return ((obj) => {
                obj.title = () => this.showcase_title();
                obj.uri = () => "https://showcase.hyoo.ru";
                return obj;
            })(new this.$.$mol_link_iconed);
        }
        showcase_title() {
            return this.$.$mol_locale.text("$mol_app_demo_placeholder_showcase_title");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_placeholder.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_placeholder.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_placeholder.prototype, "Logo", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_placeholder.prototype, "Description", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_placeholder.prototype, "Advantages", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_placeholder.prototype, "Technology", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_placeholder.prototype, "Code", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_placeholder.prototype, "Programming", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_placeholder.prototype, "Links", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_placeholder.prototype, "Github_link", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_placeholder.prototype, "Showcase_link", null);
    $.$mol_app_demo_placeholder = $mol_app_demo_placeholder;
})($ || ($ = {}));
(function ($) {
    class $mol_app_placeholder_advantage extends $.$mol_view {
        sub() {
            return [].concat(this.Image(), this.title());
        }
        Image() {
            return ((obj) => {
                obj.uri = () => this.image();
                return obj;
            })(new this.$.$mol_image);
        }
        image() {
            return "";
        }
        title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_placeholder_advantage.prototype, "Image", null);
    $.$mol_app_placeholder_advantage = $mol_app_placeholder_advantage;
})($ || ($ = {}));
//placeholder.view.tree.js.map
//# sourceMappingURL=node.js.map