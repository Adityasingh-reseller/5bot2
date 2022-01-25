/*CMD
  command: /mic
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: sent message

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key1 = "1960533911"
var key2="1179629135"
if (user.telegramid == key1 || user.telegramid == key2){
Bot.runAll({ 
command: "broadcastforad",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*[#] Message Sended To All Users*")
}else{
Bot.sendMessage("*[ ! ] Bot By @Firerepo**")
}
