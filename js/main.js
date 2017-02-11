$(document).ready(function(){
	var searchButton = $('#header .input-group-addon');
	var searchInput = $('#searchInput');
	var container = $('#content .container');
	
	//ajax call parameters
	var apiUrl = 'https://en.wikipedia.org/w/api.php';
	var apiData = {
		action: 'opensearch',
		limit: 10,
		exsentences: 1,
		namespace: 0,
		format: 'json'
	}
	
	//handling submit event
	function handleSubmit(){
		
		//clear existing content
		container.html('');
		
		//get the input field and attach it to the search data
		apiData.search = searchInput.val();

		$.ajax({
			url: apiUrl,
			method: 'GET',
			dataType: 'jsonp',
			data: apiData,
			success: handleData
		})
	}
	
	//constructing the html element
	function handleData(data) {
		console.log(data);
		
		var title = '';
		var summary = '';
		var link = '';
		var element = '';
		for(var i = 0; i < data[1].length; i++) {
			title = data[1][i];
			summary = data[2][i];
			link = data[3][i];
			
			element = '';
			element += '<div class="row entry"><a href="' + link + '" target="_blank">';
			element += '<h2>' + title + '</h2>';
			element += '<p>' + summary + '</p>';
			element += '</a></div>';
			
			console.log(element);
			container.append(element);
		}
	}
	
	//handle submit when "enter" key pressed
	$('form').on('submit', function(event){
		event.preventDefault();
		handleSubmit();
	})
	
	//handle submit when search button clicked
	searchButton.on('click', function(){
		handleSubmit();
	})
})