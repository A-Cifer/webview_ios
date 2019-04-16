//
//  ynWebViewController.h
//  WebViewPro
//
//  Created by yineng on 2018/11/30.
//  Copyright © 2018 kuplay. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "UIViewController+BackButtonHandler.h"
#import <WebKit/WebKit.h>
#import "YNWebView.h"
#import "WebViewManager.h"
NS_ASSUME_NONNULL_BEGIN

@interface ynWebViewController : UIViewController

+ (instancetype)sharedInstenceWithWebViewName:(NSString *)webviewName url:(NSString *)Url title:(NSString *)webTitle injectContent:(NSString *)injectcontent;
- (instancetype)initWithWebViewName:(NSString *)webViewName url:(NSString *)url title:(NSString *)webtitle injectContent:(NSString *)injectContent;
- (void)removeScriptMessageHandle;
- (void)initWeb;
@end

NS_ASSUME_NONNULL_END
