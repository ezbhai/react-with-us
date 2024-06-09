const Todo = () => {
    return (
        <div className="flex h-screen w-screen">
            <aside className="w-64 bg-gray-900 text-gray-200 flex flex-col">
                <div className="p-4">
                    <h1 className="text-xl font-bold">Microsoft To Do</h1>
                    <div className="mt-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="your-avatar-url"
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <div className="font-bold">user name</div>
                                <div className="text-xs text-gray-400">useremail@example.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="flex flex-col flex-grow p-4 space-y-2">
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
                        <span className="material-icons">calendar_today</span>
                        <span className="ml-2">My Day</span>
                    </a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
                        <span className="material-icons">star_outline</span>
                        <span className="ml-2">Important</span>
                    </a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
                        <span className="material-icons">event_note</span>
                        <span className="ml-2">Planned</span>
                    </a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
                        <span className="material-icons">assignment</span>
                        <span className="ml-2">Assigned to Me</span>
                    </a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
                        <span className="material-icons">flag</span>
                        <span className="ml-2">Flagged Email</span>
                    </a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
                        <span className="material-icons">check_box</span>
                        <span className="ml-2">Tasks</span>
                    </a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
                        <span className="material-icons">flare</span>
                        <span className="ml-2">Getting Started</span>
                    </a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
                        <span className="material-icons">shopping_cart</span>
                        <span className="ml-2">Groceries</span>
                    </a>
                </nav>
                <div className="p-4">
                    <button className="w-full py-2 px-4 rounded bg-gray-800 hover:bg-gray-700">
                        New List
                    </button>
                </div>
            </aside>
            <main className="flex-grow bg-gray-800 text-gray-200 p-8">
                <h2 className="text-2xl font-bold">Tasks</h2>
                <div className="mt-4 flex justify-center items-center h-full">
                    <div className="text-center">
                        <span className="material-icons text-5xl">task_alt</span>
                        <p className="mt-4">Tasks show up here if they aren’t part of any lists you’ve created.</p>
                        <button className="mt-4 py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Add a task</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Todo;