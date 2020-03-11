var myUserAgent = (function(){
    var ua = navigator.userAgent.toLowerCase();
    return {
        getDevice: function(){
            return ua.indexOf("iphone") !== -1 || ua.indexOf("android") !== -1 && ua.indexOf("mobile") !== -1? 'sp': ua.indexOf("ipad") !== -1 || ua.indexOf("android") !== -1? 'tab': 'pc';
        }
    }
}());
var deviceType = myUserAgent.getDevice();
console.log(deviceType);