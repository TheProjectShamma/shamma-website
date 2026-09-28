import { Item, List, Page, Quote, Split } from "../ui";

export default function Goals() {
  return (
    <Page title="Our Goals" lede="What we are here to do, and what we hold to while doing it.">
      <Split
        sections={[
          {
            id: "why",
            title: "What we are here to do",
            render: () => (
              <div className="space-y-4">
                <Quote>
                  We build spaces where the people we serve feel seen, supported, and challenged to
                  keep growing, at every age.
                </Quote>
                <List>
                  <Item term="A safe space to speak">
                    A place where everyone can share their thoughts without fear of judgment.
                  </Item>
                  <Item term="A bigger world">
                    Opening doors to ideas, careers, and possibilities that feel within reach.
                  </Item>
                  <Item term="Real goals">
                    Every session ends with practical skills and concrete next steps.
                  </Item>
                  <Item term="Relationships that last">
                    Genuine, ongoing bonds between volunteers and the communities they serve.
                  </Item>
                </List>
              </div>
            ),
          },
          {
            id: "pillars",
            title: "The four pillars",
            render: () => (
              <List>
                <Item term="Holistic well-being">
                  Building physical habits and daily foundations that support everything else.
                </Item>
                <Item term="Emotional intelligence">
                  Helping people understand themselves, express what they feel, and build empathy.
                </Item>
                <Item term="Intellectual well-being">
                  Structured learning and confidence-building challenges that support growth.
                </Item>
                <Item term="Mentorship and arts">
                  Volunteers invest personally through arts, sports, and character-building.
                </Item>
              </List>
            ),
          },
          {
            id: "regions",
            title: "How we enter a region",
            render: () => (
              <div className="space-y-4">
                <List>
                  <Item term="Find the place">
                    We identify a region, connect with a local partner, and begin by listening.
                  </Item>
                  <Item term="Build the team">
                    We recruit local and remote volunteers and tailor a program to the people it
                    will serve.
                  </Item>
                  <Item term="Run the sessions">
                    Structured, participatory workshops built around real connection and creative
                    engagement.
                  </Item>
                  <Item term="Keep showing up">
                    Volunteers return consistently, building real relationships and tracking each
                    person's growth.
                  </Item>
                  <Item term="Stay permanent">
                    We establish a self-sustaining local network of volunteers, mentors, and
                    partners.
                  </Item>
                </List>
                <p className="text-muted">Wherever we find five committed volunteers, we begin.</p>
              </div>
            ),
          },
        ]}
      />
    </Page>
  );
}
