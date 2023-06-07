var $e2gKC$vscode = require("vscode");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "activate", () => $955dca4fa1d7452b$export$234c45b355edd85b);
$parcel$export(module.exports, "deactivate", () => $955dca4fa1d7452b$export$e96c1edfdaf2d1db);

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

/**
 * The WebContainer Public API allows you build custom applications on top of an in-browser Node.js runtime.
 *
 * Its main entrypoint is the {@link WebContainer} class.
 *
 * @packageDocumentation
 */ var $650c1378c4b8a985$var$__defProp = Object.defineProperty;
var $650c1378c4b8a985$var$__export = (target, all)=>{
    for(var name in all)$650c1378c4b8a985$var$__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// dist/vendor/comlink.js
var $650c1378c4b8a985$export$4b579bfadaa62eeb = {};
$650c1378c4b8a985$var$__export($650c1378c4b8a985$export$4b579bfadaa62eeb, {
    createEndpoint: ()=>$650c1378c4b8a985$var$createEndpoint,
    expose: ()=>$650c1378c4b8a985$var$expose,
    proxy: ()=>$650c1378c4b8a985$var$proxy,
    proxyMarker: ()=>$650c1378c4b8a985$var$proxyMarker,
    releaseProxy: ()=>$650c1378c4b8a985$var$releaseProxy,
    transfer: ()=>$650c1378c4b8a985$var$transfer,
    transferHandlers: ()=>$650c1378c4b8a985$var$transferHandlers,
    windowEndpoint: ()=>$650c1378c4b8a985$var$windowEndpoint,
    wrap: ()=>$650c1378c4b8a985$var$wrap
});
// ../../node_modules/@blitz/comlink/dist/esm/comlink.mjs
var $650c1378c4b8a985$var$proxyMarker = Symbol("Comlink.proxy");
var $650c1378c4b8a985$var$createEndpoint = Symbol("Comlink.endpoint");
var $650c1378c4b8a985$var$releaseProxy = Symbol("Comlink.releaseProxy");
var $650c1378c4b8a985$var$throwMarker = Symbol("Comlink.thrown");
var $650c1378c4b8a985$var$isObject = (val)=>typeof val === "object" && val !== null || typeof val === "function";
var $650c1378c4b8a985$var$proxyTransferHandler = {
    canHandle: (val)=>$650c1378c4b8a985$var$isObject(val) && val[$650c1378c4b8a985$var$proxyMarker],
    serialize (obj) {
        const { port1: port1 , port2: port2  } = new MessageChannel();
        $650c1378c4b8a985$var$expose(obj, port1);
        return [
            port2,
            [
                port2
            ]
        ];
    },
    deserialize (port) {
        port.start();
        return $650c1378c4b8a985$var$wrap(port);
    }
};
var $650c1378c4b8a985$var$throwTransferHandler = {
    canHandle: (value)=>$650c1378c4b8a985$var$isObject(value) && $650c1378c4b8a985$var$throwMarker in value,
    serialize ({ value: value  }) {
        let serialized;
        if (value instanceof Error) serialized = {
            isError: true,
            value: {
                message: value.message,
                name: value.name,
                stack: value.stack
            }
        };
        else serialized = {
            isError: false,
            value: value
        };
        return [
            serialized,
            []
        ];
    },
    deserialize (serialized) {
        if (serialized.isError) throw Object.assign(new Error(serialized.value.message), serialized.value);
        throw serialized.value;
    }
};
var $650c1378c4b8a985$var$transferHandlers = /* @__PURE__ */ new Map([
    [
        "proxy",
        $650c1378c4b8a985$var$proxyTransferHandler
    ],
    [
        "throw",
        $650c1378c4b8a985$var$throwTransferHandler
    ]
]);
function $650c1378c4b8a985$var$expose(obj, ep = self) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) return;
        const { id: id , type: type , path: path  } = Object.assign({
            path: []
        }, ev.data);
        const argumentList = (ev.data.argumentList || []).map($650c1378c4b8a985$var$fromWireValue);
        let returnValue;
        try {
            const parent = path.slice(0, -1).reduce((obj2, prop)=>obj2[prop], obj);
            const rawValue = path.reduce((obj2, prop)=>obj2[prop], obj);
            switch(type){
                case 0:
                    returnValue = rawValue;
                    break;
                case 1:
                    parent[path.slice(-1)[0]] = $650c1378c4b8a985$var$fromWireValue(ev.data.value);
                    returnValue = true;
                    break;
                case 2:
                    returnValue = rawValue.apply(parent, argumentList);
                    break;
                case 3:
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = $650c1378c4b8a985$var$proxy(value);
                    }
                    break;
                case 4:
                    {
                        const { port1: port1 , port2: port2  } = new MessageChannel();
                        $650c1378c4b8a985$var$expose(obj, port2);
                        returnValue = $650c1378c4b8a985$var$transfer(port1, [
                            port1
                        ]);
                    }
                    break;
                case 5:
                    returnValue = void 0;
                    break;
            }
        } catch (value) {
            returnValue = {
                value: value,
                [$650c1378c4b8a985$var$throwMarker]: 0
            };
        }
        Promise.resolve(returnValue).catch((value)=>{
            return {
                value: value,
                [$650c1378c4b8a985$var$throwMarker]: 0
            };
        }).then((returnValue2)=>{
            const [wireValue, transferables] = $650c1378c4b8a985$var$toWireValue(returnValue2);
            ep.postMessage(Object.assign(Object.assign({}, wireValue), {
                id: id
            }), transferables);
            if (type === 5) {
                ep.removeEventListener("message", callback);
                $650c1378c4b8a985$var$closeEndPoint(ep);
            }
        });
    });
    if (ep.start) ep.start();
}
function $650c1378c4b8a985$var$isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function $650c1378c4b8a985$var$closeEndPoint(endpoint) {
    if ($650c1378c4b8a985$var$isMessagePort(endpoint)) endpoint.close();
}
function $650c1378c4b8a985$var$wrap(ep, target) {
    return $650c1378c4b8a985$var$createProxy(ep, [], target);
}
function $650c1378c4b8a985$var$throwIfProxyReleased(isReleased) {
    if (isReleased) throw new Error("Proxy has been released and is not useable");
}
function $650c1378c4b8a985$var$createProxy(ep, path = [], target = function() {}) {
    let isProxyReleased = false;
    const proxy2 = new Proxy(target, {
        get (_target, prop) {
            $650c1378c4b8a985$var$throwIfProxyReleased(isProxyReleased);
            if (prop === $650c1378c4b8a985$var$releaseProxy) return ()=>{
                return $650c1378c4b8a985$var$requestResponseMessage(ep, {
                    type: 5,
                    path: path.map((p)=>p.toString())
                }).then(()=>{
                    $650c1378c4b8a985$var$closeEndPoint(ep);
                    isProxyReleased = true;
                });
            };
            if (prop === "then") {
                if (path.length === 0) return {
                    then: ()=>proxy2
                };
                const r = $650c1378c4b8a985$var$requestResponseMessage(ep, {
                    type: 0,
                    path: path.map((p)=>p.toString())
                }).then($650c1378c4b8a985$var$fromWireValue);
                return r.then.bind(r);
            }
            return $650c1378c4b8a985$var$createProxy(ep, [
                ...path,
                prop
            ]);
        },
        set (_target, prop, rawValue) {
            $650c1378c4b8a985$var$throwIfProxyReleased(isProxyReleased);
            const [value, transferables] = $650c1378c4b8a985$var$toWireValue(rawValue);
            return $650c1378c4b8a985$var$requestResponseMessage(ep, {
                type: 1,
                path: [
                    ...path,
                    prop
                ].map((p)=>p.toString()),
                value: value
            }, transferables).then($650c1378c4b8a985$var$fromWireValue);
        },
        apply (_target, _thisArg, rawArgumentList) {
            $650c1378c4b8a985$var$throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === $650c1378c4b8a985$var$createEndpoint) return $650c1378c4b8a985$var$requestResponseMessage(ep, {
                type: 4
            }).then($650c1378c4b8a985$var$fromWireValue);
            if (last === "bind") return $650c1378c4b8a985$var$createProxy(ep, path.slice(0, -1));
            const [argumentList, transferables] = $650c1378c4b8a985$var$processArguments(rawArgumentList);
            return $650c1378c4b8a985$var$requestResponseMessage(ep, {
                type: 2,
                path: path.map((p)=>p.toString()),
                argumentList: argumentList
            }, transferables).then($650c1378c4b8a985$var$fromWireValue);
        },
        construct (_target, rawArgumentList) {
            $650c1378c4b8a985$var$throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = $650c1378c4b8a985$var$processArguments(rawArgumentList);
            return $650c1378c4b8a985$var$requestResponseMessage(ep, {
                type: 3,
                path: path.map((p)=>p.toString()),
                argumentList: argumentList
            }, transferables).then($650c1378c4b8a985$var$fromWireValue);
        }
    });
    return proxy2;
}
function $650c1378c4b8a985$var$myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function $650c1378c4b8a985$var$processArguments(argumentList) {
    const processed = argumentList.map($650c1378c4b8a985$var$toWireValue);
    return [
        processed.map((v)=>v[0]),
        $650c1378c4b8a985$var$myFlat(processed.map((v)=>v[1]))
    ];
}
var $650c1378c4b8a985$var$transferCache = /* @__PURE__ */ new WeakMap();
function $650c1378c4b8a985$var$transfer(obj, transfers) {
    $650c1378c4b8a985$var$transferCache.set(obj, transfers);
    return obj;
}
function $650c1378c4b8a985$var$proxy(obj) {
    return Object.assign(obj, {
        [$650c1378c4b8a985$var$proxyMarker]: true
    });
}
function $650c1378c4b8a985$var$windowEndpoint(w, context = self, targetOrigin = "*") {
    return {
        postMessage: (msg, transferables)=>w.postMessage(msg, targetOrigin, transferables),
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context)
    };
}
function $650c1378c4b8a985$var$toWireValue(value) {
    for (const [name, handler] of $650c1378c4b8a985$var$transferHandlers)if (handler.canHandle(value)) {
        const [serializedValue, transferables] = handler.serialize(value);
        return [
            {
                type: 3,
                name: name,
                value: serializedValue
            },
            transferables
        ];
    }
    return [
        {
            type: 0,
            value: value
        },
        $650c1378c4b8a985$var$transferCache.get(value) || []
    ];
}
function $650c1378c4b8a985$var$fromWireValue(value) {
    switch(value.type){
        case 3:
            return $650c1378c4b8a985$var$transferHandlers.get(value.name).deserialize(value.value);
        case 0:
            return value.value;
    }
}
function $650c1378c4b8a985$var$requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve)=>{
        const id = $650c1378c4b8a985$var$generateUUID();
        ep.addEventListener("message", function l(ev) {
            if (!ev.data || !ev.data.id || ev.data.id !== id) return;
            ep.removeEventListener("message", l);
            resolve(ev.data);
        });
        if (ep.start) ep.start();
        ep.postMessage(Object.assign({
            id: id
        }, msg), transfers);
    });
}
function $650c1378c4b8a985$var$generateUUID() {
    return new Array(4).fill(0).map(()=>Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}


/**
 * @internal
 */ function $4ffe9be3a8d30190$export$fa8d2eb194a4a144(tree) {
    const newTree = {
        d: {}
    };
    for (const name of Object.keys(tree)){
        const entry = tree[name];
        if ("file" in entry) {
            const contents = entry.file.contents;
            const stringContents = typeof contents === "string" ? contents : $4ffe9be3a8d30190$var$binaryString(contents);
            const binary = typeof contents === "string" ? {} : {
                b: true
            };
            newTree.d[name] = {
                f: {
                    c: stringContents,
                    ...binary
                }
            };
            continue;
        }
        const newEntry = $4ffe9be3a8d30190$export$fa8d2eb194a4a144(entry.directory);
        newTree.d[name] = newEntry;
    }
    return newTree;
}
function $4ffe9be3a8d30190$var$binaryString(bytes) {
    let result = "";
    for (const byte of bytes)result += String.fromCharCode(byte);
    return result;
}


const $491bfa11b3f5ec61$var$DEFAULT_IFRAME_SOURCE = "https://stackblitz.com/headless";
let $491bfa11b3f5ec61$var$bootPromise = null;
let $491bfa11b3f5ec61$var$booted = false;
let $491bfa11b3f5ec61$var$destroyed = false;
const $491bfa11b3f5ec61$var$decoder = new TextDecoder();
const $491bfa11b3f5ec61$var$encoder = new TextEncoder();
class $491bfa11b3f5ec61$export$c8f4191a001fed63 {
    _instance;
    _runtimeInfo;
    _iframe;
    /**
     * Gives access to the underlying file system.
     */ fs;
    /** @internal */ constructor(/** @internal */ _instance, fs, /** @internal */ _runtimeInfo, /** @internal */ _iframe){
        this._instance = _instance;
        this._runtimeInfo = _runtimeInfo;
        this._iframe = _iframe;
        this.fs = new $491bfa11b3f5ec61$var$FileSystemAPIClient(fs);
    }
    async spawn(command, optionsOrArgs, options) {
        let args = [];
        if (Array.isArray(optionsOrArgs)) args = optionsOrArgs;
        else options = optionsOrArgs;
        let stream = new ReadableStream();
        let output = undefined;
        if (options?.output !== false) stream = new ReadableStream({
            start (controller) {
                output = (item)=>controller.enqueue(item);
            }
        });
        const wrapped = $491bfa11b3f5ec61$var$proxyListener($491bfa11b3f5ec61$var$optionalBinaryListener(output));
        const process = await this._instance.run({
            command: command,
            args: args,
            env: options?.env,
            terminal: options?.terminal
        }, undefined, undefined, wrapped);
        return new $491bfa11b3f5ec61$var$WebContainerProcessImpl(process, stream);
    }
    on(event, listener) {
        let tornDown = false;
        let unsubscribe = ()=>{};
        const wrapped = (...args)=>{
            if (tornDown) return;
            listener(...args);
        };
        this._instance.on(event, (0, $650c1378c4b8a985$export$4b579bfadaa62eeb).proxy(wrapped)).then((_unsubscribe)=>{
            unsubscribe = _unsubscribe;
            if (tornDown) unsubscribe();
        });
        return ()=>{
            tornDown = true;
            unsubscribe();
        };
    }
    /**
     * Mounts a tree of files into the filesystem.
     *
     * @param tree
     * @param options.mountPoint - Specifies a nested path where the tree should be mounted.
     */ mount(tree, options) {
        const payload = $491bfa11b3f5ec61$var$encoder.encode(JSON.stringify((0, $4ffe9be3a8d30190$export$fa8d2eb194a4a144)(tree)));
        return this._instance.loadFiles((0, $650c1378c4b8a985$export$4b579bfadaa62eeb).transfer(payload, [
            payload.buffer
        ]), {
            mountPoints: options?.mountPoint
        });
    }
    /**
     * The default value of the `PATH` environment variable for processes started through {@link spawn}.
     */ get path() {
        return this._runtimeInfo.path;
    }
    /**
     * The full path to the working directory (see {@link FileSystemAPI}).
     */ get workdir() {
        return this._runtimeInfo.cwd;
    }
    /**
     * Destroys the WebContainer instance and releases its resources.
     */ teardown() {
        if ($491bfa11b3f5ec61$var$destroyed) throw new Error("WebContainer already torn down");
        $491bfa11b3f5ec61$var$destroyed = true;
        this.fs._teardown();
        this._instance.teardown();
        this._instance[(0, $650c1378c4b8a985$export$4b579bfadaa62eeb).releaseProxy]();
        this._iframe.remove();
    }
    /**
     * Boots a WebContainer. Only a single instance of WebContainer can be booted.
     */ static async boot(options = {}) {
        const { workdirName: workdirName  } = options;
        if (workdirName?.includes("/") || workdirName === ".." || workdirName === ".") throw new Error("workdirName should be a valid folder name");
        // try to "acquire the lock", i.e. wait for any ongoing boot request to finish
        while($491bfa11b3f5ec61$var$bootPromise)await $491bfa11b3f5ec61$var$bootPromise;
        if ($491bfa11b3f5ec61$var$booted) throw new Error("WebContainer already booted");
        const instancePromise = $491bfa11b3f5ec61$var$unsynchronizedBoot(options);
        // the "lock" is a promise for the ongoing boot that never fails
        $491bfa11b3f5ec61$var$bootPromise = instancePromise.catch(()=>{});
        try {
            const instance = await instancePromise;
            $491bfa11b3f5ec61$var$booted = true;
            return instance;
        } finally{
            // release the "lock"
            $491bfa11b3f5ec61$var$bootPromise = null;
        }
    }
}
const $491bfa11b3f5ec61$var$DIR_ENTRY_TYPE_FILE = 1;
const $491bfa11b3f5ec61$var$DIR_ENTRY_TYPE_DIR = 2;
/**
 * @internal
 */ class $491bfa11b3f5ec61$var$DirEntImpl {
    name;
    _type;
    constructor(name, _type){
        this.name = name;
        this._type = _type;
    }
    isFile() {
        return this._type === $491bfa11b3f5ec61$var$DIR_ENTRY_TYPE_FILE;
    }
    isDirectory() {
        return this._type === $491bfa11b3f5ec61$var$DIR_ENTRY_TYPE_DIR;
    }
}
/**
 * @internal
 */ class $491bfa11b3f5ec61$var$WebContainerProcessImpl {
    _process;
    output;
    input;
    constructor(_process, output){
        this._process = _process;
        this.output = output;
        this.input = new WritableStream({
            write: (data)=>{
                // this promise is not supposed to fail anyway
                this._process.write(data).catch(()=>{});
            }
        });
    }
    get exit() {
        return this._process.onExit;
    }
    kill() {
        this._process.kill();
    }
    resize(dimensions) {
        this._process.resize(dimensions);
    }
}
/**
 * @internal
 */ class $491bfa11b3f5ec61$var$FileSystemAPIClient {
    _fs;
    constructor(fs){
        this._fs = fs;
    }
    rm(...args) {
        return this._fs.rm(...args);
    }
    async readFile(path, encoding) {
        return await this._fs.readFile(path, encoding);
    }
    async writeFile(path, data, options) {
        if (data instanceof Uint8Array) {
            const buffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
            data = (0, $650c1378c4b8a985$export$4b579bfadaa62eeb).transfer(new Uint8Array(buffer), [
                buffer
            ]);
        }
        await this._fs.writeFile(path, data, options);
    }
    async readdir(path, options) {
        const result = await this._fs.readdir(path, options);
        if ($491bfa11b3f5ec61$var$isStringArray(result)) return result;
        if ($491bfa11b3f5ec61$var$isTypedArrayCollection(result)) return result;
        const entries = result.map((entry)=>new $491bfa11b3f5ec61$var$DirEntImpl(entry.name, entry["Symbol(type)"]));
        return entries;
    }
    async mkdir(path, options) {
        return await this._fs.mkdir(path, options);
    }
    /**
     * @internal
     */ _teardown() {
        this._fs[(0, $650c1378c4b8a985$export$4b579bfadaa62eeb).releaseProxy]();
    }
}
async function $491bfa11b3f5ec61$var$unsynchronizedBoot(options) {
    const { iframe: iframe , serverPromise: serverPromise  } = $491bfa11b3f5ec61$var$serverFactory(options);
    const server = await serverPromise;
    const instance = await server.build({
        host: window.location.host,
        version: "1.1.0",
        workdirName: options.workdirName
    });
    const fs = await instance.fs();
    const runtimeInfo = await instance.runtimeInfo();
    server[(0, $650c1378c4b8a985$export$4b579bfadaa62eeb).releaseProxy]();
    return new $491bfa11b3f5ec61$export$c8f4191a001fed63(instance, fs, runtimeInfo, iframe);
}
function $491bfa11b3f5ec61$var$optionalBinaryListener(listener) {
    if (listener == null) return undefined;
    return (data)=>{
        if (data instanceof Uint8Array) listener($491bfa11b3f5ec61$var$decoder.decode(data));
    };
}
function $491bfa11b3f5ec61$var$proxyListener(listener) {
    if (listener == null) return undefined;
    return (0, $650c1378c4b8a985$export$4b579bfadaa62eeb).proxy(listener);
}
function $491bfa11b3f5ec61$var$serverFactory(options) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.setAttribute("allow", "cross-origin-isolated");
    const url = $491bfa11b3f5ec61$var$getIframeUrl();
    url.searchParams.set("version", "1.1.0");
    if (options.coep) url.searchParams.set("coep", options.coep);
    iframe.src = url.toString();
    const { origin: origin  } = url;
    const promise = new Promise((resolve)=>{
        const onMessage = (event)=>{
            if (event.origin !== origin) return;
            const { data: data  } = event;
            if (data.type === "init") {
                resolve((0, $650c1378c4b8a985$export$4b579bfadaa62eeb).wrap(event.ports[0]));
                return;
            }
            if (data.type === "warning") {
                console[data.level].call(console, data.message);
                return;
            }
        };
        window.addEventListener("message", onMessage);
    });
    document.body.insertBefore(iframe, null);
    return {
        iframe: iframe,
        serverPromise: promise
    };
}
function $491bfa11b3f5ec61$var$isStringArray(list) {
    return typeof list[0] === "string";
}
function $491bfa11b3f5ec61$var$isTypedArrayCollection(list) {
    return list[0] instanceof Uint8Array;
}
function $491bfa11b3f5ec61$var$getIframeUrl() {
    return new URL(window.WEBCONTAINER_API_IFRAME_URL ?? $491bfa11b3f5ec61$var$DEFAULT_IFRAME_SOURCE);
}


class $3513642a54553ebc$var$WebContainerTerminal {
    container = new (0, $491bfa11b3f5ec61$export$c8f4191a001fed63)();
    emitter = new (0, $e2gKC$vscode.EventEmitter)();
    line = "";
    close() {
        this.container.teardown();
    }
    open() {
        this.startShell();
    }
    async fs(base, parent, result1, [name, type], index, array) {
        if (type === (0, $e2gKC$vscode.FileType).File) result1[name] = {
            file: {
                contents: await (0, $e2gKC$vscode.workspace).fs.readFile(Uri.joinPath(base, ...parent, name))
            }
        };
        else if (type === (0, $e2gKC$vscode.FileType).Directory) {
            if (index !== undefined) parent.push(name);
            result1[name] = {
                directory: {}
            };
            await Promise.all((0, $e2gKC$vscode.workspace).fs.readDirectory(Uri.joinPath(base, ...parent)).then((data)=>data.reduce(this.fs.bind(this, base, parent.concat(name)), result1[name].directory)));
        }
    }
    async mount() {
        result = {};
        for (const { uri: uri , name: name  } of (0, $e2gKC$vscode.workspace).workspaceFolders)await this.fs(uri, [], result, [
            name,
            (0, $e2gKC$vscode.FileType).Directory
        ]);
        await this.container.mount(result);
    }
    async handleInput(data) {
        if (data === "\r" && this.input) {
            this.input.write(this.line);
            this.lines.push(this.line);
            this.line = "";
        } else if (data === "\x7f") {
            if (line.length) {
                this.line = this.line.slice(0, line.length - 1);
                // Move cursor backward
                this.emitter.fire("\x1b[D");
                // Delete character
                this.emitter.fire("\x1b[P");
            }
        } else this.line += data;
    }
    onDidWrite = this.emitter.event;
    async startShell() {
        await this.mount();
        const shellProcess = await container.spawn("jsh");
        shellProcess.output.pipeTo(new WritableStream({
            write: (data)=>{
                this.emitter.fire(data);
            }
        }));
        this.input = shellProcess.input.getWriter();
    }
}
var $3513642a54553ebc$export$2e2bcd8739ae039 = $3513642a54553ebc$var$WebContainerTerminal;


let $955dca4fa1d7452b$var$terminal;
function $955dca4fa1d7452b$export$234c45b355edd85b(context) {
    $955dca4fa1d7452b$var$terminal = (0, $e2gKC$vscode.window).createTerminal({
        name: "WebContainer",
        pty: new (0, $3513642a54553ebc$export$2e2bcd8739ae039)()
    });
    context.subscriptions.push((0, $e2gKC$vscode.commands).registerCommand("webcontainer.launch", $955dca4fa1d7452b$var$terminal.show));
}
function $955dca4fa1d7452b$export$e96c1edfdaf2d1db() {
    $955dca4fa1d7452b$var$terminal.hide();
}


