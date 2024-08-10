/*

MIT License

Copyright (c) 2024 anggazyy (selaku pembuat script ini)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



*/
require("./all/module.js")
const { color } = require('./all/function')
const version = require("@whiskeysockets/baileys/package.json").version
//========== Setting Owner ==========//
global.owner = "254794451471"
global.namaowner = "Mwas"
global.namaowner2 = "Michu"

//======== Setting Bot & Link ========//
global.namabot = "Devil 4.0 Gen 1" 
global.botname = "Devil 4.0 Gen 1"
global.namabot2 = "Devil 4.0 Gen 1"
global.version = "Devil 4.0 Gen 1"
global.foother = "Devil 4.0 Gen 1 © Anggazyy"
global.idsaluran = "120363301756685796@newsletter"
global.linkgc = ''
global.linksaluran = ""
global.linkyt = ''
global.linktele = "https://t.me/Michubugz"
global.packname = "Created By Devil 4.0 Gen 1"
global.author = "Mwas"
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = true
global.autoreadsw = true
global.owneroff = false
global.antibug = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========== Setting Foto ===========//

//========== Setting Panell & Gausah isi kalo gadaa ==========//
//========== Setting Panell & Gausah isi kalo gadaa ==========//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""

global.fake = {
	anonim: 'https://telegra.ph/file/f63511c4304de908fa5b0.jpg',
	thumbnailUrl: 'https://telegra.ph/file/f6dbc013d934dc7e52405.jpg',
	thumbnail: fs.readFileSync('./media/anggazyy.jpg'),
	docs: fs.readFileSync('./media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
    ch: 'https://whatsapp.com/channel/0029VakZidSIXnlmikWIgS1z',
	gh: 'https://whatsapp.com/channel/0029VakZidSIXnlmikWIgS1z',
	
}
//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "082193222977"
global.gopay = false
global.ovo = false
global.qris = fs.readFileSync("./media/qris.jpg")
                             
//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "Nop2RDsy0Uyh1WHE17CC59aEhen-ZA61MWNrAqVl"
global.tld1 = "digitalserver.biz.id"

//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error! terjadi kesalahan.",
"done": "Donee, ~ Oke desuuu.", 
"wait": "Please wait a minute bot being proses.", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"anggazyyprem": "*~ Devil System:*\n\n- Khusus user premium sayang.",
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*Khusus owner sayang*", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})