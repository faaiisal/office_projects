function contactForm(){


    var fristname = document.getElementById("fname");
    document.getElementById("show-fname").innerHTML=" Your Name :  " + fristname.value;
}


function lastName(){

    var LastName = document.getElementById("lname");
    document.getElementById("show-lname").innerHTML="  " + LastName.value;


}

function ShowEmail(){
    var Cemail = document.getElementById("conemail");
    document.getElementById("show-email").innerHTML="Your Email : " + Cemail.value;


}

function ShowPhone(){

    var Phonenum = document.getElementById("phonenum");
    document.getElementById("show-phonenum").innerHTML="Your Phone : " + Phonenum.value;

}


function ShowMessage(){

    var message = document.getElementById("con-msg");
    document.getElementById("show-msg").innerHTML= "Your Message : " +  message.value;

}

$(document).ready(function(){

        $("#contact-form").click(function(){
                $("#form-enq").show();

        });

});

