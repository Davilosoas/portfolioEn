function Home() {
    return (
    <html>
        <head>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            
         </link>
        </head>
            
        <body> 
             <main>
               <form action="" method="post">
                    <h1>
                        Welcome Back
                    </h1>
                    <section>
                        <label for="name" class="lbl">
                            Username*
                        </label>
                        <input type="text" placeholder="Enter your username here." class="ipt"></input>
                    </section>
                    <section>
                        <label for="psw" class="lbl">
                            Password*
                        </label>
                        <input type="text" placeholder="Enter your password here." class="ipt"></input>
                    </section>
                    <button type="checkbox" class="check">
                    
                    </button>
                    <span class="checkLbl">
                        remember me
                    </span>
                    <div class="center">
                        <button class="lgnBtn">
                            LOGIN
                        </button>
                    </div>
                    <section class="links">
                        <a href="/register.html" class="linkRgst">
                            Don't have an account?
                        </a>
                        <a href="/changePsw.html" class="linkPsw"> 
                            Forgot your password?
                        </a>
                    </section>
                 </form>
             </main>
             <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">    
             
             </script>
        </body>
        
    </html>
    )
}

export default Home;