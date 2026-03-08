import EventDetails from "@/app/components/EventDetails";
import { Suspense } from "react";
const EventsDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
   
  return (
    <main>
      <Suspense fallback={<div>Loading..</div>} >
          <EventDetails params={params} /> 
      </Suspense>
    </main>
  )
};

export default EventsDetailsPage;
