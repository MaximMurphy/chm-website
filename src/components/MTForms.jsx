import Link from "next/link";

export default function MTForms() {
  return (
    <div className="flex flex-col gap-4">
      <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="btn m-1 w-48">
          Yunatstvo Application
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
        >
          <li>
            <Link
              href="/MT_Uchasnyk_Forms/Yunatstvo Application.zip"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yunatstvo Forms (Zip File)
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Uchasnyk_Forms/U1) MT - Yunatstvo Form.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              (U1) MT - Yunatstvo Form
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Uchasnyk_Forms/U2) Medical Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              (U2) Medical Form
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Uchasnyk_Forms/U3) Campers Code of Conduct Bilingual.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              (U3) Campers Code of Conduct Bilingual
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Uchasnyk_Forms/U4) Camper Liability Waiver.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              (U4) Camper Liability Waiver
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Uchasnyk_Forms/U5) MT Safety Policy.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              (U5) MT Safety Policy
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Uchasnyk_Forms/U6) Camper Record.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              (U6) Camper Record
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Uchasnyk_Forms/U7) Emergency Contact - Form.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              (U7) Emergency Contact - Form
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="btn m-1 w-48">
          Bulava Application
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
        >
          <li>
            <Link
              href="/MT_Bulava_Forms/Bulava Forms.zip"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bulava Forms (Zip File)
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Bulava_Forms/B1) MT - Bulava Form.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              (B1) MT - Bulava Form
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Bulava_Forms/B2) Medical Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              (B2) Medical Form
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Bulava_Forms/B3) Bulava Code of Conduct.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              (B3) Bulava Code of Conduct
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Bulava_Forms/B4) Online Youth Safety Protection Instructions.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              (B4) Online Youth Safety Protection Instructions
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Bulava_Forms/B5) MT Safety Policy.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              (B5) MT Safety Policy
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Bulava_Forms/B6) Camper Record.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              (B6) Camper Record
            </Link>
          </li>
          <li>
            <Link
              href="/MT_Bulava_Forms/B7) Emergency Contact - Form.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              (B7) Emergency Contact - Form
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
