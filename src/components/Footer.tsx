import React from "react"
//--- COMPONENTS
import Credits from "./Credits"

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <Credits />
      <hr />
      <div className="footer__copyright">copyright &copy; 2022</div>
      <div className="footer__name">Roberto Castelli</div>
    </footer>
  )
}

export default Footer
