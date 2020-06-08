import {
    takeLatest, call, put, all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from 'services/api';

import { updateProfileSuccess, updateProfileFailure } from './actios';

export function* updateProfile({ payload }) {
    const {
        name, email, avatar_id, ...rest
    } = payload.data;

    const profile = {
        name,
        email,
        avatar_id,
        ...(rest.oldPassword ? rest : {}),
    };

    try {
        const response = yield call(api.put, 'users', profile);
        toast.success('Perfil atualizado com sucesso!');
        yield put(updateProfileSuccess(response.data));
    } catch (e) {
        toast.error('Erro ao atualizar perfil, confira seus dados!');
        yield put(updateProfileFailure());
    }
}

export default all([
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);