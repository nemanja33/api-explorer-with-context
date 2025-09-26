import { useEffect, useState } from "react";

type ErrorType = {
  message: string
}

type UserType = {
  userId: string,
  id: number,
  title: string,
  completed: boolean
}

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

const useFetchData = () => {
  const [ data, setData ] = useState<unknown[]>([]);
  const [ error, setError ] = useState<ErrorType>()

  const apiCall = async () => {
    try {
      const req = await fetch(API_URL);
      const data = await req.json() as UserType[]
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
  useFetchData,
  UserType
}