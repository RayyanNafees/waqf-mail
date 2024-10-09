import { useState } from "preact/hooks";
import { AccountIcon, body } from "./body";

export function App() {
	const [name, setName] = useState<string>();
	return (
		<div class="flex overflow-hidden relative flex-col justify-center py-6 min-h-screen bg-gray-50 sm:py-12">
			<img
				src="https://play.tailwindcss.com/img/beams.jpg"
				alt=""
				class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
				width="1308"
			/>
			<div class="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

			<div class="relative px-6 pt-10 pb-8 space-y-10 bg-white ring-1 shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
				<header class="container space-y-3 text-center">
					<h1 class="text-3xl text-bold">
					Academic holiday on the Demise of Ratan Tata Ji
					</h1>
					<h2 class="text-xl text-semibold text-neutral-600">
						Students of ZHCET
					</h2>
				</header>
				<label class="block">
					<div class="relative">
						<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<AccountIcon />
						</div>
						<input
							type="text"
							class="block py-4 pl-10 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							placeholder="Enter your name"
							value={name}
							onInput={(e) => setName(e.currentTarget.value)}
						/>
					</div>
				</label>

				{name && (
					<a
						href={`mailto:dean.eng@amu.ac.in?cc=mmsbeg@cs.berkeley.edu;vcamu@amu.ac.in&subject=Request for Holiday on the Demise of Shri Ratan Tata&body=${body(name)}`}
						class="container block px-4 py-2 text-center text-white bg-green-400 rounded shadow-md"
						disabled={!name}
					>
						Send Appeal
					</a>
				)}
			</div>
		</div>
	);
}
