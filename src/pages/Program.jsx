import { Link } from "react-router-dom";
import RegionMap from "../components/RegionMap";
import { REGIONS } from "../content";
import { Btn, Item, List, Page, Split } from "../ui";

const STAGES = [
  {
    stage: "Seed",
    text: "Outreach and trust building: we meet the people we will serve and their caretakers, creating a space of safety and openness.",
    tags: "Outreach · Trust building",
  },
  {
    stage: "Root",
    text: "Hands-on engagement through creative activities that spark curiosity, connection, and goal setting.",
    tags: "Crafts · Drawing · Storytelling",
  },
  {
    stage: "Trunk",
    text: "Structured learning tailored to each group: literacy, numeracy, digital skills, and intellectual challenges.",
    tags: "Literacy · Numeracy · Digital skills",
  },
  {
    stage: "Branch",
    text: "Collaboration, debate, leadership, and financial literacy, through real-world projects.",
    tags: "Debate · Team projects · Financial literacy",
  },
  {
    stage: "Leaves",
    text: "Physical wellbeing, outdoor connection, healthy habits, and practical life skills.",
    tags: "Fitness games · Gardening · First aid",
  },
  {
    stage: "Flowers",
    text: "Creativity and expression in full bloom, as every participant finds their voice at any age.",
    tags: "Painting · Drama · Oral history",
  },
];

export default function Program() {
  return (
    <Page
      title="Our Program"
      lede="Growing together, stage by stage. Each stage builds on the one before it, and no one grows alone."
    >
      <Split
        sections={[
          {
            id: "stages",
            title: "The six stages",
            render: () => (
              <List>
                {STAGES.map(({ stage, text, tags }, i) => (
                  <Item key={stage} term={stage} note={`Stage ${String(i + 1).padStart(2, "0")}`}>
                    {text}{" "}
                    <span className="text-flame/80">{tags}</span>
                  </Item>
                ))}
              </List>
            ),
          },
          {
            id: "regions",
            title: "Where we work",
            render: () => (
              <div className="space-y-4">
                <RegionMap />
                <List>
                  {REGIONS.map(({ name, note, status }) => (
                    <Item key={name} term={name} note={note}>
                      {status === "active"
                        ? "Volunteers are working here now."
                        : "We are looking for volunteers here next."}
                    </Item>
                  ))}
                </List>
              </div>
            ),
          },
          {
            id: "orgs",
            title: "For organizations",
            render: () => (
              <div className="space-y-4">
                <p>
                  We work with the orphanages, old homes, schools, and community groups that already
                  hold the trust of the people they serve. Our side is simple: students, mentors, and
                  a program designed for the group in front of us, and we keep coming back.
                </p>
                <List>
                  <Item term="What we bring">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </Item>
                  <Item term="What we ask">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </Item>
                  <Item term="How it starts">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </Item>
                  <Item term="What it costs">
                    Nothing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Item>
                </List>
                <Btn to="/contact">Start a conversation</Btn>
              </div>
            ),
          },
        ]}
      />

      <p className="mt-6 max-w-3xl border-t border-line pt-4 text-muted">
        Ready to take part? Read more on the <Link to="/volunteer">volunteer page</Link>.
      </p>
    </Page>
  );
}
