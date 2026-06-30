import { type ReactNode } from 'react';
import './post-wrapper.module.scss';

type PropsType = {
  children?: ReactNode;
};

export default async function PostWrapper(props: PropsType) {
  const { children } = props;
  return <div className="post-wrapper">{children}</div>;
}
