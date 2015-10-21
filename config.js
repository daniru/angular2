System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: "typescript",
    typescriptOptions: {
        "emitDecoratorMetadata": true
    },
    packages: {
        "app": {
            defaultExtension: 'ts',
            format: 'es6'
        },
        "app-steps": {
            defaultExtension: 'ts',
            format: 'es6'
        },
        "examples": {
            defaultExtension: 'ts',
            format: 'es6'
        },
        "exercise": {
            defaultExtension: 'ts',
            format: 'es6'
        },
        "exercise-solutions": {
            defaultExtension: 'ts',
            format: 'es6'
        }
    }
});
