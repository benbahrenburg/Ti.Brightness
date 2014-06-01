var brightness = require('ti.brightness'),
	_lightText ="#000",
	_lightBackground = "#fff",
	_darkText ="yellow",
	_darkBackground = "#000";
	
exports.createWindow = function(){

	var win = Titanium.UI.createWindow({  
	    title:'Find/Monitor Brightness',
	    backgroundColor:_lightBackground,
	    layout:'vertical'
	});
	
	
	var instr = Ti.UI.createLabel({
		text:"This is an example that monitors of a change in the screen brightness. This will not work in the simulator, but try it on device. Open the app, then swipe up and adjust the brightness.  You should see the theme change.",
		color:_lightText,
		top:40,
		left:10, right:10
	});
	win.add(instr);
	
	var brightLabel = Ti.UI.createLabel({
		top:40,
		text:'Brightness: ',
		textAlign:'left',
		left:10, right:10,
		height:40,
		color:_lightText,
		font:{
			fontSize:24, fontWeight:'bold'
		}	
	});
	win.add(brightLabel);
	
	var btnCheck = Ti.UI.createButton({
		top:20, height:50,
		title:'Get Brightness',
		left:10, right:10,
		borderColor:_lightText	
	});
	win.add(btnCheck);
	
	
	function updateBrightness(value){
		if(value < 0.4){
			btnCheck.borderColor = _darkText;
			instr.color = _darkText;
			brightLabel.color = _darkText;
			win.backgroundColor = _darkBackground;
		}else{
			btnCheck.borderColor = _lightText;
			instr.color  = _lightText;
			brightLabel.color = _lightText;
			win.backgroundColor = _lightBackground;		
		}
		
		brightLabel.text =  'Brightness: ' + parseFloat(value).toFixed(4);
	};
	
	function onBrightChange(e){
		Ti.API.info(JSON.stringify(e));
		updateBrightness(e.brightness);
	};
	
	brightness.addEventListener('changed',onBrightChange);
	
	btnCheck.addEventListener('click',function(d){
		var level = brightness.getScreenBrightness();
		updateBrightness(level);	
	});
	
	win.addEventListener('focus',function(d){
		var level = brightness.getScreenBrightness();
		updateBrightness(level);
	});
	
	win.addEventListener('close',function(d){
		brightness.addEventListener('remove',onBrightChange);
	});
	
	return win;
};
