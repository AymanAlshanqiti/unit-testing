import React from 'react';

const courses = [
	{
		id: 1,
		title: 'JavaScript',
		description: 'Hello this is JavaScript course',
	},
	{ id: 2, title: 'Swift', description: 'Hello this is Swift course' },
];

export default function courseDetail(props) {
	return (
		<div>
			{props.match.params.id === '1' ? (
				<ul>
					<li>{courses[0].id}</li>
					<li>{courses[0].title}</li>
					<li>{courses[0].description}</li>
				</ul>
			) : (
				<ul>
					<li>{courses[1].id}</li>
					<li>{courses[1].title}</li>
					<li>{courses[1].description}</li>
				</ul>
			)}
		</div>
	);
}
