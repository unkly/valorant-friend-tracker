import useSWR from 'swr'

export function useInjection() {
  const fetcher = async () => {
    const data = await fetch(
      'https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/u7gi/JP1?api_key=RGAPI-9fa0f31d-0253-4927-86ae-096298016563'
    )
    const json = await data.json()
    const response = JSON.stringify(json)
    return response
  }

  const response = fetcher()
  console.log(response)
  const getUserStats = async () => {}
  return {
    getUserStats,
  }
}
