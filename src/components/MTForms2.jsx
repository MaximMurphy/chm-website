import Link from "next/link";

export default function MTForms2() {
  return (
    <div className="flex flex-col gap-4">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary w-48"
          >
            Yunatstvo Application
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
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
      </div>

      <div className="drawer drawer-end">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-5"
            className="drawer-button btn btn-primary w-48"
          >
            Bulava Application
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
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
    </div>
  );
}
