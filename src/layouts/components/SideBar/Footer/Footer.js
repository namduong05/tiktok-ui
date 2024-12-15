import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import ListLink from './ListLink';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <a href="#" className={cx('event')}>
                <img
                    className={cx('img-event')}
                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop-islands/021d2ed936cbb9f7033f.png"
                    alt="Event"
                />
                <div className={cx('title-event')}>Create TikTok effects, get a reward</div>
            </a>
            <ListLink />
            <p className={cx('copyright')}>© 2024 TikTok</p>
        </footer>
    );
}

export default Footer;
