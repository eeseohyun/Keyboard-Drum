const app = () => {
	const get = (target) => {
		return document.querySelector(target);
	};

	const getAll = (target) => {
		return document.querySelectorAll(target);
	};
	const drumSounds = [
		{ key: 81, sound: "clap.wav" },
		{ key: 87, sound: "crash.wav" },
		{ key: 69, sound: "hihat.wav" },
		{ key: 65, sound: "kick.wav" },
		{ key: 83, sound: "openhat.wav" },
		{ key: 68, sound: "ride.wav" },
		{ key: 90, sound: "shaker.wav" },
		{ key: 88, sound: "snare.wav" },
		{ key: 67, sound: "tom.wav" },
	];
	const getAudio = (index) => {
		//<audio data-key="" src=""> </audio>
		const audio = document.createElement("audio");
		audio.dataset.key = drumSounds[index].key;
		audio.src = "assets/sounds/" + drumSounds[index].sound;
		return audio;
	};

	const keys = Array.from(getAll(".key"));
	console.log(keys);
	const init = () => {
		keys.forEach((key, index) => {
			const audio = getAudio(index);
			key.appendChild(audio);
			key.dataset.key = drumSounds[index].key;
		});
	};
	init();
};

app();
