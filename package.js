Package.describe({
    name: 'universe:react-bootstrap',
    version: '0.24.2',
    summary: 'ReactBootstrap project wrapped for Meteor with Universe:modules',
    git: 'https://github.com/vazco/universe-react-bootstrap',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'react-runtime',
        'universe:modules@0.4.0'
    ]);

    api.addFiles([
        'bower_components/react-bootstrap/react-bootstrap.js',
        'main.import.jsx',
        'system-config.js'
    ]);
});