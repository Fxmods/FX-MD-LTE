const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

// Other
global.owner = ['18138999999']
global.premium = ['1813899-9999']
global.botname = '🚀 ᭄𝐹𝑋 𝐵𝑜𝑡'
global.ownername = '✨ 𝘐𝘮 𝘍𝘦𝘭𝘪𝘹 ✨'
global.packname = '✨ 𝘐𝘮 𝘍𝘦𝘭𝘪𝘹 ✨'
global.author = 'FX - BOT'
global.watermark = "Felixxxx" //ur watermark
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
success: '✓ Success',
admin: '            ｢ *NO ERES ADMINISTRADOR* ｣\n\n_Lo siento, para poder utilizar este comando necesitas ser un administrador del grupo._',
botAdmin: '     ｢ *EL BOT NO ES UN ADMINISTRADOR* ｣\n\n_Lo siento, para poder utilizar este comando el bot necesita ser un administrador del grupo._',
owner: '                        ｢ *SOLO DUEÑOS* ｣\n\n_Lo siento, este comando solo esta disponible para los desarrolladores de FX - BOT._',
group: '                           ｢ *SOLO GRUPOS* ｣\n\n_Lo siento, este comando solo esta disponible para grupos._',
private: '                     ｢ *SOLO EN PRIVADO* ｣\n\n_Lo siento, este comando solo esta disponible en chats privados._',
bot: '                               ｢ *S E L F* ｣\n\n_Lo siento, este comando solo esta disponible desde el número del bot._',
    wait: '             ｢ *ESPERA UN MOMENTO* ｣\n\n_Espere un momento, procesando su solicitud._',
endLimit: 'Su límite diario ha expirado, el límite se restablecerá cada 12 horas',
}
global.limitawal = {
premium: "Infinity",
free: 20
}
global.thumb = fs.readFileSync('./media/thumb.jpg')
global.visoka = { url: 'https://telegra.ph/file/33c0b09ce1f21c91f8f90.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
