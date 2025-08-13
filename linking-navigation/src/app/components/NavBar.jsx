'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import '../link.css'

export default function NavBar() {
    const pathname = usePathname()
    // console.log(pathname)
    return <nav>
        <ul>
            <li>
                <Link className={`${pathname === '/about' ? 'active' : ''}`} href={{ pathname: '/about' }}>About</Link>
            </li>
            <li>
                <Link className={`${pathname === '/services' ? 'active' : ''}`} href={{ pathname: '/services' }}>Services</Link>
            </li>

              <li>
                <Link className={`${pathname === '/dashboard' ? 'active' : ''}`} href={{ pathname: '/dashboard' }}>DashBoard</Link>
            </li>
        </ul>
    </nav>
}