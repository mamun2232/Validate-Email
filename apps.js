const login = () =>{
         const emailFiled = document.getElementById('email')
         const email = emailFiled.value
         
         const passwordFiled = document.getElementById('password')
         const password = passwordFiled.value;
         console.log(email , password);
         ValidateEmail(email , password)
         validatePassword(password)
      
}



  const ValidateEmail = (email , password) =>{
            const emailChack = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            const passchack = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/


          if (emailChack.test(email) && passchack.test(password)){
           
                    document.getElementById('valid').innerText = 'Your Email or Password Is okay, Happy Browsing..'
          
           }
           else{
                    document.getElementById('valid').innerText = "You have entered an invalid password or email address!"
          
          
            }

  }

  /* const validatePassword = (password)=>{
            

            if(passchack.test(password)){
                    document.getElementById('pass').innerText = 'Your Password Is okay, Happy Browsing..'

            }
            else{
                    document.getElementById('pass').innerText = "You have entered an invalid Password address!"
          
          
            }
  } */