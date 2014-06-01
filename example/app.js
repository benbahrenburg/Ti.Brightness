// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Ti.UI.createTabGroup();

var winMonitor = require('find_brightness').createWindow(),
	winChange = require('change_brightness').createWindow();

var tab1 = Ti.UI.createTab({ 
	icon:'KS_nav_views.png',
    title:'Monitor',
    window:winMonitor
});

var tab2 = Ti.UI.createTab({ 
    icon:'KS_nav_ui.png',
    title:'Change',
    window:winChange
});

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

// open tab group
tabGroup.open();
