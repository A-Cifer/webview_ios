//
//  MyPoint.h
//  Test_JSCore
//
//  Created by 纠结伦 on 2017/3/3.
//  Copyright © 2017年 纠结伦. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>

@class URLSessionDataTask;
@protocol URLSessionDataTaskExports <JSExport, NSObject>

+ (URLSessionDataTask *) getZhDataTask:(double)str;

- (void)cancel;

@end

@interface URLSessionDataTask : NSObject
- (instancetype)initWithTask:(NSURLSessionTask *)task;
@end
