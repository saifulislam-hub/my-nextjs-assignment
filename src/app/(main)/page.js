import Banner from "@/components/Homepage/Banner";
import LearningTips from "@/components/Homepage/LearningTips";
import PopularCourses from "@/components/Homepage/PopularCourses";
import TopInstructors from "@/components/Homepage/TopInstructors";
import Image from "next/image";

export default function Home() {
  return (
 <div>
  <Banner/>
  <PopularCourses/>
  <LearningTips/>
  <TopInstructors/>
 </div>
  );
}
