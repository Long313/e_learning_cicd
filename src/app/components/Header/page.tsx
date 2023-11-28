import SelectCountry from "../MuiComponents/SelectCountry/page";
import { useDispatch } from "react-redux";
import { chooseLanguage } from "@/redux/features/languageSlice";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Button from "../Button/page";

function Header() {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();
  const handleChangeLanguage = (data: string) => {
    dispatch(chooseLanguage(data));
  };
  return (
    <div className="p-[20px] border-b border-white">
      <SelectCountry onChangeLanguage={handleChangeLanguage} />
      <Button
        href="/login"
        className="text-white border border-white p-2 rounded-[6px] min-w-fit w-[60px]"
        label="Sign in"
      />
      <Button
        href="/signup"
        className="text-white border border-white p-2 rounded-[6px] min-w-fit w-[60px]"
        label="Sign up"
      />
    </div>
  );
}

export default Header;
