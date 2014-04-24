//
//  TTSPlugin.m
//  Ping
//
//  Created by Simon Hordvik on 3/7/14.
//
//

#import "TTSPlugin.h"
#import <AVFoundation/AVFoundation.h>

@implementation TTSPlugin

-(void)speakStuff:(CDVInvokedUrlCommand *)speakString {
    CDVPluginResult* pluginResult = nil;
    NSString* textToBeSpoken = [[speakString.arguments objectAtIndex:0] lowercaseString];  //take the incoming speakString object and extract the string
    if (textToBeSpoken != nil && [textToBeSpoken length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:textToBeSpoken];
        AVSpeechSynthesizer *synthesizer = [[AVSpeechSynthesizer alloc]init];
        [synthesizer setDelegate:self];
        AVSpeechUtterance *utterance = [AVSpeechUtterance speechUtteranceWithString:textToBeSpoken];
        [utterance setRate:0.2f];
        utterance.voice = [AVSpeechSynthesisVoice voiceWithLanguage:@"no-NO"];
        [synthesizer speakUtterance:utterance];
    }
    else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:speakString.callbackId];

}

- (void)speechSynthesizer:(AVSpeechSynthesizer *)synthesizer didFinishSpeechUtterance:(AVSpeechUtterance *)utterance {
    [super writeJavascript:@"doneReadingWord()"];
}

- (void)speechSynthesizer:(AVSpeechSynthesizer *)synthesizer didStartSpeechUtterance:(AVSpeechUtterance *)utterance {
    [super writeJavascript:@"highlightWord()"];
}

-(void)addAlertView:(NSString *)message{
    UIAlertView *alertView = [[UIAlertView alloc]initWithTitle:
                              @"Title" message:message delegate:self
                                             cancelButtonTitle:@"Cancel" otherButtonTitles:@"Ok", nil];
    [alertView show];
}


#pragma mark - Alert view delegate
- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:
(NSInteger)buttonIndex{
    switch (buttonIndex) {
        case 0:
            NSLog(@"Cancel button clicked");
            break;
        case 1:
            NSLog(@"OK button clicked");
            break;
            
        default:
            break;
    }
}

@end
