Package.describe({
    name: 'universe:react-bootstrap',
    version: '0.23.7',
    summary: 'ReactBootstrap project wrapped for Meteor with Universe',
    git: 'https://github.com/vazco/universe-react-bootstrap',
    documentation: 'README.md'
});

Npm.depends({
    'react-bootstrap': '0.23.7'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'universe:modules@0.1.0',
        'cosmos:browserify@0.4.0'
    ]);

    api.addFiles([
        'main.browserify.js',
        'main.import.jsx',
        'system-config.js'
    ]);

    api.export('ReactBootstrap');
});