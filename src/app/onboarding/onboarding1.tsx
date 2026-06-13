import { useTheme } from "@/constants/useTheme";
import { useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const DOTS = [0, 1, 2];

export default function OnboardingScreen1() {
  const { colors, isDark } = useTheme();
  const router = useRouter();

  const player = useVideoPlayer(
    require("@/assets/images/vid3.mp4"),
    (player) => {
      player.loop = true;
      player.play();
    },
  );

  return (
    <View style={[styles.safe, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />

      {/* Skip */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => router.replace("/")}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Text style={[styles.skipLabel, { color: colors.skip }]}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Illustration card */}
      <View style={styles.imageWrapper}>
        {/* Soft glow blob behind image */}
        <View style={styles.blob} />
        <VideoView
          player={player}
          style={styles.illustration}
          nativeControls={false}
        />
      </View>

      {/* Content */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        {/* Drag handle */}
        {/* <View style={[styles.handle, { backgroundColor: colors.dot }]} /> */}

        <Text style={[styles.headline, { color: colors.text }]}>
          Implement Your Ideas
        </Text>

        <Text style={[styles.body, { color: colors.textSecondary }]}>
          Transform your app ideas into actionable plans with clear insights,
          validation tools, and step-by-step guidance designed to help you build
          products people actually want.
        </Text>

        {/* Pagination dots */}
        <View style={styles.dotsRow}>
          {DOTS.map((i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === 0
                  ? [styles.dotActive, { backgroundColor: colors.dotActive }]
                  : { backgroundColor: colors.dot },
              ]}
            />
          ))}
        </View>

        {/* CTA */}
        <TouchableOpacity
          style={[
            styles.cta,
            {
              backgroundColor: colors.primary,
              shadowColor: colors.shadow,
            },
          ]}
          activeOpacity={0.88}
          onPress={() => {
            // Navigate to next onboarding step or home
            router.push("/onboarding/onboarding2");
          }}
        >
          <Text style={[styles.ctaLabel, { color: colors.buttonText }]}>
            Get Started →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const CARD_RADIUS = 32;
const IMAGE_HEIGHT = height * 0.52;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  topBar: {
    position: "absolute",
    top: Platform.OS === "android" ? 40 : 56,
    right: 24,
    zIndex: 10,
  },
  skipLabel: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.2,
  },

  // Illustration area
  imageWrapper: {
    width,
    height: IMAGE_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  blob: {
    position: "absolute",
    width: width * 0.85,
    height: width * 0.85,
    borderRadius: (width * 0.85) / 2,
    opacity: 0.55,
  },
  illustration: {
    height: 390,
    width: 390,
  },

  // Bottom card
  card: {
    marginTop: -CARD_RADIUS,
    borderTopLeftRadius: CARD_RADIUS,
    borderTopRightRadius: CARD_RADIUS,
    paddingHorizontal: 28,
    paddingTop: 16,
    // // subtle card elevation
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 12,
  },
  handle: {
    alignSelf: "center",
    width: 40,
    height: 4,
    borderRadius: 2,
    marginBottom: 20,
  },
  dotsRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    width: 24,
    borderRadius: 4,
  },

  headline: {
    fontSize: 34,
    fontWeight: "700",
    lineHeight: 42,
    letterSpacing: -0.5,
    marginBottom: 14,
    marginTop: 30,
  },
  body: {
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0.1,
    marginBottom: 36,
  },

  cta: {
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  ctaLabel: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});
