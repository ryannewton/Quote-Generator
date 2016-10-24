
$(document).ready(function() {
	$("#quote-button").on("click", function() {
		var url = "https://andruxnet-random-famous-quotes.p.mashape.com/cat=";

		var callback = function(json) {
			$("#quote-text").html("<p style='font-style: italic'>\""+json.quote+"\"</p>");
			$("#quote-author").html("<p style='float: right'>-"+json.author+"</p>")
		}

		$.ajax({
			url: url,
			dataType: 'json',
			headers: {
				"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V"
			},
			success: callback
		});
		
	})
});
