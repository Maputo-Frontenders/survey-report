'use client' // this is a client component

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps extends LinkProps {
  activeClassName?: string;
  className: string;
  children: React.ReactNode;
}

const ActiveLink:React.FC<ActiveLinkProps> = ({ href, children, activeClassName, className, ...props }) => {
  const isActive = usePathname( )=== href;

  return (
    <Link href={href} className={`${className} ` + `${ isActive ? activeClassName : "" }` } {...props}>
      { children }
    </Link>
  );
};

export default ActiveLink;
