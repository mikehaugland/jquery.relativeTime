/*
    jquery.relativeTime.js

    Author: Mike Haugland
    Date: Dec 4th, 2011
    Version: 1.0.0
*/

(function( $ ) {

  $.extend({
    relativeTime: function(time_value, offset) {
      var then = new Date(time_value);
      var parsed_date = Date.UTC(then.getFullYear(), then.getMonth(), then.getDate(), then.getHours(), then.getMinutes(), then.getSeconds(), then.getMilliseconds());
      var now = new Date();
      var relative_to = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());

      var delta = parseInt((relative_to - parsed_date) / 1000);
      var pluralize = function (singular, n) {
        return '' + n + ' ' + singular + (n == 1 ? '' : 's');
      };

      if(delta < 60) {
        return 'less than a minute ago';
      } else if(delta < (45*60)) {
        return 'about ' + pluralize("minute", parseInt(delta / 60)) + ' ago';
      } else if(delta < (24*60*60)) {
        return 'about ' + pluralize("hour", parseInt(delta / 3600)) + ' ago';
      } else {
        return pluralize("day", parseInt(delta / 86400)) + ' ago';
      }
    }
  });

})( jQuery )