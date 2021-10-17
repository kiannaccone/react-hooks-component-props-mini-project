function Article({ title, date="January 1, 1970", preview, minutes }) {
    function displayCoffeeCups(){
        let coffeeString = ""
        for(let i=0; i < Math.ceil(minutes / 5); i++){
            coffeeString += "☕️"
        }
        return coffeeString
    }
    function displayBentoBoxes(){
        let bentoString = ""
        for(let i=0; i < Math.ceil(minutes / 10); i++){
            bentoString += "🍱"
        }
        return bentoString
    }
    const displayEmoji = (minutes >= 30 ? displayBentoBoxes() : displayCoffeeCups())
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} * {displayEmoji} {minutes} min to read</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article;