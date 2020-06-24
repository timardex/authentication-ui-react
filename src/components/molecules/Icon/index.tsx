import React from 'react';
import * as Icons from '../../../assets/icons';

import './style.scss';

const iconSet = {
  chevron: Icons.Chevron,
  close: Icons.Close,
  exclamation: Icons.Exclamation,
  eye: Icons.Eye,
  user: Icons.User,
  calendar: Icons.Calendar,
  mailbox: Icons.Mailbox,
  email: Icons.Email,
  lock: Icons.Lock
}

interface Props {
  type: keyof typeof iconSet;
  size?: 's-tiny' | 'tiny' | 'small' | 'medium' | 'x-medium' | 'large' | 'x-large';
  clickable?: boolean;
  className?: string
}

const Icon: React.FC<Props> = (props: Props) => {
  const { type, size = 'small', className, clickable = true, ...rest } = props;
  const classes = ['icon-wrapper', type, size, className, clickable && 'clickable'].filter(c => !!c).join(' ');
  return (
    <div className={classes}>
      {iconSet[type]({ ...rest })}
    </div>
  )
}

export default Icon;