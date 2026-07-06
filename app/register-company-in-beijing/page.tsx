import { CityRegistrationLanding, createCityRegistrationMetadata } from "@/components/CityRegistrationLanding";

export const metadata = createCityRegistrationMetadata("beijing");

export default function RegisterCompanyInBeijingPage() {
  return <CityRegistrationLanding cityKey="beijing" />;
}
