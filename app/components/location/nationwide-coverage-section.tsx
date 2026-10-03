import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";

// "More than 7,100 locations…": coverage map on the left, text on the right
export default function NationwideCoverageSection() {
  return (
    <>
      <SectionHeading>More than 7,100 locations and MobileGlassShops nationwide.</SectionHeading>
      <ContentHalves
        paddedLeftColumn
        left={
          <ContentImage
            src="/image/location/locations-map.jpg"
            alt=""
            width={480}
            height={220}
            ratio="45.83334%"
          />
        }
        right={
          <ContentBlock>
            <p>
              Safelite AutoGlass is the only national auto glass repair and replacement service. Safelite is available to
              more than 97% of U.S. drivers and all 50 states.
            </p>
          </ContentBlock>
        }
      />
    </>
  );
}
