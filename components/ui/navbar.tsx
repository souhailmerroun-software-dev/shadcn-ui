"use client";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-300 bg-slate-50 p-4 text-black md:flex md:items-center md:justify-between">
      <div className="w-full text-center text-xl md:w-auto md:text-left">
        Tasky
      </div>
      <div className="mt-4 flex justify-center space-x-4 text-center md:mt-0 md:flex md:justify-end">
        <a href="/">
          Home
        </a>
        <a href="/tasks">
          Tasks
        </a>
      </div>
    </nav>
  );
}
