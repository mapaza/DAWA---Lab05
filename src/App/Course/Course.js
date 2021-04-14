const Course = (props) => {
	return (
		<div>
            {props.course.parts.map((curso) => 
                <p>{curso.name}: {curso.exercises}</p>
            )
            }
		</div>
	)
}	
export default Course