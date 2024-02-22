import { forwardRef } from 'react';

import type { IconType } from '@/types';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      aria-label={'Google'}
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}
      viewBox="0 0 77 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M19.947 8.482H11.43v2.536h6.041c-.298 3.557-3.247 5.074-6.03 5.074-3.562 0-6.67-2.812-6.67-6.753 0-3.839 2.963-6.795 6.677-6.795 2.866 0 4.555 1.833 4.555 1.833l1.77-1.84S15.5 0 11.357 0C6.081 0 2 4.468 2 9.294c0 4.729 3.84 9.34 9.491 9.34 4.972 0 8.61-3.417 8.61-8.47 0-1.067-.154-1.683-.154-1.683"
          fill="#4285F4"
        ></path>
        <path
          d="M26.96 8.997c1.719 0 3.347 1.395 3.347 3.642 0 2.199-1.621 3.633-3.355 3.633-1.905 0-3.408-1.53-3.408-3.65 0-2.075 1.485-3.625 3.416-3.625zm-.035-2.352c-3.495 0-6 2.742-6 5.94 0 3.245 2.43 6.038 6.041 6.038 3.27 0 5.948-2.508 5.948-5.968 0-3.967-3.116-6.01-5.989-6.01z"
          fill="#EB4335"
        ></path>
        <path
          d="M40.01 8.997c1.718 0 3.347 1.395 3.347 3.642 0 2.199-1.622 3.633-3.356 3.633-1.904 0-3.407-1.53-3.407-3.65 0-2.075 1.484-3.625 3.415-3.625zm-.035-2.352c-3.496 0-6 2.742-6 5.94 0 3.245 2.43 6.038 6.04 6.038 3.27 0 5.949-2.508 5.949-5.968 0-3.967-3.116-6.01-5.99-6.01z"
          fill="#FBBC05"
        ></path>
        <path
          d="M53.006 9c1.573 0 3.188 1.347 3.188 3.648 0 2.34-1.611 3.629-3.222 3.629-1.71 0-3.302-1.394-3.302-3.607 0-2.299 1.652-3.67 3.336-3.67zm-.232-2.349c-3.208 0-5.73 2.82-5.73 5.984 0 3.605 2.924 5.996 5.675 5.996 1.7 0 2.605-.678 3.273-1.455v1.18c0 2.067-1.25 3.304-3.137 3.304-1.824 0-2.738-1.36-3.056-2.132l-2.293.962c.813 1.726 2.451 3.527 5.368 3.527 3.19 0 5.62-2.016 5.62-6.244V7.012h-2.502v1.014c-.77-.832-1.821-1.375-3.218-1.375z"
          fill="#4285F4"
        ></path>
        <path
          d="M69.725 8.94c1.09 0 1.875.582 2.209 1.28l-5.345 2.241c-.23-1.735 1.408-3.52 3.136-3.52zm-.104-2.303c-3.026 0-5.567 2.416-5.567 5.981 0 3.772 2.832 6.01 5.858 6.01 2.525 0 4.075-1.387 5-2.629l-2.063-1.377c-.536.833-1.43 1.648-2.925 1.648-1.678 0-2.45-.922-2.927-1.815L75 11.123l-.415-.976c-.774-1.913-2.577-3.51-4.964-3.51z"
          fill="#EB4335"
        ></path>
        <path d="M60.239 18.272h2.628V.62H60.24z" fill="#34A853"></path>
      </g>
    </svg>
  );
});

export default Icon;
