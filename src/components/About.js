// function About (props) {
//     return (
//         <aside>
//             <img src = {props.image} alt = "blog logo"></img>
//         </aside>
//     )
// }

// export default About;


// Deconstructure


function About ({image= "https://via.placeholder.com/215", about}) {
    return (
        <aside>
            <img src = {image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About;