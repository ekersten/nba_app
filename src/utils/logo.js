import React from 'react';
import { Image } from 'react-native';

import LogoImg from '../assets/images/nba_login_logo.png';

const LogoTitle = () => (
    <Image
        source={LogoImg}
        resizeMode='contain'
        style={{
            width: 70,
            height: 35
        }}
    />
)


export default LogoTitle;