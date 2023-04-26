import { ValorantAccountTypes } from '../../types/ValorantAccountTypes'
import { useInjection } from './hooks'
import { useEffect, useState } from 'react'

export default function PageContainer() {
  const hooks = useInjection()
  const [data, setData] = useState<ValorantAccountTypes>()

  useEffect(() => {
    const fetch = async () => {
      const response = await hooks.getUserStats()
      setData(response)
    }
    fetch()
  }, [])

  if (!data) return <div>isLoading</div>

  return (
    <div>
      <p>{data?.gameName}</p>
      <p>{data?.tagLine}</p>
    </div>
  )
}
