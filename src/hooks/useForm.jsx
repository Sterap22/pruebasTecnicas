import { useState } from 'react'

export const useForm = ({ FormModel }) => {
    const [state, setState] = useState(FormModel)

    const handlerChange = (name, value) => {
        setState({
            ...state,
            [name]: value
        })
    }

  return {
    ...state,
    state,
    setState,
    handlerChange
  }
}
