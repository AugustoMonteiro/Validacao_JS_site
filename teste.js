$(document).ready(
	function(){
		$('.bt-buscar').click(function(e){
		$('.pesquisa').slideToggle();
		$('.pesquisa').css("display","block");
		}
		);
});

$(document).ready(
	function(){
		$('.bt-mob').click(function(e){
		$('.menu-mob').slideToggle();
		$('.menu-mob').css("display","block");
		}
		);
});

// VALIDA FORMULÁRIO CONTATO

function validaFormulario(){
	var nome = formContato.nome.value;
	var telefone = formContato.telefone.value;
	var assunto = formContato.assunto.value;
	var mensagem = formContato.mensagem.value;

	if(nome == "") {
		var erro = document.getElementById('erro_nome');
		erro.innerHTML = "Digite o campo nome!";
		formContato.nome.focus();
		return false;
	} else if(telefone == ""){
		var erro = document.getElementById('erro_telefone');
		erro.innerHTML = "Digite seu telefone";
		formContato.telefone.focus();
		return false;
	} else if(assunto == ""){
		var erro = document.getElementById('erro_assunto');
		erro.innerHTML = "Digite seu assunto";
		formContato.assunto.focus();
		return false;
	} else if(mensagem == ""){
		var erro = document.getElementById('erro_mensagem');
		erro.innerHTML = "Digite sua mensagem";
		formContato.mensagem.focus();
		return false;
	} else {
		document.getElementById('formContato').action = "http://www.celebrandodeus.com.br/wp-content/themes/celebrando_deus/enviaForm.php";
		document.getElementById('formContato').submit();
	}
}

// MASCARA TELEFONE 

function mascaraTelefone( campo ) {
      
  function trata( valor,  isOnBlur ) {
    
    valor = valor.replace(/\D/g,"");                  
    valor = valor.replace(/^(\d{2})(\d)/g,"($1)$2");    
    
    if( isOnBlur ) {
      
      valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");   
    } else {

      valor = valor.replace(/(\d)(\d{3})$/,"$1-$2"); 
    }
    return valor;
  }
  
  campo.onkeypress = function (evt) {
     
    var code = (window.event)? window.event.keyCode : evt.which;  
    var valor = this.value
    
    if(code > 57 || (code < 48 && code != 8 ))  {
      return false;
    } else {
      this.value = trata(valor, false);
    }
  }
  
  campo.onblur = function() {
    
    var valor = this.value;
    if( valor.length < 13 ) {
      this.value = ""
    }else {   
      this.value = trata( this.value, true );
    }
  }

  campo.maxLength = 14;
}

// VALIDA E-MAIL GOIANIA

function validaEmailFormGoiania() {
	var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
    if(!filter.test(document.getElementById("email").value)){
      var erro = document.getElementById('erro_email');
      erro.innerHTML = "Digite o e-mail correto";
      formGoiania.email.focus();

      var email = formGoiania.email.value;
    
      return false;
    }else {
	    document.getElementById('formGoiania').action = "http://www.celebrandodeus.com.br/wp-content/themes/celebrando_deus/enviaFormGoiania.php";
	    document.getElementById('formGoiania').submit();
    }
}

// VALIDA FICHA GOIANIA


function validaFormGoiania() {
	var email = formGoiania.email.value;
	var idade = formGoiania.idade00.value;
	var nomeresponsavel = formGoiania.nome00.value;
	var cidade = formGoiania.cidade.value;
	var estado = formGoiania.estado.value;
	var fone = formGoiania.fone.value;
	var valorTotal = formGoiania.valorTotal.value;
	var formaPagamento = formGoiania.formaPagamento.value;
	var msg02 = formGoiania.msg02.value;
	var msg01 = formGoiania.msg01.value;

	if(email == "") {
		var erro = document.getElementById('erro_email');
		erro.innerHTML = "Digite seu e-mail!";
		formGoiania.email.focus();
		return false;
	} else if(idade == "") {
		var erro = document.getElementById('erro_idade');
		erro.innerHTML = "Digite a idade do Responsável!";
		formGoiania.idade00.focus();
		return false;
	} else if(nomeresponsavel == "") {
		var erro = document.getElementById('erro_nomeresponsavel');
		erro.innerHTML = "Digite o Nome do Responsável!";
		formGoiania.nome00.focus();
		return false;
	} else if(cidade == "") {
		var erro = document.getElementById('erro_cidade');
		erro.innerHTML = "Digite a Cidade do Responsável!";
		formGoiania.cidade.focus();
		return false;
	} else if(estado == "") {
		var erro = document.getElementById('erro_estado');
		erro.innerHTML = "Digite o Estado do Responsável!";
		formGoiania.estado.focus();
		return false;
	} else if(fone == "") {
		var erro = document.getElementById('erro_Fone');
		erro.innerHTML = "Digite o Telefone do Responsável!";
		formGoiania.fone.focus();
		return false;
	} else if(valorTotal == "") {
		var erro = document.getElementById('erro_valortotal');
		erro.innerHTML = "Digite o Valor total da inscrição!";
		formGoiania.valorTotal.focus();
		return false;
	} else if(formaPagamento == "") {
		var erro = document.getElementById('erro_formapagamento');
		erro.innerHTML = "Selecione a Forma de Pagamento!";
		formGoiania.formaPagamento.focus();
		return false;
	} else if(msg02 == "") {
		var erro = document.getElementById('erro_dormirnolocal');
		erro.innerHTML = "Selecione se irá dormir no local!";
		formGoiania.msg02.focus();
		return false;
	} else if(msg01 == "") {
		var erro = document.getElementById('erro_barraca');
		erro.innerHTML = "Informe se irá dormir em Barraca!";
		formGoiania.msg01.focus();
		return false;
	}
	else {
		validaEmailFormGoiania();
	}
}

// VALIDA E-MAIL ADOLESCENTES

function validaEmailFormAdolescentes() {
	var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
    if(!filter.test(document.getElementById("email").value)){
      var erro = document.getElementById('erro_email');
      erro.innerHTML = "Digite o e-mail correto";
      formAdolescentes.email.focus();

      var email = formAdolescentes.email.value;
    
      return false;
    }else {
	    document.getElementById('formAdolescentes').action = "http://www.celebrandodeus.com.br/wp-content/themes/celebrando_deus/enviaFormAdolescentes.php";
	    document.getElementById('formAdolescentes').submit();
    }
}
//SOMA VALOR FICHA ADOLESCENTES
function valotot(){
	var valor;
	   if((document.querySelector("[name='qtdPessoaQuarto']").value)==null)
		   document.querySelector("[name='qtdPessoaQuarto']").value=0;
	    if((document.querySelector("[name='qtdPessoaBarraca']").value)==null)
		   document.querySelector("[name='qtdPessoaBarraca']").value=0;
		
	valor=Number(document.querySelector("[name='qtdPessoaQuarto']").value) + Number(document.querySelector("[name='qtdPessoaBarraca']").value) ;
	
	if(valor>=0){
		document.querySelector("[name='qpessoas']").value=valor;
		valor=valor*70;
		if(valor<=200){
		document.querySelector("[name='valorTotal']").value = valor;
		
		}else{
		 document.querySelector("[name='valorTotal']").value = valor;
		 document.getElementById("mensagem1").innerHTML = "Favor, ao finalizar a inscrição e antes de efetuar o pagamento, entre em contato.";
		 
		}		
	}
		
} 

// VALIDA FICHA ADOLESCETES



function validaFormAdolescentes() {
	var email = formAdolescentes.email.value;

	if(email == "") {
		var erro = document.getElementById('erro_email');
		erro.innerHTML = "Digite seu e-mail!";
		formAdolescentes.email.focus();
		return false;
	}

	if(email) {
		validaEmailFormAdolescentes();
	}
}


// VALIDA EMAIL OUTRAS LOCALIDADES

function validaEmailFormLocalidades() {
	var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
    if(!filter.test(document.getElementById("emailLocalidades").value)){
      var erro = document.getElementById('erro_email_localidades');
      erro.innerHTML = "Digite o e-mail correto";
      formLocalidades.emailLocalidades.focus();

      var email = formLocalidades.emailLocalidades.value;
    
      return false;
    }else {
	    document.getElementById('formLocalidades').action = "http://www.celebrandodeus.com.br/wp-content/themes/celebrando_deus/enviaFormLocalidades.php";
	    document.getElementById('formLocalidades').submit();
    }
}

// VALIDA FICHA OUTRAS LOCALIDADES

function validaFormLocalidades() {
	var email = formLocalidades.emailLocalidades.value;

	if(email == "") {
		var erro = document.getElementById('erro_email_localidades');
		erro.innerHTML = "Digite seu e-mail!";
		formLocalidades.emailLocalidades.focus();
		return false;
	}

	if(email) {
		validaEmailFormLocalidades();
	}
}

