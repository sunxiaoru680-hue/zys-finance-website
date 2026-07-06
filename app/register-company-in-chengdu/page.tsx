import { CityRegistrationLanding, createCityRegistrationMetadata } from "@/components/CityRegistrationLanding";

export const metadata = createCityRegistrationMetadata("chengdu");

export default function RegisterCompanyInChengduPage() {
  return <CityRegistrationLanding cityKey="chengdu" />;
}
