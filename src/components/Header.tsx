// src/components/Header.tsx
export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <h1 className="text-xl font-bold bg-cyan-400">Articles</h1>
      <div className="flex items-center gap-4">
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
          Create New
        </button>
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
