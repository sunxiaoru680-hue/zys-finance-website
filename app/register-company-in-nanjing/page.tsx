import { CityRegistrationLanding, createCityRegistrationMetadata } from "@/components/CityRegistrationLanding";

export const metadata = createCityRegistrationMetadata("nanjing");

export default function RegisterCompanyInNanjingPage() {
  return <CityRegistrationLanding cityKey="nanjing" />;
}
