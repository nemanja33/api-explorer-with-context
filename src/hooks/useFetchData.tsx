import { useEffect, useState } from "react";
import { ErrorType } from "../types/logs";
import { User } from "../types/user";

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

const useFetchData = () => {
  const [ data, setData ] = useState<User[]>([]);
  const [ error, setError ] = useState<ErrorType>()

  const apiCall = async () => {
    try {
      const res = await fetch(API_URL);

      if (!res.ok) {
        setError({
          message: 'Problem fetching data!'
        })
        return
      }

      const data: User[] = await res.json()
      setData(data)

    } catch (error: any) {
      setData([])
      setError({
        message: error?.message as string
      })
    }
  }

  useEffect(() => {
    apiCall();
  }, [])


  return {
    data,
    error,
  }
}

export {
  useFetchData
}