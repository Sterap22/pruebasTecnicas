import { UIInput } from '../atoms/UIInput'
import { UILabel } from '../atoms/UILabel'
import { CheckGrupsProps } from '../../Interfaces/props/CheckGrups.props'

export const CheckGrups = ({
    classCKCus='',
    classLabelCus='',
    classInputCus='',
    idCus='',
    typeCus='',
    tagCus=''
}:CheckGrupsProps) => {
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
