import { CityRegistrationLanding, createCityRegistrationMetadata } from "@/components/CityRegistrationLanding";

export const metadata = createCityRegistrationMetadata("shanghai");

export default function RegisterCompanyInShanghaiPage() {
  return <CityRegistrationLanding cityKey="shanghai" />;
}
