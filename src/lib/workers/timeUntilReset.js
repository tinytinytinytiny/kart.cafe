const DAY_TO_MS = 86400000;
const HOUR_TO_MS = 3600000;
const MINUTE_TO_MS = 60000;
const SECOND_TO_MS = 1000;

updateTime();

let timer;

onmessage = ({ data: { msg } }) => {
	if (msg === 'start') {
		timer = setInterval(updateTime, SECOND_TO_MS);
	}

	if (timer && msg === 'stop') {
		clearInterval(timer);
		timer = undefined;
	}
};

function updateTime() {
	const resetDate = new Date().setUTCHours(0, 0, 0, 0) + DAY_TO_MS;
	postMessage({
		duration: formatTime(resetDate - new Date().getTime())
	});
}

function formatTime(ms) {
	const hours = divide(Math.abs(ms)).divideBy(HOUR_TO_MS);
	const minutes = hours.remainder().divideBy(MINUTE_TO_MS);
	const seconds = minutes.remainder().divideBy(SECOND_TO_MS);

	return {
		hours: Math.floor(hours.quotient()),
		minutes: Math.floor(minutes.quotient()),
		seconds: Math.floor(seconds.quotient()),
	};
}

function divide(x) {
	return {
		divideBy: (y) => ({
			quotient: () => x / y,
			remainder: () => divide(x % y),
		}),
	};
}