import axios from 'axios'
import useSWR from 'swr'

export function useInjection() {
  const fetcher = async (url: string) => {
    console.log(url)
    const response = await axios
      .get(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8',
          'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
          Origin: 'https://developer.riotgames.com',
          'X-Riot-Token': 'RGAPI-9fa0f31d-0253-4927-86ae-096298016563',
        },
      })
      .then((res) => {
        res.data()
      })
    return response
  }
  const { data, error, isLoading } = useSWR(
    [
      'https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/u7gi/JP1',
    ],
    fetcher
  )
  console.log(data)
  const getUserStats = async () => {}
  return {
    getUserStats,
  }
}
