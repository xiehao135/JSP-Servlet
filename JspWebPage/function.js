function checkBlank()
{
	var username;
	var pwd;
	username = document.getElementById("user").value;
	pwd = document.getElementById("pass").value;
	if(username == "")
		document.getElementById("user").style.backgroundColor = "#fa968e";
	if(pwd == "")
		document.getElementById("pass").style.backgroundColor = "#fa968e";
	if(username != "" && pwd != "")
	{
		document.getElementById("inputbottom").type="submit";
		document.getElementById("formID").method = "POST";
		document.getElementById("formID").action = "handlelogin.jsp";
	}
}