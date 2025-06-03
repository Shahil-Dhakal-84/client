export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 text-gray-800">
      <header className="mb-8 max-w-4xl mx-auto flex justify-between items-center">
        <nav className="space-x-6 text-blue-600 text-sm font-semibold">
          <button className="hover:underline">View Data</button>
          <button className="hover:underline">Dashboard</button>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        {children}
      </main>
    </div>
  );
}