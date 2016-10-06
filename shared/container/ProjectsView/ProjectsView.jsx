import React from 'react';

function ProjectsView(props, context){
	return (
		<div className="content">
			<div className="screen">
				<h3>Sitting</h3>
				<p>a distraction free meditation timer.</p>
			</div>
			<div className="screen">
				<h3>Reddit Clone</h3>
				<p>an angular demo.</p>
			</div>
			<div className="screen">
				<h3>Github Notetaker</h3>
				<p>a react demo.</p>
			</div>
			<div className="screen">
				<h3>Harmonize</h3>
				<p>an educational permaculture game demo.</p>
			</div>
			<div className="screen">
				<h3>Unity3D Networked FPS Roguelike</h3>
				<p>a mystical multiplayer adventure</p>
			</div>
		</div>
	);
}

export default ProjectsView;