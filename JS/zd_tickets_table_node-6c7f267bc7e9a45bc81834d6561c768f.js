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

Zendesk.NS("Tickets.Table",this.jQuery,function($){var self=this,userCache={},log=(window.Minilog?window.Minilog("collision"):function(){});var viewingStatuses={};function keyFor($tr){return $tr.attr("data-zd-account-id")+","+$tr.attr("data-zd-ticket-nice-id")}function hideTRTooltipOnShowMainTooltip(table){table.find("td.description").hover(function(){$(this).closest("tr[title]").each(function(i,tr){$(tr).attr("data-title",$(tr).attr("title")).removeAttr("title")})},function(){$(this).closest("tr[data-title]").each(function(i,tr){$(tr).attr("title",$(tr).attr("data-title")).removeAttr("data-title")})})}function applyViewStatusToTRs(table){table.find("tbody tr[data-zd-ticket-nice-id][data-zd-account-id]").each(function(){var $tr=$(this);var key=keyFor($tr);var message=viewingStatuses[key];if(message){$tr.find("td:first-child").addClass("beingViewed");$tr.attr("title",message)}else{$tr.find("td:first-child").removeClass("beingViewed");$tr.attr("title",null)}})}function loadUser(id,done){(function(){var attempts=0;function get(){if(++attempts>3){return}log("GET /api/v1/users/"+id+".json, attempt "+attempts);$.ajax("/api/v1/users/"+id+".json",{type:"GET",dataType:"json",cache:false,success:function(data,textStatus,XMLHttpRequest){log("GET /api/v1/users/"+id+".json success",data,textStatus);done(data)},error:function(jq,textStatus,errorThrown){if(attempts<3){log("Retrying GET /api/v1/users/"+id+".json due to #api_error",jq.status,jq.statusText,jq.getAllResponseHeaders&&jq.getAllResponseHeaders(),jq.responseText)}get()}})}get()}())}function loadUsers(ids,done){var results=[],len=ids.length,count=0;if(len<1){done(results)}for(var i=0;i<len;i++){(function(index,id){if(userCache[id]){results[index]=userCache[id];count++;if(count==len){done(results)}return}loadUser(id,function(data){results[index]=userCache[id]=data;count++;if(count==len){done(results)}})}(i,ids[i]))}}this.getAndApplyViewingStatuses=function(ticket_ids){this.getAndApplyViewingStatusesWithRadarClient(ticket_ids)};this.applyViewingStatuses=function(){var table=$("table.tickets");applyViewStatusToTRs(table);hideTRTooltipOnShowMainTooltip(table)};var viewersWithRadarClient={};this.getViewerIdsForTicket=function(message,ticketId){var nowOnline=message.op==="online";var nowOffline=message.op==="offline";var isChanged=false;if(!nowOnline&&!nowOffline){return}var viewersForTicket=viewersWithRadarClient[ticketId];if(!viewersForTicket){viewersForTicket=viewersWithRadarClient[ticketId]={}}_.keys(message.value).forEach(function(userId){if(userId==Zendesk.currentUser.id){return}var wasOnline=!!(viewersForTicket[userId]);if(nowOnline!=wasOnline){delete viewersForTicket[userId];if(nowOnline){viewersForTicket[userId]=nowOnline}isChanged=true}});if(isChanged){return _.keys(viewersForTicket)}};this.updateViewingStatusesForTicket=function(viewerIdsForTicket,ticketId){var self=this;loadUsers(viewerIdsForTicket,function(){var key=""+currentAccount.id+","+ticketId,names=[];viewerIdsForTicket.forEach(function(userId){if(userId==Zendesk.currentUser.id){return}userCache[userId]&&userCache[userId].name&&names.push(userCache[userId].name)});if(names.length==1){viewingStatuses[key]=names[0]+" is viewing this ticket."}else{if(names.length>1){viewingStatuses[key]=""+names.length+" agents are viewing this ticket."}else{delete viewingStatuses[key]}}self.applyViewingStatuses()})};this.applyViewingStatusesWithRadarClient=function(message,ticketId){var viewerIdsForTicket=self.getViewerIdsForTicket(message,ticketId);if(!viewerIdsForTicket){return}self.updateViewingStatusesForTicket(viewerIdsForTicket,ticketId)};this.getAndApplyViewingStatusesWithRadarClient=function(ticket_ids){var self=this;RadarClient.initialize(function(){RadarClient.alloc("collision",function(){for(var i=ticket_ids.length-1;i>=0;i--){var ticketId=ticket_ids[i];(function(ticketId){RadarClient.presence("ticket/"+ticketId).on(function(message){self.applyViewingStatusesWithRadarClient(message,ticketId)}).sync()}(ticketId))}})})};this.linkifyRows=function(table){table.find("tbody tr").each(function(){var ticketHref=$(this).attr("data-href");if(!ticketHref||!ticketHref.length){return}$(this).click(function(event){if(!event){return}var inLotus=Zendesk.embeddedInLotusAdmin&&Zendesk.embeddedInLotusAdmin();if(inLotus||$(event.target).attr("href")===ticketHref){return}if(event.ctrlKey||event.metaKey){window.open(ticketHref,"_blank").blur();window.focus()}else{window.location.href=ticketHref}})})};this.applyViewStatusToTooltip=function($trOrChild){$trOrChild=$($trOrChild);var tooltipID=$trOrChild.attr("aria-describedby");if(!tooltipID){return}var $tooltip=$("#"+tooltipID);if($tooltip.length===0){return}if($tooltip.find(".otherViewers").length>0){return}var $tr=$trOrChild.closest("tr[data-zd-account-id][data-zd-ticket-nice-id]");if($tr.length===0){return}var key=keyFor($tr);var message=viewingStatuses[key];if(!message){return}$tooltip.find(".title").prepend('<span class="otherViewers">'+message+"</span>")}});

}
/*
     FILE ARCHIVED ON 16:46:15 May 15, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:00:17 Aug 06, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 42.959
  CDXLines.iter: 22.894 (3)
  exclusion.robots: 0.201
  PetaboxLoader3.resolve: 194.876 (2)
  captures_list: 426.214
  exclusion.robots.policy: 0.188
  load_resource: 2313.632
  esindex: 0.011
  LoadShardBlock: 343.354 (3)
  PetaboxLoader3.datanode: 2345.217 (5)
*/