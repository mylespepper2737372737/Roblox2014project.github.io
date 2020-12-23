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

;// bundle: Widgets___AvatarImage___c4d7fca5125e039e0b08ddc9a4f8c7af_m
;// files: modules/Widgets/AvatarImage.js

;// modules/Widgets/AvatarImage.js
Roblox.define("Widgets.AvatarImage",["/js/jquery/jquery-1.7.2.min.js","/js/json2.min.js"],function(){function r(n){var t=$(n);return{imageSize:t.attr("data-image-size")||"medium",noClick:typeof t.attr("data-no-click")!="undefined",noOverlays:typeof t.attr("data-no-overlays")!="undefined",userId:t.attr("data-user-id")||0,userOutfitId:t.attr("data-useroutfit-id")||0,name:t.attr("data-useroutfit-name")||""}}function u(n,t){if(t.bcOverlayUrl!=null){var i=$("<img>").attr("src",t.bcOverlayUrl).attr("alt","Builders Club").css("position","absolute").css("left","0").css("bottom","0").attr("border",0);n.after(i)}}function n(i,f){for($.type(i)!=="array"&&(i=[i]);i.length>0;){for(var s=i.splice(0,10),o=[],e=0;e<s.length;e++)o.push(r(s[e]));$.getJSON(t.endpoint,{params:JSON.stringify(o)},function(t,i){return function(r){for(var v=[],e,c,h,o=0;o<r.length;o++)if(e=r[o],e!=null){var l=t[o],s=$(l),a=$("<div>").css("position","relative");s.html(a),s=a,i[o].noClick||(c=$("<a>").attr("href",e.url),s.append(c),s=c),h=$("<img>").attr("title",e.name).attr("alt",e.name).attr("border",0),h.load(function(n,t,i,r){return function(){n.width(t.width),n.height(t.height),u(i,r)}}(a,l,h,e)),s.append(h),h.attr("src",e.thumbnailUrl),e.thumbnailFinal||v.push(l)}f=f||1,f<4&&window.setTimeout(function(){n(v,f+1)},f*2e3)}}(s,o))}}function i(){n($(t.selector+":empty").toArray())}var t={selector:".roblox-avatar-image",endpoint:"/thumbs/avatarimage.ashx?jsoncallback=?"};return{config:t,load:n,populate:i}});


}
/*
     FILE ARCHIVED ON 03:22:17 Mar 29, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:42:19 Aug 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 950.827
  exclusion.robots.policy: 0.195
  exclusion.robots: 0.21
  load_resource: 4502.515
  RedisCDXSource: 67.44
  PetaboxLoader3.datanode: 1093.712 (5)
  LoadShardBlock: 854.683 (3)
  PetaboxLoader3.resolve: 4047.363 (3)
  CDXLines.iter: 23.776 (3)
  esindex: 0.012
*/