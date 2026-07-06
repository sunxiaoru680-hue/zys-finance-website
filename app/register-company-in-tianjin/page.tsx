import { CityRegistrationLanding, createCityRegistrationMetadata } from "@/components/CityRegistrationLanding";

export const metadata = createCityRegistrationMetadata("tianjin");

export default function RegisterCompanyInTianjinPage() {
  return <CityRegistrationLanding cityKey="tianjin" />;
}
