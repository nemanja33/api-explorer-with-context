import { useEffect, useState } from "react";
import { ErrorType } from "../types/logs";
import { User } from "../types/user";

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

const useFetchData = () => {
  const [ data, setData ] = useState<User[]>([]);
  const [ error, setError ] = useState<ErrorType>()

  const apiCall = async () => {
    try {
      const req = await fetch(API_URL);
      const data = await req.json() as User[]
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