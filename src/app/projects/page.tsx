'use client'

import { useSearchParams } from "next/navigation";

export default function Projects() {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  const search = searchParams.get("search");
  
  // if (!page && !search){
  //   return <h1>Projects Page</h1>
  // }
  // if (page ||search){
  //   return(
  //     <h1>Projects Page is {page} and Search Keyword is {search}</h1>
  //   )
  // }
  return(
    <section className="page">

      <h1>Projects Page is {page} and Search Keyword is {search}</h1>
    </section>
  )
}
