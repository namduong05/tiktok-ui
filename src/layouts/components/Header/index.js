import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/component/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/component/Popper/Menu';
import { MessageIcon } from '~/component/Icons';
import Image from './Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    let currentUser = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                {/* {Seacrh ở đây nè!!!} */}

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Link to={config.routes.upload}>
                                <Button text>Upload</Button>
                            </Link>

                            <Tippy offset={[0, 0]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://yt3.ggpht.com/_twqyARH9m6_aghWFZ6D1u2z5vk0DevFxaXvJ8MGyymEAU5VjpxDUUyVcfQdz74WxiFrAT-gBBA=s88-c-k-c0x00ffffff-no-rj"
                                className={cx('user-avatar')}
                                alt="Nam"
                                // fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b9e1fb6031f81c5eb0d63a9dbbb1da27~c5_100x100.jpeg?lk3s=a5d48078&nonce=86753&refresh_token=650f7ba11cbb3da1e0d11a9d8dfde15b&x-expires=1732806000&x-signature=e4p8UtsaAikqn8FQw0HYUuQrJnk%3D&shp=a5d48078&shcp=b59d6b55"
                            />
                        ) : (
                            <button className={cx('more-icon')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
