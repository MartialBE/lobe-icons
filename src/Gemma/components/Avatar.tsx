'use client';

import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import { COLOR_GRADIENT, TITLE } from '../style';
import Mono from './Mono';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, ...rest }) => {
  return (
    <IconAvatar
      Icon={Mono}
      aria-label={TITLE}
      background={background || COLOR_GRADIENT}
      iconMultiple={0.9}
      {...rest}
    />
  );
});

export default Avatar;
