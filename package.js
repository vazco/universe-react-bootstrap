var version = '0.24.0';

Package.describe({
    name: 'universe:react-bootstrap',
    version: version,
    summary: 'ReactBootstrap project wrapped for Meteor with Universe:modules',
    git: 'https://github.com/vazco/universe-react-bootstrap',
    documentation: 'README.md'
});

Npm.depends({
    'react-bootstrap': version
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'universe:modules@0.4.0-rc.1',
        'cosmos:browserify@0.4.0'
    ]);

    api.addFiles([
        'main.browserify.js',
        'main.import.jsx',
        'system-config.js'
    ]);

    api.export('ReactBootstrap'); // export global as an alternative
});