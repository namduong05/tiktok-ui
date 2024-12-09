import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function Defaultlayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

Defaultlayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Defaultlayout;
