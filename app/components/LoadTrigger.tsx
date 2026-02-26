'use client';

import { useEffect } from 'react';

export default function LoadTrigger() {
    useEffect(() => {
        // Trigger load animation
        const timer = setTimeout(() => {
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return null;
}
