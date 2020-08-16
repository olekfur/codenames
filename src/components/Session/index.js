import React from 'react';

import AuthUserContext from './context';
import withAuthentication from './withAuthehtication';

const Session = () => (
    <div>
        <h1>Sessionindex</h1>
    </div>
);

export default Session;

export {AuthUserContext, withAuthentication};