import { useState } from "preact/hooks";
import { AccountIcon, body } from "./body";

export function App() {
	const [name, setName] = useState<string>();
	return (
		<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
			<img
				src="https://play.tailwindcss.com/img/beams.jpg"
				alt=""
				class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
				width="1308"
			/>
			<div class="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

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
							<AccountIcon />
						</div>
						<input
							type="text"
							class="py-4 mt-1 block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							placeholder="Enter your name"
							value={name}
							onInput={(e) => setName(e.currentTarget.value)}
						/>
					</div>
				</label>

				{name && (
					<a
						href={`mailto:dean.eng@amu.ac.in?cc=mmsbeg@cs.berkeley.edu&subject=Application for Postponement of the Exam on 18th September&body=${body(name)}`}
						class="block container text-center rounded bg-green-400 px-4 py-2 text-white shadow-md"
						disabled={!name}
					>
						Send Appeal
					</a>
				)}
			</div>
		</div>
	);
}
