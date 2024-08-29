import Sidebar from "./SideBar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Dashboard(){
    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
      ];

    return (
        <div className="flex flex-col lg:flex-row  bg-[#f5f5f0] p-5">
            {/* Sidebar */}
            <div className="w-full lg:w-1/5 mb-4 lg:mb-0">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-4/5 bg-[#ffaa00] p-4 lg:p-8 border rounded-2xl">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        {/* Chart */}
                        <LineChart width={window.innerWidth < 1024 ? 390 : 470} height={280} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        </LineChart>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div className="flex flex-col justify-center shadow-xl items-start p-6 gap-2 bg-white rounded-xl">
                                <h1 className="font-bold">Total Income</h1>
                                <span className="font-black">$1250</span>
                            </div>
                            <div className="flex flex-col justify-center shadow-xl items-start p-6 gap-2 bg-white rounded-xl">
                                <h1 className="font-bold">Total Expense</h1>
                                <span className="font-black">$1250</span>
                            </div>
                        </div>

                        {/* Single Summary Card */}
                        <div className="flex justify-center mt-6">
                            <div className="flex flex-col justify-center shadow-xl items-start px-12 py-4 gap-2 bg-white rounded-xl">
                                <h1 className="font-bold">Total Balance</h1>
                                <span className="font-black">$1250</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent History Section */}
                    <div>
                        <h1 className="font-bold">Recent History</h1>
                        <ul className="mt-2 flex flex-col gap-3">
                            <li className="flex justify-between bg-white border rounded-xl px-4 py-2">
                                <h1 className="font-bold">Buying cloth</h1>
                                <span className="font-black">$23</span>
                            </li>
                            <li className="flex justify-between bg-white border rounded-xl px-4 py-2">
                                <h1 className="font-bold">Groceries</h1>
                                <span className="font-black">$50</span>
                            </li>
                            <li className="flex justify-between bg-white border rounded-xl px-4 py-2">
                                <h1 className="font-bold">Eating out</h1>
                                <span className="font-black">$18</span>
                            </li>
                        </ul>

                        {/* Expense & Salary Sections */}
                        <div className="mt-6">
                            <div className="mt-4">
                                <div className="flex justify-around">
                                    <p className="font-medium">Min</p>
                                    <span className="font-bold">Salary</span>
                                    <p className="font-medium">Max</p>
                                </div>
                                <li className="flex justify-between bg-white border rounded-xl px-4 py-2">
                                    <h1 className="font-bold">$1200</h1>
                                    <span className="font-black">$2500</span>
                                </li>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-around">
                                    <p className="font-medium">Min</p>
                                    <span className="font-bold">Expense</span>
                                    <p className="font-medium">Max</p>
                                </div>
                                <li className="flex justify-between bg-white border rounded-xl px-4 py-2">
                                    <h1 className="font-bold">$200</h1>
                                    <span className="font-black">$1200</span>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
