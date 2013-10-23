//2013.Oct
//Web3002 Midterm 
//Min-Sung Kwak
//Joori Lee
//Maxine Kim


$('#stress').hide();
$('#aging').hide();
$('#immune').hide();
$('#tired').hide();
$('#skin').hide();

$('#stress_select').hide();
$('#aging_select').hide();
$('#immune_select').hide();
$('#tired_select').hide();
$('#skin_select').hide();


$('#jars #stress').mouseover(function() {	
	$('#stress').fadeIn(2000);
	$('#stress_select').show(0);
});

$('#jars img').mouseout(function() {	
	$('#stress').fadeOut(2000);
	$('#stress_select').hide();
});

$('#jars #aging').mouseover(function() {	
	$('#aging').fadeIn(2000);
	$('#aging_select').show(0);
});

$('#jars #aging').mouseout(function() {	
	$('#aging').fadeOut(2000);
	$('#aging_select').hide();
});

$('#jars #immune').mouseover(function() {	
	$('#immune').fadeIn(2000);
	$('#immune_select').show(0);
});

$('#jars #immune').mouseout(function() {	
	$('#immune').fadeOut(2000);
	$('#immune_select').hide();
});

$('#jars #tired').mouseover(function() {	
	$('#tired').fadeIn(2000);
	$('#tired_select').show(0);
});

$('#jars #tired').mouseout(function() {	
	$('#tired').fadeOut(2000);
	$('#tired_select').hide();
});

$('#jars #skin').mouseover(function() {	
	$('#skin').fadeIn(2000);
	$('#skin_select').show(0);
});

$('#jars #skin').mouseout(function() {	
	$('#skin').fadeOut(2000);
	$('#skin_select').hide();
});





