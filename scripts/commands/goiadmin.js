module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100070013974971") {
    var aid = ["100070013974971"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["মেনশন_দিস না _সাকিব বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," মেনশন দিলে চুম্মাইয়া ঠোটের কালার চেঞ্জ করে দিমু 💋😾😾🔨","এতো ইমোশানাল কথা বলো তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে আমার 😭😭","সাকিব বস এখন ব্যাস্ত যা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মেনশন নাহ দিইয়ে সিঙ্গেল সাকিব রে একটা গফ দে 😒 😏","মেনশন না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে","মেনশন দিস না বাঁলপাঁক্না সাকিব প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
