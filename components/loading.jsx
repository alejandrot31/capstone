import React from 'react';

export default function LoadingCircle() {
    return (<svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style={{ background: 'none', width: '24px', height: '24px' }}
    >
        <circle cx="50" cy="50" fill="none" stroke="#ffffff" strokeWidth="8" r="38" strokeDasharray="113.09733552923255 37.69911184307752">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
        </circle>
    </svg>)
}