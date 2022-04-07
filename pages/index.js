function Home() {
    return (
    <html>
        <head>
            link
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
        </body>
        
    </html>
    )
}

export default Home;