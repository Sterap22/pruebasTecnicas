import { IThemeProps } from '../../Interfaces/props/Theme.props'

const HomeMain = ({children}:IThemeProps) => {
  return (
    <div className='w-full bg-black h-auto'>
        <header className='h-[100px] text-white text-right'>
            header
        </header>
        <main className='h-auto min-h-[85vh] w-full'>
            {children}
        </main>
        <footer className="w-full bg-black py-4 text-white text-center">
        <p>&copy; 2025 <a href="https://brainmeg.com">brainmeg</a>. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default HomeMain