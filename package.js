Package.describe({
    name: 'universe:react-bootstrap',
    version: '0.24.2',
    summary: 'ReactBootstrap project wrapped for Meteor with universe:modules',
    git: 'https://github.com/vazco/universe-react-bootstrap',
    documentation: 'README.md'
});

var fs = Npm.require('fs');
var path = Npm.require('path');

function getFileList(dir) {
    return fs.readdirSync(path.join(dir))
        .filter(function (file) {
            // add only .js files
            return /\.import\.js$/.test(file);
        })
        .map(function (file) {
            // prepend path
            return dir + '/' + file;
        });
}

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    console.log(getFileList('src'));

    api.use([
        'universe:modules@0.4.0'
    ]);

    console.log(getFileList('src'));
    api.addFiles(getFileList('src'));
    //api.addFiles(getFileList('src/FormControls'));
    //api.addFiles(getFileList('src/utils'));

    api.addFiles([
        'system-config.js'
    ]);
});