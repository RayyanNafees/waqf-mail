import { useState } from "preact/hooks";

export function App() {
	const [action, setAction] = useState(`mainto:dean.eng@amu.ac.in?cc=mmsbeg@cs.berkeley.edu&subject=Application for Postponement of the Exam on 18th September&body=
    *To*  
The Dean and Principal, ZHCET,  
Aligarh Muslim University 

*Subject:* Application for Postponement of the Exam on 18th September

Respected Sir,

I hope this letter finds you well. I am writing on behalf of the students regarding the scheduled exam on 18th September. Due to the continuous heavy rainfall since midnight of 17th September, many students, both hostel residents and local commuters, are facing serious challenges in reaching the university safely. Additionally, the weather forecast predicts continued heavy rain throughout tomorrow, which further exacerbates the situation.

The hostel students are finding it difficult to step out of their accommodations due to waterlogging, and local students face transportation issues as the roads are either flooded or unsafe for travel. Given these circumstances, we kindly request you to consider postponing the exam to ensure the safety and well-being of all students.

We hope you will understand our concerns and take appropriate action in light of the weather conditions.

Thank you for your consideration.

Yours sincerely,  
[Name]   
ZHCET, AMU
${new Date().toLocaleDateString()}
`)

	return (
		<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
			<img
				src="/img/beams.jpg"
				alt=""
				class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
				width="1308"
			/>
			<div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			<form method="POST" action={action}>
				<div class="relative space-y-10 bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
					<header class="container space-y-3 text-center">
						<h1 class="text-bold text-3xl">
							Postponement for 18th September exam
						</h1>
						<h2 class="text-semibold text-xl text-neutral-600">
							Students of ZHCET
						</h2>
					</header>
					<label class="block">
						<div class="relative">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
							</div>
							<input
								type="text"
								class="mt-1 block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
								placeholder="Enter your name"
                onChange={e=>setAction(a => a.replace('[Name]', e.currentTarget.value))}
							/>
						</div>
					</label>

					<button
						type="submit"
						class="container rounded bg-green-400 px-4 py-2 text-white shadow-md"
					>
						Send Appeal
					</button>
				</div>
			</form>
		</div>
	);
}
