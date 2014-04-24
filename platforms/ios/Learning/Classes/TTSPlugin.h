//
//  TTSPlugin.h
//  Ping
//
//  Created by Simon Hordvik on 3/7/14.
//
//

#import <Cordova/CDV.h>
#import <AVFoundation/AVFoundation.h>

@interface TTSPlugin : CDVPlugin <AVSpeechSynthesizerDelegate>

-(void)speakStuff:(CDVInvokedUrlCommand *)speakString;

@end
