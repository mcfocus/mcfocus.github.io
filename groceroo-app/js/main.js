$(document).ready(function(){

	$("#submit").on("click", function() {
		
		var notifTxt = 'No help requests for this list.';
		var type_var = 'self';
		if ($("#myself").is(":checked")) {	
			/**
			$("#dummy_list").html("<a id='listitem' href='#''><i class='icon-chevron-right'></i> For Thanksgiving</a>");
			$("#listnew").css("background", "rgba(255, 165, 0, 0.1)");
			$("#dummy_list").css("background", "rgba(255, 165, 0, 0.6)");
			$("#alert").css("display", "none");
			**/
			
			$("#alert").css("display", "none");

		} else if ($("#request").is(":checked")) {
		
			$("#helptext").text('Request help from...');
			//$("#help").css("display", "block");
			//$("#grey").css("display", "block");
			$('#help').bPopup({
			});
			$("#alert").css("display", "none");
			
			type_var = 'shared';
			
		} else {

			$("#alert").css("display", "block");
			
		}
		//TODO: consider also changing class of button to something else you cannot click again until body text has been modified
			if(currentList>=0){
				//if we are on an existing list (modifying a list)
				
					
				//update sidebar's div for currentList's name
				if(type_var == 'self') {
					document.getElementById('listitem'+currentList).innerHTML = "<img src=\"img/green-arrow.png\" height=\"10\" width=\"10\"  ></img><i class=\"icon-chevron-right\"></i> "+ document.getElementById('listname').value + " </a>";		
					notifTxt = 'No help requests for this list.';
				} else {
					document.getElementById('listitem'+currentList).innerHTML = "<img src=\"img/blue-arrow.png\" height=\"10\" width=\"10\"  ></img><i class=\"icon-chevron-right\"></i> "+ document.getElementById('listname').value + " </a>";		
					notifTxt = 'No one has agreed to help with this list... yet!';
				};
				
				
				lists[currentList] = {listname: document.getElementById('listname').value, 
					storename: document.getElementById('storename').value,
					shoptime: document.getElementById('shoptime').value,
					things2buy: document.getElementById('thingstobuy').value,
					type: type_var,
					notif: notifTxt
				};
				
				changeList(currentList);
					
			} else if(currentList==-1) {
				//if we are making a new list
				//alert("new list!");
				
				var shopList = document.createElement("li");
				if(type_var == 'self') {
					shopList.innerHTML = "<a id=\"listitem"+ numLists+ "\" class=\"listitem\" href=\"javascript:changeList(" + numLists + ")\"><img src=\"img/green-arrow.png\" height=\"10\" width=\"10\"  ></img><i class=\"icon-chevron-right\"></i> " +document.getElementById('listname').value+ " </a>";
					notifTxt = 'No help requests for this list.';
				} else {
					shopList.innerHTML = "<a id=\"listitem"+ numLists+ "\" class=\"listitem\" href=\"javascript:changeList(" + numLists + ")\"><img src=\"img/blue-arrow.png\" height=\"10\" width=\"10\"  ></img><i class=\"icon-chevron-right\"></i> " +document.getElementById('listname').value+ " </a>";
					notifTxt = 'No one has agreed to help with this list... yet!';
				};
				var shopListBar = document.getElementById("sidebar");
				shopListBar.insertBefore(shopList, shopListBar.childNodes[4]);
				lists[numLists] = { listname: document.getElementById('listname').value, 
					storename: document.getElementById('storename').value,
					shoptime: document.getElementById('shoptime').value,
					things2buy: document.getElementById('thingstobuy').value,
					type: type_var,
					notif: notifTxt
					};
				changeList(numLists); //auto-swap to newly made list
				numLists++;
			}
		$("#submit").text('Saved!'); 
		
	});
	
	$("#close").on("click", function() {
	
		$('#help').bPopup().close();
		$("#help").css("display", "none");
		$("#grey").css("display", "none");
	});	
	
	$("#submit2").on("click", function() {
	
		$('#help').bPopup().close();
	
		$("#help").css("display", "none");
		$("#grey").css("display", "none");
	  $("#dummy_list").html("<a id='listitem' href='#''><i class='icon-chevron-right'></i> For Thanksgiving (request)</a>");
		//alert("Your requests have been sucessfully submitted!");
		
		//TODO: consider also changing class of button to something else you cannot click again until body text has been modified
		$("#submit").text('Saved!');
		
	});
	
	$("#board").keypress(function() {
		$("#submit").text('Submit');
	});
		
		
	$("#friendSearchResultDiv0").on("click", function() {
		document.getElementById("friendSearchResultBox2").style.display = 'none';
		$("#dummy_div").html("<img height='34' width='34'src='connor.png'><b>&#160;&#160;&#160;Connor Lemos</b>");
	
	});
		
	

});
