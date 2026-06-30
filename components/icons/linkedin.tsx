import Image from 'next/image';
import linkedInIcon from './linkedin.svg';

type LinkedInProps = {
  className?: string;
};

export default async function LinkedIn({ className }: LinkedInProps) {
  return <Image className={className} src={linkedInIcon} alt="LinkedIn icon" width={24} height={24} />;
}
