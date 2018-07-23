
$(function(){
    var message = $('#chat-message');
    var chat = $('#chat');

    message.focus();

    $('#message-box').submit(function(e){
        // preventDefault es un evento que sirve para cancelar que recargue una pagina al enviar una     peticion
        e.preventDefault(); 
        //console.log(message.val());
        chat.append(message.val() + "<br>");
    });
});