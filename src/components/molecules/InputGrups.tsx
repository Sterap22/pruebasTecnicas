import { UILabel } from '../atoms/UILabel'
import { UIInput } from '../atoms/UIInput'
import { InputGrupsProps } from '../../Interfaces/props/InputGrups.porps';

const InputGrups = ({
    classDivCus = '',
    classLabelCus  =  '',
    classInputCus =  '',
    placeholderCus = '',
    styleLabelCus = {},
    styleInputCus = {},
    styleDevCus = {},
    onChageCus = () => {},
    labelcus = '',
    tagCus = 'p',
    typeCus = 'text',
    valueCus = '',
    idCus = ''
}:InputGrupsProps) => {
    const idInput = idCus ? idCus : Math.random().toString(36).substring(7);
  return (
    <div 
        className={classDivCus} 
        style={styleDevCus}
    >
       <UILabel 
            tagCus={tagCus} 
            classCus={classLabelCus} 
            styleCus={styleLabelCus}
            forCus={idInput}
        >
            {labelcus}
        </UILabel>
        <UIInput
            idCus={idInput}
            typeCus={typeCus}
            placeholderCus={placeholderCus}
            classCus={classInputCus}
            styleCus={styleInputCus}
            onChageCus={onChageCus}
            valueCus={valueCus}
        />
    </div>
  )
}

export default InputGrups