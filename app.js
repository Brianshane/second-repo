
const colors = ['red', 'blue', 'green'];
const selectedColor = colors[Math.floor(Math.random() * colors.length)];
const timestamp = new Date().toISOString();

function createMessage(color, time) {
	return `Selected ${color} at ${time}`;
}

const message = createMessage(selectedColor, timestamp);
console.log(message);
