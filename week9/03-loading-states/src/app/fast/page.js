import { Suspense } from "react";
import SlowComponent from "../../component/SlowComponent";
import Fallback from "@/component/Fallback";

export default function FastPage() {
  return (
    <div>
      <h2>Fast page</h2>
      <Suspense fallback={<Fallback />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
