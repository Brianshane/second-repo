
const colors = ['red', 'blue', 'green'];
const selectedColor = colors[Math.floor(Math.random() * colors.length)];
const timestamp = new Date().toISOString();

function createMessage(color, time) {
	return `Selected ${color} at ${time}`;
}

const message = createMessage(selectedColor, timestamp);
console.log(message);

const recentSelections = [];
recentSelections.push({ color: selectedColor, time: timestamp });

function countSelections(selections) {
	return selections.reduce((counts, selection) => {
		counts[selection.color] = (counts[selection.color] || 0) + 1;
		return counts;
	}, {});
}

function formatSummary(counts) {
	return Object.entries(counts)
		.map(([color, count]) => `${color}: ${count}`)
		.join(', ');
}

const selectionCounts = countSelections(recentSelections);
const summary = formatSummary(selectionCounts);

console.log(`Summary: ${summary}`);
