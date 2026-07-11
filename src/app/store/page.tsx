import {
  CategoryGrid,
  FilterSortPanel,
  GameSection,
  StoreHero,
  StoreNavigation,
  StoreSearch,
  StoreStates,
} from "@/components/store";
import { games } from "@/lib/store/data";

export default function StorePage() {
  return (
    <div className="space-y-10">
      <StoreNavigation />
      <StoreHero />
      <StoreSearch />
      <div className="grid gap-8 xl:grid-cols-[18rem_1fr]">
        <FilterSortPanel />
        <div className="space-y-12">
          <GameSection
            id="featured"
            title="Featured games"
            description="Showcase releases with premium cover art, tags, ratings, and wishlist affordances."
            items={games.slice(0, 3)}
          />
          <GameSection
            id="top-sellers"
            title="Trending games"
            description="Fast-moving titles ranked by popularity and current player demand."
            items={[...games].reverse().slice(0, 3)}
          />
          <GameSection
            id="new-releases"
            title="New releases"
            description="Fresh launches ready for discovery across every supported platform."
            items={games.slice(1, 4)}
          />
          <GameSection
            id="coming-soon"
            title="Coming soon"
            description="Wishlist upcoming premium experiences before launch day."
            items={games.slice(3)}
          />
          <GameSection
            id="recommended"
            title="Recommended for you"
            description="Personalized storefront rails designed to scale into real player signals."
            items={[games[0], games[2], games[5]]}
          />
          <CategoryGrid />
          <GameSection
            id="recently-updated"
            title="Recently updated"
            description="Games with new seasons, patches, and content drops."
            items={[games[4], games[1], games[3]]}
          />
          <GameSection
            id="special-offers"
            title="Special offers"
            description="Discount-aware cards make promotions obvious without sacrificing polish."
            items={games.filter((game) => game.discount)}
          />
          <GameSection
            id="editors-picks"
            title="Editors' Picks"
            description="Premium curated games selected for quality, craft, and replayability."
            items={[games[1], games[3], games[5]]}
          />
          <StoreStates />
        </div>
      </div>
    </div>
  );
}
