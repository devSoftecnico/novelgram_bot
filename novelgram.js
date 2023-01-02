const Telegraf = require('telegraf');
const dotenv = require('dotenv');
const axios = require('axios');
const fs = require('fs');

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);


const helpMessage = `
 *Comandos que tenemos disponibles:*

    /start - Iniciar Asistente
    /novelas - Ver lista de novelas disponibles
    /novela \`<text>\` - Buscar una novela específica
    /publicar - Publicar una novela
`;

bot.help(ctx => {
    // ctx.reply(helpMessage);
    bot.telegram.sendMessage(ctx.from.id, helpMessage, {
        parse_mode: "markdown"
    });
});


bot.launch();