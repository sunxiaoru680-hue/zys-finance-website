import { CityRegistrationLanding, createCityRegistrationMetadata } from "@/components/CityRegistrationLanding";

export const metadata = createCityRegistrationMetadata("shenzhen");

export default function RegisterCompanyInShenzhenPage() {
  return <CityRegistrationLanding cityKey="shenzhen" />;
}
