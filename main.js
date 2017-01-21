'use strict';
/*
Automated Messages
*/

console.log('[Automated-Messages] Online!');

const chat = jcmp.events.Call('get_chat')[0];

var msg = [

    /*To add a new message just copy this line:
	{ message: 'Your message here', color: new RGB(0,255,0) },
	You can get color codes here: http://www.colorpicker.com/ 	*/
	{ message: "N'hésitez à rejoindre notre serveur Discord : http://raildecake.fr/discord", color: new RGB(255, 140, 0) },
	{ message: "Un problème ? Des remarques laissez un message sur notre discord  http://raildecake.fr/discord" , color: new RGB(255, 140, 0) }
	{ message: "Marre de te battre ? Utilise /passive pour retrouver la paix" , color: new RGB(255, 140, 0) }
	{ message: "Besoin de vitesse ? Active le boost dans le menu d'achat" , color: new RGB(255, 140, 0) }
];



//By default it'll pick a random one every 5 minutes!
var minutes = 5
var the_interval = minutes * 60 * 1000;
setInterval(function() {
	var rand = parseInt(Math.random()*msg.length);

	chat.broadcast(msg[rand].message, msg[rand].color);

}, the_interval);
