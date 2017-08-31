/* 

I built this login form to block the front end of most of my freelance wordpress projects during the development stage. 

This is just the HTML / CSS of it but it uses wordpress's login system. 

Nice and Simple

*/

function loginClicked(){
    var url = "https://server.ovass.com/oauth/token"
    var data = "grant_type=password&username="+ $("#email").val() +"&password="+$("#password").val();
    $.ajax({
        url: url,
        type: "POST",
        data: data,
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'  //for object property name, use quoted notation shown in second
        },
        success: function() {
            window.localStorage.setItem('ovannotate', 'success');
            window.localStorage.setItem('ovuser', $("#email").val());
            window.location.href = "/tool.html";
       },
      
        error: function() {
            window.localStorage.setItem('ovannotate', 'fail');
            alert("Login Failed");
        },
      });

}