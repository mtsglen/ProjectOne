  //bypass cors

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
 
//eventful api call   
var apiKey = "&app_key=8BZTgpMGJnMV5sF4";
var city = "Denver";
var lat;
var long;
var geoCode;
$("button").on("click", function(event) {
    console.log("click worked")

  var queryURL = "http://api.eventful.com/json/events/search?" + apiKey + "&location=" + city;
  $.ajax({
    
      url: queryURL,
      method: "GET"
    
      }).then(function(response) {
        var data = response;
        // console.log(JSON.parse(response))
        var result = JSON.parse(response);
        // console.log("results" + result);
        // console.log("data" + data);
        // console.log("data.length" + data.length);
     
        for (j=0; j < data.length; j++) {
            var row  = $("<tr>")
        
            var eventCity = $("<td>").text( result.events.event[j].city_name);
          console.log(result.events.event[j].city_name)
            lat = result.events.event[j].latitude;
          console.log(result.events.event[j].latitude)
            long = result.events.event[j].longitude;
          console.log(result.events.event[j].longitude)
            var eventUrl = $("<td>").text(result.events.event[j].url);
          console.log(result.events.event[j].url)
            var eventDescription = $("<td>").text( result.events.event[j].description);
          console.log(result.events.event[j].description)
            var eventTitle =  $("<td>").text ( result.events.event[j].title);
          console.log(result.events.event[j].title)
            geoCode =result.events.event[j].geocode_type;
          console.log(result.events.event[j].geocode_type)
            var eventVenueName =$("<td>").text( result.events.event[j].venue_name);
          console.log(result.events.event[j].venue_name)
            var eventVenueUrl =$("<td>").text( result.events.event[j].venue_url);
          console.log(result.events.event[j].venue_url)
            var eventZipCode = result.events.event[j].postal_code;
          console.log(result.events.event[j].postal_code)
            
            row.append(eventTitle,eventUrl,eventCity,eventVenueName,eventVenueUrl )
            
            $("#event").append(row);

        //   console.log(result.events.event[j].image.small.url)
        }
      });
    });  