_$define("app/core/config", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
/**
 * config file
 */
exports.config = {
    // 当前网络处于什么环境  dev--开发，prod--发布
    dev_mode: config_1.dev_mode,
    dev: {
        // https://api.blockcypher.com/v1/btc/main
        // tslint:disable-next-line:no-http-string
        BtcApiBaseUrl: 'http://39.104.129.43:3002/insight-api',
        BtcMarketPriceOracleUrl: 'https://api.coinmarketcap.com/v2/ticker/1/?convert=CNY',
        // https://ropsten.infura.io/Y4zS49bjsYwtRU3Tt4Yj
        // http://192.168.33.115:8545
        EthApiBaseUrl: 'https://ropsten.infura.io/Y4zS49bjsYwtRU3Tt4Yj',
        EthMarketPriceOracleUrl: 'https://api.coinmarketcap.com/v2/ticker/1027/?convert=CNY',
        EthscanRopstenUrl: 'http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=',
        EthscanRopstenTokenTransferEvent: 'https://api-ropsten.etherscan.io/api?module=account&action=tokentx'
    },
    prod: {
        BtcApiBaseUrl: 'http://39.104.129.43:3001/insight-api',
        BtcMarketPriceOracleUrl: 'https://api.coinmarketcap.com/v2/ticker/1/?convert=CNY',
        EthApiBaseUrl: 'http://39.104.185.112:37298',
        EthMarketPriceOracleUrl: 'https://api.coinmarketcap.com/v2/ticker/1027/?convert=CNY',
        EthscanRopstenUrl: 'http://api.etherscan.io/api?module=account&action=txlist&address=',
        EthscanRopstenTokenTransferEvent: 'https://api.etherscan.io/api?module=account&action=tokentx'
    }
};
})