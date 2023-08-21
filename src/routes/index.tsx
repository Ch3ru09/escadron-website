import Carousel from "~/components/home/section-carousel/CarouselSection";
import Description from "~/components/home/section-description/Description";
import Calendar from "~/components/home/section-calendar/Calendar";
import MoreInfo from "~/components/home/section-moreinfo/MoreInfo";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <Description />
      <Calendar />
      <MoreInfo />
    </>
  );
}

