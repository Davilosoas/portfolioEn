function login() {
    return(
        <html>
            <body class="lgnBody"> 
                <main class="lgnMain">
                    <form action="" method="post">
                            <h1 class="lgnH1 text-3xl font-bold mt-10">
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
                            <section class="flex items-center  mt-0">
                                <input type="checkbox" class="">
                                
                                </input>

                                <span class=" text-gray-400">
                                    remember me
                                </span>
                            </section>
                            

                            <div class="center">
                                <button class="lgnBtn" disabled>
                                    LOGIN
                                </button>
                            </div>
                            
                            <section class="links">
                                <a  class="linkRgst">
                                    Don't have an account?
                                </a>
                                <a  class="linkPsw">
                                    Forgot your password?
                                </a>
                            </section>
                        
                    </form>
                </main>
            </body>
         </html>
    )     
} 
    
export default login;