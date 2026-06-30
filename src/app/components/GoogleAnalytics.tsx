import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";
import { GA_MEASUREMENT_ID } from "../data/site";
import AnalyticsPageView from "./AnalyticsPageView";

export default function GoogleAnalytics() {
  return (
    <>
      <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      <Suspense fallback={null}>
        <AnalyticsPageView />
      </Suspense>
    </>
  );
}
