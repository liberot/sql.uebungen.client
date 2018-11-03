/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Exclient.Application', {
    extend: 'Ext.app.Application',

    /*
    requires: [
        'Ext.Button',
        'Exclient.view.main.MainController',
        'Exclient.view.main.MainModel'
    ],
    */

    name: 'exclient',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
    ],

    launch: function () {
    },

    onAppUpdate: function () {
    }
});
