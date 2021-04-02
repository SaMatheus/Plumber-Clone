// COMPONENT
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'

// HOOKS
import { useContext, useEffect } from 'react';

// CONTEXT
import { UrlContext } from '../context/UrlContext';

const Project = () => {
  const { setUrl } = useContext(UrlContext)

  useEffect(() => {
    setUrl(`${window.location.pathname}`)
  }, [])
  
  return (
    <div>
      <Header />
      <Wrapper />
    </div>
  )
}

export default Project