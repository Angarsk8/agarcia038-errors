/*global Package*/
Package.describe({
    name: 'agarcia038:errors',
    version: '1.0.0',
    summary: 'A pattern to display application errors to the user',
    git: "https://github.com/Angarsk8/agarcia038-errors",
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');
    api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
    api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
    if (api.export)
        api.export('Errors');
});

Package.onTest(function (api) {
    api.use('agarcia038:errors', 'client');
    api.use(['tinytest', 'test-helpers'], 'client');

    api.addFiles('errors-tests.js', 'client');
});