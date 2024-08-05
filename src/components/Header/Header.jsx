import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';
import './Header.css';

const Header = () => {
    // const tlg = window.Telegram.WebApp;
    const {user, onClose} = useTelegram();

    // const onClose = () => {
    //     tlg.close();
    //     }

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {/* {tlg.initDataUnsafe?.user.username} */}
                {user?.username}
            </span>

        </div>
    );
};

export default Header;