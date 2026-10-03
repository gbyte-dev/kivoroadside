import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import GrayBox from "@/app/components/services/gray-box";
import WideContent from "@/app/components/services/wide-content";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves from "@/app/components/services/content-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import ServiceButton from "@/app/components/services/service-button";
import YouTubeVideo from "@/app/components/services/youtube-video";
import NavCards from "@/app/components/services/nav-cards";
import { cx } from "@/app/components/services/class-names";
import type { NavCardData } from "@/app/components/services/service-links";
import styles from "./foundation.module.css";

export const metadata: Metadata = {
  title: "Safelite AutoGlass Foundation | Safelite",
  description:
    "The Safelite® Charitable Foundation's seeks to support organizations promoting the health and well-being of families. Apply for support online",
};

const IMAGES = "/image/services/foundation";

// "About Safelite" icon cards under "Learn more"
const LEARN_MORE_CARDS: NavCardData[] = [
  {
    href: "/about-safelite",
    label: "About Us",
    image: { src: "/image/services/icons/about-us.png", alt: "", width: 104, height: 48, ratio: "46.15385%" },
  },
  {
    href: "/about-safelite/press-releases",
    label: "Press releases",
    image: { src: "/image/services/icons/press-releases.png", alt: "", width: 47, height: 56, ratio: "119.1489%" },
  },
  {
    href: "/about-safelite/our-leaders",
    label: "Our Leaders",
    image: { src: "/image/services/icons/our-leaders.png", alt: "", width: 65, height: 40, ratio: "61.53846%" },
  },
  {
    href: "/about-safelite/safelite-partnerships",
    label: "Our Partnerships",
    image: { src: "/image/services/icons/partnerships.png", alt: "", width: 65, height: 42, ratio: "64.61539%" },
  },
  {
    href: "/about-safelite/safelite-autoglass-companies",
    label: "Safelite Group Companies",
    image: { src: "/image/services/icons/companies.png", alt: "", width: 59, height: 48, ratio: "81.35593%" },
  },
];

// Partner logo sizes (from each SVG's viewBox). The CSS sets the height and
// the width follows the logo's own proportions.
const PARTNER_SIZES: Record<string, [number, number]> = {
  "adrian-steel": [122, 32],
  agc: [93, 32],
  allimex: [191, 32],
  "auto-temp-ati": [86, 32],
  bosch: [150, 32],
  dupont: [115, 32],
  element: [1702, 354],
  "ford-pro": [44, 32],
  fram: [97, 32],
  "fuyao-group": [58, 32],
  "hopkins-printing": [122, 32],
  "horizon-next": [151, 32],
  "imperial-dade": [84, 32],
  lytx: [59, 31],
  "mills-james": [33, 32],
  "nsg-group": [59, 32],
  "optic-nerve-art-corporation": [48, 32],
  patcraft: [116, 32],
  "pgw-everything-autoglass": [227, 32],
  "precision-replacement": [155, 30],
  "renier-construction": [40, 32],
  ruan: [133, 32],
  sika: [37, 32],
  siseca: [139, 32],
  "sports-properties-learfield": [67, 32],
  "toyota-racing-development": [92, 32],
  trico: [149, 32],
  vitro: [70, 32],
  "waste-management": [120, 32],
};

function PartnerLogo({ name }: { name: string }) {
  const [width, height] = PARTNER_SIZES[name];
  return (
    <Image
      className={styles.partnerLogo}
      src={`${IMAGES}/partners/${name}.svg`}
      alt={name}
      width={width}
      height={height}
      unoptimized
    />
  );
}

// Each inner list is one row of logos
function LogoRows({ rows, className }: { rows: string[][]; className?: string }) {
  return (
    <div className={cx(styles.logoRows, className)}>
      {rows.map((row) => (
        <div key={row.join()} className={styles.logoRow}>
          {row.map((name) => (
            <PartnerLogo key={name} name={name} />
          ))}
        </div>
      ))}
    </div>
  );
}

// Logos stacked in short rows on phones and in wider rows from 992px
function ResponsiveLogos({ mobile, desktop }: { mobile: string[][]; desktop: string[][] }) {
  return (
    <>
      <LogoRows rows={mobile} className={styles.mobileRows} />
      <LogoRows rows={desktop} className={styles.desktopRows} />
    </>
  );
}

// Tier name centered on a thin gray line
function DividerLabel({ children }: { children: ReactNode }) {
  return (
    <div className={styles.dividerLabel}>
      <span>{children}</span>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 9">
      <path
        stroke="#0A0A0A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m.75 7.75 7-7 7 7"
      />
    </svg>
  );
}

type AccordionProps = {
  id: string;
  title: string;
  image: { src: string; alt: string; width: number; height: number };
  children: ReactNode;
};

// Illustration over a red title that opens a short description (closed at first)
function Accordion({ id, title, image, children }: AccordionProps) {
  const toggleId = `accordion-trigger-${id}`;
  return (
    <div className={styles.accordion}>
      <Image
        className={styles.accordionImage}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        unoptimized
      />
      <div>
        <input id={toggleId} type="checkbox" className={styles.toggle} />
        <h3 className={styles.accordionHeading}>
          <label htmlFor={toggleId} className={styles.accordionTitle}>
            <span className={styles.accordionTitleText}>{title}</span>
            <span className={styles.chevron} aria-hidden="true">
              <ChevronIcon />
            </span>
          </label>
        </h3>
        <div className={styles.accordionContent} role="region" aria-labelledby={toggleId}>
          <div className={styles.accordionContentInner}>
            <div className={styles.accordionBody}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Heading on the left of a full-width text area, followed by a line break like the reference
function WideHeading({ children }: { children: ReactNode }) {
  return (
    <WideContent>
      <div>
        <h1 style={{ textAlign: "left" }}>{children}</h1>
        <br />
      </div>
    </WideContent>
  );
}

function SubHeader() {
  return (
    <div className={styles.subheader}>
      <div className={styles.subheaderInner}>
        <Image
          className={styles.subheaderIcon}
          src={`${IMAGES}/foster-love-icon.svg`}
          alt="foster-love-icon"
          width={21}
          height={24}
          unoptimized
        />
        <Link className={styles.subheaderLink} href="/about-safelite/safelite-autoglass-foundation">
          Our impact
        </Link>
        <Link
          className={styles.subheaderLink}
          href="/about-safelite/safelite-autoglass-foundation/safelite-and-foster-love"
        >
          Safelite + Foster Love
        </Link>
        <ServiceButton
          href="/about-safelite/safelite-autoglass-foundation/safelite-and-foster-love#join-us-in-fostering-change"
          style={{ marginLeft: "auto" }}
        >
          Join us in fostering change
        </ServiceButton>
      </div>
    </div>
  );
}

function Hero() {
  const quote = { textAlign: "left", fontSize: "1rem", lineHeight: "25px" } as const;
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <h2>Making a memorable difference with care in our communities</h2>
        <p>
          <strong>Safelite Foundation helps those who</strong> have hit a bump in the road find a clear road ahead by
          partnering with organizations that provide <strong>safety, stability and a sense of belonging.</strong>
          <br />
        </p>
        <p style={quote}>
          “At Safelite, our purpose extends beyond the services we provide. It embraces how our people care for each
          other and show up for the communities we call home. Rooted in our values, what makes this work meaningful is
          the heart behind it.”{" "}
        </p>
        <p style={{ ...quote, textAlign: "right" }}>
          <strong>
            Renee Cacchillo,
            <br /> Safelite President &amp; Chief Executive Officer <br /> Board Chair, Safelite Foundation
          </strong>
          <br />
        </p>
        {/* The reference markup leaves an empty paragraph here, which adds 16px */}
        <p />
        <div />
      </div>
      <div className={styles.heroImage} />
    </section>
  );
}

function StatColumn({ image, children }: { image: { src: string; alt: string; title: string }; children: ReactNode }) {
  return (
    <>
      <Image
        className={cx(styles.inlineImage, styles.statImage)}
        src={image.src}
        alt={image.alt}
        title={image.title}
        width={492}
        height={72}
        unoptimized
      />
      <div>
        <h4 style={{ textAlign: "center" }}>
          <strong>{children}</strong>
        </h4>
        <br />
      </div>
    </>
  );
}

function FeeneyPhoto() {
  const common = { alt: "thomas-m-feeney-charity-classic" };
  const {
    props: { srcSet: smallSrcSet },
  } = getImageProps({ ...common, src: `${IMAGES}/feeney-charity-classic-small.png`, width: 307, height: 160 });
  const { props } = getImageProps({ ...common, src: `${IMAGES}/feeney-charity-classic.png`, width: 492, height: 256 });
  return (
    <picture>
      <source media="(max-width: 307px)" srcSet={smallSrcSet} width={307} height={160} />
      <img {...props} alt={common.alt} title="thomas-m-feeney-charity-classic" className={styles.inlineImage} />
    </picture>
  );
}

function Partners() {
  return (
    <div className={styles.partners}>
      <DividerLabel>Founding</DividerLabel>
      <div className={cx(styles.imageGrid, styles.founding)}>
        <ResponsiveLogos
          mobile={[["dupont"], ["fuyao-group"], ["trico"], ["fram"]]}
          desktop={[
            ["dupont", "fuyao-group"],
            ["trico", "fram"],
          ]}
        />
      </div>

      <div className={styles.doubleBlockWrapper}>
        <div className={styles.doubleBlockColumn}>
          <DividerLabel>Champion</DividerLabel>
          <div className={styles.doubleBlock}>
            <div className={cx(styles.imageGrid, styles.champion)}>
              <div className={styles.logoRow}>
                <PartnerLogo name="adrian-steel" />
              </div>
              <div className={styles.logoRow}>
                <PartnerLogo name="auto-temp-ati" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.doubleBlockColumn}>
          <DividerLabel>Purpose</DividerLabel>
          <div className={styles.doubleBlock}>
            <div className={cx(styles.imageGrid, styles.purpose)}>
              <ResponsiveLogos
                mobile={[["bosch"], ["horizon-next", "nsg-group"], ["siseca"]]}
                desktop={[
                  ["bosch", "horizon-next"],
                  ["nsg-group", "siseca"],
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <DividerLabel>Spirit</DividerLabel>
      <div className={cx(styles.imageGrid, styles.spirit)}>
        <ResponsiveLogos
          mobile={[
            ["allimex", "element"],
            ["ford-pro", "imperial-dade", "lytx", "sports-properties-learfield"],
            ["pgw-everything-autoglass", "precision-replacement"],
            ["ruan", "vitro", "waste-management"],
          ]}
          desktop={[
            [
              "allimex",
              "element",
              "ford-pro",
              "imperial-dade",
              "lytx",
              "sports-properties-learfield",
              "pgw-everything-autoglass",
            ],
            ["precision-replacement", "ruan", "vitro", "waste-management"],
          ]}
        />
      </div>

      <DividerLabel>Friends of the foundation</DividerLabel>
      <div className={styles.doubleBlock}>
        <div className={cx(styles.imageGrid, styles.friends)}>
          <ResponsiveLogos
            mobile={[
              ["agc", "hopkins-printing", "mills-james"],
              ["optic-nerve-art-corporation", "patcraft", "renier-construction", "sika"],
              ["toyota-racing-development"],
            ]}
            desktop={[
              [
                "agc",
                "hopkins-printing",
                "mills-james",
                "optic-nerve-art-corporation",
                "patcraft",
                "renier-construction",
                "sika",
                "toyota-racing-development",
              ],
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    <>
      <ContentBlock>
        <h2 style={{ marginTop: 30 }}>Learn more</h2>
      </ContentBlock>
      <HorizontalRule variant="center-red" />
      <NavCards variant="icon" columns={5} cards={LEARN_MORE_CARDS} />
    </>
  );
}

export default function SafeliteFoundationPage() {
  return (
    <ServicePageShell secondary={<Secondary />} strongWeight="medium">
      <SubHeader />
      <Hero />

      <GrayBox>
        <YouTubeVideo videoId="rNdlcUU7LG0" title="Safelite Foundation" width={711} ratio="56.26%" rounded />
      </GrayBox>

      <WideHeading>Our Impact</WideHeading>
      <ContentHalves
        style={{ alignItems: "center" }}
        left={
          <StatColumn
            image={{ src: `${IMAGES}/foundation-grants.svg`, alt: "foundation grants", title: "foundation-grants" }}
          >
            Over $40M donated
          </StatColumn>
        }
        right={
          <StatColumn
            image={{
              src: `${IMAGES}/volunteer-hours.svg`,
              alt: "preparing-for-your-appointment",
              title: "preparing-for-your-appointment",
            }}
          >
            249,000 Volunteer hours
          </StatColumn>
        }
      />

      <div className={styles.accordionWrapper}>
        <Accordion
          id="1"
          title="National"
          image={{ src: `${IMAGES}/foundation-national.svg`, alt: "foundation-national", width: 85, height: 72 }}
        >
          <p>
            {" "}
            The Safelite Foundation and Foster Love are partnered together to support foster youth across the country.
            We believe all children deserve safety, stability and to feel a sense of belonging. Together, we are
            fostering change by investing more than $3M dollars and pledging 100,000 volunteers hours.{" "}
            <Link href="/about-safelite/safelite-autoglass-foundation/safelite-and-foster-love">
              Learn more about this purpose driven partnership here
            </Link>
            .
          </p>
          <p />
        </Accordion>
        <Accordion
          id="2"
          title="Local"
          image={{ src: `${IMAGES}/foundation-local.svg`, alt: "foundation-local", width: 85, height: 72 }}
        >
          <p>
            {" "}
            Through our Community Giving: Powered By Our People program, we award grants based on our giving priorities
            (safety, stability, and a sense of belonging) throughout our 10 regions, contact center, and national
            headquarters in Columbus. Organizations outside of Columbus, Ohio must be nominated by a Safelite associate
            for funding consideration. If your organization is in Columbus, Ohio or contiguous counties, please{" "}
            <a href="#funding">click here to request funding</a>.
          </p>
          <p />
        </Accordion>
        <Accordion
          id="3"
          title="Our People"
          image={{ src: `${IMAGES}/foundation-our-people.svg`, alt: "foundation-our-people", width: 56, height: 72 }}
        >
          <p>
            {" "}
            We believe in giving back to communities where we live and work, and volunteering is just one way we do
            that. Each day, Safelite associates across the country make the world a better place by volunteering their
            time at various nonprofit agencies. That’s why we give one paid shift annually for our associates to serve
            in their community. In addition, our associates pitch in to support their fellow associates during
            unexpected hardships through our Caring Heart Fund, made possible through the Safelite Foundation and the
            generosity of our people.{" "}
          </p>
        </Accordion>
      </div>

      <GrayBox>
        <WideHeading>Thomas M. Feeney Charity Classic</WideHeading>
        <ContentHalves
          left={
            <>
              <Image
                className={cx(styles.inlineImage, styles.feeneyLogo)}
                src={`${IMAGES}/feeney-charity-classic-logo.svg`}
                alt="Safelite Thomas M. Feeney Charity Classic Logo"
                title="safelite-thomas-m-feeney-charity-classic-logo"
                width={492}
                height={80}
                unoptimized
              />
              <div>
                <p>
                  Renamed in 2022 to honor the service of Safelite’s former President and CEO, Tom Feeney, the Thomas M.
                  Feeney Charity Classic is the Safelite Foundation’s largest annual fundraiser. This special event
                  brings together over 180 suppliers, partners and friends to make a difference. Since 2011, more than
                  $19.4M has been raised to support nonprofit organizations.
                </p>
              </div>
            </>
          }
          right={<FeeneyPhoto />}
        />
      </GrayBox>

      <WideHeading>Thanks to our 2025 partners</WideHeading>
      <Partners />

      <GrayBox>
        <ContentHalves
          left={
            <picture>
              <Image
                className={styles.inlineImage}
                src={`${IMAGES}/foundation-grants-white-bg.svg`}
                alt="foundation-grants-white-bg"
                title="foundation-grants-white-bg"
                width={492}
                height={304}
                unoptimized
              />
            </picture>
          }
          right={
            <div>
              <h1 id="funding">Request Support</h1>
              <br />
              <p>
                The Safelite Foundation supports eligible 501c3 organizations in Columbus, Ohio where we are
                headquartered, that are aligned with our giving priorities as a company. If your organization aligns
                with our giving priorities and serves Franklin and contiguous counties, please click below to submit a
                grant request.
              </p>
              <p>
                <ServiceButton
                  href="https://apply.yourcausegrants.com/apply/programs/3841a6cb-db1b-4a49-8c8b-5362cd458089"
                  newTab
                  style={{ marginTop: 10 }}
                >
                  Click here to submit a request
                </ServiceButton>
              </p>
              <br />
            </div>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}
