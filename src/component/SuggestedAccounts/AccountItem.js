import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import PreviewAcc from './PreviewAcc';
// import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const renderPreview = (attrs, data) => (
    <div className={cx('preview')} tabIndex="-1" {...attrs}>
        <PopperWrapper>
            <PreviewAcc data={data} />
        </PopperWrapper>
    </div>
);

function AccountItem({ data }) {
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-10, 0]}
                placement="bottom"
                render={(attrs) => renderPreview(attrs, data)}
            >
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
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
