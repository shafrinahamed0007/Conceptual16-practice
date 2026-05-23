import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const controller = new AbortController();
    
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json", { signal: controller.signal });
        const data = await res.json();
        
      
        setTimeout(() => {
          setApps(data);
          setLoading(false);
        }, 1000); 
        
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching apps data:", error);
          setLoading(false);
        }
      }
    };

    fetchData();

    
    return () => controller.abort();
  }, []);

  return { apps, loading };
};

export default useApps;