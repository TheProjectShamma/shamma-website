import { VOLUNTEER_FORM } from "../content";
import { Btn } from "../ui";

export default function CtaBar() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-5">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-sm border-2 border-line bg-panel px-6 py-4">
        <p className="text-muted">
          Please note: volunteer opportunities for the month of July have closed.
        </p>
        <Btn href={VOLUNTEER_FORM}>Open the volunteer form</Btn>
      </div>
    </div>
  );
}
