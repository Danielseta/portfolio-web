import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFillm,
  RiArrowDownSLine,
} from "react-icons/ri";

//componets
import DevImg from "./Devimg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[90vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text  */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              
            </div>
            <h1 className="h1 mb-4">Hi, I'm Daniel</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            "I'm a digital dreamer, turning pixels into magic! As a UI/UX designer. And as an aspiring frontend developer, I'm excited to bring those designs to life with clean code. Let's build something awesome together!.",
            </p>
            {/** buttons */}
            <div
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0
                    mb-12"
            >
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                <a href="/doc/Cv.pdf" download> 
                Download CV <Download size={18} />
                </a>
              </Button>
            </div>
            {/** socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/*   image */}
          <div className="hidden xl:flex relative">
            {/** badge not added will be added on a future */}
            <Badge />
            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] 
                    h-[500px] bg-no-repeat absolute -top-1 -right-2"
            ></div>
            <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc='/hero/Asset 6@4x-8.png'/>
          </div>
        </div>
        {/* icon */}
       
      </div>
    </section>
  );
};

export default Hero;
