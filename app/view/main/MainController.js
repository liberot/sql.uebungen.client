/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('cliento.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    resetDB: function(){
        Ext.MessageBox.alert('Rreset DB');
    },

    importFromSource: function(){
        Ext.MessageBox.alert('Import Source Files');
    },

    importGarbage: function(){
        Ext.MessageBox.alert('Import Garbage');
    }
});
