import { useState } from 'react';
import { IThemeProps } from '../../Interfaces/props/Theme.props'
import '../../assets/styles/Theme-Home.css'
import { UIModal } from '../atoms/UIModal'
import { ReadList } from '../organisms/ReadList';

const HomeMain = ({children}:IThemeProps) => {
  const [showModal, setShowModal] = useState(false); // Mostrar Modal

  return (
    <div className='w-full bg-black h-auto'>
        <header className='h-[100px] text-white text-right'>
            header
            <div className='ml-4 BtnMenu w-[30px] h-[30px]' onClick={()=>{setShowModal(!showModal)}}/>
        </header>
        <main className='h-auto min-h-[85vh] w-full'>
          <UIModal isOpen={showModal} onClickCus={()=>{setShowModal(!showModal)}}>
              <ReadList/>
          </UIModal>
            {children}
        </main>
        <footer className="w-full bg-black py-4 text-white text-center">
        <p>&copy; 2025 <a href="https://brainmeg.com">brainmeg</a>. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default HomeMain