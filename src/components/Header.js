import Link from "./Link"

function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">Home</Link>
      <Link href="/accordion" className="item">Accordion</Link>
      <Link href="/about" className="item">About</Link>
    </div>
  )
}

export default Header
