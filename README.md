# Tap Warz 🎮

An epic tapping battle game built as a Farcaster Mini App! Challenge your friends in the ultimate tapping war with optional betting functionality.

This is a [Next.js](https://nextjs.org) project built with:

- [MiniKit](https://docs.base.org/builderkits/minikit/overview) - Farcaster Mini App framework
- [OnchainKit](https://www.base.org/builders/onchainkit) - Wallet integration and transactions
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Next.js](https://nextjs.org/docs) - React framework

## 🎯 Game Features

- **Two-Player Tapping Battle**: Compete against friends in fast-paced tapping competitions
- **Dual Wallet Support**: Each player can connect their own wallet for betting
- **Betting Mode**: Optional ETH betting with winner-takes-all mechanics
- **Customizable Game Duration**: Choose from 5, 10, 15, or 30-second battles
- **Real-time Competition**: Live tap counting and timer
- **Beautiful UI**: Custom Tap Warz branding with vibrant colors

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Verify environment variables, these will be set up by the `npx create-onchain --mini` command:

You can regenerate the FARCASTER Account Association environment variables by running `npx create-onchain --manifest` in your project directory.

The environment variables enable the following features:

- Frame metadata - Sets up the Frame Embed that will be shown when you cast your frame
- Account association - Allows users to add your frame to their account, enables notifications
- Redis API keys - Enable Webhooks and background notifications for your application by storing users notification details

```bash
# Shared/OnchainKit variables
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=
NEXT_PUBLIC_URL=
NEXT_PUBLIC_ICON_URL=
NEXT_PUBLIC_ONCHAINKIT_API_KEY=

# Frame metadata
FARCASTER_HEADER=
FARCASTER_PAYLOAD=
FARCASTER_SIGNATURE=
NEXT_PUBLIC_APP_ICON=
NEXT_PUBLIC_APP_SUBTITLE=
NEXT_PUBLIC_APP_DESCRIPTION=
NEXT_PUBLIC_APP_SPLASH_IMAGE=
NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR=
NEXT_PUBLIC_APP_PRIMARY_CATEGORY=
NEXT_PUBLIC_APP_HERO_IMAGE=
NEXT_PUBLIC_APP_TAGLINE=
NEXT_PUBLIC_APP_OG_TITLE=
NEXT_PUBLIC_APP_OG_DESCRIPTION=
NEXT_PUBLIC_APP_OG_IMAGE=

# Redis config
REDIS_URL=
REDIS_TOKEN=
```

3. Start the development server:
```bash
npm run dev
```

## Template Features

### Frame Configuration
- `.well-known/farcaster.json` endpoint configured for Frame metadata and account association
- Frame metadata automatically added to page headers in `layout.tsx`

### Background Notifications
- Redis-backed notification system using Upstash
- Ready-to-use notification endpoints in `api/notify` and `api/webhook`
- Notification client utilities in `lib/notification-client.ts`

### Theming
- Custom theme defined in `theme.css` with OnchainKit variables
- Pixel font integration with Pixelify Sans
- Dark/light mode support through OnchainKit

### MiniKit Provider
The app is wrapped with `MiniKitProvider` in `providers.tsx`, configured with:
- OnchainKit integration
- Access to Frames context
- Sets up Wagmi Connectors
- Sets up Frame SDK listeners
- Applies Safe Area Insets

## 🎮 How to Play

1. **Setup**: Enter player names and optionally enable betting mode
2. **Connect Wallets** (if betting): Each player connects their wallet
3. **Set Bet Amount** (if betting): Choose how much ETH to wager
4. **Battle**: Tap as fast as you can when the timer starts!
5. **Winner**: Player with the most taps wins (and takes the pot if betting)

## 🚀 Deployment

The app is deployed at: [https://tap-warz.vercel.app](https://tap-warz.vercel.app)

### Environment Configuration

All environment variables are properly configured for production:
- ✅ Farcaster Frame metadata
- ✅ OnchainKit API integration
- ✅ Custom Tap Warz branding
- ✅ Wallet connection support

## Learn More

- [MiniKit Documentation](https://docs.base.org/builderkits/minikit/overview)
- [OnchainKit Documentation](https://docs.base.org/builderkits/onchainkit/getting-started)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
## 🏆 Ready to Battle?

Cast the frame in Farcaster and challenge your friends to the ultimate tapping war!

**Tap Fast, Win Big!** 🎮⚡