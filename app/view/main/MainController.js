/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Exclient.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    resetDB: function(){
        Ext.MessageBox.alert('Reset the DB?');
    },

    importFromSource: function(){
        Ext.MessageBox.alert('Import from Source');
    },

    importGarbage: function(){
        Ext.MessageBox.alert('Import garbage data')
    }

});