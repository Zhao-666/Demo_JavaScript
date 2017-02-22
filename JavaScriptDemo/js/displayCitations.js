function displayCitations(){
	if(!document.getElementsByTagName()) return false;
	var quotes = document.getElementsByTagName("blockquote");
	for(var i = 0;i<quotes.length;i++){
		if(!quotes[i].getAttribute("cite")){
			continue;
		}
		var url = quotes[i].getAttribute("cite");
		
	}
}
