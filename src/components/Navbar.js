
const Navbar = () => {
    return (
        <nav style={style.navStyle}>
            <h1>To Dos</h1>

            <ul>
                <li>Incomplete To Dos</li>
                <li>Completed To Dos</li>
            </ul>
        </nav>
    )
}

const style = {
    navStyle: {
        display: 'flex',
        justifyContent: 'space-around',
    }
}

export default Navbar