export default function Dashboard(){
    return(
        <div>
            <div className="flex justify-between mb-4 mx-4">
            <h1 className="text-3xl font-bold">Payments App</h1>
            <div className="flex">
            <p className="text-xl font-semibold mr-2">Hello User</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
           </svg>

            </div>
            </div>
            <hr />
            <div>
            <h1 className="text-xl font-bold mt-4 mb-4 mx-4">Your Balance $50000</h1>
            
            <h1 className="text-xl font-bold mt-4  mx-4">Users</h1>
            <div className="flex items-center justify-between " >
            <input
             className="w-full mt-4 mb-4 mx-4 p-2 border rounded-md focus:outline-none focus:border-black"
              type="text"
              placeholder="Search" />
            </div>
            
            
            <div>
                <div className="flex justify-between mb-4 mx-4">
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
           </svg>
                <h1 className="text-xl font-semibold ml-4 ">User1</h1>
                </div>
                
                <button  className="bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:shadow-outline-gray">Send money</button>
                </div>
                <div className="flex justify-between mb-4 mx-4">
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
           </svg>
                <h1 className="text-xl font-semibold ml-4 ">User2</h1>
                </div>
                
                <button  className="bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:shadow-outline-gray">Send money</button>
                </div>
                <div className="flex justify-between mb-4 mx-4">
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
           </svg>
                <h1 className="text-xl font-semibold ml-4 ">User3</h1>
                </div>
                
                <button  className="bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:shadow-outline-gray">Send money</button>
                </div>
            </div>
            </div>

        </div>
    )
}