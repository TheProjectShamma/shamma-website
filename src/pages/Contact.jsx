import { Link } from "react-router-dom";
import { CONTACTS } from "../content";
import { CONTACT_ICONS, MailIcon } from "../icons";
import { Btn, Item, List, Page, Split } from "../ui";

export default function Contact() {
  return (
    <Page
      title="Contact us"
      lede="Write to us, message us, or find us online. Someone from the team reads everything that comes in."
    >
      <Split
        sections={[
          {
            id: "reach",
            title: "Reach us",
            render: () => (
              <div className="space-y-4">
                <List>
                  {CONTACTS.map(({ label, value, href }) => {
                    const Icon = CONTACT_ICONS[label];
                    return (
                      <Item
                        key={label}
                        term={
                          <span className="inline-flex items-center gap-2">
                            {Icon && (
                              <span aria-hidden="true" className="text-flame">
                                <Icon className="size-4" />
                              </span>
                            )}
                            {label}
                          </span>
                        }
                      >
                        <a
                          href={href}
                          target={href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                          className="break-words"
                        >
                          {value}
                        </a>
                      </Item>
                    );
                  })}
                  <Item term="Postal address">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </Item>
                  <Item term="Hours">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </Item>
                </List>
                <Btn href="mailto:shamma.desk@gmail.com">
                  <span className="inline-flex items-center gap-2">
                    <MailIcon className="size-4" />
                    Write an email
                  </span>
                </Btn>
              </div>
            ),
          },
          {
            id: "about",
            title: "What to write about",
            render: () => (
              <List>
                <Item term="Volunteering">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can also{" "}
                  <Link to="/volunteer">apply through the volunteer page</Link>.
                </Item>
                <Item term="Partnerships">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Organizations can read
                  more on the <Link to="/program">program page</Link>.
                </Item>
                <Item term="Press and research">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore.
                </Item>
              </List>
            ),
          },
          {
            id: "before",
            title: "Before you write",
            render: () => (
              <div className="space-y-4 text-muted">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-ink">Every contribution keeps the light burning.</p>
              </div>
            ),
          },
        ]}
      />
    </Page>
  );
}
