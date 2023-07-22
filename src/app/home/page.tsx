import "./homepage.css";
import OnboardingPage from "./onboardingPage";
import HomePage from "./homepage";

async function getOnboardingStatus() {
  // call api to get current onboarding status

  // mock for now
  return new Promise((resolve) => {
    resolve(false)
  })
}

export default async function Home() {
  const isOnboarded = await getOnboardingStatus();

  if (!isOnboarded) {
    return <OnboardingPage />
  }

  return <HomePage />
}



