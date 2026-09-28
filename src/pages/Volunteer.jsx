import { Item, List, Page, Split } from "../ui";

const FAQ = [
  {
    q: "Do I need teaching experience?",
    a: "No. You do not need to be an expert, and you do not need a particular degree. If you can show up on a schedule and treat people with respect, you have everything we ask for.",
  },
  {
    q: "Can I volunteer remotely?",
    a: "Yes — you can work remotely as well from wherever you are. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    q: "How much time does it take?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    q: "Do I have to live near a centre?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    q: "What happens after I apply?",
    a: "Fill in the form and our volunteer desk will write back to you. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Volunteer() {
  return (
    <Page
      title="Volunteer with us"
      lede="There is a place for you, near or far. You do not need to be an expert, and you can work remotely as well from wherever you are."
    >
      <Split
        sections={[
          {
            id: "help",
            title: "Ways you can help",
            render: () => (
              <List>
                <Item term="Community outreach">
                  Build relationships with the communities we serve and connect them with our
                  programs.
                </Item>
                <Item term="Workshop design">
                  Design workshops that carry guidance into the communities we serve.
                </Item>
                <Item term="Advisory">
                  Lend your expertise as a special advisor, educator, or researcher.
                </Item>
              </List>
            ),
          },
          {
            id: "more",
            title: "A few more ways",
            render: () => (
              <List>
                <Item term="Research">
                  Create methodologies and evaluate impact.
                </Item>
                <Item term="Event management">
                  Plan workshops, manage volunteers, and coordinate logistics.
                </Item>
                <Item term="Social media">
                  Run campaigns, document work, and grow our community.
                </Item>
                <Item term="Graphics and design">
                  Create visual assets and educational materials.
                </Item>
              </List>
            ),
          },
          {
            id: "expect",
            title: "What to expect",
            render: () => (
              <List>
                <Item term="Getting started">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </Item>
                <Item term="During a session">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore.
                </Item>
                <Item term="Travel and expenses">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore.
                </Item>
                <Item term="Afterwards">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore.
                </Item>
              </List>
            ),
          },
          {
            id: "faq",
            title: "Questions",
            render: () => (
              <div className="divide-y divide-line border-y border-line">
                {FAQ.map(({ q, a }) => (
                  <details key={q} className="group py-2.5">
                    <summary className="flex cursor-pointer list-none items-baseline justify-between gap-3 text-ink hover:text-flame [&::-webkit-details-marker]:hidden">
                      {q}
                      <span aria-hidden="true" className="text-flame group-open:hidden">
                        +
                      </span>
                      <span aria-hidden="true" className="hidden text-flame group-open:block">
                        −
                      </span>
                    </summary>
                    <p className="pt-2 text-muted">{a}</p>
                  </details>
                ))}
              </div>
            ),
          },
        ]}
      />

    </Page>
  );
}
