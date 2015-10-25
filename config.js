System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: "typescript",
    typescriptOptions: {
        "emitDecoratorMetadata": true
    },
    packages: {
       "demos": {
            defaultExtension: 'ts',
            format: 'es6'
        },
        "angularconnect": {
            defaultExtension: 'ts',
            format: 'es6'
        }
    }
});
