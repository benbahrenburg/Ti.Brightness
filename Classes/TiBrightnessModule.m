/**
 * Copyright (c) 2014 by Ben Bahrenburg. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#import "TiBrightnessModule.h"
#import "TiBase.h"
#import "TiHost.h"
#import "TiUtils.h"

@implementation TiBrightnessModule

#pragma mark Internal

// this is generated for your module, please do not change it
-(id)moduleGUID
{
	return @"beb49c41-0e95-4d8b-ad85-9a6f666adba0";
}

// this is generated for your module, please do not change it
-(NSString*)moduleId
{
	return @"ti.brightness";
}

#pragma mark Lifecycle

-(void)startup
{
	// this method is called when the module is first loaded
	// you *must* call the superclass
	[super startup];
}

-(void)shutdown:(id)sender
{
	// this method is called when the module is being unloaded
	// typically this is during shutdown. make sure you don't do too
	// much processing here or the app will be quit forceably
	
	// you *must* call the superclass
	[super shutdown:sender];
}

#pragma mark Cleanup 


#pragma mark Internal Memory Management

-(void)didReceiveMemoryWarning:(NSNotification*)notification
{
	// optionally release any resources that can be dynamically
	// reloaded once memory is available - such as caches
	[super didReceiveMemoryWarning:notification];
}

#pragma mark Listener Notifications

-(void)_listenerAdded:(NSString *)type count:(int)count
{
	if (count == 1 && [type isEqualToString:@"changed"])
	{
        NSLog(@"[DEBUG] listener added");
		[[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onBrightnessChange:)
                                                     name:UIScreenBrightnessDidChangeNotification
                                                   object:[UIScreen mainScreen]];
	}
}

-(void)_listenerRemoved:(NSString *)type count:(int)count
{
	if (count == 0 && [type isEqualToString:@"changed"])
	{
        NSLog(@"[DEBUG] listener removed");
        [[NSNotificationCenter defaultCenter] removeObserver:self ];
	}
}

#pragma private APIs

- (void)onBrightnessChange:(NSNotification *)notification
{

    NSNumber *brightness = @([UIScreen mainScreen].brightness);
    NSDictionary *event = [NSDictionary dictionaryWithObjectsAndKeys:
                           brightness,@"brightness",
                           nil];
    
    
    if([self _hasListeners:@"changed"]){
        [self fireEvent:@"changed" withObject:event];
    }
    
}

#pragma Public APIs

-(NSNumber*) getScreenBrightness:(id)unused
{
    return @([UIScreen mainScreen].brightness);
}

@end
