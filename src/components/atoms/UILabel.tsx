import { LabelProps } from '../../Interfaces/props/Label.props';

export const UILabel = ({
  tagCus = 'p',
  children = null,
  classCus = '',
  styleCus = {},
  forCus =''
}:LabelProps) => {
  const Tag = tagCus as keyof JSX.IntrinsicElements;
  return<Tag
      htmlFor={forCus}
      className={classCus}
      style={styleCus}
    >
      {
        children
      }
    </Tag>
}
