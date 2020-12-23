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

;// bundle: Widgets___PlaceImage___aff9d78b82154eb90cb9f3b6f22c65f9_m
;// files: modules/Widgets/PlaceImage.js

;// modules/Widgets/PlaceImage.js
Roblox.define("Widgets.PlaceImage",["/js/jquery/jquery-1.7.2.min.js","/js/json2.min.js"],function(){function r(n){var t=$(n);return{imageSize:t.attr("data-image-size")||"large",noClick:typeof t.attr("data-no-click")!="undefined",noOverlays:typeof t.attr("data-no-overlays")!="undefined",placeId:t.attr("data-place-id")||0}}function u(n,t){var u,r,i;t.bcOverlayUrl!=null&&(u=$("<img>").attr("src",t.bcOverlayUrl).attr("alt","Builders Club").css("position","absolute").css("left","0").css("bottom","0").attr("border",0),n.after(u)),t.personalServerOverlayUrl!=null?(r=$("<img>").attr("src",t.personalServerOverlayUrl).attr("alt","Personal Server").css("position","absolute").css("right","0").css("bottom","0").attr("border",0),n.after(r)):t.megaOverlayUrl!=null&&(i=$("<img>").attr("src",t.megaOverlayUrl).attr("alt","Mega Place").css("position","absolute").css("right","0").css("bottom","0").attr("border",0),n.after(i))}function n(i,f){for($.type(i)!=="array"&&(i=[i]);i.length>0;){for(var s=i.splice(0,10),o=[],e=0;e<s.length;e++)o.push(r(s[e]));$.getJSON(t.endpoint,{params:JSON.stringify(o)},function(t,i){return function(r){var v=[],o,c,h;for(e=0;e<r.length;e++)if(o=r[e],o!=null){var l=t[e],s=$(l),a=$("<div>").css("position","relative");s.html(a),s=a,i[e].noClick||(c=$("<a>").attr("href",o.url),s.append(c),s=c),h=$("<img>").attr("title",o.name).attr("alt",o.name).attr("border",0),h.load(function(n,t,i,r){return function(){n.width(t.width),n.height(t.height),u(i,r)}}(a,l,h,o)),s.append(h),h.attr("src",o.thumbnailUrl),o.thumbnailFinal||v.push(l)}f=f||1,f<4&&window.setTimeout(function(){n(v,f+1)},f*2e3)}}(s,o))}}function i(){n($(t.selector+":empty").toArray())}var t={selector:".roblox-place-image",endpoint:"/thumbs/placeimage.ashx?jsoncallback=?"};return{config:t,load:n,populate:i}});


}
/*
     FILE ARCHIVED ON 18:40:47 Feb 26, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:28:05 Aug 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 2636.991 (4)
  exclusion.robots: 0.196
  captures_list: 2343.106
  RedisCDXSource: 58.39
  load_resource: 1748.107
  esindex: 0.014
  CDXLines.iter: 25.519 (3)
  LoadShardBlock: 2254.048 (3)
  PetaboxLoader3.resolve: 489.624
  exclusion.robots.policy: 0.18
*/