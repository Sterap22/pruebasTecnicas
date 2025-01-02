import { ModalPorps } from "../../Interfaces/props/Modal.props"
import '../../assets/styles/Modal.css'

export const UIModal = ({ isOpen= false, children= null, onClickCus = () => {} }: ModalPorps) => {
  return (
    isOpen && (
        <div className="fixed inset-0 flex items-center justify-end z-50 bg-slate-950/75" onClick={()=>{onClickCus()}}>
          <div className="bg-white p-6 shadow-lg w-[30%] h-[100vh] modal">{children}</div>
        </div>
      )
  )
}
