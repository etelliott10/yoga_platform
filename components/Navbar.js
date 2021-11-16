import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
    <div class="nav-wrapper">

      <a  class="brand-logo center">
            {/* <img class="material-icons" src="images/watermelon-logo.png"/> */}
          WuWuMelon</a>
      {/* <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><Link href="#"><a href="sass.html">Sass</a></Link></li>
        <li><Link href="#"><a href="badges.html">Components</a></Link></li>
        <li><Link href="#"><a href="collapsible.html">JavaScript</a></Link></li>
      </ul> */}
    </div>
  </nav>
    )
}

export default Navbar;