import IlustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import GoogleIcon from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={IlustrationImg} alt="Ilustração de perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiencia em tempo real</p>
            </aside>
            
            <main>
                <div className="main-content">
                    <img src={LogoImg} alt="Letmeask" />

                    <button className="create-room">
                        <img src={GoogleIcon} alt="Logo do google" />
                        Crie sua sala pelo google
                    </button>
                    
                    <div className="separator">Ou entre em uma sala</div>
                    
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                        />

                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                    
                </div>
            </main>
        </div>
    )
}