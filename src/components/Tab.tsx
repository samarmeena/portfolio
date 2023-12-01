"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/styles/Tab.module.css";

interface Props {
  filename: string;
  icon: string;
  path: string;
}

const Tab: React.FC<Props> = ({ icon, filename, path }) => {
  const pathname = usePathname();

  return (
    <Link href={path}>
      <div className={`${styles.tab} ${pathname === path && styles.active}`}>
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
