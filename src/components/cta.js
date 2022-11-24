import * as React from "react"
import { Link } from "gatsby"
const Button = ({ children, target }) => {

  return (
            <Link to={target}><button className="bg-green p-5 rounded-full text-white font-medium">{children}</button></Link>
  )
}

export default Button
