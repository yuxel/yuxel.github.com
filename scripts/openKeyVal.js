/**
 * This is a simple wrapper for  http://openkeyval.org/
 */

var openKeyVal = {};
openKeyVal.hash = "dag_basini_duman_almis";

openKeyVal.get = function (key, callback) {
    callback = callback || function () {};

    var url = "http://api.openkeyval.org/" + openKeyVal.hash + key;

    $.ajax({
        url: url,
        dataType: "jsonp",
        success: function (data) {
            callback(JSON.parse(data));
        }
    });
};


openKeyVal.set = function (key, value, callback) {
    callback = callback || function () {};
    var data = openKeyVal.hash + key + "=" + JSON.stringify(value);
    var url = "http://api.openkeyval.org/store/";
 
    $.ajax({
        url: url,
        data: data,
        dataType: "jsonp",
        success: function (data) {
            callback(true);
        }
    });
};



