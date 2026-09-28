import { Link } from "react-router-dom";
import { Item, List, Page, Quote, Split } from "../ui";

export default function About() {
  return (
    <Page title="About Us" lede="Knowledge means most where it is needed most.">
      <Split
        sections={[
          {
            id: "why",
            title: "Why we exist",
            render: () => (
              <div className="space-y-4">
                <p>
                  All around us, people grow up, grow old, and get by without consistent guidance. Not
                  because no one cares, but because the knowledge that could help them rarely leaves
                  the campus.
                </p>
                <p>
                  Shamma connects students, educators, and researchers with the communities that need
                  them — not as occasional visitors, but as something more powerful: a reliable
                  presence that invests in where people are headed.
                </p>
                <p>
                  This is not charity. It is mentorship, kept up, that helps each community build its
                  own future.
                </p>
              </div>
            ),
          },
          {
            id: "mission",
            title: "Mission and vision",
            render: () => (
              <div className="space-y-4">
                <p className="text-muted">Our mission</p>
                <p>
                  To connect academia, students, educators, and researchers, with the communities that
                  need them most. We bring structured learning, mentorship, and consistent care to
                  orphanages, old homes, and other organizations serving people in need.
                </p>
                <p className="text-muted">Our vision</p>
                <Quote>
                  A world where knowledge flows freely beyond the classroom, where every community in
                  need has a dedicated circle of academics walking beside it, and no one is left to
                  grow, learn, or age alone.
                </Quote>
              </div>
            ),
          },
          {
            id: "who",
            title: "Who we serve",
            render: () => (
              <div className="space-y-4">
                <List>
                  <Item term="Orphanages" note="Where we began">
                    Children who deserve mentors that keep showing up.
                  </Item>
                  <Item term="Old homes">
                    Elders with lifetimes of stories, who deserve company, care, and continued
                    learning.
                  </Item>
                  <Item term="Community organizations">
                    Shelters, schools, and local groups that could do more with academic partners
                    beside them.
                  </Item>
                </List>
                <p className="text-muted">
                  We bring the same six-part program to each of them, and we keep returning.
                </p>
              </div>
            ),
          },
        ]}
      />

      <p className="mt-6 max-w-3xl border-t border-line pt-4 text-muted">
        If you want the detail, <Link to="/goals">our goals</Link> say what we are working toward,
        and <Link to="/program">our program</Link> shows how the work actually runs.
      </p>
    </Page>
  );
}
