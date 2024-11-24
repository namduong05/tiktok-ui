import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/2d4cd036147d90fb35a5b4103a86d7b1.jpeg?lk3s=a5d48078&nonce=70479&refresh_token=148825970da333973e4363c9a4211f2a&x-expires=1732438800&x-signature=AxQvHNucOpFx3kp7pFNQg7k%2Fyg8%3D&shp=a5d48078&shcp=81f88b70"
                alt="Nam"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Dương Nam</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('username')}>nam.duong05</p>
            </div>
        </div>
    );
}

export default AccountItem;
