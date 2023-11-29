import Example from "./filter";

interface Transaction {
    id: string;
    order_no: string;
    channel: string;
    type: string;
    currency: string;
    total: number;
}

const TransactionTable: FC = () => {
    const transactions: Transaction[] = [
        {
            id: '#82732',
            order_no: '123456789dfad',
            channel: 'Billboard',
            type: 'Payment',
            currency: 'XAF',
            total: 400,
        },
    ];
    
    return (
        <div className={"bg-white flex justify-center h-screen py-6"}>
            <div className="w-8/12 bg-white border p-6 rounded">
                <div className="flex flex-col space-y-24">

                    <div className="flex flex-row space-x-4 mx-32 mt-5">
                        <div className={"flex flex-row gap-3 rounded basis-1/3 shadow-md p-4"}>
                            <div className={"text-pink-500 bg-pink-100 p-3 justify-center rounded"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                </svg>
                            </div>
                            <div className={"flex flex-col"}>
                                <h3>Incoming Payment</h3>
                                <div className={"flex flex-row gap-2"}>
                                    <p>4,500,000F</p>
                                    <p className={"text-green-500"}>(+12%)</p>
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-row gap-3 rounded basis-1/3 shadow-md p-4"}>
                            <div className={"text-blue-500 bg-blue-100 p-3 justify-center rounded"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                </svg>
                            </div>
                            <div className={"flex flex-col"}>
                                <h3>Available Balance</h3>
                                <div className={"flex flex-row gap-2"}>
                                    <p>4,500,000F</p>
                                    <p className={"text-green-500"}>(+12%)</p>
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-row gap-3 rounded basis-1/3 shadow-md p-4"}>
                            <div className={"text-orange-500 bg-orange-100 p-3 justify-center rounded"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </div>
                            <div className={"flex flex-col"}>
                                <h3>Incoming Payment</h3>
                                <div className={"flex flex-row gap-2"}>
                                    <p>4,500,000F</p>
                                    <p className={"text-green-500"}>(+12%)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"mt-2.5"}>
                        <div className="flex flex-row justify-between">
                            <div className={"flex gap-5 py-2 w-8/12 justify-center py-1.5"}>
                                <div className={"flex h-fit w-1/12"}>
                                    <Example/>
                                </div>
                                <div className="flex grow">
                                    <span
                                        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center">
                                        <img src="/images/Search.svg" alt="search icon"/>
                                    </span>
                                    <input type="search"
                                           className="block w-[1%] min-w-0 flex-auto rounded px-3 py-1.5 text-base font-normal text-neutral-700 outline-none"
                                           placeholder="Search"/>
                                </div>
                            </div>
                            <div className={""}>
                                <button type="button"
                                        className="flex gap-2 block rounded-md bg-blue-200 py-2 px-3 text-center text-sm font-semibold text-blue-600">
                                    Download Report
                                    <img src="/images/download-5.svg" alt="download icon"/>
                                </button>
                            </div>
                        </div>
                        <div className="flow-root">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                        <tr>
                                            <th scope="col"
                                                className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                            >

                                            </th>
                                            <th scope="col"
                                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                TRANSACTION
                                            </th>
                                            <th scope="col"
                                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                CHANNEL
                                            </th>
                                            <th scope="col"
                                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                ORDER NO.
                                            </th>
                                            <th scope="col"
                                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                CURRENCY
                                            </th>
                                            <th scope="col"
                                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                TOTAL
                                            </th>
                                            <th scope="col"
                                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                PDF
                                            </th>

                                        </tr>
                                        </thead>
                                        <tbody className="divide-gray-200 bg-white">
                                        {transactions.map((transaction) => (
                                            <tr key={transaction.id}>
                                                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                                                    {transaction.id}</td>
                                                <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">{transaction.type}</td>


                                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.channel}</td>
                                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.order_no}</td>
                                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.currency}</td>
                                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.total}</td>

                                                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                                                    <button>
                                                        <img src="/images/download.svg" alt="download icon"/>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TransactionTable