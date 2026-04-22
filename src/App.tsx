import { BackgroundMosaic } from './components/BackgroundMosaic';
import { LoginForm } from './components/LoginForm';
import { NetflixLogo } from './components/NetflixLogo';

export default function App() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center items-center font-sans">
      <BackgroundMosaic />
      <NetflixLogo />
      
      <div className="flex-1 w-full flex justify-center items-center px-4 py-20">
        <LoginForm />
      </div>

      <footer className="relative z-20 w-full bg-black/75 backdrop-blur-md border-t border-neutral-800/50 py-8 px-8 md:px-20 mt-auto">
        <div className="max-w-[1000px] mx-auto text-neutral-400 text-sm">
          <p className="mb-6 hover:underline cursor-pointer">Dúvidas? Ligue 0800 591 8942</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <span className="hover:underline cursor-pointer">Perguntas frequentes</span>
            <span className="hover:underline cursor-pointer">Central de Ajuda</span>
            <span className="hover:underline cursor-pointer">Termos de Uso</span>
            <span className="hover:underline cursor-pointer">Privacidade</span>
            <span className="hover:underline cursor-pointer">Preferências de cookies</span>
            <span className="hover:underline cursor-pointer">Informações corporativas</span>
          </div>
          
          <div className="relative inline-block mb-4">
            <select className="bg-transparent border border-neutral-600 rounded px-4 py-2 text-white outline-none cursor-pointer">
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </footer>
    </main>
  );
}

