import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function Accounts({ label, datas, isFollowing }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {datas.map((data, index) => (
                <AccountItem key={index} data={data} isFollowing={isFollowing} />
            ))}

            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

Accounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Accounts;
