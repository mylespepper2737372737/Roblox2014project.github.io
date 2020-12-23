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

;// bundle: Widgets___Suggestions___e46874b2750479fd5eafa8ffd5fd992e_m
;// files: modules/Widgets/Suggestions.js

;// modules/Widgets/Suggestions.js
typeof Roblox=="undefined"&&(Roblox={}),typeof Roblox.Suggestions=="undefined"&&(Roblox.Suggestions={}),Roblox.Suggestions.Init=function(){function o(t){if($(".suggestion-list").html(""),t.length==0)return n(!1),!1;$(".loading-element").hide(),$(t).each(function(n,t){var i=s(t);$(".suggestion-list").append(i)}),$("[data-retry-url]").loadRobloxThumbnails(),n(!0);$(".suggestion-item").on("click",function(){u($(this).data("value"))});$(".suggestion-li").on("mouseover",function(){$(".selected-item").removeClass("selected-item"),$(this).addClass("selected-item")});return!1}function s(n){var t=$(".suggestion-template").clone(),i=$(".suggestion-template").data("retry-url-template");return i=i+"&userId="+n.ID,t.find(".suggestion-name").text(n.Name),t.find(".suggestion-item").attr("data-value",n.Name),t.find(".suggestion-image").attr("data-retry-url",i),t=t.html()}function r(n){var r,t,i;return n==13?(r=$("#Keyword").val(),$(".selected-item").length!=0&&(r=$(".selected-item .suggestion-item").data("value")),u(r),!1):$(".selected-item").length==0?($(".suggestion-list .suggestion-li").first().addClass("selected-item"),!1):(t=$(".selected-item"),i=$(".selected-item").next(),n==38?i=t.prev().length==0?$(".suggestion-list .suggestion-li").last():t.prev():event.which==40&&(i=t.next().length==0?$(".suggestion-list .suggestion-li").first():t.next()),t.removeClass("selected-item"),i.addClass("selected-item"),!1)}function n(n){f=n,$("#SuggestionsContainer").toggle(n)}function u(n){return $("#Keyword").val(n),$("#SuggestionsContainer").hide(),!1}var t={},i,e="",f;$("#Keyword").keypress(function(n){if(n.which==13&&f)return r(13),!1}),$("#Keyword").bind("keyup",function(u){var f=$(this).val(),h,s;return u.which==38||u.which==40||u.which==13?(r(u.which),!1):e==f||f.length<3?!1:(e=f,f in t)?(o(t[f]),!1):(i!==undefined&&i.abort(),h=$(this).data("size"),s=$(this).data("suggesturl"),$(".suggestion-list").html(""),$(".loading-element").show(),n(!0),i=$.getJSON(s,{term:f,size:h},function(n){t[f]=n,o(n)}),!1)}),$("#SuggestionsContainer").click(function(n){n.stopPropagation()}),$(document).click(function(){n(!1)})},$(function(){Roblox.Suggestions.Init()});


}
/*
     FILE ARCHIVED ON 18:10:10 May 16, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:29:40 Aug 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 461.607
  LoadShardBlock: 401.662 (3)
  RedisCDXSource: 33.105
  load_resource: 248.624
  PetaboxLoader3.resolve: 229.517 (3)
  esindex: 0.016
  exclusion.robots: 0.254
  PetaboxLoader3.datanode: 322.983 (5)
  CDXLines.iter: 21.585 (3)
  exclusion.robots.policy: 0.239
*/