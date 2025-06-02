const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-100 px-4 py-8">
    <header className="mb-6 max-w-6xl mx-auto flex justify-between items-center">
      <div className="space-x-4">
        <button className="text-sm font-medium text-blue-600 hover:underline">View Data</button>
        <button className="text-sm font-medium text-blue-600 hover:underline">Dashboard</button>
      </div>
    </header>
    <main className="max-w-6xl mx-auto">{children}</main>
  </div>
);

export default MainLayout;
