import React from 'react'
import '../../assets/styles/Theme-login.css'

const LoginMain = ({ children }) => {
  return (
    <div>
        <main className='h-[94vh] w-screen flex'>
            <div className='w-1/2 bg-black text-white grid formDiv'>
                {children}
            </div>
            <div className='w-1/2 bg-white BgCustomLogin' />
        </main>
        <footer className="bg-black py-4 text-white text-center">
        <p>&copy; 2025 <a href="https://brainmeg.com">brainmeg</a>. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default LoginMain