module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞        : 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐒𝐚𝐤𝐢𝐛
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐒 𝐀 𝐊 𝐈 𝐁 ツ
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐔𝐥𝐥𝐚𝐩𝐚𝐫𝐚, 𝐒𝐢𝐫𝐚𝐣𝐠𝐚𝐧𝐣, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡.
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐔𝐥𝐥𝐚𝐩𝐚𝐫𝐚, 𝐒𝐢𝐫𝐚𝐣𝐠𝐚𝐧𝐣, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡.
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏𝟖+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : 𝐭𝐡𝐞𝐭𝐨𝐱𝐢𝐜𝐩𝐥𝐚𝐲𝐞𝐫𝟒𝟑𝟎@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : 𝐡𝐭𝐭𝐩𝐬://𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝟐𝐧𝐝𝐉𝐨𝐡𝐧𝐧𝐲𝐒𝐢𝐧𝐬
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: 𝐡𝐭𝐭𝐩𝐬://𝐰𝐚.𝐦𝐞/+𝟖𝟖𝟎𝟏𝟕𝟔𝟓𝟎𝟓𝟏𝟐𝟏𝟗
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : 𝐡𝐭𝐭𝐩𝐬://𝐭.𝐦𝐞/𝐒𝐞𝐜𝐨𝐧𝐝𝐉𝐨𝐡𝐧𝐧𝐲𝐒𝐢𝐧𝐬
𝐖𝐞𝐛𝐬𝐢𝐭𝐞   : www.sakibbai.unaux.com`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/466409816_858581113152347_6085690641774945827_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG0lFTTvHECB62CvVF2T9YHf79hK3hWSIF_v2EreFZIgf1xiahOhiymuqb48dyZ012DAFoKsRSfRyORnVul9dva&_nc_ohc=AxPEQkOeNAUQ7kNvgFRm8PG&_nc_zt=23&_nc_ht=scontent.fdac20-1.fna&_nc_gid=AtCdymeYz6ElaGhGNvejPqg&oh=00_AYA8TMzxIt9f7apzuQU6noZnQ4n-sOh76di_n0fsC0P-DA&oe=674F6674`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
