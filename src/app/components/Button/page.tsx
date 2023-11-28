import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
  className: string;
}

function Button(props: ButtonProps) {
  const { href, label, className } = props;
  return (
    <div className={className}>
      <Link href={href}>{label}</Link>
    </div>
  );
}

export default Button;
