/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('cliento.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'cliento.view.main.MainController',
        'cliento.view.main.MainModel',
        'cliento.view.main.List',

        'Ext.container.Container'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    initComponent: function(){
        this.callParent();
        var ref = this;
        this.add(
            new Ext.container.Container({
                items: [
                    new Ext.Button({
                        text: 'Reset DB',
                        handler: function(){
                            ref.controller.resetDB();
                        }
                    }),
                    new Ext.Button({
                        text: 'Import Source Files',
                        handler: function(){
                            ref.controller.importFromSource();
                        }
                    }),
                    new Ext.Button({
                        text: 'Import Garbage',
                        handler: function(){
                            ref.controller.importGarbage();
                        }
                    })
                ]
            })
        );
    }
});
