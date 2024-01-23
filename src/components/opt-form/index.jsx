import React, { forwardRef } from 'react'
import { Container, Input, Button, Text } from './styles/opt-form'

export default  function OptForm({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

OptForm.Input = forwardRef(function OptFormInput({ ...restProps }, ref) {
    return (
        <Input ref={ref} {...restProps} />
        )
})
    
OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>{children}</Button>
    )
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

