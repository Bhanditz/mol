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
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
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
    $.$mol_test({
        'Make empty div'() {
            $.$mol_assert_equal(($.$mol_dom_jsx("div", null)).outerHTML, '<div></div>');
        },
        'Define native field'() {
            const dom = $.$mol_dom_jsx("input", { value: 123 });
            $.$mol_assert_equal(dom.outerHTML, '<input>');
            $.$mol_assert_equal(dom.value, '123');
        },
        'Define attributes'() {
            const dom = $.$mol_dom_jsx("div", { foo: true, bar: "123" });
            $.$mol_assert_equal(dom.outerHTML, '<div foo="true" bar="123"></div>');
        },
        'Define child nodes'() {
            const dom = $.$mol_dom_jsx("div", null,
                "hello",
                $.$mol_dom_jsx("strong", null, "world"),
                "!");
            $.$mol_assert_equal(dom.outerHTML, '<div>hello<strong>world</strong>!</div>');
        },
        'Function as component'() {
            function Button(props, action, target) {
                return $.$mol_dom_jsx("button", Object.assign({}, props),
                    action,
                    " ",
                    target);
            }
            const dom = $.$mol_dom_jsx(Button, { id: "123" },
                "click",
                'me');
            $.$mol_assert_equal(dom.outerHTML, '<button id="123">click me</button>');
        },
    });
})($ || ($ = {}));
//jsx.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_jsx(Elem, props, ...children) {
        if (typeof Elem !== 'string')
            return Elem(props, ...children);
        const document = $.$mol_dom_context.document;
        const node = document.createElement(Elem);
        for (let child of [].concat.call([], ...children)) {
            if (typeof child === 'string')
                child = document.createTextNode(child);
            node.appendChild(child);
        }
        for (const key in props) {
            let descr;
            let proto = node;
            while (true) {
                proto = Object.getPrototypeOf(proto);
                if (!proto) {
                    node.setAttribute(key, String(props[key]));
                    break;
                }
                descr = Object.getOwnPropertyDescriptor(proto, key);
                if (!descr)
                    continue;
                if (descr.set)
                    Object.defineProperty(node, key, descr);
                break;
            }
            node[key] = props[key];
        }
        return node;
    }
    $.$mol_dom_jsx = $mol_dom_jsx;
})($ || ($ = {}));
//jsx.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        '$mol_dom_patch'() {
            const dom = $.$mol_dom_jsx("div", { xx: true },
                $.$mol_dom_jsx("input", { id: "xxx", value: "123" }));
            $.$mol_dom_patch(dom, $.$mol_dom_jsx("div", { yy: true },
                $.$mol_dom_jsx("input", { id: "xxx", value: "321" })));
            $.$mol_assert_equal(dom.outerHTML, '<div yy="true"><input id="xxx"></div>');
            $.$mol_assert_equal(dom['yy'], true);
            $.$mol_assert_equal(dom.children[0].value, '321');
        },
    });
})($ || ($ = {}));
//patch.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_patch(target, source) {
        if (target == null)
            return source;
        if (target.nodeName !== source.nodeName)
            return source;
        switch (source.nodeType) {
            case Node.TEXT_NODE:
                if (target.nodeValue !== source.nodeValue)
                    target.nodeValue = source.nodeValue;
                return target;
            case Node.ELEMENT_NODE:
                let next = target.firstChild;
                for (let child of source.childNodes) {
                    child = $mol_dom_patch(next, child);
                    if (next === child)
                        next = next.nextSibling;
                    else
                        target.insertBefore(child, next);
                }
                const overflow = target.childNodes.length - source.childNodes.length;
                for (let i = 0; i < overflow; ++i) {
                    target.removeChild(target.lastChild);
                }
                for (let key of Object.getOwnPropertyNames(source)) {
                    target[key] = source[key];
                }
                for (const attr of target.attributes) {
                    if (source.hasAttribute(attr.nodeName))
                        continue;
                    target.removeAttribute(attr.nodeName);
                }
                for (const attr of source.attributes) {
                    ;
                    target.setAttribute(attr.nodeName, attr.nodeValue);
                }
                return target;
            default: throw new Error(`Unsupported node type ${source.nodeType}`);
        }
    }
    $.$mol_dom_patch = $mol_dom_patch;
})($ || ($ = {}));
//patch.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_app_bench_list_tsx {
        static onClick(id, event) {
            this.selected = id;
            this.render();
        }
        static render() {
            let Item = ({ id, title, content }) => ($.$mol_dom_jsx("div", { id: id, className: `list-item list-item-selected-${this.selected === id}`, onclick: this.onClick.bind(this, id) },
                $.$mol_dom_jsx("div", { id: `${id}.title`, className: "list-item-title" }, title),
                $.$mol_dom_jsx("div", { id: `${id}.content`, className: "list-item-content" }, content)));
            return $.$mol_dom_patch(document.getElementById('list'), $.$mol_dom_jsx("div", { id: "list", className: "list" }, this.data.items.map(item => $.$mol_dom_jsx(Item, Object.assign({}, item)))));
        }
    }
    $mol_app_bench_list_tsx.data = {
        sample: '',
        items: []
    };
    $mol_app_bench_list_tsx.selected = null;
    $.$mol_app_bench_list_tsx = $mol_app_bench_list_tsx;
})($ || ($ = {}));
//index.js.map
//# sourceMappingURL=node.test.js.map