import React from 'react';
import { HugeIconProps } from './props';

const HugeIconsDatabase = (props: HugeIconProps) => {
    return (
        <svg
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 5C3 4.19711 3.43749 3.55194 3.96527 3.08401C4.49422 2.61504 5.20256 2.2384 5.99202 1.94235C7.57833 1.34749 9.70269 1 12 1C14.2973 1 16.4217 1.34749 18.008 1.94235C18.7974 2.2384 19.5058 2.61504 20.0347 3.08401C20.5625 3.55194 21 4.19711 21 5V9.98763C21 10.9324 20.8466 11.4637 20.0419 11.9907C19.7167 12.2037 19.3522 12.4055 18.9492 12.5952C16.9865 13.5188 14.3887 14 12 14C9.6113 14 7.01354 13.5188 5.0508 12.5952C4.64779 12.4055 4.28325 12.2037 3.95806 11.9907C3.15337 11.4637 3 10.9324 3 9.98763V5ZM6.57313 6.13845C5.97883 5.9045 5.55524 5.65279 5.29209 5.41948C4.9354 5.10324 4.9354 4.89676 5.29209 4.58052C5.57279 4.33166 6.03602 4.06185 6.69427 3.81501C8.0034 3.32409 9.87903 3 12 3C14.121 3 15.9966 3.32409 17.3057 3.81501C17.964 4.06185 18.4272 4.33166 18.7079 4.58052C19.0646 4.89676 19.0646 5.10324 18.7079 5.41948C18.4272 5.66834 17.964 5.93815 17.3057 6.18499C15.9966 6.67591 14.121 7 12 7C11.1029 7 10.2497 6.94202 9.46467 6.83796C8.48782 6.70847 7.52272 6.51225 6.57313 6.13845ZM7.21611 10.1257C6.81943 10.0065 6.40119 10.2314 6.28195 10.628C6.1627 11.0247 6.38761 11.443 6.78428 11.5622C7.42389 11.7545 8.1316 11.9106 8.88764 12.0254C9.29716 12.0875 9.67954 11.8059 9.7417 11.3964C9.80387 10.9869 9.52228 10.6045 9.11276 10.5424C8.41746 10.4368 7.77966 10.2951 7.21611 10.1257Z'
                fill={props.fill}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.62747 14.1164C3.3392 13.9608 3.19506 13.883 3.09753 13.9412C3 13.9993 3 14.1584 3 14.4765V18.9998C3 19.8027 3.43749 20.4479 3.96527 20.9158C4.49422 21.3848 5.20256 21.7614 5.99202 22.0575C7.57833 22.6523 9.70269 22.9998 12 22.9998C14.2973 22.9998 16.4217 22.6523 18.008 22.0575C18.7974 21.7614 19.5058 21.3848 20.0347 20.9158C20.5625 20.4479 21 19.8027 21 18.9998V14.4765C21 14.1584 21 13.9993 20.9025 13.9412C20.8049 13.883 20.6608 13.9608 20.3725 14.1164C20.1849 14.2177 19.994 14.3137 19.8008 14.4046C17.5135 15.481 14.6113 15.9998 12 15.9998C9.346 15.9998 6.60931 15.5388 4.1992 14.4046C4.00604 14.3137 3.81512 14.2177 3.62747 14.1164ZM7.21611 17.1257C6.81943 17.0065 6.40119 17.2314 6.28195 17.628C6.1627 18.0247 6.38761 18.443 6.78428 18.5622C7.42389 18.7545 8.1316 18.9106 8.88764 19.0254C9.29716 19.0875 9.67954 18.8059 9.7417 18.3964C9.80387 17.9869 9.52228 17.6045 9.11276 17.5424C8.41746 17.4368 7.77966 17.2951 7.21611 17.1257Z'
                fill={props.fill}
            />
        </svg>
    );
};

export default HugeIconsDatabase;