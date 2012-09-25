$(function () {
    chrome.extension.sendRequest({}, function (response) {
        $(function () {

            $('a').hover(function () {
                var url = $(this).attr('href');
                if (url) {
                    $.ajax({
                        url: 'https://sb-ssl.google.com/safebrowsing/api/lookup?client=api&apikey=ABQIAAAAOYmm4RdxErChHIlZc-m0CBRqZCBm3LXLy5AY8QHdqKW3MTy9_A&appver=1.0&pver=3.0&url=' + url,
                        type: 'get',
                        success: function (data) {
                            alert(data);
                        },
                        error: function () {
                            alert(1);
                        }
                    });
                }
            });
        });
    });
});