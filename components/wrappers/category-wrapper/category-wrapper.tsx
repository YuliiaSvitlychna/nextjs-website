import { type ReactNode } from 'react';
import './category-wrapper.module.scss';

type PropsType = {
  children?: ReactNode;
};

export default async function CategoryWrapper(props: PropsType) {
  const { children } = props;

  return <div className="category-wrapper">{children}</div>;
}
