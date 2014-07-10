$( document ).ready(function() {
  // Add the names of everyone at your table   
	var friends = ['Alex', 'Elyse', 'Mae', 'Sartaj'];

	var list = "";

	// Create your for loop here
	// HINT: the string should look like '<li>' + friends[x] + "</li>" + ....

	for(var i = 0; i < friends.length; i++) {
		list += "<li>"+ friends[i] + '<button data-id="' + i + '">remove</button> '+'</li>' ;
	}

	var removeFriend = funciton(index) {
		friends.splice(index, 1);
		
	}

	list = list + "";

	//

	$("#namebutton").on('click', function(e) {
		e.preventDefault();
		name = $("#addname").val();
		list += "<li>"+ name + '<button data-id="' + name + '">remove</button> '+'</li>';
		$('#list').html(list);
	});

	//

	$(this).on('click', function() {
		removeFriend($(this).attr("data-id");
	}


	

	console.log(list);
	console.log($('.output'));
	// Use jQuery to select the body tag on the index and append the finish table string
	$('#list').html(list);
});