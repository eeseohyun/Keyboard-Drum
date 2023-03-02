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

	const playSound = (keyCode) => {
		//키코드에 맞는 드럼사운드 출력
		const $audio = get(`audio[data-key="${keyCode}"]`);
		const $key = get(`div[data-key="${keyCode}"]`);
		if ($key && $audio) {
			$audio.currentTime = 0; //재생시점
			$audio.loop = false; //반복재생하지 않음
			$audio.play();
		}
	};

	const handleClick = (e) => {
		console.log(e.target);
		const keyCode = e.target.getAttribute("data-key");
		playSound(keyCode);
	};

	const keys = Array.from(getAll(".key"));
	console.log(keys);
	const init = () => {
		keys.forEach((key, index) => {
			const audio = getAudio(index);
			key.appendChild(audio);
			key.dataset.key = drumSounds[index].key;
			key.addEventListener("click", handleClick);
		});
		window.onkeydown = (e) => {
			const keyCode = e.keyCode;
			playSound(keyCode);
		};
	};
	init();
};

app();
