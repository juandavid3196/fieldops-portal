import { CONTACT } from "@/content/contact";
import { getDictionary } from "@/i18n/dictionaries";
import { Icon } from "./mock-frames";

/** Round WhatsApp + LinkedIn buttons shown next to the footer credit. */
export async function SocialLinks() {
  const { footer: t } = await getDictionary();
  const links = [
    { href: CONTACT.whatsapp, icon: "pi-whatsapp", label: t.whatsapp },
    { href: CONTACT.linkedin, icon: "pi-linkedin", label: t.linkedin },
  ];
  return (
    <div className="fo-social">
      {links.map((l) => (
        <a key={l.icon} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} title={l.label}>
          <Icon name={l.icon} size={16} />
        </a>
      ))}
    </div>
  );
}
