const TelegramBot = require("node-telegram-bot-api");
const TOKEN = require("./config").TOKEN;
const bot = new TelegramBot(TOKEN, {
    polling: true
});

bot.on("message", async (data) => {
    if(data.text === "/start"){
           await bot.sendMessage(data.from.id, `Assalomu alaykum, <b>${data.from.first_name}</b>. QR Code yuborish uchun biror text yozing!`, {
            parse_mode: "HTML"
        })
    }else{
        let qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x180&data=${data.text}`;
        await bot.sendPhoto(data.from.id, qrCode, {
            caption: `<b>${data.text}</b> uchun QR Code\n\n <a href="https://t.me/Fayzullo_07_bot">@QrCodeBot</a>`,
            parse_mode: "HTML"
        })
    }
})
