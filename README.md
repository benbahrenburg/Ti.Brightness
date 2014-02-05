<h1>Ti.Brightness</h1>

Ti.Brightness provides the ability to read the iOS screen brightness level, and be notified when the brightness level is changed.

<h2>IMPORTANT</h2>

This module only works on device.  If you run this in the simulator, you will not recieve any notification of screen brightness changes. Also, the brightness level will always show as 0.5.

<h2>Before you start</h2>
* This iOS native module designed to work with Titanium SDK 3.2.0.GA
* iOS 7+ is required
* Before using this module you first need to install the package. If you need instructions on how to install a 3rd party module please read this installation guide.


<h2>In Action</h2>
Please watch this [video](http://www.youtube.com/watch?v=bama8KSaGxQ) to see the module in action.

<h2>Download the compiled release</h2>

Download the platform you wish to use:

* [iOS Dist](https://github.com/benbahrenburg/Ti.Brightness/tree/master/dist)

<h2>Building from source?</h2>

If you are building from source you will need to do the following:

Import the project into Xcode:

* Modify the titanium.xcconfig file with the path to your Titanium installation


<h2>Setup</h2>

* Download the latest release from the releases folder ( or you can build it yourself )
* Install the ti.sq module. If you need help here is a "How To" [guide](https://wiki.appcelerator.org/display/guides/Configuring+Apps+to+Use+Modules). 
* You can now use the module via the commonJS require method, example shown below.

~~~
var brightness = require('ti.brightness');
~~~

<h2>Methods</h2>

<h4>getScreenBrightness</h4>

The <b>getScreenBrightness</b> returns a double with the screen brightness value.  This value is between 0 and 1.  In the simulator this value will always be 0.5.

~~~
var foo = brightness.getScreenBrightness();
Ti.API.info("Brightness level :" + foo);
~~~

<h2>Events</h2>

<h4>Changed</h4>

The <b>changed</b> event allows you to subscribe to changes in the screen brightness level.  This event will fire each time the screen brightness level is changed.

The following example demonstrates how to add a brightness <b>changed</b> listener

~~~
function onBrightChange(e){
	Ti.API.info(JSON.stringify(e));
};

brightness.addEventListener('changed',onBrightChange);
~~~


This listener can be removed by using the removeEventListener method as show below:

~~~
brightness.addEventListener('remove',onBrightChange);
~~~

<h2>Example</h2>

Please check the module's example folder on [github](https://github.com/benbahrenburg/Ti.Brightness/tree/master/example) for examples on how to use this module.

<h3>Twitter</h3>

Please consider following the [@benCoding Twitter](http://www.twitter.com/benCoding) for updates 
and more about Titanium.

<h3>Blog</h3>

For module updates, Titanium tutorials and more please check out my blog at [benCoding.Com](http://benCoding.com).
