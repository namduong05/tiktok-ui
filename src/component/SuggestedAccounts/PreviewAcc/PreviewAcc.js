import classNames from 'classnames/bind';
import styles from './PreviewAcc.module.scss';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PreviewAcc({ data, isFollowing }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                {isFollowing ? <Button rounded>Following</Button> : <Button primary>Follow</Button>}
            </div>

            <div className={cx('info')}>
                <p className={cx('nickname')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{data.full_name}</p>
            </div>

            <div className={cx('statistical')}>
                <strong className={cx('value')}>{data.followers_count} </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>{data.likes_count} </strong>
                <span className={cx('label')}>Likes</span>
            </div>
        </div>
    );
}

export default PreviewAcc;
