jQuery(document).ready(function($){var tiltSettings=[{movement:{mainWrapper:{translation:{x:1,y:1,z:1},rotation:{x:0,y:-1,z:0},reverseAnimation:{duration:200,easing:'Power4.easeOut'}},imgWrapper:{translation:{x:3,y:3,z:[0,10]},rotation:{x:0,y:0,z:-2},reverseAnimation:{duration:2000,easing:'Expo.easeOut'}},contentWrapper:{rotation:{x:0,y:0,z:1},reverseAnimation:{duration:200,easing:'Power4.easeOut'}},headerWrapper:{rotation:{x:0,y:0,z:1},reverseAnimation:{duration:200,easing:'Power4.easeOut'}},cardWrap:{rotation:{x:0,y:0,z:1},reverseAnimation:{duration:200,easing:'Power4.easeOut'}},overlay:{translation:{x:10,y:-10,z:0},rotation:{x:0,y:0,z:2},reverseAnimation:{duration:2000,easing:'Expo.easeOut'}},shine:{translation:{x:100,y:100,z:0},reverseAnimation:{duration:200,easing:'Power4.easeOut'}}}}];function init(){[].slice.call(document.querySelectorAll('.card-large a, .card-body-wrapper, .article_card, .stories-card, .article_card a, .card-extra-large a, .patron_card, .writers_card a')).forEach(function(el,pos){var newTiltFx=new TiltFx(el,tiltSettings);});}
init();});