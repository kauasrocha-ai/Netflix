/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Facebook } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-20 w-full max-w-[450px] min-h-[560px] p-[60px_68px_40px] rounded-md bg-black/75 shadow-2xl self-center"
      id="login-container"
    >
      <h2 className="text-3xl font-bold mb-8 text-white" id="form-title">Entrar</h2>
      
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input
            type="text"
            id="email-input"
            placeholder="Email ou número de telefone"
            className="w-full h-14 px-5 py-4 rounded bg-[#333] text-white border-none focus:bg-[#454545] focus:border-b-2 focus:border-b-[#e87c03] transition-all outline-none placeholder:text-[#8c8c8c]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocusedEmail(true)}
            onBlur={() => setIsFocusedEmail(false)}
            autoComplete="off"
          />
        </div>

        <div className="relative">
          <input
            type="password"
            id="password-input"
            placeholder="Senha"
            className="w-full h-14 px-5 py-4 rounded bg-[#333] text-white border-none focus:bg-[#454545] focus:border-b-2 focus:border-b-[#e87c03] transition-all outline-none placeholder:text-[#8c8c8c]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
          />
        </div>

        <button 
          type="submit"
          id="login-button"
          className="w-full py-4 mt-6 rounded font-bold text-white bg-[#E50914] hover:bg-[#C11119] transition-colors duration-200 text-lg shadow-lg active:scale-[0.98]"
        >
          Entrar
        </button>

        <div className="flex items-center justify-between mt-2 text-xs text-[#b3b3b3]">
          <div className="flex items-center space-x-1">
            <input 
              type="checkbox" 
              id="remember-me" 
              className="w-4 h-4 rounded bg-[#737373] accent-gray-500 cursor-pointer"
              defaultChecked
            />
            <label htmlFor="remember-me" className="cursor-pointer hover:underline transition-colors">Lembre-se de mim</label>
          </div>
          <a href="#" className="hover:underline transition-colors">Precisa de ajuda?</a>
        </div>
      </form>

      <div className="mt-16 space-y-3">
        <p className="text-[#737373]">
          Novo por aqui?{' '}
          <a href="#" className="text-white hover:underline font-medium">Assine agora</a>.
        </p>
        
        <p className="text-[13px] text-[#737373] leading-tight">
          Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. 
          <a href="#" className="text-[#0071eb] hover:underline ml-1">Saiba mais.</a>
        </p>
      </div>
    </motion.div>
  );
};
