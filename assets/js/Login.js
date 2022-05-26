function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("pass").value;	

			if(usuario == "Cr.lopezv" && Contraseña == "12345")
			{
				alert("Usuario y Contraseña validos");
			}
			else
			{
				alert("Ha ocurrido un error en el sistema. Intente más tarde.");
			}
		}