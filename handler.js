/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./settings/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
 
const { aiovideodl } = require('./lib/scraper.js')
const thiccysapi = require('textmaker-thiccy')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let ban = JSON.parse(fs.readFileSync('./src/ban.json'))
let banUser = JSON.parse(fs.readFileSync('./src/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./src/banChat.json'));
let autosticker = JSON.parse(fs.readFileSync('./src/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./src/autostickpc.json'))
module.exports = kagura = async (kagura, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const time = moment(Date.now()).tz('America/Mexico_City').locale('id').format('HH:mm')
        const salam = moment(Date.now()).tz('America/Mexico_City').locale('id').format('HH:mm')
        const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
        const botNumber = await kagura.decodeJid(kagura.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = m.chat
        // Group
        const groupMetadata = m.isGroup ? await kagura.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const isAutoStick = _autostick.includes(from)
	    const isAutoSticker = m.isGroup ? autosticker.includes(from) : true
        const isBan = banUser.includes(m.sender)
        const isBanChat = m.isGroup ? banchat.includes(from) : false
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false 
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = true
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: true,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!kagura.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
       
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid, // Change ID
"thumbnail": img, // Change the Image
"itemCount": itcount, // Change the Item Count
"status": "INQUIRY", // Don't Replace
"surface": "CATALOG", // Don't Replace
"orderTitle": title, // Change the title
"message": text, // Change Message
"sellerJid": sellers, // Change the seller
"token": tokens, // Change the token
"totalAmount1000": ammount, // Change the Total Amount
"totalCurrencyCode": "IDR", // Up to you
}
}), { userJid: jid })
kagura.relayMessage(jid, order.message, { messageId: order.key.id})
}

	if (m.mtype === 'groupInviteMessage') {
teks = '• *No se permite agregar al bot a grupos sin permiso del desarrollador.*\n\n```Comuniquese con el desarrollador con el comando #owner```'
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./media/thumb.jpg'), `${watermark}`, `${botname}`, "916909137213@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await kagura.setStatus(`${kagura.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await kagura.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await kagura.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
	  //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await kagura.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await kagura.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nSe te ha detectado enviando un enlace de grupo, lo sentimos, serás expulsado !`)
        if (!isBotAdmins) return m.reply(`Necesito ser admin.`)
        let gclink = (`https://chat.whatsapp.com/`+await kagura.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`El enlace es de este grupo, no seras eliminado.`)
        if (isAdmins) return m.reply(`Eres un administrador, no seras eliminado.`)
        if (isCreator) return m.reply(`No puedo eliminar a mi creador.`)
        kagura.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kagura.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kagura.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kagura.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            kagura.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kagura.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kagura.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*¡Respuesta incorrecta!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*¡Respuesta incorrecta!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kagura.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kagura.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*¡Respuesta incorrecta!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kagura.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kagura.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*¡Respuesta incorrecta!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kagura.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, kagura.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*¡Respuesta incorrecta!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kagura.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kagura.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*¡Respuesta incorrecta!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kagura.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kagura.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*¡Respuesta incorrecta!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kagura.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kagura.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*¡Respuesta incorrecta!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `*ID de la sala : ${room.id}*

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await kagura.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await kagura.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    kagura.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    kagura.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) kagura.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) kagura.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) kagura.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    kagura.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) kagura.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) kagura.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    kagura.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan Motivo ' + reason : 'tanpa Motivo'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
	 
	
        switch(command) {
        	
	case 'kick': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kagura.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kagura.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kagura.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kagura.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break 
	
            case 'tagall': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `▢ *Grupo : ${groupName}*
▢ *Miembros : ${groupMetadata.participants.length}*
▢ *Mensaje : ${q ? q : 'Undefined'}*\n\n`
                for (let mem of participants) {
                teks += `▢ @${mem.id.split('@')[0]}\n`
                }
                kagura.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break 
                
               case 'group': case 'grupo': case 'grup': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await kagura.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`𝘎𝘳𝘶𝘱𝘰 𝘤𝘦𝘳𝘳𝘢𝘥𝘰 𝘤𝘰𝘯 𝘦𝘹𝘪𝘵𝘰.`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await kagura.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`𝘎𝘳𝘶𝘱𝘰 𝘢𝘣𝘪𝘦𝘳𝘵𝘰 𝘤𝘰𝘯 𝘦𝘹𝘪𝘵𝘰.`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: '𝘈𝘣𝘳𝘪𝘳 𝘎𝘳𝘶𝘱𝘰' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: '𝘊𝘦𝘳𝘳𝘢𝘳 𝘎𝘳𝘶𝘱𝘰' }, type: 1 }
                    ]
                    await kagura.sendButtonText(m.chat, buttons, `¿Desea abrir el grupo para que todos los participantes puedan hablar?`, kagura.user.name, m)

             }
            }
            break

            case 'antilink': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`¡Actualmente activo!`)
                db.data.chats[m.chat].antilink = true
                m.reply(`¡El Anti-Enlace ha sido habilitado en este grupo!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`¡Actualmente activo!`)
                db.data.chats[m.chat].antilink = false
                m.reply(`¡El Anti-Enlace ha sido deshabilitado en este grupo!`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: '𝘏𝘢𝘣𝘪𝘭𝘪𝘵𝘢𝘳 𝘈𝘯𝘵𝘪-𝘌𝘯𝘭𝘢𝘤𝘦' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: '𝘋𝘦𝘴𝘩𝘢𝘣𝘪𝘭𝘪𝘵𝘢𝘳 𝘈𝘯𝘵𝘪-𝘌𝘯𝘭𝘢𝘤𝘦' }, type: 1 }
                    ]
                    await kagura.sendButtonText(m.chat, buttons, `El Anti-Enlace eliminara a todos los miembros del grupo que envien cualquier tipo de enlace.\n\nEsto excluye a los administradores del grupo.`, kagura.user.name, m)
                }
             }
             break 

         case 'enlace': case 'linkgroup': case 'linkgc': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
let response = await kagura.groupInviteCode(m.chat)
kagura.sendMessage(m.chat, {text:`Enlace del Grupo ${groupMetadata.subject} : \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
mimetype: "image/jpeg",
text: "By FX - BOT",
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `*FX - BOT*`,
"body": `Credits to Felixxx`,
"previewType": "PHOTO",
"thumbnailUrl": global.thumb,
"thumbnail": global.thumb,
"sourceUrl": "https://youtu.be/aAFlTR8wdd8"
}}}, { quoted: m, detectLink: true })
}
break 

case 'translate': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
if (!text) throw `Uso :`
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=es&kata=${text}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐 Traducir : ${text} \n📘Resultado : ${Infoo}`)
}
break 

	    case 'play': case 'ytplay': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} Anime Edit`
                let yts = require('yt-search')
let anu = await (await yts.search(text)).all[0]
                
                    zakki = `
🔎 *Busqueda* : ${text}

📌 *Titulo* : ${anu.title}
🧃 *Ext* : Search
🔑 *ID* : ${anu.videoId}
⌛ *Duracion* : ${anu.timestamp}
👁️ *Vistas* : ${anu.views}
⏲️ *Publicado* : ${anu.ago.replace('years', 'Años').replace('year', 'Año').replace('ago', 'Atras').replace('months', 'Meses').replace('month', 'Mes').replace('day', 'Dia').replace('days', 'Días').replace('weeks', 'Semanas').replace('week', 'Semana').replace('minutes', 'Minutos').replace('hours', 'Horas')}
🍭 *Autor* : ${anu.author.name}
🏷️ *Descripcion* : ${anu.description}`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   kagura.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: zakki,
                            hydratedFooterText: `Sᴜʙsᴄʀɪʙᴇ Tᴏ Fᴇʟɪxᴄʀᴀᴄᴋ`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '📺 Reproducir en YouTube',
                                    url: `${anu.url}`
                                }
                            }, {
                            	urlButton: {
                                displayText: '📌 Enlace del Canal',
                                    url: `${anu.author.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎧 Audio',
                                    id: `ytmp3 ${anu.url} 128kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥 Video',
                                    id: `ytmp4 ${anu.url}`
                                    }
                                },{quickReplyButton: {
                                    displayText: '📦 Documento',
                                    id: `maxpeso ${anu.url}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  kagura.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break

case 'maxpeso': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 99999999) return reply('El tamaño del video es demasiado grande.'+util.format(media))
                kagura.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}` }, { quoted: m });
                          }
            break

	    case 'ytmp3': case 'ytaudio': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
                let { yta } = require('./lib/y2mate')
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('Lo lamento, el archivo supera el límite.'+util.format(media))
                kagura.sendImage(m.chat, media.thumb, `📌 *Titulo* : ${media.title}\n🚀 *Tamaño* : ${media.filesizeF}\n📎 *Enlace* : ${isUrl(text)}\n🧃 *Ext* : MP3\n💸 *Calidad* : ${args[1] || '128kbps'}`, m)
                kagura.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('Lo lamento, el archivo supera el límite.'+util.format(media))
                kagura.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `📌 *Titulo* : ${media.title}\n🚀 *Tamaño* : ${media.filesizeF}\n📎 *Enlace* : ${isUrl(text)}\n🧃 *Ext* : MP4\n💸 *Calidad* : ${args[1] || '360p'}` }, { quoted: m })
            }
            break 

case 'mediafire':
if (args.length < 1) return m.reply('¿Enlace? ')
let { mediafireDl } = require('./lib/mediafireDl')
if (!args[0].includes('mediafire')) return m.reply(`Link is not valid`)
const teks1 = args.join(' ')
const baby1 = await mediafireDl(teks1)
const result4 = `
                     「 *MEDIAFIRE* 」

▢ Nombre : ${baby1[0].nama}
▢ Enlace : ${baby1[0].link}
▢ Peso : ${baby1[0].size}				

📌 Espere un momento, enviando archivo.`
m.reply(result4)
kagura.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }) 
m.reply(`*1*`)
break 
            case 'ping': case 'botstatus': case 'statusbot': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Velocidad de respuesta ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
                kagura.sendContact(m.chat, global.owner, m)
            }
            break 

case 'redessociales': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
	

kagura.sendMessage(m.chat, {text:`────────────────
_*Creador :*_

< 𝑰𝒎 𝑭𝒆𝒍𝒊𝒙𝒙𝒙𝒙𝒙 >

────────────────
_*Colaboradores :*_

< 𝑻𝒂𝒅𝒂𝒔𝒉𝒊 >
< 𝑲𝒉𝒂𝒍𝒐𝒗 >
< 𝑴𝒊𝒕𝒐 >

────────────────
_*Grupo de WhatsApp :*_
https://chat.whatsapp.com/F8a1wlFtr5z9WY92Wde1zN

_*Instagram : @im.felix409*_

_*PayPal :*_ https://www.paypal.me/felixcrack409
────────────────

_*Thanks To : < 𝘽𝙖𝙞𝙡𝙚𝙮𝙨 >*_`, "contextInfo": {
mimetype: "image/jpeg",
text: "By FX - BOT",
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `*FX - BOT*`,
"body": `Credits to Felixxx`,
"previewType": "PHOTO",
"thumbnailUrl": global.thumb,
"thumbnail": global.thumb,
"sourceUrl": "https://youtu.be/aAFlTR8wdd8"
}}}, { quoted: m, detectLink: true })
}
break

            case 'list': case 'menu': case 'help': case '?': {
	if (isBanChat) return m.reply('_*Lo siento, el bot esta bloqueado en este grupo.*_ ')
if (isBan) return m.reply('_*Lo siento, estas bloqueado del bot.*_ ')		
                anu = `
¡Hola! ${pushname} 👋

Bienvenido al menu, mi nombre es ${botname}.

𝑭𝒆𝒍𝒊𝒛 𝒆𝒔 𝒂𝒒𝒖𝒆𝒍 𝒒𝒖𝒆 𝒂 𝒂𝒑𝒓𝒆𝒏𝒅𝒊𝒅𝒐 𝒂 𝒂𝒅𝒎𝒊𝒓𝒂𝒓 𝒚 𝒏𝒐 𝒂 𝒆𝒏𝒗𝒊𝒅𝒊𝒂𝒓... 🥀
──────────────
                 _<𝖨𝗇𝖿𝗈 𝖣𝖾𝗅 𝖡𝗈𝗍>_
                    
👑 Creator : *𝘐𝘮 𝘍𝘦𝘭𝘪𝘹*
👤 Owner : *${ownername}*
🤖 Bot Name : *${botname}*
📑 Fecha : *${tanggal}*
⏰ Hora : *${time}*
🗒 ️Prefix : *Multi Prefix*
──────────────
▢ *𝖬𝖾𝗇𝗎 𝖯𝗋𝗂𝗇𝖼𝗂𝗉𝖺𝗅*
• #ping
• #owner
• #menu
• #speedtest

 ▢ *𝖬𝖾𝗇𝗎 𝖯𝖺𝗋𝖺 𝖦𝗋𝗎𝗉𝗈𝗌*
• #linkgroup
• #group [option]
• #add @user
• #kick @user
• #tagall [text]
• #antilink [on/off]
• #promote @user
• #demote @user 
 
 ▢ *𝖬𝖾𝗇𝗎 𝖣𝖾𝗌𝖼𝖺𝗋𝗀𝖺𝗌*
• #mediafire [url]
• #ytmp3 [url]
• #ytmp4 [url]

 ▢ *𝖬𝖾𝗇𝗎 𝖡𝗎𝗌𝗊𝗎𝖾𝖽𝖺*
• #play [query]
• #translate [text]
`
                let btn = [{
                                urlButton: {
                                    displayText: '𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮',
                                    url: 'https://instagram.com/im.felix409'
                                }
                            }, {
                                urlButton: {
                                    displayText: '𝘗𝘢𝘺𝘗𝘢𝘭',
                                    url: 'https://www.paypal.com/paypalme/felixcrack409'
                                }
                            },{
                                quickReplyButton: {
                                    displayText: '🚀 𝘚𝘱𝘦𝘦𝘥',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👑 𝘖𝘸𝘯𝘦𝘳',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '📌 𝘊𝘳𝘦𝘥𝘪𝘵𝘰𝘴',
                                    id: 'redessociales'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        kagura.send5ButImg(m.chat, anu, `© 𝘍𝘟𝘛𝘦𝘢𝘮 || 𝘐𝘮 𝘍𝘦𝘭𝘪𝘹𝘹𝘹𝘹𝘹`, global.thumb, btn)
                        } else if (setbot.templateGif) {
                        kagura.send5ButGif(m.chat, anu, `© 𝘍𝘟𝘛𝘦𝘢𝘮 || 𝘐𝘮 𝘍𝘦𝘭𝘪𝘹𝘹𝘹𝘹𝘹`, global.visoka, btn)
                        } else if (setbot.templateVid) {
                        kagura.send5ButVid(m.chat, anu, `© 𝘍𝘟𝘛𝘦𝘢𝘮 || 𝘐𝘮 𝘍𝘦𝘭𝘪𝘹𝘹𝘹𝘹𝘹`, global.visoka, btn)
                        } else if (setbot.templateMsg) {
                        kagura.send5ButMsg(m.chat, anu, `© 𝘍𝘟𝘛𝘦𝘢𝘮 || 𝘐𝘮 𝘍𝘦𝘭𝘪𝘹𝘹𝘹𝘹𝘹`, btn)
                        }
                     }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			if (m.mtype == 'viewOnceMessage') {
	 
 teks = `「 *Anti ViewOnce Message* 」
 
⭔ Nombre : ${m.pushName}
⭔ Usuario : @${m.sender.split("@")[0]}
⭔ Hora : ${moment.tz('America/Mexico_City').format('HH:mm')}
⭔ MessageType : ${m.mtype}`
kagura.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply('El archivo ya ha sido abierto.'))
}
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    kagura.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
