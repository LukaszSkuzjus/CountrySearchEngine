$(function() {
	
	var url = 'https://restcountries.eu/rest/v2/name/';
	var countriesList = $('#countries');

	$('#search').click(searchCountries);

	function searchCountries() {
  		var countryName = $('#country-name').val();
  		if(!countryName.length) countryName = 'Poland';
  		$.ajax({
	  		url: url + countryName,
	  		method: 'GET',
	  		success: showCountriesList
  		});
	}

	function showCountriesList(resp) {
	  	countriesList.empty();
		
		resp.forEach(function(item){
		
			var div =$("<div>");
			var divBackgroundInformation =$("<div>").text("Background Information :").css({"background-color": "blue", "width": "400px","margin":"auto","margin-left":"20px"});
			var divFlagAndName=$("<div>");
			var urlOfTheFlag= "https://restcountries.eu/data/" + item.alpha3Code.toLowerCase() + ".svg";
			var imgFlag=$("<img>").attr("src", urlOfTheFlag);
			
			var spanName= $("<span>").text(item.name.toUpperCase()).css({"font-size":"25px","color":"#0E05CF","display":"block","text-align":"center","margin":"12px 0"});
			var divSeparation =$("<div>").css({"margin-bottom":"40px"});
			var divCapital=$("<div>");
			var spanCap=$("<span>").text("Capital  ").css({"display":"inline-block","background-color":"#FFCB28","width":"100px","font-weight":"bold"});
			var divArea=$("<div>");
			var spanA=$("<span>").text("Area  ").css({"display":"inline-block","background-color":"#FFCB28","width":"100px","font-weight":"bold"});
			var divAltSpellings=$("<div>");
			var spanAlt=$("<span>").text("AltSpellings  ").css({"display":"inline-block","background-color":"#FFCB28","width":"100px","font-weight":"bold"});
			var divBorders=$("<div>");
			var divBordersForBg=$("<div>").css({"display":"inline-block","background-color":"#FFFF9D","font-weight":"bold","border":"1px solid #826d37","overflow":"hidden"});
			var spanBor=$("<span>").text("Borders  ").css({"display":"inline-block","background-color":"#FFCB28","width":"100px","font-weight":"bold","text-align":"center"});
			var divCurrencies=$("<div>");
			var spanCur=$("<span>").text("Currencies  ").css({"display":"inline-block","background-color":"#FFCB28","width":"100px","font-weight":"bold"});
			var divNativeName=$("<div>");
			var spanNat=$("<span>").text("Native name  ").css({"display":"inline-block","background-color":"#FFCB28","width":"100px","font-weight":"bold"});
			var divPopulation=$("<div>");
			var spanPop=$("<span>").text("Population  ").css({"display":"inline-block","background-color":"#FFCB28","width":"100px","font-weight":"bold"});
			var divRegion=$("<div>");
			var spanReg=$("<span>").text("Region  ").css({"display":"inline-block","background-color":"#FFCB28","width":"100px","font-weight":"bold"});
			var divTimezones=$("<div>");
			var spanTime=$("<span>").text("Timezones ").css({"display":"inline-block","background-color":"#FFCB28","width":"100px","font-weight":"bold"});
	

   			var spanCapital = $("<span>").text(item.capital).css({"display":"inline-block","background-color":"#FFFF9D","width":"200px","font-weight":"bold","border":"1px solid #826d37"});
   			var spanArea = $("<span>").text(item.area +" sq.km").css({"display":"inline-block","background-color":"#FFFF9D","width":"200px","font-weight":"bold","border":"1px solid #826d37"});
   			var spanAltSpellings = $("<span>").text(item.altSpellings).css({"display":"inline-block","background-color":"#FFFF9D","width":"200px","font-weight":"bold","border":"1px solid #826d37"});
   			var spanBorders = $("<span>").text(item.borders ).css({"max-width":"200px","font-weight":"bold"});
   			var spanCurrencies = $("<span>").text(item.currencies[0].name).css({"display":"inline-block","background-color":"#FFFF9D","width":"200px","font-weight":"bold","border":"1px solid #826d37"});
   			var spanNativeName = $("<span>").text(item.nativeName).css({"display":"inline-block","background-color":"#FFFF9D","width":"200px","font-weight":"bold","border":"1px solid #826d37"});
   			var spanPopulation = $("<span>").text(item.population ).css({"display":"inline-block","background-color":"#FFFF9D","width":"200px","font-weight":"bold","border":"1px solid #826d37"});
   			var spanRegion = $("<span>").text(item.region).css({"display":"inline-block","background-color":"#FFFF9D","width":"200px","font-weight":"bold","border":"1px solid #826d37"});
   			var spanTimezones = $("<span>").text(item.timezones).css({"display":"inline-block","background-color":"#FFFF9D","width":"200px","font-weight":"bold","border":"1px solid #826d37","overflow":"hidden"});

   			divBordersForBg.append(spanBorders);

   			$("#countries").append(div).append(divFlagAndName).append(imgFlag).append(spanName);
   			$("#countries").append(div).append(divCapital).append(spanCap).append(spanCapital);
   			$("#countries").append(div).append(divArea).append(spanA).append(spanArea);
   			$("#countries").append(div).append(divCurrencies).append(spanCur).append(spanCurrencies);
   			$("#countries").append(div).append(divNativeName).append(spanNat).append(spanNativeName);
   			$("#countries").append(div).append(divPopulation).append(spanPop).append(spanPopulation);
   			$("#countries").append(div).append(divRegion).append(spanReg).append(spanRegion);
   			$("#countries").append(div).append(divSeparation);
   			
   			
		});
	}


});