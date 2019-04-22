//
//  MyPoint.m
//  Test_JSCore
//
//  Created by 纠结伦 on 2017/3/3.
//  Copyright © 2017年 纠结伦. All rights reserved.
//

#import "URLSessionDataTask.h"

@interface URLSessionDataTask ()<URLSessionDataTaskExports>

@end

@implementation URLSessionDataTask

NSURLSessionTask * _task;

- (instancetype)initWithTask:(NSURLSessionTask *)task {
    self = [super init];
    _task = task;
    return self;
}

+ (id)getZhDataTask:(double)str {
    URLSessionDataTask *g = [[URLSessionDataTask alloc] init];
    return g;
}

- (void)cancel {
    [_task cancel];
}

@end
