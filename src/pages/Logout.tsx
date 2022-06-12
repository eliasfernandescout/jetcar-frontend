import { useEffect } from 'react'

const Logout = () => {
  useEffect(() => {
    const logoutFn = async () => {
      console.log('Voce esta deslogado')
    }
    logoutFn()
  }, [])

  return (
    <div>Logout</div>
  )
}

export default Logout
