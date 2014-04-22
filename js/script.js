/*This is going to contain any JS code to interact with the local data
  It might also work with other scripts to call other functions to update via PHP or Ruby*/
/*
  Slidemenu
*/
function changeClass() {
	document.getElementById("1").className = "transition-page-hidden";
	document.getElementById("2").className = "transition-page";
}

document.addEventListener("DOMComponentsLoaded", function(){
		var deck = document.getElementById("views");
		var login = document.getElementById("login");
		login.addEventListener('click',function(){
			deck.nextCard();
		});
		
});
$(document).ready(function(){
	$("#update").on('click', function(){
		$.simpleWeather({
			location: $("#area").val(),
			woeird: '',
			unit: 'f',
			success: function(weather){
				html = '<h2>'+weather.city+', '+weather.region+'</h2>';
				html+= '<p>'+weather.temp+'&deg; '+weather.units.temp+'<br/><span>'+weather.currently+'</span></p>';
				html+= '<a href="'+weather.link+'">View Forecast</a>';

				$("#weather").html(html);
			},
			error: function(error) {
				$("#weather").html("<p>"+error+"</p>");
			}
		});
	});
});

function updateWeather(){
	
}
/*

JSON weather stuff
function getWeather(){
	var URLWeather = "http://api.openweathermap.org/data/2.5/find?q=Fairfax&mode=json";
	var JSONWeather = jQuery.parseJSON(URLWeather);
	showWeather(JSONWeather);
}
function showWeather(JSONWeather){
	 document.getElementById(temp).innerHTML="JSONWeather.temp";
}*/
