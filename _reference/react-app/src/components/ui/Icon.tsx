import {
  Award, Wrench, ShieldCheck, MapPin, Phone, Mail, Clock, Calendar,
  ArrowRight, ArrowUpRight, ArrowLeft, ChevronDown, ChevronRight, Check,
  Menu, X, Star, Truck, Banknote, Settings, Users, Search, SlidersHorizontal,
  Tractor, Wheat, SprayCan, Cog, Mountain, Facebook, Instagram, Youtube,
  Linkedin, PhoneCall, CircleCheck, Gauge, Package, Headset, Sparkles,
  Quote, ChevronLeft, Plus, Minus, Send, FileText, Handshake, type LucideIcon,
} from "lucide-react";

const registry = {
  Award, Wrench, ShieldCheck, MapPin, Phone, Mail, Clock, Calendar,
  ArrowRight, ArrowUpRight, ArrowLeft, ChevronDown, ChevronRight, Check,
  Menu, X, Star, Truck, Banknote, Settings, Users, Search, SlidersHorizontal,
  Tractor, Wheat, SprayCan, Cog, Mountain, Facebook, Instagram, Youtube,
  Linkedin, PhoneCall, CircleCheck, Gauge, Package, Headset, Sparkles,
  Quote, ChevronLeft, Plus, Minus, Send, FileText, Handshake,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof registry;

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

/** Resolve a string icon name (used widely in data files) to a lucide icon. */
export function Icon({ name, className, strokeWidth = 2 }: IconProps) {
  const Cmp = registry[name];
  if (!Cmp) return null;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
