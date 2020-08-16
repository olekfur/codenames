import React from 'react';

import {withAuthorization} from '../Session';
import { auth } from 'firebase';

const Home = () => (
    <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user</p>
    </div>
);

const condition = authUser => authUser != null;
export default withAuthorization(condition)(Home);