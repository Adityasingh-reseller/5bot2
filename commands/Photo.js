/*CMD
  command: Photo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var pto = options.photo
var cap = options.caption
Api.sendPhoto({
photo: pto,
caption: "*╔ [#] Admin Message ~ [#Admin] \n╟―—————————————\n║\n╚ [#] "+cap+"*",
parse_mode: "markdown" })
