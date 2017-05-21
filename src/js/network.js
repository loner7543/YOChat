var serverPort = 8085;
var host ="localhost";
var serverSocket;
function getAll(url){
    var messages =[];
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.send();
    if(xhr.status!=200){
        console.log(xhr.status);
    }
    var res = xhr.response;
    var json = (JSON).parse(res);
    return res;


}

function sendMessaage(data,url){
    if(serverSocket==undefined){
        serverSocket = new WebSocket(url);
        serverSocket.onopen = function() {
            console.log("Соединение установлено.");
        };

        serverSocket.onclose = function(event) {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения'); // например, "убит" процесс сервера
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        };

        serverSocket.onmessage = function(event) {
            console.log("Получены данные " + event.data);
            var json  = JSON.parse(event.data);
            console.log(json);
        };

        serverSocket.onerror = function(error) {
            console.log("Ошибка " + error.message);
        };
        console.log(data);
    }
  //  serverSocket.send(data);
}