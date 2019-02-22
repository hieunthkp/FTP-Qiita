import React from 'react';
import './Tag.scss';

enum ICON {
  priceTag = 'fas fa-tag',
  heart = 'far fa-heart',
  textBubble = 'far fa-comment'
}

export interface TagProps {
  icon?: string,
  children?: string | JSX.Element
}

export const Tag = (props: TagProps) => (
  <p className="a-tag"><i className={ICON[props.icon as any]}></i>{props.children}</p>
);

export default Tag;