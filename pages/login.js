function login() {
    return(
        <html>
            <body class="lgnBody"> 
                <main class="lgnMain">
                    <form action="" method="post">
                            <h1 class="lgnH1 text-3xl font-bold mt-10">
                                Bem Vindo
                            </h1>

                            <section>
                                <label for="name" class="lbl">
                                    Nome de usuário*
                                </label>
                                <input type="text" placeholder="Enter your username here." class="ipt"></input>
                            </section>

                            <section>
                                <label for="psw" class="lbl">
                                    Senha*
                                </label>
                                <input type="text" placeholder="Enter your password here." class="ipt"></input>
                            </section>
                            <section class="flex items-center  mt-0">
                                <input type="checkbox" class="">
                                
                                </input>

                                <span class=" text-gray-400">
                                    Lembrar de mim
                                </span>
                            </section>
                            

                            <div class="center">
                                <button class="lgnBtn">
                                    LOGIN
                                </button>
                            </div>
                            
                            <section class="links">
                                <a href="/register.html" class="linkRgst">
                                    Não tem uma conta?
                                </a>
                                <a href="/changePsw.html" class="linkPsw">
                                    esqueceu sua senha?
                                </a>
                            </section>
                        
                    </form>
                </main>
            </body>
         </html>
    )     
} 
    
export default login;