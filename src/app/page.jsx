'use client'
import {React, useEffect, useState} from "react"

export default function Home() {

  const [URL, setURL] = useState()
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(false)

  const fetch = async(query) => {
    console.log(URL)
  }

  const getQueryParams = (query) => {
    return query
        ? (/^[?#]/.test(query) ? query.slice(1) : query)
            .split('&')
            .reduce((params, param) => {
                    let [key, value] = param.split('=');
                    params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                    return params;
                }, {}
            )
        : {}
    };

  useEffect(() => {
    setLoading(true)
    fetch('http://104.211.219.98/numbers/fibo')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [URL])
    

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <div>
        <input type="text" onChange={(e) => setURL(e.target.value)} className='p-2 border border-black mb-4' placeholder='URL'/>
      </div>
      <button className='p-2 px-4 border border-black' onClick={() => fetch(URL)}>
        FETCH
      </button>
      <div className="mt-4">

      </div>
    </div>
  )
}
