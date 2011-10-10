(function ($) {
    $.fn.more = function (options) {
        var settings = {
            'text'          :   ' ..devamı',
            'textClass'     :   'mt',
            'character'     :   100,
            'splitChar'     :   '{more}',
            'removeHtmlTag' :   true
        };
        var moreTextTemplate = "<span class='" + settings.textClass + "'>{0}</span>";
        return this.each(function () {
            var t = $(this);
            var content = t.html();
            var contentCache;
            var contentLength = content.length;
            var formatContent;

            if (options) { $.extend(settings, options); }

            if (settings.removeHtmlTag) {
                contentCache = content;
                content = t.text(); //replace(/<.*?>/g, "");
                contentLength = content.length;
            }

            if (content.indexOf(settings.splitChar) != -1) {
                formatContent = content.split(settings.splitChar)[0] + moreTextTemplate.replace("{0}", settings.text);
            }
            else if (contentLength > settings.character) {
                formatContent = content.substr(0, settings.character) + moreTextTemplate.replace("{0}", settings.text);
            }
            else {
                formatContent = content;
            }
            
            t.html(formatContent);

            // click
            t.find("." + settings.textClass).live("click", function () {
                if (settings.removeHtmlTag) {
                    t.html(contentCache.replace(settings.splitChar, ""));
                }
                else {
                    t.html(content.replace(settings.splitChar, ""));
                }
            });
        });
    };
})(jQuery);