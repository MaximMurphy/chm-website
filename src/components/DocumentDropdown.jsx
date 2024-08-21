import Link from "next/link";
import Translation from "@/components/Translation";

export default function DocumentDropdown() {
  return (
    <li>
      <details>
        <summary className="list-none hover:text-gray-300 text-lg lg:text-base">
          <Translation translationKey="documents" />
        </summary>
        <ul className="p-2 bg-white text-black">
          <li>
            <a href="/pratsi" className="text-lg">
              <Translation translationKey="pratsi" />
            </a>
          </li>
          <li>
            <Link
              href="https://drive.google.com/drive/folders/1qWiGFtjCUOGwIHThEXi1u_VF3HtKY6CR?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <Translation translationKey="orions" />
            </Link>
          </li>
          <li>
            <Link
              href="/Жовта Книга (2024.03).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              Жовта Книга
            </Link>
          </li>
        </ul>
      </details>
    </li>
  );
}
