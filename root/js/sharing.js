/* jshint unused: false */

var sharing = {
  sub: 'SXGWLZPDOKFIVUHJYTQBNMACERxswgzldpkoifuvjhtybqmncare',

  encodeStr: function(uncoded) {
    uncoded = uncoded.toUpperCase().replace(/^\s+|\s+$/g,'');
    var coded = '';
    var chr;
    for (var i = uncoded.length - 1; i >= 0; i--) {
      chr = uncoded.charCodeAt(i);
      coded += (chr >= 65 && chr <= 90) ? 
        this.sub.charAt(chr - 65 + 26*Math.floor(Math.random()*2)) :
        String.fromCharCode(chr); 
      }
    return encodeURIComponent(coded);  
  },

  decodeStr: function(coded) {
    coded = decodeURIComponent(coded);  
    var uncoded = '';
    var chr;
    for (var i = coded.length - 1; i >= 0; i--) {
      chr = coded.charAt(i);
      uncoded += (chr >= 'a' && chr <= 'z' || chr >= 'A' && chr <= 'Z') ?
        String.fromCharCode(65 + 32 + this.sub.indexOf(chr) % 26) :
        chr; 
      }
    return uncoded;   
  },

  gup: function(name){
    name = name.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');  
    var regexS = '[\\?&]'+name+'=([^&#]*)';  
    var regex = new RegExp( regexS );  
    var results = regex.exec( window.location.href ); 
    if( results == null ) {
      return '';  
    }
    else {
      return results[1];
    }
  }
};
