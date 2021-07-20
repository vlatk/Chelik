const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const request = require("request");
const robot = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} }); // Объявляем, что robot - бот и делаем так как будто он с телефона
const comms = require("./comms.js"); // Подключаем файл с командами для бота
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js  
let config = require('./config.json'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс

robot.on("ready", function() {
  /* При успешном запуске, в консоли появится сообщение «[Имя бота] запустился!» */
  console.log(robot.user.username + " запустился!");

  var int = 0;

  setInterval(function(){
    if(int===0){                                                                                                            //поставьте здесь свой твич
        robot.user.setPresence({ activity: { name: `на ${robot.guilds.cache.size} серверах`, type: "STREAMING", url: "https://www.twitch.tv/ваш_твич_канал" }, status: 'online' }) 
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
}, 40000);
request.post({url: "https://api.server-discord.com/v2/bots/726865963424677909/stats", headers: {"Authorization": "SDC "+config.sdctoken, "Content-Type": "application/json"}, body: JSON.stringify({
shards: 1,
servers: robot.guilds.cache.size
})}, (error, response, body) => {
      if(error) console.log(error);
  });
}); 

*/ 
//код который вы видите выше используется для отправки количества серверов на которых есть бот на сайт https://bots.server-discord.com/. Если у вас уже есть проект на это сайте, то откройте настройки бота и получите api ключ
//после чего этот api ключ вставьте в config.sdctoken и разкомментируйте этот код.




robot.on('message', (msg) => { // Реагирование на сообщения
  if (msg.author.username != robot.user.username && msg.author.discriminator != robot.user.discriminator) {
    var comm = msg.content.trim() + " ";
    var comm_name = comm.slice(0, comm.indexOf(" "));
    var messArr = comm.split(" ");
    for (comm_count in comms.comms) {
      var comm2 = prefix + comms.comms[comm_count].name;
      if (comm2 == comm_name) {
        comms.comms[comm_count].out(robot, msg, messArr);
      }
    }
  }
});


robot.login(token); // Авторизация бота