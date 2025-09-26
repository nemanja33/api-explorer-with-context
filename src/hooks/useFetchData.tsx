import { useCallback, useEffect, useState } from "react";
import { ErrorType } from "../types/logs";
import { User } from "../types/user";

const useFetchData = (url: string) => {
  const [ data, setData ] = useState<User[]>([]);
  const [ fetchError, setFetchError ] = useState<ErrorType>()

  const apiCall = useCallback(async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        setFetchError({
          message: 'Problem fetching data!'
        })
        return
      }

      const data: User[] = await res.json()
      setData(data)

    } catch (error: unknown) {
      setData([])
      setFetchError({
        message: error instanceof Error ? error.message : 'An unknown error occurred'
      })
    }
  }, [url])

  useEffect(() => {
    apiCall();
  }, [apiCall])


  return {
    data,
    fetchError,
  }
}

export {
  useFetchData
}