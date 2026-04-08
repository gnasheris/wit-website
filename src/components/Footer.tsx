const links = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Contact', href: '#' },
]

export default function Footer() {
    return (
        <footer>
            <div className="footer-logo"><span>Wi</span>T Melbourne</div>
            <p>© 2026 Women in Technology, University of Melbourne</p>
            <ul className="footer-links">
                {links.map((l) => (
                    <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
            </ul>
        </footer>
    )
}