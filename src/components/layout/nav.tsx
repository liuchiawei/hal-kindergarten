"use client";

import StaggeredMenu from "@/components/common/StaggeredMenu";
import content from "@/data/content.json";

export default function Nav() {
  return (
    <StaggeredMenu
      position="right"
      items={content.nav.items}
      displaySocials={false}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={["#B19EEF", "#5227FF"]}
      logoUrl="/path-to-your-logo.svg"
      accentColor="#ff6b6b"
      onMenuOpen={() => console.log("Menu opened")}
      onMenuClose={() => console.log("Menu closed")}
    />
  );
}
