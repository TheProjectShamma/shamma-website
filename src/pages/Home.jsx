import { Btn, useTitle } from "../ui";

export default function Home() {
  useTitle("Connecting academia with communities in need");

  return (
    <section className="relative flex flex-1 flex-col md:flex-row">
      <div className="relative z-10 flex w-full flex-col justify-center px-6 pt-20 pb-12 md:w-1/2 md:bg-panel md:py-10">
        <div className="mx-auto w-full max-w-xl">
          <h1 className="text-4xl leading-tight text-ink sm:text-5xl">
            Connecting academia with communities in need.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            Shamma is a student-led initiative, by the people and for the people — carrying
            knowledge, mentorship and consistent care beyond the classroom, to orphanages, old
            homes, and the organizations that serve those who need support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Btn to="/volunteer">Volunteer with us</Btn>
            <Btn to="/about" plain>
              About Shamma
            </Btn>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 md:relative md:inset-auto md:block md:h-auto md:w-1/2 md:shrink-0">
        <img
          src="/photos/photo-1.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="vignette absolute inset-0" />
        <div aria-hidden="true" className="absolute inset-0 bg-black/30 md:hidden" />
      </div>
    </section>
  );
}
