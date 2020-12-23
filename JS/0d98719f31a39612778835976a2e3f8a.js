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

;// bundle: page___303bfd635e1544d3a93c238042470793_m
;// files: GiftCard.js, GenericConfirmation.js

;// GiftCard.js
function handleOnFocus(n){$(".GCProductSelected").toggleClass("GCProductSelected"),$(n).toggleClass("GCProductSelected"),$("#SelectedProduct").val($(n).attr("pid"))}$(function(){$(".GCProduct").click(function(){$(".GCProductSelected").toggleClass("GCProductSelected"),$(this).toggleClass("GCProductSelected"),$("#SelectedProduct").val($(this).attr("pid"))}),$(".GCTheme").click(function(){$(".GCThemeSelected").toggleClass("GCThemeSelected"),$(this).toggleClass("GCThemeSelected"),$("#SelectedTheme").val($(this).attr("tid"))}),$(".GCTheme").hover(function(){$(".ThemePreview",this).toggle()}),$(".PreviewGiftCard").click(function(){var i="height=830,width=640,left=10,top=10,resizable=1,scrollbars=1,toolbar=1,menubar=0,location=0,directories=no,status=yes",t="GiftCard.ashx?action=preview&id="+$(this).data("lookupid"),n=window.open(t,"pdfWindow",i);n.title="Preview Certificate.pdf"}),$("#MessageTextArea").bind("keydown keyup keypress paste",function(n){if(n.which==13)return!1;var t=$(this).val().replace("\n","").substring(0,250),i=t.length;$(this).val(t),$("#remainingCharacters").html(250-i)}),$('[pid="'+$("#SelectedProduct").val()+'"]').toggleClass("GCProductSelected"),$('[tid="'+$("#SelectedTheme").val()+'"]').toggleClass("GCThemeSelected"),$("#MessageTextArea").length>0&&$("#remainingCharacters").html(250-$("#MessageTextArea").val().length)});

;// GenericConfirmation.js
typeof Roblox=="undefined"&&(Roblox={}),typeof Roblox.GenericConfirmation=="undefined"&&(Roblox.GenericConfirmation=function(){function b(i){var a={titleText:"",bodyContent:"",footerText:"",acceptText:Roblox.GenericConfirmation.Resources.yes,declineText:Roblox.GenericConfirmation.Resources.No,acceptColor:f,declineColor:o,xToCancel:!1,onAccept:function(){return!1},onDecline:function(){return!1},onCancel:function(){return!1},imageUrl:null,allowHtmlContentInBody:!1,allowHtmlContentInFooter:!1,dismissable:!0,fieldValidationRequired:!1,onOpenCallback:function(){}},s,u,l,h;i=$.extend({},a,i),e.overlayClose=i.dismissable,e.escClose=i.dismissable,s=$(t),s.html(i.acceptText+"<span class='btn-text'>"+i.acceptText+"</span>"),s.attr("class","btn-large "+i.acceptColor),s.unbind(),s.bind("click",function(){return c(s)?!1:(i.fieldValidationRequired?y(i.onAccept):r(i.onAccept),!1)}),u=$(n),u.html(i.declineText+"<span class='btn-text'>"+i.declineText+"</span>"),u.attr("class","btn-large "+i.declineColor),u.unbind(),u.bind("click",function(){return c(u)?!1:(r(i.onDecline),!1)}),$('[data-modal-handle="confirmation"] div.Title').text(i.titleText),l=$("[data-modal-handle='confirmation']"),i.imageUrl==null?l.addClass("noImage"):(l.find("img.GenericModalImage").attr("src",i.imageUrl),l.removeClass("noImage")),i.allowHtmlContentInBody?$("[data-modal-handle='confirmation'] div.Message").html(i.bodyContent):$("[data-modal-handle='confirmation'] div.Message").text(i.bodyContent),$.trim(i.footerText)==""?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').hide():$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').show(),i.allowHtmlContentInFooter?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').html(i.footerText):$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').text(i.footerText),$("[data-modal-handle='confirmation']").modal(e),h=$("a.genericmodal-close"),h.unbind(),h.bind("click",function(){return r(i.onCancel),!1}),i.xToCancel||h.hide(),i.onOpenCallback()}function l(n){n.hasClass(o)?n.addClass(i):n.hasClass(a)?n.addClass(h):n.hasClass(f)&&n.addClass(s)}function c(n){return n.hasClass(s)||n.hasClass(i)||n.hasClass(h)?!0:!1}function w(){var r=$(t),i=$(n);l(r),l(i)}function d(){var u=$(t),f=$(n),r=s+" "+i+" "+h;u.removeClass(r),f.removeClass(r)}function k(){var n=$(t);n.click()}function v(){var t=$(n);t.click()}function u(n){typeof n!="undefined"?$.modal.close(n):$.modal.close()}function r(n){u(),typeof n=="function"&&n()}function y(n){if(typeof n=="function"){var t=n();if(t!=="undefined"&&t==!1)return!1}u()}console.log("instantiating .GenericConfirmation");var a="btn-primary",f="btn-neutral",o="btn-negative",h="btn-disabled-primary",s="btn-disabled-neutral",i="btn-disabled-negative",p="btn-none",t="#roblox-confirm-btn",n="#roblox-decline-btn",e={overlayClose:!0,escClose:!0,opacity:80,overlayCss:{backgroundColor:"#000"}};return{open:b,close:u,disableButtons:w,enableButtons:d,clickYes:k,clickNo:v,green:a,blue:f,gray:o,none:p}}());


}
/*
     FILE ARCHIVED ON 14:30:38 Jul 10, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:13:50 Aug 22, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 72.684 (4)
  load_resource: 59.194
  captures_list: 198.09
  exclusion.robots.policy: 0.211
  LoadShardBlock: 120.947 (3)
  exclusion.robots: 0.225
  RedisCDXSource: 46.623
  PetaboxLoader3.resolve: 45.428
  esindex: 0.014
  CDXLines.iter: 25.565 (3)
*/