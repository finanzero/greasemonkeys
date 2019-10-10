//this is a script to be used with the chrome tool TamperMonkey
//it will print besides the element, the attribute class of all elements on the page that start with st-
//the function gets trigger when the user clicks on the menu item that is available after clicking the TamperMonkey icon on chrome

// ==UserScript==
// @name         styles
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        GM_registerMenuCommand
// @downloadurl  https://raw.githubusercontent.com/finanzero/greasemonkeys/master/showCssAtt.js
// ==/UserScript==

(function() {
    'use strict';

    var script = document.createElement('script');
    document.head.appendChild(script);
    script.type = 'text/javascript';
    script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
    var printClasses = function(){
       var elements = $('[class^="sf-"], [class*=" sf-"]');
       elements.each(function (index, item) {
          var elSpan = document.createElement('span')
          elSpan.innerHTML = $(item).attr('class');
          item.parentNode.insertBefore(elSpan, item.nextSibling);
       });
    };
    GM_registerMenuCommand('Print Style Classes', printClasses, 'p');
})();
