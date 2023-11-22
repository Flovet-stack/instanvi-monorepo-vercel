import React from 'react'
import { Statistics } from '../../types'

export default function Statistics(props: Statistics) {
	const { setNewAdvert } = props

	return (

		<div className="bg-white rounded p-8">
			<div className={"basis-1/3"}>
				<div className={"flex justify-between my-2"}>
					<p className={"text-3xl font-bold"}>
						Statistics{" "}
						<small className={"text-sm font-thin"}>(July 2023)</small>
					</p>
					<div>
						<button
							onClick={() => { setNewAdvert(true) }}
							className={
								"bg-black py-2.5 px-5 text-white flex items-center gap-2 rounded-lg cursor-pointer"
							}
						>
							<i className="ri-add-line text-2xl"></i>
							<p>New Advert</p>
						</button>
					</div>
				</div>
				<div className={"flex gap-2 mt-2"}>
					<div className="border-2 basis-1/4 p-2.5 rounded-lg">
						<div className="flex justify-between">
							<div className={"flex gap-2 mb-4"}>
								<img src="/images/megaphone%203.svg" alt="megaphone" />
								<h3 className={"text-2xl"}>Ads</h3>
							</div>
							<small
								className={
									"flex rounded-full px-1 bg-green-100 p-1 h-fit"
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 text-green-500"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
									/>
								</svg>
								<p className={"text-green-500"}>37.8%</p>
							</small>
						</div>

						<div className={"flex flex-row justify-between"}>
							<div className="">
								<p>Ongoing</p>
								<p className="my-3">Past</p>
								<p>Total</p>
							</div>
							<div className="text-right">
								<p>18</p>
								<p className="my-3">27</p>
								<p className={"text-xl font-bold"}>45</p>
							</div>
						</div>
					</div>

					<div className="border-2 basis-1/4 p-2.5 rounded-lg">
						<div className="flex justify-between">
							<div className={"flex gap-2 mb-4"}>
								<img
									src="/images/users-solid%202.svg"
									alt="user-icon"
								/>
								<h3 className={"text-2xl"}>Reach</h3>
							</div>
							<small
								className={
									"flex rounded-full px-1 bg-green-100 p-1 h-fit"
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 text-green-500"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
									/>
								</svg>
								<p className={"text-green-500"}>37.8%</p>
							</small>
						</div>

						<div className={"flex flex-row justify-between"}>
							<div className="">
								<p>Online</p>
								<p className="my-3">Offline</p>
								<p>Total</p>
							</div>
							<div className="text-right">
								<p>28,000</p>
								<p className="my-3">57,000</p>
								<p className={"text-xl font-bold"}>45</p>
							</div>
						</div>
					</div>

					<div className="border-2 basis-1/4 p-2.5 rounded-lg">
						<div className="flex justify-between">
							<div className={"flex gap-2 mb-4"}>
								<img src="/images/users-alt%202.svg" alt="user-icon" />
								<h3 className={"text-2xl"}>Reach</h3>
							</div>
							<small
								className={
									"flex rounded-full px-1 bg-red-100 p-1 h-fit"
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 text-red-500"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 4.5v15m0 0l-6.75 6.75M12 19.5l6.75 6.75"
									/>
								</svg>
								<p className={"text-red-500"}>37.8%</p>
							</small>
						</div>

						<div className={"flex flex-row justify-between"}>
							<div className="">
								<p>Online</p>
								<p className="my-3">Offline</p>
								<p>Total</p>
							</div>
							<div className="text-right">
								<p>28,000</p>
								<p className="my-3">57,000</p>
								<p className={"text-xl font-bold"}>45</p>
							</div>
						</div>
					</div>

					<div className="border-2 basis-1/4 p-2.5 rounded-lg">
						<div className="flex justify-between">
							<div className={"flex gap-2 mb-4"}>
								<img src="/images/users-alt%202.svg" alt="user-icon" />
								<h3 className={"text-2xl"}>Finances</h3>
							</div>
							<small
								className={
									"flex rounded-full px-1 bg-green-100 p-1 h-fit"
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 text-green-500"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
									/>
								</svg>
								<p className={"text-green-500"}>37.8%</p>
							</small>
						</div>

						<div className={"flex flex-row justify-between"}>
							<div className="">
								<p>balance</p>
								<p className="my-3">Expense</p>
								<p>Total</p>
							</div>
							<div className="text-right">
								<p>28,000 XAF</p>
								<p className="my-3"> 57,000 XAF</p>
								<p className={"text-xl font-bold"}>85,000 XAF</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
