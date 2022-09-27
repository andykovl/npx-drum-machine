import React from "react"
import { useEffect, useState } from "react"

function Pad({ clip, volume, setDisplay }) {
	const [active, setActive] = useState("drum-pad")

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress)
		return () => document.removeEventListener("keydown", handleKeyPress)
	})

	const handleKeyPress = (e) => {
		if (e.keyCode === clip.keyCode) {
			playSound()
		}
	}

	const playSound = () => {
		const audioTag = document.getElementById(clip.keyTrigger)
		setActive("drum-pad__warning")
		setTimeout(() => setActive("drum-pad"), 200)
		audioTag.volume = volume
		audioTag.currentTime = 0
		audioTag.play()
		setDisplay(clip.id)
	}

	return (
		<div onClick={playSound} className={active} id={clip.id}>
			<audio className='clip' id={clip.keyTrigger} src={clip.url} />
			{clip.keyTrigger}
		</div>
	)
}

export default Pad
