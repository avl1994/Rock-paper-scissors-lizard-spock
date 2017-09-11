var posibilidades = {
	"rock": 
	{
		"gana": ["scissors","lizard"],
		"empata": ["rock"],
		"pierde": ["paper","spock"]
	},
	"paper": 
	{
		"gana": ["rock","spock"],
		"empata": ["paper"],
		"pierde": ["lizard","scissors"]
	},
	"scissors": 
	{
		"gana": ["paper","lizard"],
		"empata": ["scissors"],
		"pierde": ["spock","rock"]
	},
	"lizard": 
	{
		"gana": ["paper","spock"],
		"empata": ["lizard"],
		"pierde": ["rock","scissors"]
	},
	"spock": 
	{
		"gana": ["scissors","rock"],
		"empata": ["spock"],
		"pierde": ["paper","lizard"]
	}
};

$(function()
{
	$("#jugador1 .opcion img").bind("click",function()
	{
		var opcion = $('#tipo_juego select option:selected').val();
		if(opcion == "aleatorio")			
		{
			var opcion_cpu = escoger_opcion_aleatoria();
			var opcion_jugador = $(this).attr('id');
			$("#jugador1 #opcion_jugador1").html("<img src='img/"+opcion_jugador+".png'>");
			$("#jugador2 #opcion_jugador2").html("<img src='img/"+opcion_cpu+".png'>");
			if (jQuery.inArray( opcion_cpu, posibilidades[opcion_jugador]["gana"] ) >= 0 )
			{
				$("#resultado_juego span").html("You won! "+opcion_jugador + " wins to "+opcion_cpu);
			}
			else if(jQuery.inArray( opcion_cpu, posibilidades[opcion_jugador]["empata"] ) >= 0)
			{
				$("#resultado_juego span").html("Draw! "+opcion_jugador + " draws to "+opcion_cpu);
			}
			else
			{
				$("#resultado_juego span").html("You loss! "+opcion_jugador + " losses to "+opcion_cpu);
			}
		}
		else
		{
			var opcion_jugador = $(this).attr('id');
			var opcion_ganadora = posibilidades[opcion_jugador]["pierde"][Math.floor(2*Math.random())];
			$("#resultado_juego span").html("You loss! "+opcion_jugador + " losses to "+opcion_ganadora);
			$("#jugador1 #opcion_jugador1").html("<img src='img/"+opcion_jugador+".png'>");
			$("#jugador2 #opcion_jugador2").html("<img src='img/"+opcion_ganadora+".png'>");
		}
	});
	
	function escoger_opcion_aleatoria ()
	{
		var keys = Object.keys(posibilidades);
		var opcion_aleatoria = Math.floor(keys.length * Math.random());
		return keys[opcion_aleatoria];
	}
});

function pickRandomProperty() {
    var result;
    var count = 0;
    for (var prop in posibilidades)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}
