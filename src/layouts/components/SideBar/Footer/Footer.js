import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('event')}>
                <img
                    className={cx('img-event')}
                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop-islands/021d2ed936cbb9f7033f.png"
                    alt="Event"
                />
                <div className={cx('title-event')}>Create TikTok effects, get a reward</div>
            </div>
            <h4 className={cx('title')}>Company</h4>
            <h4 className={cx('title')}>Program</h4>
            <h4 className={cx('title')}>Terms & Policies</h4>
            <p className={cx('copyright')}>© 2024 TikTok</p>
        </footer>
    );
}

export default Footer;
