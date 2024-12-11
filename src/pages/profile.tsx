import { useProfile } from '@/hooks'
import { useState } from 'react'

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const {
    data: profile,
    isLoading,
    error,
  } = useProfile({
    enabled: isLoggedIn,
  })

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>

      {isLoggedIn && (
        <>
          {isLoading && <div>Loading...</div>}
          {error && <div>Error loading profile</div>}
          {profile && (
            <>
              <h1>User Profile</h1>
              <div>
                <p>Name: {profile.name}</p>
                <p>Email: {profile.email}</p>
                <p>City: {profile.city}</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}
export default Profile
