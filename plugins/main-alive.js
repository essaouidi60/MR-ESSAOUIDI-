let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]

let caption = `
╭───[_Essaouidi_]───╮
│╭────────────────────
┴│👋 Hey there, ${name}!
⬡│⚛ I'm _Essaouidi_ \n⬡│ I'm up and running! 🚀
│╰────────────────────
┠───[ BOT INFO ]────╮
│╭────────────────────
┴│       _Essaouidi_
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 Essaouidi Yassine 
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/212648753294
⬡│
⬡│🔗 *développeur*
⬡│
⬡│👨‍ 1- ➚ ிEssaouidi ⎙ ✓
⬡│📱 wa.me/212618578927
⬡│
⬡│👨‍ 2- ➚ ிEssaouidi ⎙ ✓
⬡│📎 instagram.com/essaouidi_yassine
⬡│
⬡│Special Thanks To All
⬡│ Contributors❤
│╰────────────────────
┠───[ HOW TO USE ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .menu \n⬡│- Shows a list\n⬡│ of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube\n⬡│ video or audio.
⬡│🔸 .sticker \n⬡│- Converts an \n⬡│image to a sticker
┬│🔸 .translate \n⬡│- Translates text \n⬡│to other lang
│╰──────────────
╰────────═┅═───────
*Thank you for choosing Essaouidi Yassine 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['alive', 'hi'] 

export default handler
