import React from 'react';
import * as Icons from '../../../assets/icons';

import './Icon.scss';

const iconSet = {
  chevron: Icons.Chevron,
  close: Icons.Close,
  exclamation: Icons.Exclamation,
  eye: Icons.Eye,
  user: Icons.User
}

interface Props {
  type: keyof typeof iconSet;
  size?: 's-tiny' | 'tiny' | 'small' | 'medium' | 'x-medium' | 'large' | 'x-large';
  clickable?: boolean;
}

export const Icon: React.FC<Props> = (props: Props) => {
  const { type, size = 'small', clickable = true, ...rest } = props;
  const classes = ['icon-wrapper', type, size, clickable && 'clickable'].filter(c => !!c).join(' ');
  return (
    <div className={classes}>
      {iconSet[type]({ ...rest })}
    </div>
  )
}