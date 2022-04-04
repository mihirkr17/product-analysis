import { useEffect, useState } from "react"

export const useData = (url) => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(responseData => setData(responseData));
   }, []);

   return [data, setData];
}