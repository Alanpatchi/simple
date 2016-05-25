var mainJS = {
    manfacturesList: null,
    universalMedicineNames: null,
    init: function() {
        mainJS.sendAjaxRequest('/medAlliance/rest/udb/allProducts', {}, 'get', mainJS.displayInitData);       
    },
    ajaxBuzy: false,
    sendAjaxRequest: function(url, data, type, complete) {
        if (! mainJS.ajaxBuzy) {
            mainJS.ajaxBuzy = true;
            jQuery.ajax({
                'url': url,
                'type': type,
                'data': data,
                'dataType': 'json',
                'complete': function(response) {
                    complete(response);
                },
            });
        }
        mainJS.ajaxBuzy = false;
    },
    displayInitData: function(response){
        console.log(response);
    }
};
