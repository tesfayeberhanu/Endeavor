import type { ReactNode } from "react";

import MobileContactBar from "./MobileContactBar";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="site-frame">
      <SiteHeader />
      {children}
      <SiteFooter />
      <MobileContactBar />
    </div>
  );
}
