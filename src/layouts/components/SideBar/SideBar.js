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
import SuggestedAccounts from '~/component/SuggestedAccounts';
import { dataFollowing, dataSuggested } from '~/component/SuggestedAccounts/data';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
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

            <SuggestedAccounts label="Suggested accounts" datas={dataSuggested} />
            <SuggestedAccounts label="Following accounts" datas={dataFollowing} />
        </div>
    );
}

export default SideBar;
