// function Header (props) {
//     console.log(props)
//     return (
//         <header>
//             <h1>{props.name}</h1>
//         </header>
//     )
// }
// export default Header;


// Deconstruction:


function Header ({name}) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header;

