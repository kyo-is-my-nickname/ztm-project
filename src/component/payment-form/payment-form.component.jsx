import { CardElement } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
const PaymentForm=()=>{
    return (
        <PaymentFormContainer>
          <FormContainer>
          <h2>Credit Card Payment</h2>
            <CardElement />
          </FormContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
        </PaymentFormContainer>
    )
    
}
export default PaymentForm