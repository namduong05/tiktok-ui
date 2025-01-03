import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import PreviewAcc from './PreviewAcc';
import Image from '../Image';
// import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const renderPreview = (attrs, data, isFollowing) => (
    <div className={cx('preview')} tabIndex="-1" {...attrs}>
        <PopperWrapper>
            <PreviewAcc data={data} isFollowing={isFollowing} />
        </PopperWrapper>
    </div>
);

function AccountItem({ data, isFollowing }) {
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-10, 0]}
                placement="bottom"
                render={(attrs) => renderPreview(attrs, data, isFollowing)}
            >
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <span className={cx('user')}>{data.nickname}</span>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{data.full_name}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.PropTypes = {};

export default AccountItem;
