const _0x3f57e7=_0x381e;(function(_0x299626,_0x448260){const _0x426500=_0x381e,_0x357321=_0x299626();while(!![]){try{const _0x37d127=parseInt(_0x426500(0xb4))/0x1*(-parseInt(_0x426500(0xa2))/0x2)+parseInt(_0x426500(0xa5))/0x3*(parseInt(_0x426500(0xa6))/0x4)+-parseInt(_0x426500(0xad))/0x5*(-parseInt(_0x426500(0xae))/0x6)+parseInt(_0x426500(0xab))/0x7*(-parseInt(_0x426500(0xa0))/0x8)+parseInt(_0x426500(0xa3))/0x9*(parseInt(_0x426500(0xa7))/0xa)+-parseInt(_0x426500(0x9f))/0xb*(parseInt(_0x426500(0xa4))/0xc)+parseInt(_0x426500(0xb1))/0xd;if(_0x37d127===_0x448260)break;else _0x357321['push'](_0x357321['shift']());}catch(_0x2c384f){_0x357321['push'](_0x357321['shift']());}}}(_0x340d,0x6d592));function _0x381e(_0x57fdf7,_0x50b76d){const _0x340dc6=_0x340d();return _0x381e=function(_0x381ed7,_0x31cfc6){_0x381ed7=_0x381ed7-0x9f;let _0x5ea12f=_0x340dc6[_0x381ed7];return _0x5ea12f;},_0x381e(_0x57fdf7,_0x50b76d);}import{logError}from'@/common/utils/log';function _0x340d(){const _0x42e80e=['3626524eCEkyU','7112oNtotr','http://napcat-sign.wumiao.wang:2082/rkey','10084fDxrZj','1558926aodNiA','24ZGJfxn','12xqpzLr','324788qeokwS','50cJvsJe','rkeyData','serverUrl','isExpired','5635nlqrAD','获取rkey失败','20NFcgow','1180896OAoWFG','HttpGetJson','Dnvjo','4405661yVqdXD','OCNHG','expired_time','98XksGQB','getTime','GET','iXkdz','ZTxGs'];_0x340d=function(){return _0x42e80e;};return _0x340d();}import{RequestUtil}from'@/common/utils/request';class RkeyManager{[_0x3f57e7(0xa9)]='';['rkeyData']={'group_rkey':'','private_rkey':'','expired_time':0x0};constructor(_0x484601){this['serverUrl']=_0x484601;}async['getRkey'](){const _0xd5cecb=_0x3f57e7,_0x5a766d={'OCNHG':_0xd5cecb(0xac)};if(this[_0xd5cecb(0xaa)]())try{await this['refreshRkey']();}catch(_0x58cac8){logError(_0x5a766d[_0xd5cecb(0xb2)],_0x58cac8);}return this[_0xd5cecb(0xa8)];}[_0x3f57e7(0xaa)](){const _0x4e1edc=_0x3f57e7,_0x11b9bb={'ZTxGs':function(_0x39498c,_0x1db114){return _0x39498c/_0x1db114;},'Dnvjo':function(_0x1fcddb,_0x54a911){return _0x1fcddb>_0x54a911;}},_0x20d1d1=_0x11b9bb[_0x4e1edc(0xb8)](new Date()[_0x4e1edc(0xb5)](),0x3e8);return _0x11b9bb[_0x4e1edc(0xb0)](_0x20d1d1,this[_0x4e1edc(0xa8)][_0x4e1edc(0xb3)]);}async['refreshRkey'](){const _0x3eda00=_0x3f57e7,_0x14ee72={'iXkdz':_0x3eda00(0xb6)};this[_0x3eda00(0xa8)]=await RequestUtil[_0x3eda00(0xaf)](this['serverUrl'],_0x14ee72[_0x3eda00(0xb7)]);}}export const rkeyManager=new RkeyManager(_0x3f57e7(0xa1));