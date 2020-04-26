import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from 'assets/logo.svg';

import { signUpRequest } from 'store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Insita um e-mail válido')
        .required('O e-mail é obrigatorio'),
    password: Yup.string().min(6, 'No mínimo 6 caracteres').required('A senha é obrigatória'),
});

export default function SignUn() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="GoBarber" style={{ height: '64px', width: '64px' }} />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" type="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input name="password" type="password" placeholder="Sua senha secreta" />

                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
}