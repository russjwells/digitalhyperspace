import React from 'react';

function TeamView(props, context){
	return (
		<div className="content">
			<div className="screen" id="team">
				<div className="teamMember">
					<div className="memberPic">
						<img src="img/russface_circle.png" />
					</div>
					<div className="memberData">
						<div>
							<h3>Russell Wells</h3>
						</div>
						<div>
							<p>Hello, I'm the founder of Digital Hyperspace.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TeamView;