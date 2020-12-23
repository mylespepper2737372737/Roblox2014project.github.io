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

window.Zendesk.NS("Ticket.ViewingStatus",window.jQuery,window.Zendesk,window.currentUser,function($,Zendesk,currentUser){var pollPeriods=[15*1000,30*1000,45*1000,60*1000],pollPeriodIndex=0,initialized=false,tickedId=0,userCache={},lastUpdated=false,log=(window.Minilog?window.Minilog("collision"):function(){});function loadUser(id,done){(function(){var attempts=0;function get(){if(++attempts>3){return}log("GET /api/v1/users/"+id+".json, attempt "+attempts);$.ajax("/api/v1/users/"+id+".json",{type:"GET",dataType:"json",cache:false,success:function(data,textStatus,XMLHttpRequest){log("GET /api/v1/users/"+id+".json success",data,textStatus);done(data)},error:function(jq,textStatus,errorThrown){if(attempts<3){log("Retrying GET /api/v1/users/"+id+".json due to #api_error",jq.status,jq.statusText,jq.getAllResponseHeaders&&jq.getAllResponseHeaders(),jq.responseText)}get()}})}get()}())}function loadUsers(ids,done){var results=[],len=ids.length,count=0;for(var i=0;i<len;i++){(function(index,id){if(userCache[id]){results[index]=userCache[id];count++;if(count==len){done(results)}return}loadUser(id,function(data){results[index]=userCache[id]=data;count++;if(count==len){done(results)}})})(i,ids[i])}}function Banner(){}Banner.message="";Banner.type="";Banner.banner=false;Banner.updateViewers=function(viewerObj){var viewers=[];var currentUserId=parseInt(Zendesk.currentUser.id,10);for(var userId in viewerObj){if(userId==currentUserId){continue}if(!viewerObj.hasOwnProperty(userId)){continue}viewers.push(userId)}if(viewers.length===0){if(Banner.type!=="urgent"){Banner._hide()}return}Banner.type="normal";loadUsers(viewers.slice(0,3),function(userData){var users=[],len=userData.length;for(var i=0;i<len;i++){userData[i]&&userData[i].name&&users.push(userData[i].name)}if(users.length===0){log("#api_error no responses contained names",users);return}switch(users.length){case 1:Banner.message=I18n.t("txt.ticket.collision.other_viewers.one",{person:users[0]});break;case 2:Banner.message=users.join(" and ")+" are also viewing this ticket.";break;default:Banner.message=users.slice(0,2).join(", ")+", and "+(viewers.length-2)+(viewers.length>3?" others":" other")+" are also viewing this ticket."}Banner._render()})};Banner.updateTicket=function(){Banner.type="urgent";Banner.message=I18n.t("txt.ticket.collision.updated");Banner._render();Banner.banner.reload().show()};Banner._hide=function(){if(!Banner.banner){Banner.banner=Zendesk.Banner.create()}if(Banner.banner.visible()){Banner.type="";Banner.banner.disappear()}};Banner._render=function(){if(!Banner.banner){Banner.banner=Zendesk.Banner.create()}Banner.banner.setContent(Banner.message).removeClass("normal urgent").addClass(Banner.type).reload().hide();Banner.banner.appear()};function ViewingStatus(ticketId){var self=this;this.viewers={};if(!initialized){initialized=true;RadarClient.initialize(function(){RadarClient.alloc("collision").once("ready",function(){RadarClient.presence("ticket/"+ticketId).set("online");RadarClient.presence("ticket/"+ticketId).on(function(message){self.updatePresence(message)}).sync();RadarClient.status("ticket/"+ticketId).on(function(message){self.updateTime(message)}).subscribe()})})}}ViewingStatus.prototype.updatePresence=function(message){if(message.op!="offline"&&message.op!="online"){return}var nowOnline=message.op=="online",isChanged=false;for(var userId in message.value){if(!message.value.hasOwnProperty(userId)){continue}userId=parseInt(userId,10);var wasOnline=!!(this.viewers[userId]);if(nowOnline&&!wasOnline){this.viewers[userId]=true;isChanged=true}else{if(!nowOnline&&wasOnline){delete this.viewers[userId];isChanged=true}}}if(isChanged&&Banner.type!="urgent"){Banner.updateViewers(this.viewers)}};ViewingStatus.prototype.updateTime=function(message){var data=JSON.parse(message.value);if(message.key=="updated"&&data.updated_at!=lastUpdated&&data.updated_by!=Zendesk.currentUser.id){lastUpdated=data.updated_at;Banner.updateTicket()}};$(function(){if($("#show_agent_collision_for_ticket").length==1){window.viewStatus=new ViewingStatus(window.ticket_id)}})});

}
/*
     FILE ARCHIVED ON 16:46:15 May 15, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:00:22 Aug 06, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.216
  esindex: 0.016
  exclusion.robots: 0.233
  LoadShardBlock: 2376.085 (3)
  PetaboxLoader3.resolve: 478.894 (2)
  captures_list: 2447.984
  load_resource: 637.028
  RedisCDXSource: 25.81
  PetaboxLoader3.datanode: 2356.941 (5)
  CDXLines.iter: 22.707 (3)
*/