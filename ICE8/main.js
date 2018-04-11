$(document).ready(function() {
    $("#firstName").blur(function(){
        if($("#firstName").val() == ""){
            $("#firstNameErr").css("display","block");
            $("#firstNameTitle").css("display","none");
        } else {
            $("#firstNameErr").css("display","none");
            $("#firstNameTitle").css("display","block");
        }
    });
    
    $("#lastName").blur(function(){
        if($("#lastName").val() == ""){
            $("#lastNameErr").css("display","block");
            $("#lastNameTitle").css("display","none");
        } else {
            $("#lastNameErr").css("display","none");
            $("#lastNameTitle").css("display","block");
        }
    });
    
    $("#psw").blur(function(){
        if($("#psw").val() == ""){
            $("#pswErr").css("display","block");
            $("#pswTitle").css("display","none");
        } else {
            $("#pswErr").css("display","none");
            $("#pswTitle").css("display","block");
        }
    });
    
    $("#pswConfirm").blur(function(){
        if($("#pswConfirm").val() != $("#psw").val()){
            $("#pswConfirmErr").css("display","block");
            $("#pswConfirmTitle").css("display","none");
        } else {
            $("#pswConfirmErr").css("display","none");
            $("#pswConfirmTitle").css("display","block");
        }
    });
});