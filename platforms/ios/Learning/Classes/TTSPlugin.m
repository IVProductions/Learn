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
    NSMutableArray *ListOfUtterances = [[NSMutableArray alloc] init];
    
    NSString* textToBeSpoken = [[speakString.arguments objectAtIndex:0] lowercaseString];  //take the incoming speakString object and extract the string
    AVSpeechSynthesizer *synthesizer = [[AVSpeechSynthesizer alloc]init];
    [synthesizer setDelegate:self];
    
    if (textToBeSpoken != nil && [textToBeSpoken length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:textToBeSpoken];
        
        NSArray *myWords = [textToBeSpoken componentsSeparatedByString:@";"]; //splits string into Stringlist on semicolon ";"
        
        for (NSString *text in myWords) {
            AVSpeechUtterance *welcome = [AVSpeechUtterance speechUtteranceWithString:text];
            welcome.rate = 0.25;
            welcome.voice = [AVSpeechSynthesisVoice voiceWithLanguage:@"no-NO"];
            welcome.pitchMultiplier = 1.2;
            [ListOfUtterances addObject:welcome];
        }
        
        for (AVSpeechUtterance *utterance in ListOfUtterances) {
            [synthesizer speakUtterance:utterance];
        }
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


@end
