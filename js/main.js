$(document).ready(function(){
	var searchButton = $('#header .input-group-addon');
	var searchInput = $('#searchInput');
	
	var apiUrl = 'http://en.wikipedia.org/w/api.php';
	var apiData = {
		action: 'opensearch',
		limit: 10,
		exsentences: 1,
		namespace: 0,
		format: 'json'
	}
	
	
	//attach a click event to the search button
	searchButton.on('click', function(){

		//get the input field and attach it to the search data
		apiData.search = searchInput.val();

		$.ajax({
			url: apiUrl,
			method: 'GET',
			dataType: 'jsonp',
			data: apiData,
			success: handleData
		})
		
	})
})