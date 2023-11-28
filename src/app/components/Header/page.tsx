import SelectCountry from "../MuiComponents/SelectCountry/page";
import { useDispatch } from "react-redux";
import { chooseLanguage } from "@/redux/features/languageSlice";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();
  const handleChangeLanguage = (data: string) => {
    dispatch(chooseLanguage(data));
  };
  return (
    <div className="bg-white p-[20px]">
      <SelectCountry onChangeLanguage={handleChangeLanguage} />
    </div>
  );
}

export default Header;
