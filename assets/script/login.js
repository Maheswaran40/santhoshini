function move_signup(){
    window.location.href="./assets/pages/signup.html"
}

function signUp(e){
    e.preventDefault()
    let username=document.getElementById("username").value
    let useremail=document.getElementById("useremail").value
    let userpass=document.getElementById("userpass").value
    console.log(username,useremail,userpass)
    localStorage.setItem('username',username)
    localStorage.setItem('useremail',useremail)
    localStorage.setItem('userpass',userpass)
    alert("signup successfully")
    window.location.href="../../index.html"
}


function deleteAcc(){
    localStorage.clear()
}

function loginFun(e){
    e.preventDefault()

    let user=document.getElementById("email").value
    let pass=document.getElementById("pass").value
    
    let userData_useremail=localStorage.getItem("useremail")
    let userData_password=localStorage.getItem("userpass")
    
    if(user == userData_useremail && pass == userData_password){
        window.location.href="./assets/pages/Home.html"
    }
    else{
        alert("email or password is invalid")
    }
}