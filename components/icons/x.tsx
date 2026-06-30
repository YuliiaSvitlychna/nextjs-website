import Image from 'next/image';
import xIcon from './x.svg';

type XProps = {
  className?: string;
};

export default async function X({ className }: XProps) {
  return <Image className={className} src={xIcon} alt="X icon" width={24} height={24} />;
}
