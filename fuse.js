const {
    FuseBox,
    TypeScriptHelpers,
    WebIndexPlugin,
    Sparky,
} = require("fuse-box");

const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
// load
const TypeHelper = require('fuse-box-typechecker').TypeHelper;

let fuse, app, vendor;

Sparky.task("config", () => {
    fuse = FuseBox.init({
        homeDir: "src",
        output: "dist/$name.js",
        tsConfig: "tsconfig.json",
        useJsNext : ["react", "react-dom"],
        polyfillNonStandardDefaultUsage : ["react", "react-dom"],
        sourceMaps: true,
        plugins: [
            TypeScriptHelpers(),
            WebIndexPlugin({
                template: "src/index.html",
                title: "FuseBox + TS + React + Cerebral bug 'Super expression must either be null or a function, not undefined', MWE",
                target: "index.html"
            })
        ]
    });

    vendor = fuse.bundle("vendor").instructions("~/application.tsx");
    app = fuse.bundle("app").instructions(" !> [development.tsx]");
});

Sparky.task("check-updates", () => {
    updateNotifier({pkg}).notify();
});

Sparky.task("default", ["clean", "config", "check-updates"], () => {
    fuse.dev({
        root: "dist"
    });
    // add dev instructions
    app.watch().hmr();
    return fuse.run();
});

Sparky.task("clean", () => Sparky.src("dist/").clean("dist/"));

Sparky.task("dist", ["config"], () => {
    // comment out to prevent dev server from running (left for the demo)
    fuse.dev();
    return fuse.run();
});
