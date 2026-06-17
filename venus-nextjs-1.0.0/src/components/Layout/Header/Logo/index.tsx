import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link 
      href="/" 
      className="text-2xl font-extrabold text-[#0077b5] dark:text-[#0077b5] tracking-tight hover:opacity-80 transition-opacity"
    >
      Prince Saini
    </Link>
  );
};

export default Logo;