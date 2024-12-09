import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/e920e56d77021c6c4334ae924fb12d2a~c5_720x720.jpeg?lk3s=a5d48078&nonce=33791&refresh_token=5d2d4f1f87750bfdade6bdacd743dff3&x-expires=1733904000&x-signature=OPmZSOqw3l2G9T0snU9VljC3G1g%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <h4 className={cx('user')}>namduong05</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Dương Xuân Nam</p>
            </div>
        </div>
    );
}

// AccountItem.PropTypes = {};

export default AccountItem;
