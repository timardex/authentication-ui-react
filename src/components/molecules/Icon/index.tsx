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
}

export const Icon: React.FC<Props> = (props: Props) => {
  const { type, size = 'small', ...rest } = props
  return (
    <div className={`icon-wrapper ${type} ${size}`}>
      {iconSet[type]({ ...rest })}
    </div>
  )
}