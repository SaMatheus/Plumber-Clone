// COMPONENT
import Header from '../components/Header'
import RouteDescription from '../components/RouteDescription'
import Wrapper from '../components/Wrapper'

// HOOKS
import {useContext, useEffect} from 'react'

// CONTEXT
import UrlContext from '../context/UrlContext'

const Services = () => {
  const { setUrl } = useContext(UrlContext)

  useEffect(() => {
    setUrl(`${window.location.pathname}`)
  }, [])

  return (
    <div>
      <Header>
      </Header>
      <RouteDescription>
        <h1></h1>
        <p></p>
      </RouteDescription>
      <Wrapper />
    </div>
  )
}

export default Services
