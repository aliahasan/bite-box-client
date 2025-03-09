import ProfileInfo from "@/components/modules/dashboard/Customer/ProfileInfo";
import { getMyProfileInfo } from "@/services/User";

const CustomerProfilePage = async () => {
  const res = await getMyProfileInfo();
  const user = res?.data;
  return (
    <div>
      <ProfileInfo user={user} />
    </div>
  );
};

export default CustomerProfilePage;
