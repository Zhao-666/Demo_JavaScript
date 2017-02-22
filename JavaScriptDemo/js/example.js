function insertParagraph(text){
	var str = "<p>";
	str += text;
	str +="</p>"
	document.write(str)
}

window.onload=function(){
	var para = document.createElement("p");
	var txt = document.createTextNode(" This is ");
	para.appendChild(txt);
	var em = document.createElement("em");
	var txt2 = document.createTextNode(" My ");
	em.appendChild(txt2);
	para.appendChild(em);
	var txt3 = document.createTextNode(" content.");
	para.appendChild(txt3);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
}
