import React from 'react'
import { UILabel } from '../atoms/UILabel'
import InputGrups from '../molecules/InputGrups'
import '../../assets/styles/Theme-login.css'
import { UIButton } from '../atoms/UIButton'
import { useForm } from '../../hooks/useForm'
import { ILogin } from '../../Interfaces/ILogin'
import { CheckGrups } from '../molecules/CheckGrups'

export const FormLogin = () => {
    const { handlerChange, password, email } = useForm(ILogin);

    const handlerSubmit = (e) =>{
        e.preventDefault();
        if (!password || !email) {
            return
        }else{
            localStorage.setItem('Token', 'sdfsd.dsfjsdo')
            window.location.href = '/home'
        }
        
    }

  return (
    <form className='p-4 w-[90%] formLogin' onSubmit={handlerSubmit}>
        <UILabel tagCus='h4' classCus='text-center p-3 mt-6' styleCus={{ fontSize: '2rem'}}>
            Iniciar sesión
        </UILabel>
        <InputGrups
            tagCus='span'
            classLabelCus='text-white'
            classDivCus='block p-4 w-[90%]'
            classInputCus='w-[100%] p-2 border border-gray-300 rounded-md text-black'
            typeCus='email'
            labelcus='Correo'
            placeholderCus='example@example.com'
            valueCus={email}
            styleLabelCus={{ fontSize: '15px' }}
            onChageCus={({target}) => { handlerChange('email', target.value) }}
        />
        <InputGrups
            tagCus='span'
            classLabelCus='text-white'
            classDivCus='block p-4 w-[90%]'
            classInputCus='w-[100%] p-2 border border-gray-300 rounded-md text-black'
            typeCus='password'
            labelcus='Contraseña'
            placeholderCus='********'
            valueCus={password}
            styleLabelCus={{ fontSize: '15px' }}
            onChageCus={({target}) => handlerChange('password', target.value)}
        />
        <CheckGrups 
            classCKCus='p-4 w-[90%] intems-left'
            classLabelCus='ml-2'
            classInputCus='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            idCus='ckRemember'
            typeCus='checkbox'
            tagCus='label'
        />
        <UIButton 
            classCus='bg-white text-black  min-w-[250px] p-2 rounded-md mt-4'
        >
            Iniciar sesión
        </UIButton>
    </form>
  )
}
