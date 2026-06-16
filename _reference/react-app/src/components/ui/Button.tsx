import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "glass";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: IconName;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
};

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 font-semibold tracking-tight rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-[0_10px_30px_-8px_rgba(224,25,43,0.7)] hover:bg-brand-400 hover:shadow-[0_16px_44px_-10px_rgba(224,25,43,0.85)] hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-fg border border-ink-500 hover:border-fg hover:bg-fg/5 hover:-translate-y-0.5",
  ghost: "bg-transparent text-ink-100 hover:text-fg hover:bg-fg/5",
  glass:
    "glass text-fg hover:bg-fg/10 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[0.95rem] px-6 py-3",
  lg: "text-base px-8 py-4",
};

function Inner({
  children,
  icon,
  iconPosition = "right",
}: Pick<BaseProps, "children" | "icon" | "iconPosition">) {
  const iconEl = icon && (
    <Icon
      name={icon}
      className={cn(
        "size-[1.05em] transition-transform duration-300",
        iconPosition === "right" && "group-hover/btn:translate-x-1",
        iconPosition === "left" && "group-hover/btn:-translate-x-1",
      )}
    />
  );
  return (
    <>
      {iconPosition === "left" && iconEl}
      {children}
      {iconPosition === "right" && iconEl}
    </>
  );
}

type AsButton = BaseProps & { to?: undefined; href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>;
type AsLink = BaseProps & { to: string } & { href?: undefined };
type AsAnchor = BaseProps & { href: string } & { to?: undefined };

export function Button(props: AsButton | AsLink | AsAnchor) {
  const {
    children, variant = "primary", size = "md", className,
    icon, iconPosition, fullWidth, ...rest
  } = props as BaseProps & { to?: string; href?: string };

  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);
  const inner = <Inner icon={icon} iconPosition={iconPosition}>{children}</Inner>;

  if ("to" in props && props.to) {
    return <Link to={props.to} className={classes}>{inner}</Link>;
  }
  if ("href" in props && props.href) {
    return <a href={props.href} className={classes}>{inner}</a>;
  }
  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}
