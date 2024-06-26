import './button.css'
const Button = ({ onClick, bg, txtc, children }) => {
  return (
    <button style={{ backgroundColor: bg, color: txtc }} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
