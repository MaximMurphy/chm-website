import Link from "next/link";
import Translation from "@/components/Translation";

export default function NavDropdown() {
  return (
    <>
      <li>
        <Link href="/emblem" className="text-lg">
          <Translation translationKey="header_emblem" />
        </Link>
      </li>
      <li>
        <Link href="/patron" className="text-lg">
          <Translation translationKey="header_patron" />
        </Link>
      </li>
      <li>
        <Link href="/orion" className="text-lg">
          <Translation translationKey="header_orion" />
        </Link>
      </li>
      <li>
        <Link href="/lubko" className="text-lg">
          <Translation translationKey="header_lubko" />
        </Link>
      </li>
    </>
  );
}
