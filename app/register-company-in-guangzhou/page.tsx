import { CityRegistrationLanding, createCityRegistrationMetadata } from "@/components/CityRegistrationLanding";

export const metadata = createCityRegistrationMetadata("guangzhou");

export default function RegisterCompanyInGuangzhouPage() {
  return <CityRegistrationLanding cityKey="guangzhou" />;
}
