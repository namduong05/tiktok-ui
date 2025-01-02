import Video from '~/component/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { AddFollowerIcon, CommentIcon, LikeIcon, SaveVideoIcon, ShareVideoIcon } from '~/component/Icons';
import video1 from '~/assets/video/video1.mp4';
import video2 from '~/assets/video/video2.mp4';
import video3 from '~/assets/video/video3.mp4';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function Home() {
    const videos = [
        { src: video1, username: '@user1', description: 'Video 1 description' },
        { src: video2, username: '@user2', description: 'Video 2 description' },
        { src: video3, username: '@user3', description: 'Video 3 description' },
    ];

    return (
        <div className={cx('slider')}>
            {videos.map((video, index) => (
                <div key={index} className={cx('slide')}>
                    <div className={cx('content')}>
                        <Video src={video.src} autoPlay={false} muted loop>
                            <div className={cx('overlay')}>
                                <p>{video.username}</p>
                                <p>{video.description}</p>
                            </div>
                        </Video>
                    </div>
                    <div className={cx('interaction-buttons')}>
                        <div className={cx('user')}>
                            <div className={cx('user-avt')}>
                                <Image src="" alt="" className={cx('avt')} />
                            </div>
                            <button>
                                <AddFollowerIcon className={cx('add-icon')} />
                            </button>
                        </div>
                        <button className={cx('like', 'btn')}>
                            <span>
                                <LikeIcon />
                            </span>
                            <strong className={cx('count')}>500K</strong>
                        </button>
                        <button className={cx('comment', 'btn')}>
                            <span>
                                <CommentIcon />
                            </span>
                            <strong className={cx('count')}>500K</strong>
                        </button>
                        <button className={cx('save', 'btn')}>
                            <span>
                                <SaveVideoIcon />
                            </span>
                            <strong className={cx('count')}>500K</strong>
                        </button>
                        <button className={cx('share', 'btn')}>
                            <span>
                                <ShareVideoIcon />
                            </span>
                            <strong className={cx('count')}>500K</strong>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
