import { Outlet, useNavigation } from "react-router-dom"

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <div>
      {navigation.state === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default HomePage
