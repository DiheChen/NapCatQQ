(function(_0x27c2f6,_0x11d2ca){const _0x1836bf=_0x5db4,_0x10cbe0=_0x27c2f6();while(!![]){try{const _0x731586=-parseInt(_0x1836bf(0x19b))/0x1+parseInt(_0x1836bf(0x19e))/0x2*(parseInt(_0x1836bf(0x19f))/0x3)+-parseInt(_0x1836bf(0x1af))/0x4+parseInt(_0x1836bf(0x1a5))/0x5*(parseInt(_0x1836bf(0x1a0))/0x6)+parseInt(_0x1836bf(0x1aa))/0x7+parseInt(_0x1836bf(0x1a6))/0x8*(parseInt(_0x1836bf(0x1a9))/0x9)+-parseInt(_0x1836bf(0x1a3))/0xa*(parseInt(_0x1836bf(0x1ae))/0xb);if(_0x731586===_0x11d2ca)break;else _0x10cbe0['push'](_0x10cbe0['shift']());}catch(_0x258254){_0x10cbe0['push'](_0x10cbe0['shift']());}}}(_0x3cbb,0x7e5d6));import{isNumeric}from'@/common/utils/helper';import{NTQQGroupApi}from'@/core/apis';function _0x3cbb(){const _0xe5d8fc=['3791709jQAmBt','4842915aHTYqb','toString','forEach','VXcxB','11pIVxfi','960136YhEOsB','get','mfDiD','delete','from','179856pKxjNF','set','length','18oHuPLS','232590lpKZBs','6cZtPjX','getGroupMembers','getGroups','12063530CcnjtC','values','1664585SBfDsv','8ljlqHt','find','uin'];_0x3cbb=function(){return _0xe5d8fc;};return _0x3cbb();}export const Credentials={'Skey':'','CreatTime':0x0,'Cookies':new Map(),'ClientKey':'','KeyIndex':'','PskeyData':new Map(),'PskeyTime':new Map()};export const WebGroupData={'GroupData':new Map(),'GroupTime':new Map()};export const selfInfo={'uid':'','uin':'','nick':'','online':!![]};export const groups=new Map();export function deleteGroup(_0x322074){const _0x415f93=_0x5db4;groups[_0x415f93(0x199)](_0x322074),groupMembers[_0x415f93(0x199)](_0x322074);}export const groupMembers=new Map();export const friends=new Map();export const groupNotifies={};export async function getFriend(_0x473e79){const _0x53d80f=_0x5db4;_0x473e79=_0x473e79[_0x53d80f(0x1ab)]();if(isNumeric(_0x473e79)){const _0x1431c4=Array[_0x53d80f(0x19a)](friends[_0x53d80f(0x1a4)]());return _0x1431c4[_0x53d80f(0x1a7)](_0x4ebe66=>_0x4ebe66['uin']===_0x473e79);}else return friends[_0x53d80f(0x197)](_0x473e79);}export async function getGroup(_0x517675){const _0x35805a=_0x5db4;let _0x107e87=groups['get'](_0x517675[_0x35805a(0x1ab)]());if(!_0x107e87)try{const _0x55c042=await NTQQGroupApi[_0x35805a(0x1a2)]();_0x55c042[_0x35805a(0x19d)]&&_0x55c042[_0x35805a(0x1ac)](_0x6a1203=>{groups['set'](_0x6a1203['groupCode'],_0x6a1203);});}catch(_0x3c74a8){return undefined;}return _0x107e87=groups['get'](_0x517675[_0x35805a(0x1ab)]()),_0x107e87;}export async function getGroupMember(_0x1c4b88,_0x1ae479){const _0x148d29=_0x5db4,_0xcb04f6={'mfDiD':function(_0x34d378,_0x2bbc53){return _0x34d378(_0x2bbc53);},'VXcxB':function(_0x2452b3){return _0x2452b3();}};_0x1c4b88=_0x1c4b88[_0x148d29(0x1ab)](),_0x1ae479=_0x1ae479['toString']();let _0x42f835=groupMembers['get'](_0x1c4b88);if(!_0x42f835)try{_0x42f835=await NTQQGroupApi['getGroupMembers'](_0x1c4b88),groupMembers[_0x148d29(0x19c)](_0x1c4b88,_0x42f835);}catch(_0x774301){return null;}const _0x1f381e=()=>{const _0x24b812=_0x148d29;let _0x53e789=undefined;return _0xcb04f6[_0x24b812(0x198)](isNumeric,_0x1ae479)?_0x53e789=Array[_0x24b812(0x19a)](_0x42f835[_0x24b812(0x1a4)]())[_0x24b812(0x1a7)](_0x353f12=>_0x353f12[_0x24b812(0x1a8)]===_0x1ae479):_0x53e789=_0x42f835[_0x24b812(0x197)](_0x1ae479),_0x53e789;};let _0x10cc4a=_0xcb04f6['VXcxB'](_0x1f381e);return!_0x10cc4a&&(_0x42f835=await NTQQGroupApi[_0x148d29(0x1a1)](_0x1c4b88),_0x10cc4a=_0xcb04f6[_0x148d29(0x1ad)](_0x1f381e)),_0x10cc4a;}function _0x5db4(_0x66df28,_0x127c58){const _0x3cbb10=_0x3cbb();return _0x5db4=function(_0x5db406,_0x3ef3b8){_0x5db406=_0x5db406-0x197;let _0xf2eaf3=_0x3cbb10[_0x5db406];return _0xf2eaf3;},_0x5db4(_0x66df28,_0x127c58);}export const tempGroupCodeMap={};export const rawFriends=[];export const stat={'packet_received':0x0,'packet_sent':0x0,'message_received':0x0,'message_sent':0x0,'last_message_time':0x0,'disconnect_times':0x0,'lost_times':0x0,'packet_lost':0x0};