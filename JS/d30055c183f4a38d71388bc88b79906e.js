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

;// bundle: page___a08993c50758df1b63fd06b0cc14e7c4_m
;// files: GenericConfirmation.js

;// GenericConfirmation.js
typeof Roblox=="undefined"&&(Roblox={}),typeof Roblox.GenericConfirmation=="undefined"&&(Roblox.GenericConfirmation=function(){function s(n){var c={titleText:"",bodyContent:"",footerText:"",acceptText:Roblox.GenericConfirmation.Resources.yes,declineText:Roblox.GenericConfirmation.Resources.No,acceptColor:u,declineColor:r,xToCancel:!1,onAccept:function(){return!1},onDecline:function(){return!1},onCancel:function(){return!1},imageUrl:null,allowHtmlContentInBody:!1,allowHtmlContentInFooter:!1,dismissable:!0,fieldValidationRequired:!1,onOpenCallback:function(){}},o,e,h,s;n=$.extend({},c,n),i.overlayClose=n.dismissable,i.escClose=n.dismissable,o=$("[roblox-confirm-btn]"),o.html(n.acceptText+"<span class='btn-text'>"+n.acceptText+"</span>"),o.attr("class","btn-large "+n.acceptColor),o.unbind(),o.bind("click",function(){return n.fieldValidationRequired?f(n.onAccept):t(n.onAccept),!1}),e=$("[roblox-decline-btn]"),e.html(n.declineText+"<span class='btn-text'>"+n.declineText+"</span>"),e.attr("class","btn-large "+n.declineColor),e.unbind(),e.bind("click",function(){return t(n.onDecline),!1}),$('[data-modal-handle="confirmation"] div.Title').text(n.titleText),h=$("[data-modal-handle='confirmation']"),n.imageUrl==null?h.addClass("noImage"):(h.find("img.GenericModalImage").attr("src",n.imageUrl),h.removeClass("noImage")),n.allowHtmlContentInBody?$("[data-modal-handle='confirmation'] div.Message").html(n.bodyContent):$("[data-modal-handle='confirmation'] div.Message").text(n.bodyContent),$.trim(n.footerText)==""?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').hide():$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').show(),n.allowHtmlContentInFooter?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').html(n.footerText):$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').text(n.footerText),$("[data-modal-handle='confirmation']").modal(i),s=$("a.genericmodal-close"),s.unbind(),s.bind("click",function(){return t(n.onCancel),!1}),n.xToCancel||s.hide(),n.onOpenCallback()}function n(n){typeof n!="undefined"?$.modal.close(n):$.modal.close()}function t(t){n(),typeof t=="function"&&t()}function f(t){if(typeof t=="function"){var i=t();if(i!=="undefined"&&i==!1)return!1}n()}var o="btn-primary",u="btn-neutral",r="btn-negative",e="btn-none",i={overlayClose:!0,escClose:!0,opacity:80,overlayCss:{backgroundColor:"#000"}};return{open:s,close:n,green:o,blue:u,gray:r,none:e}}());


}
/*
     FILE ARCHIVED ON 09:45:25 Jan 22, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:06:39 Jul 23, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 19.094 (3)
  captures_list: 183.672
  exclusion.robots.policy: 0.264
  RedisCDXSource: 122.074
  exclusion.robots: 0.278
  LoadShardBlock: 36.604 (3)
  PetaboxLoader3.datanode: 70.148 (5)
  load_resource: 146.582
  esindex: 0.037
  PetaboxLoader3.resolve: 71.791 (2)
*/