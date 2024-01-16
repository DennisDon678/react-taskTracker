import Button from "./Button"

const Header = (props) => {
    const onClick = (e) => {
        alert('Clicked')
    }
  return (
    <div className="header">
        <h1>{props.title}</h1>
        <Button color="green" text="Add" onClick={onClick} />
    </div>
  )
}
Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header