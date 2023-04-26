import axios from 'axios'
import { ValorantAccountTypes } from '../../types/ValorantAccountTypes'

export function useInjection() {
  //   const fetcher = async (url: string) => {
  //     await axios.get(url)
  //   }
  //   const { data, error, isLoading } = useSWR('http://localhost:3300/', fetcher)
  const getUserStats = async (): Promise<ValorantAccountTypes> => {
    const response = await axios.get('http://localhost:3300/')
    return response.data
  }

  return {
    getUserStats,
  }
}
