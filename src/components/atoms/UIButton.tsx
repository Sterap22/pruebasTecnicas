import { UIButtonProps } from "../../Interfaces/props/Button.props"

export const UIButton = ({
    children = null,
    classCus = '',
    styleCus = {},
    onClickCus = () => {}
}: UIButtonProps) => {
  return (
    <button
      className={classCus}
      style={styleCus}
      onClick={onClickCus}
    >
      {children}
    </button>
  )
}
