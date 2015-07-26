// Register this package as a 'bootstrap' module

System.config({
    packages: {
        bootstrap: {
            main: 'index',
            format: 'register',
            map: {
                '.': System.normalizeSync('{universe:react-bootstrap}/src')
            }
        }
    }
});
