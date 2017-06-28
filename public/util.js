 function checksum (s) {
        s = (s || '').split('#')[0].split('?')[0];
        var len = s.length;
        var hash = function (s) {
            var i;
            var l = s.length;
            var key = 0;
            for (i = 0; i < l; i++) {
                key = key * 31 + s.charCodeAt(i);
            }
            return key;
        };
        return len ? hash(len + '#' + s.charCodeAt(len - 1)) : -1;    
}
exports.checksum = checksum
