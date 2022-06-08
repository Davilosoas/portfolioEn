function login() {
    return(
        <html class="overflow-hidden bg-cyan-500">
            <body class="lgnBody overflow-hidden "> 
                <main class="lgnMain bg-cyan-500  divide-transparent">
                    <form action="" method="post">
                            <h1 class="lgnH1 cursor-default text-5xl font-bold mt-10 text-white">
                                Welcome Back
                            </h1>

                            <section>
                                <label for="name" class="lbl text-white">
                                     Username*
                                </label>
                                <input type="text" placeholder="Enter your username here!" class="ipt"></input>
                            </section>

                            <section>
                                <label for="psw" class="lbl text-white border-gray-100">
                                    Password*
                                </label>
                                <input type="text" placeholder="Enter your password here!" class="ipt text-black"></input>
                            </section>
                            <section class="flex items-center  mt-0">
                                <input type="checkbox" class="">
                                
                                </input>

                                <span class=" text-gray-400 border-gray-100">
                                    remember me
                                </span>
                            </section>
                            

                            <div class="center">
                                <a  disabled class="lgnBtn bg-cyan-500 rounded text-white shadow-inner cursor-pointer hover:bg-cyan-400">
                                    LOGIN
                                </a>
                            </div>
                            
                            <section class="links">
                                <a href="/" class="linkRgst font-bold text-white">
                                    Don't have an account?
                                </a>
                                <a href="/" class="linkPsw font-bold text-white">
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
