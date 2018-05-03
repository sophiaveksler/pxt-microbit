// /// <reference path="./api.ts"/>
// import * as api from './api'

namespace pxsim.adafruit {
	export function sendData(feed: string, data_val: string) {
        var key = 'b9096d1f3ed8424ea1523b45361dbf39';
        var username = 'sveksler'
        var feedname = feed;
        var datum = {"value": data_val}

        var w: any = window;
        var apiClient : any;
        var defaultClient: any = w.parent.AdafruitIoRestApi.ApiClient.instance;
        var HeaderKey: any = defaultClient.authentications['HeaderKey'];
        HeaderKey.apiKey = key;
        var QueryKey : any = defaultClient.authentications['QueryKey'];
        QueryKey.apiKey = key;

        var api: any = new w.parent.AdafruitIoRestApi.DataApi();

        var opts = {};

        var callback = function(error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully");
        }
        };

        var data2 = api.createData(username, feedname, datum, callback);
    }
}


