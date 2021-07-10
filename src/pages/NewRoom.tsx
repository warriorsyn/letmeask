import { Link } from 'react-router-dom';

import IlustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
 

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../contexts/auth';

export function NewRoom() {
    const {  user } = useAuth();
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
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
            
                    <form>
                        <input 
                            type="text" 
                            placeholder="Nome da sala"
                        />

                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente ? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}