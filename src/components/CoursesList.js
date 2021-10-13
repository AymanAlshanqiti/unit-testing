import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
	{
		id: 1,
		title: 'JavaScript',
		description: 'Hello this is JavaScript course',
	},
	{ id: 2, title: 'Swift', description: 'Hello this is Swift course' },
];
export default function CoursesList() {
	return (
		<>
			{courses.map(course => {
				return (
					<ul key={course.id}>
						<li>
							<Link to={`/courses/${course.id}`}>{course.title}</Link>
						</li>
					</ul>
				);
			})}
		</>
	);
}
