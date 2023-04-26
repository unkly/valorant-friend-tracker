import useSWR from 'swr'

export function useInjection() {
  const fetcher = async (url: string) => {
    console.log(url)
    const response = await fetch(url).then((res) => {
      console.log(res)
      res.json()
    })
    return response
  }
  const { data, error, isLoading } = useSWR(
    'https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/u7gi/JP1?api_key=RGAPI-9fa0f31d-0253-4927-86ae-096298016563',
    fetcher
  )
  console.log(data)
  const getUserStats = async () => {}
  return {
    getUserStats,
  }
}
