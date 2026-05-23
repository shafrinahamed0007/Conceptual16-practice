import Banner from "@/components/homepage/Banner";
import Stats from "@/components/homepage/Stats";
import TrendingApps from "@/components/homepage/TrendingApps";




export default function Home() {
  return (
   <div>
  <Banner />
  <TrendingApps from="homepage" />
  <Stats />

  
   </div>
  );
}
