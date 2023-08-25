import Concept from "./Concept";

const Concepts = (props) => {
    return (
        <ul id="concepts">
            {props.concepts.map(concept =>
                <Concept key={concept.id}
                         image={concept.image}
                         title={concept.title}
                         description={props.description}
                />
            )}
        </ul>
    )
}

export default Concepts;