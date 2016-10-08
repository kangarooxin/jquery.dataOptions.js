(function($) {
    $.fn.dataOptions = function(attrArr, prefix) {
        var options = {},
            attr, value;
        for(var i = 0; i < attrArr.length; i++){
            attr = attrArr[i];
            value = $(this).data($.fn.dataOptions.constructDataAttr(attr, prefix));
            $.fn.dataOptions.normalizeOptions(options, attr, value);
        }
        return options;
    };

    $.fn.dataOptions.normalizeOptions = function(options, attr, value) {
        //Convert the value to a number for number inputs
        if ( /min|max|step/.test( attr )) {
            value = Number( value );
            if ( isNaN( value ) ) {
                value = undefined;
            }
        }
        if (value || value === 0) {
            options[attr] = value;
        }
    };

    $.fn.dataOptions.constructDataAttr = function(attr, prefix) {
        if(prefix) {
            return prefix + attr.charAt(0).toUpperCase() + attr.substring(1);
        } else {
            return attr.charAt(0).toLowerCase() + attr.substring(1);
        }
    };
})(jQuery);
