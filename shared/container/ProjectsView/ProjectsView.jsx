import React from 'react';

function ProjectsView(props, context){
	return (
		<div className="content">
			<div className="screen" id="Sitting">
				<h3>Sitting</h3>
				<p>a distraction free meditation timer.</p>
			</div>
			<div className="screen" id="miniReddit">
				<h3>Mini Reddit</h3>
				<p>an angular demo.</p>
			</div>
			<div className="screen" id="miniTwitter">
				<h3>Mini Twitter</h3>
				<p>an angular demo.</p>
			</div>
			<div className="screen" id="Notetaker">
				<h3>Github Notetaker</h3>
				<p>a react demo.</p>
			</div>
			<div className="screen">
				<h3>Harmonize</h3>
				<p>an educational permaculture game demo.</p>
			</div>
			<div className="screen">
				<h3>Unity3D Networked FPS Roguelike</h3>
				<p>a mystical multiplayer adventure!</p>
			</div>
		</div>
	);
}

export default ProjectsView;