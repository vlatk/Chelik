const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const request = require("request");
const robot = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} }); // Объявляем, что robot - бот
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js  
let config = require('./config.json'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс

robot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Загрузка команды ${commandName}..`);
    robot.commands.set(commandName, props);
  });
});




robot.on("ready", function() {
  /* При успешном запуске, в консоли появится сообщение «[Имя бота] запустился!» */
  console.log(robot.user.username + " запустился!");

  var int = 0;

  setInterval(function(){
    if(int===0){
        robot.user.setPresence({ activity: { name: `на ${robot.guilds.cache.size} серверах`, type: "STREAMING", url: "https://www.twitch.tv/vlatk_" }, status: 'online' }) 
        .catch(console.error); //выставляем статус и проверяем на ошибки
      int = 1;
    }
    if(int===1){
        robot.user.setPresence({ activity: { name: 'за вами', type: "WATCHING" }, status: 'online' }) 
        .catch(console.error); //выставляем статус и проверяем на ошибки опять
      int = 2;
    }
    if(int===2){
        robot.user.setPresence({ activity: { name: 'как вы общаетесь', type: "LISTENING" }, status: 'online' }) 
        .catch(console.error); //выставляем статус и проверяем на ошибки опять
      int = 3;
    }
    if(int===3){
        robot.user.setPresence({ activity: { name: '~help | V1.5a', type: "PLAYING" }, status: 'online' }) 
        .catch(console.error); //выставляем статус и проверяем на ошибки опять
      int = 0;
}
}, 5000)
}) //уберите }) в этой строчке если будете использовать код который находиться ниже

/* 
setInterval(function(){               
request.post({url: "https://api.server-discord.com/v2/bots/айди_вашего_проекта/stats", headers: {"Authorization": "SDC "+config.sdctoken, "Content-Type": "application/json"}, body: JSON.stringify({
shards: 1,
servers: robot.guilds.cache.size
})}, (error, response, body) => {
      if(error) console.log(error);
  });
}, 40000);});
*/ 
//код который вы видите выше используется для отправки количества серверов на которых есть бот на сайт https://bots.server-discord.com/. 
//Если у вас уже есть проект на это сайте, то откройте настройки бота и получите api ключ
//после чего этот api ключ вставьте в config.sdctoken и разкомментируйте этот код.


robot.on('message', (msg) => { // Реагирование на сообщения
  if (msg.author.id == robot.user.id) return; //Если сообщение отправил бот - игнорируем.

    const args = msg.content.slice(prefix.length).trim().split(/ +/g); //аргументы
    const command = args.shift().toLowerCase(); //команда

    if (msg.content.indexOf(prefix) !== 0) return; //Делаем проверку на префикс (взято из моего кода)

    var commfile = robot.commands.get(command); //получаем файл команды

    if(commfile) commfile.run(robot, msg, args); //Если команда существует, запускаем.
});


robot.login(token); // Авторизация бота