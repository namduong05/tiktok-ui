import { useState, useRef, useCallback } from 'react';
import { useDebounce } from '~/hooks';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/component/Icons';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [state, setState] = useState({
        searchValue: '',
        searchResult: [],
        showResult: false,
        loading: false,
    });

    const debouncedValue = useDebounce(state.searchValue, 500);
    const inputRef = useRef();

    const fetchSearchResults = useCallback(async () => {
        if (!debouncedValue.trim()) {
            setState((prev) => ({ ...prev, searchResult: [], loading: false }));
            return;
        }

        setState((prev) => ({ ...prev, loading: true }));

        try {
            const result = await searchServices.search(debouncedValue);
            setState((prev) => ({ ...prev, searchResult: result, loading: false }));
        } catch (error) {
            setState((prev) => ({ ...prev, loading: false }));
        }
    }, [debouncedValue]);

    // Fetch search results when debouncedValue changes
    useDebounce(fetchSearchResults, 500, [debouncedValue]);

    const handleClear = () => {
        setState((prev) => ({
            ...prev,
            searchValue: '',
            searchResult: [],
            showResult: false,
        }));
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const value = e.target.value.trimStart();
        setState((prev) => ({ ...prev, searchValue: value, showResult: true }));
    };

    const handleHideResult = () => {
        setState((prev) => ({ ...prev, showResult: false }));
    };

    return (
        //Using a wrapper <div> tag around the reference element solves this
        //by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={state.showResult && state.searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {state.searchResult.map((result) => (
                                <AccountItem data={result} key={result.id} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={state.searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setState((prev) => ({ ...prev, showResult: true }))}
                    />
                    {!!state.searchValue && !state.loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {state.loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
