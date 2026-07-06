import { CityRegistrationLanding, createCityRegistrationMetadata } from "@/components/CityRegistrationLanding";

export const metadata = createCityRegistrationMetadata("suzhou");

export default function RegisterCompanyInSuzhouPage() {
  return <CityRegistrationLanding cityKey="suzhou" />;
}
