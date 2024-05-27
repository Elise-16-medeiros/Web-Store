import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                       home
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
