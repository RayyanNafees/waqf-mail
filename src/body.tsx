
// function getDateFormat() {
// 	const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// 	const date = new Date();
// 	// date.setDate(date.getDate)
// 	const month = months[date.getMonth()];
// 	const day = String(date.getDate()).padStart(2, '0');
// 	return `${month} ${day}`;
// }

// Result: "May 01, 2024"


export const body = (name: string) =>
	encodeURI(`Respected Sir,
I hope this message finds you well. I am writing to express a humble request on behalf of the students of [Your College Name], following the sad demise of Shri Ratan Tata, a visionary Indian industrialist and a leader who has significantly contributed to the nation's growth.

Shri Ratan Tata's passing on 10th October is a great loss for the entire country. His contributions to the Indian industry, philanthropy, and society have touched millions of lives, including us, the students who look up to him for inspiration.

In honor of his extraordinary life and his service to the nation, we kindly request the college to declare a holiday as a mark of respect and tribute to Shri Ratan Tata. This would allow the students and faculty to reflect on his legacy and his values of leadership, humility, and service to the community.

We sincerely hope you will consider our request favorably.

Thank you for your understanding.

Yours sincerely,  
${name} 
Student of ZHCET, AMU`)

export const AccountIcon = () => (
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		class="w-5 h-5 text-gray-400"
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
		/>
	</svg>
);
