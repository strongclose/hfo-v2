/**
 * Main Hero Component - Version-Managed
 *
 * This component now uses the HeroManager system to easily switch
 * between different hero versions without losing work.
 *
 * To switch hero versions:
 * - Go to components/heroes/HeroManager.tsx
 * - Change the ACTIVE_HERO constant
 * - Your changes take effect immediately
 *
 * Current: Simple hero (V1_SIMPLE)
 * Available: AI Chatbot hero (V2_AI_CHATBOT) - ready for future use
 */

export { Hero } from "./heroes/HeroManager";
