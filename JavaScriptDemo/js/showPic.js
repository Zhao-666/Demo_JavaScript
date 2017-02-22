function showPic(whichpic) {
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src", source);
	if(document.getElementById("description")) {
		var titleholder = document.getElementById("description");
		var title = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : ""
		if(titleholder.firstChild.nodeType == 3) {
			titleholder.firstChild.nodeValue = title;
		}
	}
	return true;
}

function countBodyChild() {
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
}

function popUp(winURL) {
	window.open(winURL, "popup", "width=320,height=480");
}

function prepareLinks() {
	if(!document.getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++) {
		if(links[i].getAttribute("class") == "popup") {
			links[i].onclick = function() {
				popUp(this.getAttribute("href"))
				return false;
			}
		}
	}
}

function prepareGallary() {
	if(!document.getElementById) {
		return false;
	}
	if(!document.getElementsByTagName) {
		return false;
	}
	if(!document.getElementById("imagegallery")) {
		return false;
	}
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return !showPic(this);
		}
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}

}

function preparePlaceholder() {
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var img = document.createElement("img");
	img.setAttribute("id", "placeholder");
	img.setAttribute("alt", "A Picture");
	img.setAttribute("src", "img/p1.png");
	var para = document.createElement("p");
	para.appendChild(img);

	var para2 = document.createElement("p");
	para2.setAttribute("id", "description")
	var txt = document.createTextNode("Choose a picture");
	para2.appendChild(txt);

	//document.body.appendChild(para);
	//document.body.appendChild(para2);

	var gallery = document.getElementById("imagegallery");
	insertAfter(para, gallery);
	insertAfter(para2, para);

}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent(prepareGallary);
addLoadEvent(preparePlaceholder);