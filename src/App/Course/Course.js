const Course = (props) => {
	return (
		<div>
			<h1>{props.course.name}</h1>
            {props.course.parts.map((curso) => 
                <p>{curso.name}: {curso.exercises}</p>
            )
            }
		</div>
	)
}	
export default Course