const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "IMG-20211002-WA0000~2.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is Joel Mathew*
*Creator number : https://wa.me/917034526003*
*Our channel video : https://youtube.com/channel/UC_gb_2HnOdeY0c1h6wwMyQw*
*Githublink (Setup)  :    https://github.com/JOEL1018*
*Audio commads :   AUD-20211004-WA0001.mp3*
*Sticker commads : AUD-20211004-WA0001.mp3*
`}) 

}));
