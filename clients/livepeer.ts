import { createReactClient, studioProvider } from "@livepeer/react";
/**
 * @dev Livepeer 是一个用于直播和点播流媒体的视频基础设施网络。旨在为开发者提供创新的自由，为创作者提供平台的自主权，并为观众提供体验选择。
 */
const LIVEPEER_KEY: any = process.env.NEXT_PUBLIC_LIVEPEER_KEY

const LivePeerClient = createReactClient({
  provider: studioProvider({ apiKey: LIVEPEER_KEY }),
});

export default LivePeerClient;