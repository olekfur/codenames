import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

import {withAuthorization} from '../Session';

const Account = () => (
    <div>
        <h1>Account page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>
);

const condition = authUser => authUser != null

export default withAuthorization(condition)(Account);