// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


$(document).ready(function () {
    chrome.tabs.executeScript(null, {file:"load-css.js"});

    $("#styleOn").click(function () {
        chrome.tabs.getSelected(function (tab) {
            chrome.tabs.sendMessage(tab.id, { url:document.getElementById("url").value }, function (response) {
                console.log(response.farewell);
            });
        });
    });

    $("#styleOff").click(function () {
        chrome.tabs.reload();
    });
});

