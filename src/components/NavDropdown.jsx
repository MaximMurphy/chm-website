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
        <Link href="/" className="text-lg">
          <Translation translationKey="header_patron" />
        </Link>
      </li>
      <li>
        <Link href="/" className="text-lg">
          <Translation translationKey="header_orion" />
        </Link>
      </li>
    </>
  );
}
