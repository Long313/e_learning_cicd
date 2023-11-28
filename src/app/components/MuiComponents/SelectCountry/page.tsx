"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import { handlePathName } from "../../../../common/page";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
interface CountryProps {
  onChangeLanguage: any;
}

export default function CountrySelect(props: CountryProps) {
  const router = useRouter();
  const pathName = usePathname();
  const languageCurrent = useSelector((state: any) => state.language.language);
  const { onChangeLanguage } = props;
  const handleChangeSelect = (value: string | null | undefined) => {
    onChangeLanguage(value ?? null);
    const newPath = handlePathName(pathName, languageCurrent);
    router.push(`/${value}/${newPath}`);
  };
  return (
    <div className="w-fit ml-auto">
      <Autocomplete
        id="country-select-demo"
        sx={{
          width: 300,
          background: "#fff",
          color: "#fff",
          borderColor: "#fff",
        }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        onChange={(event, value) => handleChangeSelect(value?.value)}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a Language"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
}

interface CountryType {
  code: string;
  label: string;
  value?: string | null | undefined;
  suggested?: boolean;
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries: readonly CountryType[] = [
  { code: "AD", label: "Andorra", value: "and" },
  {
    code: "AE",
    label: "United Arab Emirates",
    value: "uae",
  },
  { code: "AF", label: "Afghanistan", value: "afg" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    value: "aab",
  },
  { code: "AI", label: "Anguilla", value: "ang" },
  { code: "AL", label: "Albania", value: "alb" },
  { code: "AM", label: "Armenia", value: "arm" },
  { code: "AO", label: "Angola", value: "ang" },
  { code: "AQ", label: "Antarctica", value: "ant" },
  { code: "AR", label: "Argentina", value: "arg" },
  { code: "AS", label: "American Samoa", value: "ams" },
  { code: "AT", label: "Austria", value: "aua" },
  {
    code: "AU",
    label: "Australia",
    suggested: true,
    value: "aus",
  },
  { code: "AW", label: "Aruba", value: "aru" },
  { code: "AX", label: "Alland Islands", value: "ali" },
  { code: "AZ", label: "Azerbaijan", value: "aze" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    value: "bah",
  },
  { code: "BB", label: "Barbados", value: "bar" },
  { code: "BD", label: "Bangladesh", value: "ban" },
  { code: "BE", label: "Belgium", value: "bel" },
  { code: "BF", label: "Burkina Faso", value: "buf" },
  { code: "BG", label: "Bulgaria", value: "bul" },
  { code: "BH", label: "Bahrain", value: "bah" },
  { code: "BI", label: "Burundi", value: "bur" },
  { code: "BJ", label: "Benin", value: "ben" },
  { code: "BL", label: "Saint Barthelemy", value: "sab" },
  { code: "BM", label: "Bermuda", value: "ber" },
  { code: "BN", label: "Brunei Darussalam", value: "brd" },
  { code: "BO", label: "Bolivia", value: "bol" },
  { code: "BR", label: "Brazil", value: "bra" },
  { code: "BS", label: "Bahamas", value: "bah" },
  { code: "BT", label: "Bhutan", value: "bhu" },
  { code: "BV", label: "Bouvet Island", value: "boi" },
  { code: "BW", label: "Botswana", value: "bot" },
  { code: "BY", label: "Belarus", value: "bel" },
  { code: "BZ", label: "Belize", value: "bee" },
  {
    code: "CA",
    label: "Canada",
    suggested: true,
    value: "can",
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    value: "coi",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    value: "cdr",
  },
  {
    code: "CF",
    label: "Central African Republic",
    value: "car",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    value: "cor",
  },
  { code: "CH", label: "Switzerland", value: "swi" },
  { code: "CI", label: "Cote d'Ivoire", value: "cod" },
  { code: "CK", label: "Cook Islands", value: "coi" },
  { code: "CL", label: "Chile", value: "chi" },
  { code: "CM", label: "Cameroon", value: "cam" },
  { code: "CN", label: "China", value: "chi" },
  { code: "CO", label: "Colombia", value: "col" },
  { code: "CR", label: "Costa Rica", value: "cor" },
  { code: "CU", label: "Cuba", value: "cub" },
  { code: "CV", label: "Cape Verde", value: "cav" },
  { code: "CW", label: "Curacao", value: "cur" },
  { code: "CX", label: "Christmas Island", value: "chi" },
  { code: "CY", label: "Cyprus", value: "cyp" },
  { code: "CZ", label: "Czech Republic", value: "czr" },
  {
    code: "DE",
    label: "Germany",
    suggested: true,
    value: "ger",
  },
  { code: "DJ", label: "Djibouti", value: "dji" },
  { code: "DK", label: "Denmark", value: "den" },
  { code: "DM", label: "Dominica", value: "dom" },
  {
    code: "DO",
    label: "Dominican Republic",
    value: "dor",
  },
  { code: "DZ", label: "Algeria", value: "alg" },
  { code: "EC", label: "Ecuador", value: "ecu" },
  { code: "EE", label: "Estonia", value: "est" },
  { code: "EG", label: "Egypt", value: "egy" },
  { code: "EH", label: "Western Sahara", value: "wes" },
  { code: "ER", label: "Eritrea", value: "eri" },
  { code: "ES", label: "Spain", value: "spa" },
  { code: "ET", label: "Ethiopia", value: "eth" },
  { code: "FI", label: "Finland", value: "fin" },
  { code: "FJ", label: "Fiji", value: "fij" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    value: "fim",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    value: "mfs",
  },
  { code: "FO", label: "Faroe Islands", value: "fai" },
  {
    code: "FR",
    label: "France",
    suggested: true,
    value: "fra",
  },
  { code: "GA", label: "Gabon", value: "gab" },
  { code: "GB", label: "United Kingdom", value: "eng" },
  { code: "GD", label: "Grenada", value: "gre" },
  { code: "GE", label: "Georgia", value: "geo" },
  { code: "GF", label: "French Guiana", value: "frg" },
  { code: "GG", label: "Guernsey", value: "gue" },
  { code: "GH", label: "Ghana", value: "gha" },
  { code: "GI", label: "Gibraltar", value: "gib" },
  { code: "GL", label: "Greenland", value: "gre" },
  { code: "GM", label: "Gambia", value: "gam" },
  { code: "GN", label: "Guinea", value: "gui" },
  { code: "GP", label: "Guadeloupe", value: "gua" },
  { code: "GQ", label: "Equatorial Guinea", value: "eqg" },
  { code: "GR", label: "Greece", value: "gre" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    value: "sga",
  },
  { code: "GT", label: "Guatemala", value: "gue" },
  { code: "GU", label: "Guam", value: "gua" },
  { code: "GW", label: "Guinea-Bissau", value: "gub" },
  { code: "GY", label: "Guyana", value: "guy" },
  { code: "HK", label: "Hong Kong", value: "chi" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    value: "hia",
  },
  { code: "HN", label: "Honduras", value: "hon" },
  { code: "HR", label: "Croatia", value: "cro" },
  { code: "HT", label: "Haiti", value: "hai" },
  { code: "HU", label: "Hungary", value: "hun" },
  { code: "ID", label: "Indonesia", value: "ind" },
  { code: "IE", label: "Ireland", value: "ire" },
  { code: "IL", label: "Israel", value: "isr" },
  { code: "IM", label: "Isle of Man", value: "isl" },
  { code: "IN", label: "India", value: "ind" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    value: "bio",
  },
  { code: "IQ", label: "Iraq", value: "ira" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    value: "iir",
  },
  { code: "IS", label: "Iceland", value: "ice" },
  { code: "IT", label: "Italy", value: "ita" },
  { code: "JE", label: "Jersey", value: "jer" },
  { code: "JM", label: "Jamaica", value: "jam" },
  { code: "JO", label: "Jordan", value: "jor" },
  {
    code: "JP",
    label: "Japan",
    suggested: true,
    value: "jap",
  },
  { code: "KE", label: "Kenya", value: "ken" },
  { code: "KG", label: "Kyrgyzstan", value: "kyr" },
  { code: "KH", label: "Cambodia", value: "cam" },
  { code: "KI", label: "Kiribati", value: "kir" },
  { code: "KM", label: "Comoros", value: "com" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    value: "ska",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    value: "kod",
  },
  { code: "KR", label: "Korea, Republic of", value: "kor" },
  { code: "KW", label: "Kuwait", value: "kuw" },
  { code: "KY", label: "Cayman Islands", value: "cay" },
  { code: "KZ", label: "Kazakhstan", value: "kaz" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    value: "lao",
  },
  { code: "LB", label: "Lebanon", value: "leb" },
  { code: "LC", label: "Saint Lucia", value: "sal" },
  { code: "LI", label: "Liechtenstein", value: "lie" },
  { code: "LK", label: "Sri Lanka", value: "sri" },
  { code: "LR", label: "Liberia", value: "lib" },
  { code: "LS", label: "Lesotho", value: "les" },
  { code: "LT", label: "Lithuania", value: "lit" },
  { code: "LU", label: "Luxembourg", value: "lux" },
  { code: "LV", label: "Latvia", value: "lat" },
  { code: "LY", label: "Libya", value: "lib" },
  { code: "MA", label: "Morocco", value: "mor" },
  { code: "MC", label: "Monaco", value: "mon" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    value: "mor",
  },
  { code: "ME", label: "Montenegro", value: "mon" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    value: "sam",
  },
  { code: "MG", label: "Madagascar", value: "mad" },
  { code: "MH", label: "Marshall Islands", value: "mai" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    value: "mat",
  },
  { code: "ML", label: "Mali", value: "mal" },
  { code: "MM", label: "Myanmar", value: "mya" },
  { code: "MN", label: "Mongolia", value: "mon" },
  { code: "MO", label: "Macao", value: "mac" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    value: "nmi",
  },
  { code: "MQ", label: "Martinique", value: "mar" },
  { code: "MR", label: "Mauritania", value: "mau" },
  { code: "MS", label: "Montserrat", value: "mon" },
  { code: "MT", label: "Malta", value: "mal" },
  { code: "MU", label: "Mauritius", value: "mau" },
  { code: "MV", label: "Maldives", value: "mal" },
  { code: "MW", label: "Malawi", value: "mai" },
  { code: "MX", label: "Mexico", value: "mex" },
  { code: "MY", label: "Malaysia", value: "mal" },
  { code: "MZ", label: "Mozambique", value: "moz" },
  { code: "NA", label: "Namibia", value: "nam" },
  { code: "NC", label: "New Caledonia", value: "nec" },
  { code: "NE", label: "Niger", value: "nig" },
  { code: "NF", label: "Norfolk Island", value: "noi" },
  { code: "NG", label: "Nigeria", value: "nig" },
  { code: "NI", label: "Nicaragua", value: "nic" },
  { code: "NL", label: "Netherlands", value: "net" },
  { code: "NO", label: "Norway", value: "nor" },
  { code: "NP", label: "Nepal", value: "nep" },
  { code: "NR", label: "Nauru", value: "nau" },
  { code: "NU", label: "Niue", value: "niu" },
  { code: "NZ", label: "New Zealand", value: "nez" },
  { code: "OM", label: "Oman", value: "oma" },
  { code: "PA", label: "Panama", value: "pan" },
  { code: "PE", label: "Peru", value: "per" },
  { code: "PF", label: "French Polynesia", value: "frp" },
  { code: "PG", label: "Papua New Guinea", value: "png" },
  { code: "PH", label: "Philippines", value: "phi" },
  { code: "PK", label: "Pakistan", value: "pak" },
  { code: "PL", label: "Poland", value: "pol" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    value: "spa",
  },
  { code: "PN", label: "Pitcairn", value: "pit" },
  { code: "PR", label: "Puerto Rico", value: "pur" },
  {
    code: "PS",
    label: "Palestine, State of",
    value: "pas",
  },
  { code: "PT", label: "Portugal", value: "por" },
  { code: "PW", label: "Palau", value: "pal" },
  { code: "PY", label: "Paraguay", value: "par" },
  { code: "QA", label: "Qatar", value: "qat" },
  { code: "RE", label: "Reunion", value: "reu" },
  { code: "RO", label: "Romania", value: "rom" },
  { code: "RS", label: "Serbia", value: "ser" },
  { code: "RU", label: "Russian Federation", value: "ruf" },
  { code: "RW", label: "Rwanda", value: "rwa" },
  { code: "SA", label: "Saudi Arabia", value: "saa" },
  { code: "SB", label: "Solomon Islands", value: "soi" },
  { code: "SC", label: "Seychelles", value: "sey" },
  { code: "SD", label: "Sudan", value: "sud" },
  { code: "SE", label: "Sweden", value: "swe" },
  { code: "SG", label: "Singapore", value: "sin" },
  { code: "SH", label: "Saint Helena", value: "sah" },
  { code: "SI", label: "Slovenia", value: "slo" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    value: "sva",
  },
  { code: "SK", label: "Slovakia", value: "slo" },
  { code: "SL", label: "Sierra Leone", value: "sil" },
  { code: "SM", label: "San Marino", value: "sam" },
  { code: "SN", label: "Senegal", value: "sen" },
  { code: "SO", label: "Somalia", value: "som" },
  { code: "SR", label: "Suriname", value: "sur" },
  { code: "SS", label: "South Sudan", value: "sos" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    value: "sta",
  },
  { code: "SV", label: "El Salvador", value: "els" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    value: "smd",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    value: "sar",
  },
  { code: "SZ", label: "Swaziland", value: "swa" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    value: "tac",
  },
  { code: "TD", label: "Chad", value: "cha" },
  {
    code: "TF",
    label: "French Southern Territories",
    value: "fst",
  },
  { code: "TG", label: "Togo", value: "tog" },
  { code: "TH", label: "Thailand", value: "tha" },
  { code: "TJ", label: "Tajikistan", value: "taj" },
  { code: "TK", label: "Tokelau", value: "tok" },
  { code: "TL", label: "Timor-Leste", value: "til" },
  { code: "TM", label: "Turkmenistan", value: "tur" },
  { code: "TN", label: "Tunisia", value: "tun" },
  { code: "TO", label: "Tonga", value: "ton" },
  { code: "TR", label: "Turkey", value: "tur" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    value: "tat",
  },
  { code: "TV", label: "Tuvalu", value: "tuv" },
  {
    code: "TW",
    label: "Taiwan",
    value: "chi",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    value: "uro",
  },
  { code: "UA", label: "Ukraine", value: "ukr" },
  { code: "UG", label: "Uganda", value: "uga" },
  {
    code: "US",
    label: "United States",
    suggested: true,
    value: "eng",
  },
  { code: "UY", label: "Uruguay", value: "uru" },
  { code: "UZ", label: "Uzbekistan", value: "uzb" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    value: "hsv",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    value: "sva",
  },
  { code: "VE", label: "Venezuela", value: "ven" },
  {
    code: "VG",
    label: "British Virgin Islands",
    value: "bvi",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    value: "uvi",
  },
  { code: "VN", label: "Vietnam", value: "vie" },
  { code: "VU", label: "Vanuatu", value: "van" },
  { code: "WF", label: "Wallis and Futuna", value: "waf" },
  { code: "WS", label: "Samoa", value: "sam" },
  { code: "XK", label: "Kosovo", value: "kos" },
  { code: "YE", label: "Yemen", value: "yem" },
  { code: "YT", label: "Mayotte", value: "may" },
  { code: "ZA", label: "South Africa", value: "soa" },
  { code: "ZM", label: "Zambia", value: "zam" },
  { code: "ZW", label: "Zimbabwe", value: "zim" },
];
