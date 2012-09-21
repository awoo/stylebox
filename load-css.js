chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        var path = request.url;
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = path;
        link.type = "text/css";

        document.getElementsByTagName("head")[0].appendChild( link );
    });
