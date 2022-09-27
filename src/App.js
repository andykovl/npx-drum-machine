import React, { useState } from "react"
import "./App.css"
import Pad from './components/Pad'
import {audioclips} from './components/audioclips.js'
console.log(audioclips);

function App() {
	const [volume, setVolume] = useState(1)
	const [display, setDisplay] = useState("Sound")

	return (
		<div className='wrapper' id='drum-machine'>
			<h2>Drum machine</h2>
			<div className='keypad__wrapper'>
				{audioclips.map((clip) => (
					<Pad
						key={clip.id}
						clip={clip}
						volume={volume}
						setDisplay={setDisplay}
					/>
				))}
			</div>
			<br />
			<h4>volume</h4>
			<input
				type='range'
				step='0.01'
				onChange={(e) => setVolume(e.target.value)}
				value={volume}
				max='1'
				min='0'
				className='volume__picker'
			/>
			<h4 id='display'>{display}</h4>
		</div>
	)
}


export default App
