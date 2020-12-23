var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

;// bundle: Widgets___ItemImage___a31a17f62f08a0e30394f989c48edbab_m
;// files: modules/Widgets/ItemImage.js

;// modules/Widgets/ItemImage.js
Roblox.define("Widgets.ItemImage",["/js/jquery/jquery-1.7.2.min.js","/js/json2.min.js"],function(){function r(n){var t=$(n);return{imageSize:t.attr("data-image-size")||"large",noClick:typeof t.attr("data-no-click")!="undefined",noOverlays:typeof t.attr("data-no-overlays")!="undefined",assetId:t.attr("data-item-id")||0}}function u(n,t){var o,i,e,f,u,r;t.bcOverlayUrl!=null&&(o=$("<img>").attr("src",t.bcOverlayUrl).attr("alt","Builders Club").css("position","absolute").css("left","0").css("bottom","0").attr("border",0),n.after(o)),t.transparentBackground===!0&&n.addClass("checker-background-small"),t.limitedOverlayUrl!=null&&(i=$("<img>").attr("alt",t.limitedAltText).css("position","absolute").css("left","0").css("bottom","0").attr("border",0),t.bcOverlayUrl!=null&&(t.imageSize=="small"?i.load(function(){i.css("left",34)}):i.load(function(){i.css("left",46)})),i.attr("src",t.limitedOverlayUrl),n.after(i)),t.deadlineOverlayUrl!=null&&(e=$("<img>").attr("alt","Deadline").attr("border",0),e.attr("src",t.deadlineOverlayUrl),n.after(e)),t.iosOverlayUrl!=null?(f=$("<img>").attr("alt","iOS Only").attr("border",0),f.attr("src",t.iosOverlayUrl),n.after(f)):t.saleOverlayUrl!=null?(u=$("<img>").attr("alt","Sale").attr("border",0),u.attr("src",t.saleOverlayUrl),n.after(u)):t.newOverlayUrl!=null&&(r=$("<img>").attr("alt","New").attr("border",0),r.attr("src",t.newOverlayUrl),n.after(r))}function n(i,f){for($.type(i)!=="array"&&(i=[i]);i.length>0;){for(var s=i.splice(0,10),o=[],e=0;e<s.length;e++)o.push(r(s[e]));$.getJSON(t.endpoint,{params:JSON.stringify(o)},function(t,i){return function(r){for(var v=[],e,c,h,o=0;o<r.length;o++)if(e=r[o],e!=null){var l=t[o],s=$(l),a=$("<div>").css("position","relative").css("overflow","hidden");s.html(a),s=a,i[o].noClick||(c=$("<a>").attr("href",e.url),s.append(c),s=c),h=$("<img>").attr("title",e.name).attr("alt",e.name).attr("border",0).addClass("original-image"),h.load(function(n,t,i,r){return function(){n.width(t.width),n.height(t.height),u(i,r)}}(a,l,h,e)),s.append(h),h.attr("src",e.thumbnailUrl),e.thumbnailFinal||v.push(l)}f=f||1,f<4&&window.setTimeout(function(){n(v,f+1)},f*2e3)}}(s,o))}}function i(){n($(t.selector+":empty").toArray())}var t={selector:".roblox-item-image",endpoint:"/thumbs/itemimage.ashx?jsoncallback=?"};return{config:t,load:n,populate:i}});


}
/*
     FILE ARCHIVED ON 18:10:07 May 16, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:27:06 Aug 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 1153.067 (3)
  esindex: 0.018
  RedisCDXSource: 61.321
  exclusion.robots: 0.216
  exclusion.robots.policy: 0.201
  PetaboxLoader3.resolve: 797.581 (2)
  CDXLines.iter: 21.679 (3)
  captures_list: 1240.989
  load_resource: 2358.577
  PetaboxLoader3.datanode: 1293.98 (5)
*/