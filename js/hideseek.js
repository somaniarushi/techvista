/**
 * HideSeek jQuery plugin
 *
 * @copyright Copyright 2015, Dimitris Krestos
 * @license   Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link      http://vdw.staytuned.gr
 * @version   v0.7.1
 *
 * Dependencies are include in minified versions at the bottom:
 * 1. Highlight v4 by Johann Burkard
 *
 */

  /* Sample html structure

  <input name="search" placeholder="Start typing here" type="text" data-list=".list">
  <ul class="list">
    <li>item 1</li>
    <li>...</li>
    <li><a href="#">item 2</a></li>
  </ul>

  or

  <input name="search" placeholder="Start typing here" type="text" data-list=".list">
  <div class="list">
    <span>item 1</span>
    <span>...</span>
    <span>item 2</span>
  </div>

  or any similar structure...

  */

!function(e){"use strict";e.fn.hideseek=function(t){var s={list:".hideseek-data",nodata:"",attribute:"text",highlight:!1,ignore:"",headers:"",navigation:!1,ignore_accents:!1,hidden_mode:!1,min_chars:1},t=e.extend(s,t);return this.each(function(){var s=e(this);s.opts=[],e.map(["list","nodata","attribute","highlight","ignore","headers","navigation","ignore_accents","hidden_mode","min_chars"],function(e){s.opts[e]=s.data(e)||t[e]}),s.opts.headers&&(s.opts.ignore+=s.opts.ignore?", "+s.opts.headers:s.opts.headers);var i=e(s.opts.list);s.opts.navigation&&s.attr("autocomplete","off"),s.opts.hidden_mode&&i.children().hide(),s.keyup(function(t){function o(e){return e.children(".selected:visible")}function n(e){return o(e).prevAll(":visible:first")}function a(e){return o(e).nextAll(":visible:first")}if(38!=t.keyCode&&40!=t.keyCode&&13!=t.keyCode&&(8!=t.keyCode?s.val().length>=s.opts.min_chars:!0)){var r=s.val().toLowerCase();i.children(s.opts.ignore.trim()?":not("+s.opts.ignore+")":"").removeClass("selected").each(function(){var t=("text"!=s.opts.attribute?e(this).attr(s.opts.attribute)||"":e(this).text()).toLowerCase(),i=-1==t.removeAccents(s.opts.ignore_accents).indexOf(r)||r===(s.opts.hidden_mode?"":!1);i?(e(this).hide(),s.trigger("_after_each")):(s.opts.highlight?e(this).removeHighlight().highlight(r).show():e(this).show(),s.trigger("_after_each"))}),s.opts.nodata&&(i.find(".no-results").remove(),i.children(':not([style*="display: none"])').length||i.children().first().clone().removeHighlight().addClass("no-results").show().prependTo(s.opts.list).text(s.opts.nodata)),s.opts.headers&&e(s.opts.headers,i).each(function(){e(this).nextUntil(s.opts.headers).not('[style*="display: none"],'+s.opts.ignore).length?e(this).show():e(this).hide()}),s.trigger("_after")}s.opts.navigation&&(38==t.keyCode?o(i).length?(n(i).addClass("selected"),o(i).last().removeClass("selected")):i.children(":visible").last().addClass("selected"):40==t.keyCode?o(i).length?(a(i).addClass("selected"),o(i).first().removeClass("selected")):i.children(":visible").first().addClass("selected"):13==t.keyCode&&(o(i).find("a").length?document.location=o(i).find("a").attr("href"):s.val(o(i).text())))})})},e(document).ready(function(){e('[data-toggle="hideseek"]').hideseek()})}(jQuery);

/*

highlight v4

Highlights arbitrary terms.

<http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html>

MIT license.

Johann Burkard
<http://johannburkard.de>
<mailto:jb@eaio.com>

*/
jQuery.fn.highlight=function(t){function e(t,i){var n=0;if(3==t.nodeType){var a=t.data.removeAccents(true).toUpperCase().indexOf(i);if(a>=0){var s=document.createElement("mark");s.className="highlight";var r=t.splitText(a);r.splitText(i.length);var o=r.cloneNode(!0);s.appendChild(o),r.parentNode.replaceChild(s,r),n=1}}else if(1==t.nodeType&&t.childNodes&&!/(script|style)/i.test(t.tagName))for(var h=0;h<t.childNodes.length;++h)h+=e(t.childNodes[h],i);return n}return this.length&&t&&t.length?this.each(function(){e(this,t.toUpperCase())}):this},jQuery.fn.removeHighlight=function(){return this.find("mark.highlight").each(function(){with(this.parentNode.firstChild.nodeName,this.parentNode)replaceChild(this.firstChild,this),normalize()}).end()};

// Ignore accents
String.prototype.removeAccents=function(e){return e?this.replace(/[áàãâä]/gi,"a").replace(/[éè¨ê]/gi,"e").replace(/[íìïî]/gi,"i").replace(/[óòöôõ]/gi,"o").replace(/[úùüû]/gi,"u").replace(/[ç]/gi,"c").replace(/[ñ]/gi,"n"):this};
