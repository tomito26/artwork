$(document).ready(function(){
    $("#form1").submit(function(event){
  
      var name= $("#n").val();
      var email= $("#m").val();
      var comment= $("#comment").val();
      alert(name + ", we have received your message.Thank you for reaching out to us.")
})
})