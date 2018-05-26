var button=document.getElementById("bu");
var input=document.getElementById("ui");
button.addEventListener("click",function(){
	if(input.value.length!=0)
	{
		var list=document.createElement("li");
		list.appendChild(document.createTextNode(input.value));
		var uno=document.querySelector("ul");
		uno.appendChild(list);
		input.value="";
	}
})
input.addEventListener("keypress",function(e){
	if(input.value.length!=0 && e.which===13)
	{
		var list=document.createElement("li");
		list.appendChild(document.createTextNode(input.value));
		var uno=document.querySelector("ul");
		uno.appendChild(list);
		input.value="";
	}
})