import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default () => {
    const { pathname } = useLocation();
    const homeScrollPosition = useRef(0);

    useEffect(() => {
        if (pathname === '/') {
            window.scrollTo(0, homeScrollPosition.current);
        } else {
            if (pathname !== '/') {
                homeScrollPosition.current = window.scrollY;
            }
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (pathname === '/') {
                homeScrollPosition.current = window.scrollY;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return null;
}
