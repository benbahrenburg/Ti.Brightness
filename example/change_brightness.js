var brightness = require('ti.brightness');

exports.createWindow = function(){

	var win = Titanium.UI.createWindow({  
	    title:'Change Brightness', backgroundColor:'#fff', layout:'vertical'
	});
	
	var instr = Ti.UI.createLabel({
		text:"This is an example how to change the screen brightness. Move the below slider to adjust.",
		color:'#000', top:40, left:10, right:10
	});
	win.add(instr);
	
	var brightLabel = Ti.UI.createLabel({
		top:40, text:'Brightness: ', textAlign:'left',
		left:10, right:10, height:40, color:"#000",
		font:{
			fontSize:24, fontWeight:'bold'
		}	
	});
	win.add(brightLabel);
	
	var slider = Ti.UI.createSlider({
		min:0, max:1, left:10, right:10, height:'auto', top:30
	});
	win.add(slider);
	
	slider.addEventListener('change',function(e){
		brightness.setScreenBrightness(e.value);
	});

	function updateBrightness(value){		
		brightLabel.text =  'Brightness: ' + parseFloat(value).toFixed(4);
	};
	
	function onBrightChange(e){
		Ti.API.info(JSON.stringify(e));
		updateBrightness(e.brightness);
	};
	
	brightness.addEventListener('changed',onBrightChange);
	
	win.addEventListener('focus',function(d){
		var level = brightness.getScreenBrightness();
		updateBrightness(level);
		slider.value = level;
	});
	
	win.addEventListener('close',function(d){
		brightness.addEventListener('remove',onBrightChange);
	});
	
	return win;
};
