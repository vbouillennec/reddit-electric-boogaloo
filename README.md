# reddit-electric-boogaloo

Reddit like website.

## Custom components API

The app custom components with usage.

### DashboardCard

#### Props

* title - Card title
* linkTitle - Title of the clickable link
* link - Onclick destination link
* icon - card's icon
* child components - Card's content

The following icons are available:

- list
- flipToFront
- turnedInNot

Usage:

```html
<DashboardCard icon={"list"} title={"bulder"} linkTitle={"Go to builder"} link={"/builder"}>
  <p>Card's content</p>
</DashboardCard>
```
