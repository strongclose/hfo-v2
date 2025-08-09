# Hero Version Management System

This system allows you to preserve different hero designs and easily switch between them without losing work.

## 🎯 Current Setup

- **Active Hero**: V1_Simple (clean, basic CTAs)
- **Saved Hero**: V2_AIChatbot (advanced AI chatbot interface)

## 🔄 How to Switch Heroes

1. Open `components/heroes/HeroManager.tsx`
2. Change the `ACTIVE_HERO` constant:

   ```tsx
   // For simple hero (current)
   export const ACTIVE_HERO = HERO_VERSIONS.V1_SIMPLE;

   // For AI chatbot hero (future)
   export const ACTIVE_HERO = HERO_VERSIONS.V2_AI_CHATBOT;
   ```

3. Save the file - changes take effect immediately

## 📁 File Structure

```
components/heroes/
├── README.md                 # This documentation
├── HeroManager.tsx          # Version switching logic
├── HeroV1_Simple.tsx        # Clean, simple hero (current)
���── HeroV2_AIChatbot.tsx     # AI chatbot hero (saved for later)
```

## 🆕 Adding New Hero Versions

1. Create new file: `HeroV3_YourName.tsx`
2. Add to `HERO_VERSIONS` in `HeroManager.tsx`
3. Add case in the switch statement
4. Update `ACTIVE_HERO` to use your new version

## 💡 Hero Descriptions

### V1_Simple (Current)

- Clean gradient background
- Simple headline and CTAs
- Basic "Search Procedures" and "Browse Hospitals" buttons
- No complex interactive elements
- Fast, lightweight

### V2_AIChatbot (Saved)

- Advanced AI chatbot interface
- GlobalChatbot component integration
- Interactive cost estimation
- Decorative background elements
- Rich messaging interface

## 🔧 Technical Notes

- All heroes use the same interface (`HeroProps`)
- Styling is self-contained in each version
- No shared dependencies between versions
- Easy to maintain and test separately

## 🚀 Quick Commands

```bash
# To switch to simple hero (current production)
# Set ACTIVE_HERO = HERO_VERSIONS.V1_SIMPLE

# To switch to AI chatbot hero (when ready)
# Set ACTIVE_HERO = HERO_VERSIONS.V2_AI_CHATBOT
```

This system ensures no work is lost and makes it easy to experiment with different hero designs!
