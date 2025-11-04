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
      openMenuButtonColor="#154034"
      changeMenuColorOnOpen={true}
      colors={["#5BA660", "#1B593C"]}
      accentColor="#F2D06B"
      itemWrapClassName="p-2 after:bg-primary"
      onMenuOpen={() => console.log("Menu opened")}
      onMenuClose={() => console.log("Menu closed")}
    />
  );
}
