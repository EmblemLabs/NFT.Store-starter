import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { isIPFS } from '../constants'

export default function Redirect(): null {
  const { replace } = useRouter()

  useEffect(() => {
    if (isIPFS) {
      window.location.replace('./main.html')
    } else {
      replace('/main')
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}
