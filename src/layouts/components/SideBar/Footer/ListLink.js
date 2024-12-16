import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const ListLink = () => {
    const [activeTab, setActiveTab] = useState(null);

    const listLink = [
        {
            title: 'Company',
            data: [
                { text: 'About', url: '/about' },
                { text: 'Newsroom', url: '/newsroom' },
                { text: 'Contact', url: '/contact' },
                { text: 'Careers', url: '/careers' },
            ],
        },
        {
            title: 'Program',
            data: [
                { text: 'TikTok for Good', url: '/tiktok-for-good' },
                { text: 'Advertise', url: '/advertise' },
                { text: 'TikTok LIVE Creator Networks', url: '/live-creator-networks' },
                { text: 'Developers', url: '/developers' },
                { text: 'Transparency', url: '/transparency' },
                { text: 'TikTok Rewards', url: '/rewards' },
                { text: 'TikTok Embeds', url: '/embeds' },
                { text: 'SoundOn Music Distribution', url: '/soundon' },
                { text: 'TikTok Live', url: '/live' },
                { text: 'TikTok Shop', url: '/shop' },
            ],
        },
        {
            title: 'Terms & Policies',
            data: [
                { text: 'Help', url: '/help' },
                { text: 'Safety', url: '/safety' },
                { text: 'Terms', url: '/terms' },
                { text: 'Privacy Policy', url: '/privacy-policy' },
                { text: 'Accessibility', url: '/accessibility' },
                { text: 'Privacy Center', url: '/privacy-center' },
                { text: 'Creator Academy', url: '/creator-academy' },
                { text: 'Community Guidelines', url: '/community-guidelines' },
                { text: 'Copyright', url: '/copyright' },
                { text: 'Law Enforcement Guidelines', url: '/law-enforcement-guidelines' },
            ],
        },
    ];

    const handleClick = (index) => {
        setActiveTab(activeTab === index ? null : index);
    };

    return (
        <div>
            {listLink.map((list, index) => (
                <div key={index}>
                    <h4 className={cx('title', { active: activeTab === index })} onClick={() => handleClick(index)}>
                        {list.title}
                    </h4>
                    {activeTab === index && (
                        <ul className={cx('list-link')}>
                            {list.data.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ListLink;
