/**
 * Hero Manager - Easy Hero Version Switching
 *
 * This utility makes it easy to switch between different hero versions
 * without losing any work. Simply change the ACTIVE_HERO constant.
 */

import { HeroV1_Simple } from "./HeroV1_Simple";
import { HeroV2_AIChatbot } from "./HeroV2_AIChatbot";

// Available hero versions
export const HERO_VERSIONS = {
  V1_SIMPLE: "V1_SIMPLE",
  V2_AI_CHATBOT: "V2_AI_CHATBOT",
} as const;

// 🎯 Change this to switch hero versions
export const ACTIVE_HERO = HERO_VERSIONS.V1_SIMPLE;

interface HeroProps {
  onSearch: (procedure: string, location: string) => void;
  selectedRadius: number;
  onRadiusChange: (radius: number) => void;
}

/**
 * Hero Component Router
 *
 * Automatically renders the active hero version based on ACTIVE_HERO setting.
 *
 * To switch heroes:
 * 1. Change ACTIVE_HERO constant above
 * 2. Save file - changes take effect immediately
 *
 * Available Versions:
 * - V1_SIMPLE: Clean, simple hero with basic CTAs (current)
 * - V2_AI_CHATBOT: Advanced hero with AI chatbot integration (future)
 */
export function Hero(props: HeroProps) {
  switch (ACTIVE_HERO) {
    case HERO_VERSIONS.V1_SIMPLE:
      return <HeroV1_Simple {...props} />;
    case HERO_VERSIONS.V2_AI_CHATBOT:
      return <HeroV2_AIChatbot {...props} />;
    default:
      return <HeroV1_Simple {...props} />;
  }
}

// Export individual versions for direct use if needed
export { HeroV1_Simple, HeroV2_AIChatbot };
