import Video from '~/component/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import video1 from '~/assets/video/video1.mp4';
import { AddFollowerIcon, CommentIcon, LikeIcon, SaveVideoIcon, ShareVideoIcon } from '~/component/Icons';
// import video2 from '~/assets/video/video2.mp4';
// import video3 from '~/assets/video/video3.mp4';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('list-video')}>
            <Video src={video1} controls autoPlay loop />
            {/* <Video src={video2} controls autoPlay loop /> */}
            {/* <Video src={video3} controls autoPlay loop /> */}
            <div className={cx('options')}>
                <div className={cx('user-avatar')}>
                    <img
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f5e4ddc0e8272de33c8360143b68c1f4~c5_100x100.jpeg?lk3s=a5d48078&nonce=25906&refresh_token=b95e2f703790026cc9db5be5a1568560&x-expires=1734523200&x-signature=FQgREwIxUNyXrIOOscCyezHAhY0%3D&shp=a5d48078&shcp=81f88b70"
                        alt="Tien Bip"
                    />
                    <button className={cx('add')}>
                        <AddFollowerIcon className={cx('icon-add')} />
                    </button>
                </div>
                <div className={cx('like')}>
                    <div className={cx('icon')}>
                        <LikeIcon />
                    </div>
                    <div className={cx('value')}>500K</div>
                </div>
                <div className={cx('comment')}>
                    <div className={cx('icon')}>
                        <CommentIcon />
                    </div>
                    <div className={cx('value')}>500K</div>
                </div>
                <div className={cx('save')}>
                    <div className={cx('icon')}>
                        <SaveVideoIcon />
                    </div>
                    <div className={cx('value')}>500K</div>
                </div>
                <div className={cx('share')}>
                    <div className={cx('icon')}>
                        <ShareVideoIcon />
                    </div>
                    <div className={cx('value')}>500K</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
