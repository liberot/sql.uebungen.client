/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Exclient.view.main.Main', {
    extend: 'Ext.tab.Panel',
    
    initComponent: function(){
        this.callParent(arguments);
        this.controller = new Exclient.view.main.MainController();
        this.model = new Exclient.view.main.MainModel();
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
                        text: 'Load Data from Source',
                        handler: function(){
                            ref.controller.importFromSource();
                        }
                    }),
                    new Ext.Button({
                        text: 'Load Garbage Data',
                        handler: function(){
                            ref.controller.importGarbage();
                        }
                    })
                ]
            })
        );
    }
});