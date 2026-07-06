import { CityRegistrationLanding, createCityRegistrationMetadata } from "@/components/CityRegistrationLanding";

export const metadata = createCityRegistrationMetadata("hangzhou");

export default function RegisterCompanyInHangzhouPage() {
  return <CityRegistrationLanding cityKey="hangzhou" />;
}
