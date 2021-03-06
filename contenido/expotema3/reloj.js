			
		window.addEventListener("load",sitioCargado,false);

		function sitioCargado(){
			canvasApp();
		}

		

		function reloj(){
			var canvas=document.getElementById("miCanvas");
			var context=canvas.getContext("2d");
			var tiempo=new Date();
			context.save();
			context.clearRect(0,0,500,500);
			context.translate(180,100);
			context.scale(0.5,0.5);
			context.rotate(-Math.PI/2);
			context.strokeStyle="black";
			context.fillStyle="white";
			context.lineWidth=8;
			context.lineCap="round";


			//pintar las horas
			context.save();
			var rotar=Math.PI/6;
			for(var i=0;i<12;i++){
				context.beginPath();

					context.rotate(rotar);
					context.moveTo(100,0);
					context.lineTo(120,0);

				context.stroke();
			}

			context.restore();
			//dibujar Minutos
			context.save();
			context.lineWidth=5;
			for(var i=0;i<60;i++){
				if(i%5!=0){
					context.beginPath();
					context.moveTo(115,0);
					context.lineTo(120,0);
					context.stroke();

				}
				context.rotate(Math.PI/30);

			}

			 context.restore();
			 var hora=tiempo.getHours();
			 var min=tiempo.getMinutes();
			 var sec=tiempo.getSeconds();

			 hora=hora%12;


			 context.fillStyle="black";
			 //pintar horero
			 context.save();
			 context.rotate(hora*(Math.PI/6)+(Math.PI/360)*min+(Math.PI/21600)*sec);
			 context.lineWidth=14;
			 context.beginPath();
			 context.moveTo(-20,0);
			 context.lineTo(80,0);
			 context.stroke();
			 context.restore();


			 // write Minutes
			  context.save();
			  context.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
			  context.lineWidth = 10;
			  context.beginPath();
			  context.moveTo(-28,0);
			  context.lineTo(112,0);
			  context.stroke();
			  context.restore();

			 // Write seconds
			  context.save();
			  context.rotate(sec * Math.PI/30);
			  context.strokeStyle = "#D40000";
			  context.fillStyle = "#D40000";
			  context.lineWidth = 6;

			  context.beginPath();
				  context.moveTo(-30,0);
				  context.lineTo(83,0);
			  context.stroke();

			  context.beginPath();
			  context.arc(0,0,10,0,Math.PI*2,true);
			  context.fill();

			  context.beginPath();
			  context.arc(95,0,10,0,Math.PI*2,true);
			  context.stroke();

			  context.fillStyle = "rgba(0,0,0,0)";
			  context.arc(0,0,3,0,Math.PI*2,true);
			  context.fill();

			  context.restore();


			  context.beginPath();
			  context.lineWidth = 14;
			  context.strokeStyle = '#4f4f4f';
			  context.arc(0,0,142,0,Math.PI*2,true);
			  context.stroke();

			  context.restore();

			  window.requestAnimationFrame(reloj);

		}

		function canvasApp(){

			function dibujarPantalla(){

				window.requestAnimationFrame(reloj);

			}

			dibujarPantalla();

		}
