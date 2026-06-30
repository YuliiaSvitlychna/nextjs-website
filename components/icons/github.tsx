import Image from 'next/image';
import gitHubIcon from './github.svg';

type GitHubProps = {
  className?: string;
};

export default async function GitHub({ className }: GitHubProps) {
  return <Image className={className} src={gitHubIcon} alt="GitHub icon" width={24} height={24} />;
}
