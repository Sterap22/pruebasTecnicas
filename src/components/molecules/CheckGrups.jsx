import React from 'react'
import { UIInput } from '../atoms/UIInput'
import { UILabel } from '../atoms/UILabel'

export const CheckGrups = ({
    classCKCus='',
    classLabelCus='',
    classInputCus='',
    idCus='',
    typeCus='',
    tagCus=''
}) => {
  return (
    <div className={classCKCus}>
        <UIInput 
            idCus={idCus} 
            typeCus={typeCus}
            classCus={classInputCus}
            />
        <UILabel 
            tagCus={tagCus}
            classCus={classLabelCus}
            forCus={idCus}
            >
            Recuerdame
        </UILabel>
    </div>
  )
}
