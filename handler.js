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
	
        // Group
        const groupMetadata = m.isGroup ? await kagura.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
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
            kagura.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
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
	    let str = `Room ID: ${room.id}

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
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
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
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
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
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await kagura.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await kagura.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            kagura.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await kagura.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) kagura.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donddasi': case 'sedddwabot': case 'sewdda': case 'buypreddddmium': case 'donddate': {
                kagura.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n⭔ 13k Per Group via E-Walet 1 Month\n⭔ 18k via pulsa 1 Month\n\n Premium Price Bot\n⭔ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6288292024190 (Owner)\n\nDonate For Me : \n\n⭔ Paypal : https://www.paypal.me/Cakhaho\n⭔ Saweria : https://saweria.co/DikaArdnt` }, { quoted: m })
            }
            break
            case 'sddddsdc': {
                m.reply('*Script Bot :*\nhttps://youtu.be/tbWY5hncgwc')
            }
            break

case 'mn1': {
m.reply(` ❏ *Group Menu*
 › #linkgroup
 › #ephemeral [option]
 › #setppgc [image]
 › #setname [text]
 › #setdesc [text]
 › #group [option]
 › #editinfo [option]
 › #add @user
 › #kick @user
 › #hidetag [text]
 › #tagall [text]
 › #antilink [on/off]
 › #mute [on/off]
 › #promote @user
 › #demote @user
 › #vote [text]
 › #devote
 › #upvote
 › #cekvote
 › #hapusvote`)
}
break
case 'mn2': {
m.reply(`  ❏ *Main Menu*
 › #ping
 › #owner
 › #menu
 › #help
 › #delete
 › #infochat
 › #quoted
 › #listpc
 › #listgc
 › #listonline
 › #speedtest`)
}
break
case 'mn3': {
m.reply(`  ❏ *Owner Menu*
 › #react [emoji]
 › #chat [option]
 › #join [link]
 › #leave
 › #block @user
 › #unblock @user
 › #bcgroup [text]
 › #bcall [text]
 › #setppbot [image]
 › #setexif
 › #setmenu [option]`)
}
break
case 'mn4': {
m.reply(`  ❏ *Webzone Menu*
 › #playstore
 › #gsmarena
 › #jadwalbioskop
 › #nowplayingbioskop
 › #aminio
 › #wattpad
 › #webtoons
 › #drakor`)
}
break
case 'mn5': {
m.reply(`  ❏ *Downloader Menu*
 › #tiktoknowm [url]
 › #tiktokwm [url]
 › #tiktokmp3 [url]
 › #instagram [url]
 › #twitter [url]
 › #twittermp3 [url]
 › #facebook [url]
 › #pinterestdl [url]
 › #ytmp3 [url]
 › #ytmp4 [url]
 › #getmusic [query]
 › #getvideo [query]
 › #umma [url]
 › #joox [query]
 › #soundcloud [url]`)
}
break
case 'mn6': {
m.reply(`  ❏ *Search Menu*
 › #play [query]
 › #yts [query]
 › #google [query]
 › #gimage [query]
 › #pinterest [query]
 › #wallpaper [query]
 › #wikimedia [query]
 › #ytsearch [query]
 › #ringtone [query]
 › #stalk [option] [query]`)
}
break
case 'mn7': {
m.reply(`  ❏ *Random Menu*
 › #coffe
 › #quotesanime
 › #motivasi
 › #dilanquote
 › #bucinquote
 › #katasenja
 › #puisi
 › #couple
 › #anime
 › #waifu
 › #husbu
 › #neko
 › #shinobu
 › #waifus (nsfw)
 › #nekos (nsfw)
 › #trap (nsfw)
 › #blowjob (nsfw)`)
}
break
case 'mn8': {
m.reply(`  ❏ *Text Pro Menu*
 › #3dchristmas
 › #3ddeepsea
 › #americanflag
 › #3dscifi
 › #3drainbow
 › #3dwaterpipe
 › #halloweenskeleton
 › #sketch
 › #bluecircuit
 › #space
 › #metallic
 › #fiction
 › #greenhorror
 › #transformer
 › #berry
 › #thunder
 › #magma
 › #3dcrackedstone
 › #3dneonlight
 › #impressiveglitch
 › #naturalleaves
 › #fireworksparkle
 › #matrix
 › #dropwater
 › #harrypotter
 › #foggywindow
 › #neondevils
 › #christmasholiday
 › #3dgradient
 › #blackpink
 › #gluetext`)
}
break
case 'mn9': {
m.reply(`  ❏ *Photo Oxy Menu*
 › #shadow
 › #romantic
 › #smoke
 › #burnpapper
 › #naruto
 › #lovemsg
 › #grassmsg
 › #lovetext
 › #coffecup
 › #butterfly
 › #harrypotter
 › #retrolol`)
}
break
case 'mn10': {
m.reply(`  ❏ *Ephoto Menu*
 › #ffcover
 › #crossfire
 › #galaxy
 › #glass
 › #neon
 › #beach
 › #blackpink
 › #igcertificate
 › #ytcertificate`)
}
break
case 'mn11': {
m.reply(`  ❏ *Fun Menu*
 › #simih
 › #halah
 › #hilih
 › #huluh
 › #heleh
 › #holoh
 › #ship
 › #jodohku
 › #delttt
 › #tictactoe
 › #family100
 › #tebak [option]
 › #math [mode]
 › #suitpvp [@tag]`)
}
break
case 'mn12': {
m.reply(`  ❏ *Primbon Menu*
 › #nomorhoki
 › #artimimpi
 › #artinama
 › #ramaljodoh
 › #ramaljodohbali
 › #suamiistri
 › #ramalcinta
 › #cocoknama
 › #pasangan
 › #shipnikah
 › #sifatusaha
 › #rezeki
 › #pekerjaan
 › #nasib
 › #penyakit
 › #tarot
 › #fengshui
 › #haribaik
 › #harisangar
 › #harisial
 › #nagahari
 › #arahrezeki
 › #peruntungan
 › #weton
 › #karakter
 › #keberuntungan
 › #memancing
 › #masasubur
 › #zodiak
 › #shio`)
}
break
case 'mn13': {
m.reply(`  ❏ *Convert Menu*
 › #attp
 › #ttp
 › #toimage
 › #removebg
 › #sticker
 › #emojimix
 › #emojimix2
 › #tovideo
 › #togif
 › #tourl
 › #tovn
 › #tomp3
 › #toaudio
 › #ebinary
 › #dbinary
 › #styletext
 › #smeme`)
}
break
case 'mn14': {
m.reply(`  ❏ *Database Menu*
 › #setcmd
 › #listcmd
 › #delcmd
 › #lockcmd
 › #addmsg
 › #listmsg
 › #getmsg
 › #delmsg`)
}
break
case 'mn15': {
m.reply(`  ❏ *Anonymous Menu*
 › #anonymous
 › #start
 › #next
 › #keluar`)
}
break
case 'mn16': {
m.reply(`  ❏ *Islamic Menu*
 › #iqra
 › #hadist
 › #alquran
 › #juzamma
 › #tafsirsurah`)
}
break
case 'mn17': {
m.reply(`  ❏ *Voice Changer*
 › #bass
 › #blown
 › #deep
 › #earrape
 › #fast
 › #fat
 › #nightcore
 › #reverse
 › #robot
 › #slow
 › #tupai`)
}
break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    kagura.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    kagura.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    kagura.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    kagura.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    kagura.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    kagura.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    kagura.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	     
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "¡Aun no se responde la pregunta anterior!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Seleccione un modo de juego : ${Object.keys(modes).join(' | ')}\n𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                kagura.sendText(m.chat, `*¿Cuál es el resultado de : ${result.soal.toLowerCase()}?*\n\nTiempo : ${(result.waktu / 1000).toFixed(2)} segundos`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Respuesta: " + result.jawaban)
                    m.reply("El tiempo se ha acabado\nLa respuesta era : " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break


            case 'ship': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `                𝐿𝑎 𝑝𝑎𝑟𝑒𝑗𝑎 𝑑𝑒𝑙 𝑑𝑖𝑎ꨄ︎

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'ship', buttonText: { displayText: '𝘍𝘰𝘳𝘮𝘢𝘳 𝘕𝘶𝘦𝘷𝘢 𝘗𝘢𝘳𝘦𝘫𝘢' }, type: 1 }
                    ]
                    await kagura.sendButtonText(m.chat, buttons, jawab, kagura.user.name, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                kagura.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw '¡Ingrese un enlace de un grupo de WhatsApp!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Enlace invalido.'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await kagura.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await kagura.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`La nueva descripción de los stickers sera :\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kagura.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kagura.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kagura.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kagura.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kagura.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kagura.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '¿Cual quieres que sea el nuevo nombre del grupo?'
                await kagura.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '¿Cual quieres que sea oa nueva descripción del grupo?'
                await kagura.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break


case 'textmaker': {
if (args[0] === 'glitch') {
if (args.length < 2) return m.reply(`𝖤𝗃. 𝖽𝖾 𝗎𝗌𝗈 :\n${prefix + command + ' ' + args[0]} Felixxx`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
kagura.sendMessage(m.chat, {image:{url:teds}, caption:"Espero sea de tu agrado ☑️"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return m.reply(`𝖤𝗃. 𝖽𝖾 𝗎𝗌𝗈 :\n${prefix + command + ' ' + args[0]} Felixxx`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
kagura.sendMessage(m.chat, {image:{url:teds}, caption:"Espero sea de tu agrado ☑️"}, {quoted:m})
} else if (args[0] === 'magma') {
if (args.length < 2) return m.reply(`𝖤𝗃. 𝖽𝖾 𝗎𝗌𝗈 :\n${prefix + command + ' ' + args[0]} Felixxx`)
let teds = await thiccysapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [args[1]])
kagura.sendMessage(m.chat, {image:{url:teds}, caption:"Espero sea de tu agrado ☑️"}, {quoted:m})
} else {
m.reply(`*Lista de Diseños :*\n•> glitch\n•> glow\n•> magma`)
}
}
break

case 'glicttt': {
if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} text`
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [text])
kagura.sendMessage(m.chat, {image:{url:teds}, caption:"Espero sea de tu agrado ☑️"}, {quoted:m})
}
break

case 'naranja': {
if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} text`
let teds = await thiccysapi.textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html", [text])
kagura.sendMessage(m.chat, {image:{url:teds}, caption:"Espero sea de tu agrado ☑️"}, {quoted:m})
}
break



          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Menciona/Envia una Imagen con el mensaje ${prefix + command}`
                if (!/image/.test(mime)) throw `Menciona/Envia una Imagen con el mensaje ${prefix + command}`
                if (/webp/.test(mime)) throw `Menciona/Envia una Imagen con el mensaje ${prefix + command}`
                let media = await kagura.downloadAndSaveMediaMessage(quoted)
                await kagura.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Menciona/Envia una Imagen con el mensaje ${prefix + command}`
                if (!/image/.test(mime)) throw `Menciona/Envia una Imagen con el mensaje ${prefix + command}`
                if (/webp/.test(mime)) throw `Menciona/Envia una Imagen con el mensaje ${prefix + command}`
                let media = await kagura.downloadAndSaveMediaMessage(quoted)
                await kagura.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
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
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            kagura.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw '¡Ingrese un texto!'
                let anu = await styletext(text)
                let teks = `Style Text De : ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, 𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: kagura.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            kagura.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: kagura.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            kagura.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: kagura.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            kagura.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${kagura.user.id}
`
kagura.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grupo': case 'grup': {
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
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await kagura.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`𝘊𝘰𝘯𝘧𝘪𝘨𝘶𝘳𝘢𝘤𝘪𝘰𝘯 𝘤𝘢𝘮𝘣𝘪𝘢𝘥𝘢 𝘱𝘢𝘳𝘢 𝘲𝘶𝘦 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘱𝘢𝘳𝘵𝘪𝘤𝘪𝘱𝘢𝘯𝘵𝘦𝘴 𝘱𝘶𝘦𝘥𝘢𝘯 𝘦𝘥𝘪𝘵𝘢𝘳 𝘭𝘢 𝘪𝘯𝘧𝘰 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await kagura.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`𝘊𝘰𝘯𝘧𝘪??𝘶𝘳𝘢𝘤𝘪𝘰𝘯 𝘤𝘢𝘮𝘣𝘪𝘢𝘥𝘢 𝘱𝘢𝘳𝘢 𝘲𝘶𝘦 𝘯𝘪𝘯𝘨𝘶𝘯𝘰 𝘥𝘦 𝘭𝘰𝘴 𝘱𝘢𝘳𝘵𝘪𝘤𝘪𝘱𝘢𝘯𝘵𝘦𝘴 𝘱𝘶𝘦𝘥𝘢𝘯 𝘦𝘥𝘪𝘵𝘢𝘳 𝘭𝘢 𝘪𝘯𝘧𝘰 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: '𝘗𝘦𝘳𝘮𝘪𝘵𝘪𝘳' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: '𝘕𝘰 𝘗𝘦𝘳𝘮𝘪𝘵𝘪𝘳' }, type: 1 }
                    ]
                    await kagura.sendButtonText(m.chat, buttons, `¿Permitir que todos los participantes editen la info del grupo?`, kagura.user.name, m)

            }
            }
            break
            case 'antilink': {
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
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`¡Actualmente activo!`)
                db.data.chats[m.chat].mute = true
                m.reply(`${kagura.user.name} ha sido silenciado en este grupo !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`¡Actualmente activo!`)
                db.data.chats[m.chat].mute = false
                m.reply(`${kagura.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await kagura.sendButtonText(m.chat, buttons, `Mute Bot`, kagura.user.name, m)
                }
             }
             break


case 'antionce': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antionce) return m.reply(`¡Actualmente activo!`)
                db.data.chats[m.chat].antionce = true
                m.reply(`¡El Anti-UnaVista ha sido habilitado en este grupo!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antionce) return m.reply(`¡No se encuentra activo!`)
                db.data.chats[m.chat].antionce = false
                m.reply(`¡El Anti-UnaVista ha sido deshabilitado en este grupo!`)
                } else {
                 let buttons = [
                        { buttonId: 'antionce on', buttonText: { displayText: '𝘏𝘢𝘣𝘪𝘭𝘪𝘵𝘢𝘳 𝘈𝘯𝘵𝘪-𝘜𝘯𝘢𝘝𝘪𝘴𝘵𝘢' }, type: 1 },
                        { buttonId: 'antionce off', buttonText: { displayText: '𝘋𝘦𝘴𝘩𝘢𝘣𝘪𝘭𝘪𝘵𝘢𝘳 𝘈𝘯𝘵𝘪-𝘜𝘯𝘢𝘝𝘪𝘴𝘵𝘢' }, type: 1 }
                    ]
                    await kagura.sendButtonText(m.chat, buttons, `El Anti-UnaVista quitara la función de "Solo Una Visualización".`, kagura.user.name, m)
                }
             }
             break
 
         case 'enlace': case 'linkgroup': case 'linkgc': {
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
             

            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Ingresa un valor enable/disable'
                if (args[0] === 'enable') {
                    await kagura.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await kagura.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false 
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Este mensaje no ha sido enviado por un bot.'
                kagura.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `¿Que desea anunciar?`
                let getGroups = await kagura.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Enviando anuncio a : ${anu.length} Grupos, Tiempo Estimado : ${anu.length * 1.5} segundos.`)
                for (let i of anu) {
                    await sleep(1500)
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
                                    displayText: '📌 𝘔𝘦𝘯𝘶',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 𝗔𝗻𝘂𝗻𝗰𝗶𝗼 𝗗𝗲𝗹 𝗕𝗼𝘁 」\n\n${text}`
                      kagura.send5ButImg(i, txt, kagura.user.name, global.thumb, btn)
                    }
                m.reply(`Se ha enviado correctam el anuncio a ${anu.length} grupos.`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `¿Y el texto?`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Enviando anuncio a : ${anu.length} Chats\nTiempo Estimado ${anu.length * 1.5} segundos`)
		for (let yoi of anu) {
		    await sleep(1500)
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
                                    displayText: '📌 𝘔𝘦𝘯𝘶',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 𝗔𝗻𝘂𝗻𝗰𝗶𝗼 𝗗𝗲𝗹 𝗕𝗼𝘁 」\n\n${text}`
                      kagura.send5ButImg(yoi, txt, kagura.user.name, global.thumb, btn)
		}
		m.reply('Anuncio enviado con éxito.')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('¡Menciona un mensaje!')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw '¡El mensaje no fue enviado por un bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `▢ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Tiempo :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Leido' : 'Enviado'}\n\n`
                }
                kagura.sendTextWithMentions(m.chat, teks, m)
            }
            break
            
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `▢ *CHATS PERSONALES*\n\nTotal Chat : ${anu.length} Chats\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `▢ *Nombre :* ${nama}\n▢ *Usuario :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 kagura.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `▢ *CHATS DE GRUPOS*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await kagura.groupMetadata(i)
                     teks += `▢ *Nombre :* ${metadata.subject}\n⬡ *Creador :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Desconocido'}\n⬡ *ID :* ${metadata.id}\n⬡ *Fecha de creación :* ${moment(metadata.creation * 1000).tz('America/México').format('HH:mm:ss')}\n⬡ *Miembros :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 kagura.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    kagura.sendText(m.chat, 'Personas en linea :\n\n' + online.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Menciona un Video/Image Con el mensaje : ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await kagura.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Duracion máxima 10s')
                let media = await quoted.download()
                let encmedia = await kagura.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Menciona un Video/Image Con el mensaje : ${prefix + command}`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await kagura.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await kagura.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} text`
           await kagura.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'kagura', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Menciona una imagen/sticker con el mensaje ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await kagura.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Responde a una imagen.'
                if (!/webp/.test(mime)) throw `Menciona un sticker con el mensaje *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kagura.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    kagura.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Responde a una imagen.'
                if (!/webp/.test(mime)) throw `Menciona un sticker con el mensaje *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await kagura.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kagura.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Responde a un Video/Audio con el mensaje ${prefix + command}`
            if (!quoted) throw `Responde a un Video/Audio con el mensaje ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            kagura.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Responde a un Video/Audio que quieras convertir en MP3`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Responde a un Video/Audio con el mensaje ${prefix + command}`
            if (!quoted) throw `Responde a un Video/Audio con el mensaje ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            kagura.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By Lexxy Official.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Responde a un Video/Audio con el mensaje ${prefix + command}`
            if (!quoted) throw `Responde a un Video/Audio con el mensaje ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            kagura.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Responde a una imagen'
                if (!/webp/.test(mime)) throw `Responde a*${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await kagura.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kagura.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await kagura.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Responde a una Imagen con el mensaje ${prefix + command}`
	    if (!/image/.test(mime)) throw `Responde a una Imagen con el mensaje ${prefix + command}`
	    if (/webp/.test(mime)) throw `Responde a una Imagen con el mensaje ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await kagura.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    kagura.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    
	    case 'yts': case 'ytsearch': {
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} Anime edit`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Tipo : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Titull : ${i.title}\n⭔ Vistas : ${i.views}\n⭔ Duración : ${i.timestamp}\n⭔ Fecha de Publicación : ${i.ago}\n⭔ Autor : ${i.author.name}\n⭔ Enlace : ${i.url}\n\n─────────────────\n\n`
                }
                kagura.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} Anime`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `🔎 *Busqueda* : ${text}\n\n`
                for (let g of res) {
                teks += `📌 *Titulo* : ${g.title}\n`
                teks += `🏷️ *Descripcion* : ${g.snippet}\n`
                teks += `📎 *Enlace* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
case 'translate': {
if (!text) throw `Uso :`
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=es&kata=${text}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐 Traducir : ${text} \n📘Resultado : ${Infoo}`)
}
break
        case 'gimage': {
        if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} Anime Demon Slayer`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [{buttonId: `gimage ${text}`, buttonText: {displayText: '𝘚𝘐𝘎𝘜𝘐𝘌𝘕𝘛𝘌 ⏩'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE BUSQUEDA 」-------*
🔗 *Enlace* : ${images}`,
                    footer: kagura.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                kagura.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
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
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 99999999) return reply('El tamaño del video es demasiado grande.'+util.format(media))
                kagura.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}` }, { quoted: m });
                          }
            break

	    case 'ytmp3': case 'ytaudio': {
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
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('Lo lamento, el archivo supera el límite.'+util.format(media))
                kagura.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `📌 *Titulo* : ${media.title}\n🚀 *Tamaño* : ${media.filesizeF}\n📎 *Enlace* : ${isUrl(text)}\n🧃 *Ext* : MP4\n💸 *Calidad* : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                kagura.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                kagura.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                kagura.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                kagura.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break

case 'tiktokaudio':{
let { TiktokDownloader } = require('./lib/tiktokdl')
if (args.length < 1) return m.reply(`*Ejemplo de uso* :\n#tiktok https://vt.tiktok.com/ZSdGcA6MK/?k=1`)
if (!args[0].includes('tiktok')) return m.reply(`Link is not valid`)
  m.reply(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply('err') 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    kagura.sendMessage(m.chat, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 m.reply(`*Archivo obtenido ☑️*`)
break

 

case 'tiktok':{
let { TiktokDownloader } = require('./lib/tiktokdl')
if (args.length < 1) return m.reply(`*Ejemplo de uso* :\n#tiktok https://vm.tiktok.com/ZMNMrkGrR/?k=1`)
if (!args[0].includes('tiktok')) return m.reply(`Link is not valid`)
  m.reply(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply('err') 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
   kagura.sendMessage(m.chat, { video: { url: musim_duren_v }, caption: "Done!" }, { quoted: m })
   }
  m.reply(`*Archivo obtenido ☑️*`)
break

case 'tiktokwm':{
let { TiktokDownloader } = require('./lib/tiktokdl')
if (args.length < 1) return m.reply(`*Ejemplo de uso* :\n#tiktok https://vm.tiktok.com/ZMNMrkGrR/?k=1`)
if (!args[0].includes('tiktok')) return m.reply(`Link is not valid`)
  m.reply(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply('err') 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.watermark
   kagura.sendMessage(m.chat, { video: { url: musim_duren_v }, caption: "Done!" }, { quoted: m })
   }
  m.reply(`*Archivo obtenido ☑️*`)
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

 

case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
					kagura.sendVideoAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })


					})
					break

            
	    case 'couple': case 'ppcp': {
                
            let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
            let random = anu[Math.floor(Math.random() * anu.length)]
		    let buttons = [
            {buttonId: `ttttest`, buttonText: {displayText: '𝘚𝘐𝘎𝘜𝘐𝘌𝘕𝘛𝘌 ⏩'}, type: 1}
             ]
             let buttonMessage = {
             image: { url: random.male },
             caption: `𝑃𝑎𝑟𝑎 𝑒𝑙 ℎ𝑜𝑚𝑏𝑟𝑒`,
             footer: kagura.user.name,
             buttons: buttons,
             headerType: 4
             }
             kagura.sendMessage(m.chat, { image: { url: random.female }, caption: `𝑃𝑎𝑟𝑎 𝑙𝑎 𝑚𝑢𝑗𝑒𝑟` }, { quoted: m })
             kagura.sendMessage(m.chat, buttonMessage, { quoted: m })
             
             }
             break

            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: kagura.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                kagura.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw '¿Que deseas buscar?'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: '𝘚𝘐𝘎𝘜𝘐𝘌𝘕𝘛𝘌 ⏩'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `き⃟🍟 Título : ${result.title}\nき⃟🍟 Categoría : ${result.type}\nき⃟🍟 Detalles : ${result.source}\nき⃟🍟 Enlace : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: kagura.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                kagura.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw '¿Que deseas buscar?'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '𝘚𝘐𝘎𝘜𝘐𝘌𝘕𝘛𝘌 ⏩'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `き⃟🏷️ Titulo : ${result.title}\nき⃟🏷️ Fuente : ${result.source}\nき⃟🏷️ Enlace : ${result.image}`,
                    footer: kagura.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                kagura.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                kagura.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                kagura.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} text`
                m.reply(mess.wait)
                kagura.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                kagura.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                kagura.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                kagura.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            
            case 'zodiak': case 'zodiac': {
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                kagura.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                kagura.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break 
	         
        case 'ringtone': {
		if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} DBS`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		kagura.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		 
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		kagura.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		kagura.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		kagura.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		kagura.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? 𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		 
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await kagura.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                kagura.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw '¡Responde a un sticker!'
                if (!m.quoted.fileSha256) throw 'SHA256 Erróneo'
                if (!text) throw `¿Que comando sera?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `None.`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Lista de Comandos*

${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                kagura.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Menciona el mensaje que quieras guardar en la base de datos.'
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} nombre del archivo`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' ha sido registrado en la lista de mensajes.`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Mensaje agregado con éxito en la lista de mensajes como '${text}'
    
Acceso con ${prefix}getmsg ${text}

Ver lista de mensajes con ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `𝖤𝗃𝖾𝗆𝗉𝗅𝗈 𝖽𝖾 𝗎𝗌𝗈 : ${prefix + command} file name\n\n𝖯𝖺𝗋𝖺 𝗏𝖾𝗋 𝗅𝗈𝗌 𝗆𝖾𝗇𝗌𝖺𝗃𝖾𝗌 𝗀𝗎𝖺𝗋𝖽𝖺𝖽𝗈𝗌 𝗎𝗌𝖺 : ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                kagura.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 BASE DE DATOS 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Nombre :* ${i.nama}\n⬡ *Tipo :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Se ha eliminado : '${text}' de la base de datos.`)
            }
	    break
	     
            case 'public': {
                if (!isCreator) throw mess.owner
                kagura.public = true
                m.reply('Se ha cambiado al modo público.')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                kagura.public = false
                m.reply('Se ha cambiado al modo privado.')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
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
                kagura.sendContact(m.chat, global.owner, m)
            }
            break
             
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `\nChange menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `\nChange menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `\nChange menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `\nChange menu bot to Template Message`}
                ]
                },
                ]
                kagura.sendListMsg(m.chat, `Please select the menu you want to change!`, kagura.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
break
case 'fiturlist': {
 {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "MENU 1", rowId: `mn1`, description: `Show Menu Group`},
                {title: "MENU 2", rowId: `mn2`, description: `Show Menu Main`},
                {title: "MENU 3", rowId: `mn3`, description: `Show Menu Owner`},
                {title: "MENU 4", rowId: `mn4`, description: `Show Menu Webzone`},
                {title: "MENU 5", rowId: `mn5`, description: `Show Menu Downloader`},
                {title: "MENU 6", rowId: `mn6`, description: `Show Menu Search`},
                {title: "MENU 7", rowId: `mn7`, description: `Show Menu Random`},
                {title: "MENU 8", rowId: `mn8`, description: `Show Menu Textpro`},
                {title: "MENU 9", rowId: `mn9`, description: `Show Menu Photooxy`},
                {title: "MENU 10", rowId: `mn10`, description: `Show Menu Ephoto`},
                {title: "MENU 11", rowId: `mn11`, description: `Show Menu Fun`},
                {title: "MENU 12", rowId: `mn12`, description: `Show Menu Primbon`},
                {title: "MENU 13", rowId: `mn1`, description: `Show Menu Convert`},
                {title: "MENU 14", rowId: `mn14`, description: `Show Menu Database`},
                {title: "MENU 15", rowId: `mn15`, description: `Show Menu Anonymous`},
                {title: "MENU 16", rowId: `mn16`, description: `Show Menu Islamic`},
                {title: "MENU 17", rowId: `mn17`, description: `Show Menu Voice`}
                ]
                },
                ]
                kagura.sendListMsg(m.chat, `Saya Assisten ${ownername} ini adalah List Menu Bot Whatsapp Simple !!`, `© Created By ${ownername}`, `Hai ${pushname}👋 *Selamat ${salam}*`, `Click Here`, sections, m)
                }
            }
            break

case 'redessociales': {
	

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
• #help
• #delete
• #infochat
• #quoted
• #listpc
• #listgc
• #listonline
• #speedtest

 ▢ *𝖬𝖾𝗇𝗎 𝖯𝖺𝗋𝖺 𝖦𝗋𝗎𝗉𝗈𝗌*
• #linkgroup
• #ephemeral [option]
• #setppgc [image]
• #setname [text]
• #setdesc [text]
• #group [option]
• #editinfo [option]
• #add @user
• #kick @user
• #hidetag [text]
• #tagall [text]
• #antilink [on/off]
• #mute [on/off]
• #promote @user
• #demote @user
• #vote [text]
• #devote
• #upvote
• #cekvote
• #hapusvote
 
 ▢ *𝖣𝗎𝖾𝗇̃𝗈𝗌 & 𝖣𝖾𝗌𝖺𝗋𝗋𝖺𝗅𝗅𝖺𝖽𝗈𝗋𝖾𝗌*
• #react [emoji]
• #chat [option]
• #join [link]
• #leave
• #block @user
• #unblock @user
• #bcgroup [text]
• #bcall [text]
• #setppbot [image]
• #setexif
• #setmenu [option]

 ▢ *𝖬𝖾𝗇𝗎 𝖣𝖾𝗌𝖼𝖺𝗋𝗀𝖺𝗌*
• #tiktok [url]
• #tiktokwm [url]
• #tiktokaudio [url]
• #mediafire [url]
• #instagram [url]
• #ytmp3 [url]
• #ytmp4 [url]
• #getmusic [query]
• #getvideo [query]


 ▢ *𝖬𝖾𝗇𝗎 𝖡𝗎𝗌𝗊𝗎𝖾𝖽𝖺*
• #play [query]
• #yts [query]
• #google [query]
• #gimage [query]
• #pinterest [query]
• #wallpaper [query]
• #wikimedia [query]
• #ytsearch [query]
• #ringtone [query]

 ▢ *𝖱𝖺𝗇𝖽𝗈𝗆 𝖬𝖾𝗇𝗎*
• #coffe
• #quotesanime
• #couple
• #anime
• #waifu
• #husbu
• #neko
• #shinobu
• #waifus (nsfw)
• #nekos (nsfw)
• #trap (nsfw)
• #blowjob (nsfw)

 ▢ *𝖥𝗎𝗇 𝖬𝖾𝗇𝗎*
• #delttt
• #tictactoe
• #math [mode]

 ▢ *𝖢𝗋𝖾𝖺𝗍𝗈𝗋 𝖬𝖾𝗇𝗎*
• #attp
• #ttp
• #textmaker
• #toimage
• #removebg
• #sticker
• #emojimix
• #emojimix2
• #tovideo
• #togif
• #tourl
• #tovn
• #tomp3
• #toaudio
• #ebinary
• #dbinary
• #styletext
• #smeme

 ▢ *𝖣𝖺𝗍𝖺𝖻𝖺𝗌𝖾 𝖬𝖾𝗇𝗎*
• #setcmd
• #listcmd
• #delcmd
• #lockcmd
• #addmsg
• #listmsg
• #getmsg
• #delmsg

 ▢ *𝖤𝖿𝖾𝖼𝗍𝗈𝗌*
• #bass
• #blown
• #deep
• #earrape
• #fast
• #fat
• #nightcore
• #reverse
• #robot
• #slow
• #tupai
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
	 if (!db.data.chats[m.chat].antionce) return
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
