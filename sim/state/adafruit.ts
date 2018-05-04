namespace pxsim.adafruit {
	export function sendData(feed: string, data_val: string) {
        var key = 'your-key-here';
        var username = 'your-username-here'
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


