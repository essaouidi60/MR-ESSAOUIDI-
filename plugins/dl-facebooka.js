import fg from 'api-dylux';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `🎯 Please Send The Link Of A Facebook Video\n\n📌 Example :\n*${usedPrefix + command}* Link Here`;
  }

  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    throw '🤌🏻ارسل رابط تاع فيديو';
  }

  m.react(rwait);

  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
⊱ ─── { *Essaouidi FBDL* } ─── ⊰
↳ *مـࢪحبا 🌟*\n ↳ *📽️ .هنا هو الفيديو الفيسبوك الخاص بك*\n\n ↳ *لا تنسى متابعتي على انستغرام لتتعرف على ما هو جديد \ninstagram.com/essaouidi_yassine*
⊱ ────── {⋆🇲🇦⋆} ────── ⊰`;

    const response = await fetch(result.videoUrl);
    const arrayBuffer = await response.arrayBuffer();
    const videoBuffer = Buffer.from(arrayBuffer);

    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
    console.log(error);
    m.reply('⚠️ An error occurred while processing the request. Please try again later.');
  }
};

handler.help = ['facebook <url>'];
handler.tags = ['dl'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;


export default handler;
