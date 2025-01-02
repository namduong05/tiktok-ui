import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

const Video = ({ src, controls = true, autoPlay = false, loop = false, className, children }) => {
    return (
        <div className={cx('video-wrapper', className)}>
            <video className={cx('video')} src={src} controls={controls} autoPlay={autoPlay} loop={loop} />
            {children}
        </div>
    );
};

Video.propTypes = {
    src: PropTypes.string.isRequired, // Đường dẫn đến video
    controls: PropTypes.bool, // Hiển thị điều khiển
    autoPlay: PropTypes.bool, // Tự động phát
    loop: PropTypes.bool, // Phát lặp lại
    className: PropTypes.string, // Class tùy chỉnh
};

export default Video;
