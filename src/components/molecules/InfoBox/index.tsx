import React from 'react';
import Icon from '../Icon';

import './style.scss';

interface Props {
  title: string;
  text: string;
}

const InfoBox: React.FC<Props> = (props: Props) => {
  const { title, text } = props;
  return (
    <div>
      <Icon type="exclamation" size="small" />
      <div className="info-box">
        {title}
        <span>
          {text}
        </span>
      </div>
    </div>
  )
}

export default InfoBox;