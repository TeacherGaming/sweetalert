Package.describe({
    name: 'teachergaming:sweet-alert',
    version: '1.0.4',

    // Brief, one-line summary of the package.
    summary: 'Just raw sweet alert 2 lib',

    // URL to the Git repository containing the source code for this package.
    git: 'git@github.com:TeacherGaming/sweetalert.git',

    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.addFiles('sweet-alert.css', 'client');
    api.addFiles('sweet-alert.js', 'client');
});
