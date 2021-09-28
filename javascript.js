function enviar()
{
    var user = document.querySelector('input#username');
    var senha = document.querySelector('input#senha');
    var userValue = user.value;
    var senhaValue = senha.value;
    //Observa se tem valores vazios nos campos do login
    if(userValue!=""){
        if(senhaValue!=""){
            var campos = document.getElementById('div');
            campos.innerText = `User: ${userValue} || Senha: ${senhaValue}`;
        }
        else{
            window.alert('Não deixe o campo "Senha" em branco!');
        }
    }
    else if(senhaValue!=''){
        window.alert('Não deixe o campo "Usuário" em branco!');
    }
    else{
        window.alert('Não deixe os campos em branco!');
    }
}

function voltar(){
    window.history.back();
}