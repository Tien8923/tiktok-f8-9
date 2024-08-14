import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/91dc9829cd4f498c8f1347ac763ddd17.jpeg?lk3s=a5d48078&nonce=29283&refresh_token=b825c695399b5681f0561096635d700e&x-expires=1723802400&x-signature=tZIAyX0YdVAVRe71Mv%2BWM3qrHOc%3D&shp=a5d48078&shcp=81f88b70"
                alt="blackpink"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>BLACKPINK</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>blackpink</span>
            </div>
        </div>
    );
}

export default AccountItem;
