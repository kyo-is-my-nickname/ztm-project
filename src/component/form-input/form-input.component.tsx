import { FC, InputHTMLAttributes } from 'react'
import {Group, FormInputStyles,FormInputLabel} from './form-input.styles'
type FormInputProps={
    label: string
} & InputHTMLAttributes<HTMLInputElement>
const FormInput: FC<FormInputProps> =({label, ...otherProps}) => {
    return <Group>
     <FormInputStyles {...otherProps}/>
     {label && (
        <FormInputLabel shrink={Boolean( otherProps.value && typeof otherProps.value==='string' && otherProps.value.length)} 
        // className={`${otherProps.value.length >0 ? 'shrink' : null 
        // } form-input-label`}
        >{label}</FormInputLabel>
     )}
      
      
    </Group>
}
export default FormInput