export const body = (name: string) =>
	`%2ATo%2A%20%20%0AThe%20Dean%20and%20Principal%2C%20ZHCET%2C%20%20%0AAligarh%20Muslim%20University%20%0A%0A%2ASubject%3A%2A%20Application%20for%20Postponement%20of%20the%20Exam%20on%2018th%20September%0A%0ARespected%20Sir%2C%0A%0AI%20hope%20this%20letter%20finds%20you%20well.%20I%20am%20writing%20on%20behalf%20of%20the%20students%20regarding%20the%20scheduled%20exam%20on%2018th%20September.%20Due%20to%20the%20continuous%20heavy%20rainfall%20since%20midnight%20of%2017th%20September%2C%20many%20students%2C%20both%20hostel%20residents%20and%20local%20commuters%2C%20are%20facing%20serious%20challenges%20in%20reaching%20the%20university%20safely.%20Additionally%2C%20the%20weather%20forecast%20predicts%20continued%20heavy%20rain%20throughout%20tomorrow%2C%20which%20further%20exacerbates%20the%20situation.%0A%0AThe%20hostel%20students%20are%20finding%20it%20difficult%20to%20step%20out%20of%20their%20accommodations%20due%20to%20waterlogging%2C%20and%20local%20students%20face%20transportation%20issues%20as%20the%20roads%20are%20either%20flooded%20or%20unsafe%20for%20travel.%20Given%20these%20circumstances%2C%20we%20kindly%20request%20you%20to%20consider%20postponing%20the%20exam%20to%20ensure%20the%20safety%20and%20well-being%20of%20all%20students.%0A%0AWe%20hope%20you%20will%20understand%20our%20concerns%20and%20take%20appropriate%20action%20in%20light%20of%20the%20weather%20conditions.%0A%0AThank%20you%20for%20your%20consideration.%0A%0AYours%20sincerely%2C%20%20%0A${name}%20%20%20%0AZHCET%2C%20AMU%0A${new Date().toLocaleDateString()}`;

export const AccountIcon = () => (
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5 text-gray-400"
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
		/>
	</svg>
);
