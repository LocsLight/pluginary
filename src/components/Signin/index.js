import React from 'react';
import {FormContainer, FormWrap, Icon, FormContent, Form, TitleWrap, FormH1, FormInputsWrap, FormLabel, FormInput, FormButton, Text} from './SigninElements';

const Signin = () => {
    return (
        <>
            <FormContainer>
                <FormWrap>
                    <Icon></Icon>
                    <FormContent>
                        <Form action='#'>
                            <TitleWrap>
                                <FormH1>Connectez-vous à votre compte</FormH1>
                            </TitleWrap>
                            <FormInputsWrap>
                                <FormLabel html='for'>Email</FormLabel>
                                <FormInput type='email' required/>
                                <FormLabel html='for'>Mot de passe</FormLabel>
                                <FormInput type='password' required/>
                            </FormInputsWrap>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Mot de passe oublié</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </FormContainer>
        </>
    );
}

export default Signin;
