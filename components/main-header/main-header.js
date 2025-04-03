import Link from "next/link";
import Image from "next/image";

import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={LogoImg} alt="Food image" priority />
          Foodies
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">All Meals</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
