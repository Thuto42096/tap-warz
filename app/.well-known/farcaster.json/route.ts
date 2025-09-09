export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://tap-warz.vercel.app';

  return Response.json({
    accountAssociation: {
      header: process.env.FARCASTER_HEADER || 'eyJmaWQiOjEzMjQ0MDEsInR5cGUiOiJhdXRoIiwia2V5IjoiMHg1MDVhODdlOTE0OTNmY0E4MWU5MjlFYjk1YWFEZTIwMEQ2NjA5N2E0In0',
      payload: process.env.FARCASTER_PAYLOAD || 'eyJkb21haW4iOiJ0YXAtd2Fyei52ZXJjZWwuYXBwIn0',
      signature: process.env.FARCASTER_SIGNATURE || 'qDw45uhMVd9F/FcYQgCiSCWALvAkJKqEzty2xFib7C9omVDxYW795CpivOdj72GFiWTGpS8/9nS18evU8HgLsBw=',
    },
    baseBuilder: {
      allowedAddresses: ["0xF89D2955F307582fe9d6083724662E2dff7D99ff"]
    },
    frame: {
      version: "1",
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "Tap Warz",
      homeUrl: URL,
      imageUrl: `${URL}/tap-warz-logo.jpeg`,
      aspectRatio: "1:1",
      iconUrl: process.env.NEXT_PUBLIC_APP_ICON || "https://tap-warz.vercel.app/tap-warz-icon.jpg",
      splashImageUrl: process.env.NEXT_PUBLIC_APP_SPLASH_IMAGE || "https://tap-warz.vercel.app/tap-warz-logo.jpeg",
      splashBackgroundColor: process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR || "#000000",
      webhookUrl: `${URL}/api/webhook`,
      subtitle: process.env.NEXT_PUBLIC_APP_SUBTITLE || "Epic Tapping Battle Game",
      description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Challenge your friends in the ultimate tapping war! Fast-paced competitive mini game.",
      primaryCategory: process.env.NEXT_PUBLIC_APP_PRIMARY_CATEGORY || "games",
      tags: ["tap", "game", "crypto", "base", "competitive"],
      heroImageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE || "https://tap-warz.vercel.app/tap-warz-logo.jpeg",
      tagline: process.env.NEXT_PUBLIC_APP_TAGLINE || "Tap Fast, Win Big!",
      ogTitle: process.env.NEXT_PUBLIC_APP_OG_TITLE || "Tap Warz Game",
      ogDescription: process.env.NEXT_PUBLIC_APP_OG_DESCRIPTION || "Challenge your friends in the ultimate tapping war! Fast-paced competitive mini game.",
      ogImageUrl: process.env.NEXT_PUBLIC_APP_OG_IMAGE || "https://tap-warz.vercel.app/tap-warz-logo.jpeg",
      requiredChains: ["eip155:8453"],
      noindex: false,
      screenshotUrls: []
    }
  });
}