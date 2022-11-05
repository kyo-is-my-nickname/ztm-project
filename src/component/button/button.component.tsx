import { BaseButton, GGSignInButton, InvertedButton} from './button.styles'
import { FC, ButtonHTMLAttributes } from 'react'
export enum  BUTTON_TYPE_CLASSES {
    base='base',
    google= 'google-sign-in',
    inverted='inverted'
}

const getButton=(buttonType=BUTTON_TYPE_CLASSES.base): typeof BaseButton=>(
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GGSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType])
export type ButtonType = {
    buttonType?: BUTTON_TYPE_CLASSES,
    isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
const Button: FC<ButtonType> =({children, buttonType,isLoading,...otherProps}) => {
    const CustomButton= getButton(buttonType)
return <CustomButton disabled={isLoading}
{...otherProps}>
{children}
</CustomButton>
}
export default Button