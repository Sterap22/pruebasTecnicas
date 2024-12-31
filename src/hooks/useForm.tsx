import { useState } from 'react'

export const useForm =<T extends Object> (FormModel: T) => {
    const [state, setState] = useState(FormModel)

    const handlerChange = (name: string, value: keyof T) => {
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
