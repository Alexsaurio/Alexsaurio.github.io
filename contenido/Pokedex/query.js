$(document).ready(function(){

	var $catalogo = $('#images');

    for (var i = 1; i <=136 ; i++) {
		$catalogo.append("<img"+" src="+"image/("+i+").png"+" class=\"imgCont\" alt=("+i+").png>");
	}
	

	$(".imgCont").hover(function(){
		$(this).addClass('hove');
	}, function(){
		$(this).removeClass('hove');
	});

	$(".imgCont").click(function(){
		var clickeada = $(this).attr("alt");
		
		$("#poke img").attr("src","image/"+clickeada);
		$("#poke img").attr("alt",""+clickeada);
	});


	$enviar=$('.agregar button');
	$contenedor=$('.contenedor');
	//Termina los case xd 
	function cualColor($tipo){
		switch($tipo){
			case "Normal":
				return "normal";
			break;
			case "Fuego":
				return "fire";
			break;
			case "Agua":
				return "water";
			break;
			case "Eléctrico":
				return "electric";
			break;
			case "Hierba":
				return "grass";
			break;
			case "Hielo":
				return "ice";
			break;
			case "Peleador":
				return "fighting";
			break;
			case "Veneno":
				return "poison";
			break;
			case "Excarvador":
				return "ground";
			break;
			case "Volador":
				return "flying";
			break;
			case "Psíquico":
				return "psychic";
			break;
			case "Bicho":
				return "bug";
			break;
			case "Roca":
				return "rock";
			break;
			case "Fantasma":
				return "ghost";
			break;
			case "Dragón":
				return "dragon";
			break;
			case "Siniestro":
				return "dark";
			break;
			case "Metal":
				return "steel";
			break;
			case "Hada":
				return "fairy";
			break;
		}
	}

	
	$enviar.on("click",function(){
		console.log("Tomo lo del input y lo agrego a la notas");
		//$('.contendor').append("<p>"+$cosas.val()+"</p>");
		//Variables
		$nombre=$('#nombre').val();
		$numero=$('#numero').val();
		$tipo=$('#tipo option:selected').text();
		$generacion=$('#generacion option:selected').text();
		$evolucion=$('#evolucion').val();
		$imagen = $('#poke').attr("alt");
		$color=cualColor($tipo); //Aplicar switch par aque dependiendo del nombre se les asigne una clase de CSS
		console.log($imagen);

		$tarjeta='<div class="tarjeta">'+
			'<div class="imagenTarjeta">'+
				'<img src="'+$('#poke img').attr("src")+'">'+
			'</div>'+
			'<div class="infoTarjeta">'+
				'<table class="datos">'+
					'<th colspan="2" class="'+$color+'">'+$nombre+'</th>'+
					'<tr>'+
						'<td>Número</td>'+
						'<td>'+$numero+'</td>'+
					'</tr>'+
					'<tr>'+
						'<td>Tipo</td>'+
						'<td>'+$tipo+'</td>'+
					'</tr>'+
					'<tr>'+
						'<td>Generación</td>'+
						'<td>'+$generacion+'</td>'+
					'</tr>'+
					'<tr>'+
						'<td>Evolución</td>'+
						'<td>'+$evolucion+'</td>'+
					'</tr>'+
				'</table>'+
			'</div>'+
		'</div>';
		$contenedor.append($tarjeta);
	});
});