import useSWR from 'swr'
import { fetcher } from '../fetcher'

export const useRandomJoke = () => {
  const { data, error } = useSWR('https://official-joke-api.appspot.com/random_joke', fetcher)

  return {
    joke: data,
    isLoading: !error && !data,
    isError: error
  }
}
