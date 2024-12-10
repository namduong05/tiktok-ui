import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, datas }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {datas.map((data, index) => (
                <AccountItem key={index} data={data} />
            ))}

            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
