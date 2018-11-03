/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('exclient.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'exclient.view.main.MainController',
        'exclient.view.main.MainModel',
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    initComponent: function(){
        this.callParent(arguments);
        this.add(
            new Ext.container.Container({
                items: [
                    { html: 'xyClient' },
                    { html: 'ysClient' }
                ]
            })
        );
    }
});

