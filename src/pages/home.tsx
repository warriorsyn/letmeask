import IlustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import GoogleIcon from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

import '../styles/auth.scss';
export function Home() {
    const history = useHistory();
    const { signInWithGoogle, user } = useAuth();

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        } 

        history.push('/rooms/new');  
    }

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

                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={GoogleIcon} alt="Logo do google" />
                        Crie sua sala pelo google
                    </button>
                    
                    <div className="separator">Ou entre em uma sala</div>
                    
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                        />

                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                    
                </div>
            </main>
        </div>
    )
}