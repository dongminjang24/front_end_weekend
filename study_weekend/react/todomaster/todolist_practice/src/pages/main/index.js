

import React, { useState } from 'react';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
const MainPage = () => {
    return (
        <div>
            <button>LOGIN</button><button>SIGN</button>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    );
};

export default MainPage;