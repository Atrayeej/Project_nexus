function validate()
{
var name = document.getElementById('name');
var password = document.getElementById('password');
var email = document.getElementById('email');
var form = document.getElementById('form');
var errorElement = document.getElementById('error');

if(name.value == "" ||password.value=="")
{
   alert("No blank values allowed"); 
}
else
{
    
}
}


form.addEventListener('submit', (e) =>{
    let messages =[]
    if (password.Value.length <= 6){
        messages.push('password must be longer than 6 characters')
    }
    if (password.Value.length >= 20){
        messages.push('password must be less than 20 characters')
    }
}
)
