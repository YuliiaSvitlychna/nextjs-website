import { type ReactNode } from "react";

type PropsType = {
  children?: ReactNode;
};

export default async function PostWrapper(props: PropsType) {
  const { children } = props;
  return <div className="post-wrapper">{children}</div>;
}
