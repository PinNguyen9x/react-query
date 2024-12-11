import { NavLink, Outlet } from 'react-router-dom'

function App() {
  const urlList = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: 'profile',
      label: 'Profile',
    },
    {
      path: 'tnx-details',
      label: 'Transaction Details',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <ul>
        {urlList.map(({ path, label }) => (
          <li key={path} style={{ margin: '10px 0' }}>
            <NavLink
              to={path}
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'goldenrod' : 'black',
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default App
