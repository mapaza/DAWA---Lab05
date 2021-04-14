const Course = (props) => {
	return (
		<div>
            <h1>{props.courses[0].name}</h1>
            {props.courses[0].parts.map((curso) => 
                <p>{curso.name}: {curso.exercises}</p>
            )
            }
            <h1>{props.courses[1].name}</h1>
            {props.courses[1].parts.map((curso) => 
                <p>{curso.name}: {curso.exercises}</p>
            )
            }
		</div>
	)
}	
export default Course