import config from '~/config';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import {
    HomeIcon,
    UserFollowingIcon,
    UserFriendIcon,
    LiveIcon,
    HomeActiveIcon,
    UserFollowingActiveIcon,
    UserFriendActiveIcon,
    LiveActiveIcon,
} from '~/component/Icons';

import { Menu, MenuItem } from './Menu';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserFollowingIcon />}
                    activeIcon={<UserFollowingActiveIcon />}
                />
                <MenuItem
                    title="Friends"
                    to={config.routes.friend}
                    icon={<UserFriendIcon />}
                    activeIcon={<UserFriendActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default SideBar;
