import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        
        <h1 className="text-3xl font-extrabold mb-2">
          AS LEARN 🚀
        </h1>

        <p className="text-slate-400 mb-6">
          React + Tailwind CSS v4 Setup
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition"
        >
          Count is {count}
        </button>

        <p className="mt-4 text-sm text-slate-400">
          Edit <code className="text-indigo-400">src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
