import Link from "next/link";

import LogoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={LogoImg.src} alt="Food image" />
        Foodies
      </Link>

      <nav>
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
  );
}
