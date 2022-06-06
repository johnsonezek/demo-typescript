import React from "react"

type ButtonProps = {
    type?: 'submit' | 'reset'
}


const Button = (props:ButtonProps) => {

  return (
    <div className="btn">
      <button type="submit">Submit</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type='reset'>Reset</button>
    </div>
  )
}

export default Button
