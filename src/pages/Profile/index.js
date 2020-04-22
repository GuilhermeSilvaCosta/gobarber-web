import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileRequest } from 'store/modules/user/actios';
import { signOut } from 'store/modules/auth/actions';
import AvatarInput from './AvatarInput';
import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();

    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handleSignout() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />
                <Input name="name" placeholder="Nome" />
                <Input type="email" name="email" placeholder="Seu endereço de email" />

                <hr />

                <Input type="password" name="oldPassword" placeholder="Senha atual" />
                <Input type="password" name="password" placeholder="Nova senha" />
                <Input type="password" name="confirmPassword" placeholder="Confirmar nova senha" />

                <button type="submit">Atualizar perfil</button>
            </Form>
            <button onClick={handleSignout} type="button">Sair do GoBarber</button>
        </Container>
    );
}
