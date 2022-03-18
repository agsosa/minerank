import Link from "next/link";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";
import { getAppConfig } from "src/services/config.service";
import { Container, Entry } from "./BreadCrumbs.styled";

interface BreadCrumbsLink {
  label: string;
  url?: string;
}

const getPathBreadCrumb = (path: string) => {
  if (!path) return null;

  switch (path) {
    case "server":
      return { label: "Servidor" };
    case "privacy-policy":
      return { label: "Política de Privacidad" };
    case "terms-and-conditions":
      return { label: "Términos y Condiciones" };
    case "faq":
      return { label: "Preguntas Frecuentes" };
    case "promote-server":
      return { label: "Promocionar Servidor" };
    case "add-server":
      return { label: "Agregar Servidor" };
    default:
      return { label: path };
  }
};

const BreadCrumb = () => {
  const { asPath } = useRouter();
  const paths = asPath?.split("/") || [];

  const links: BreadCrumbsLink[] = [{ label: getAppConfig().appName, url: "/" }];

  for (let path of paths) {
    const entry = getPathBreadCrumb(path);
    if (entry) links.push(entry);
  }

  return (
    <Container>
      {links.map(({ label, url }, idx) => {
        return (
          <Entry>
            {url ? <Link href={url}>{label}</Link> : <span>{label}</span>}
            {idx !== links.length - 1 && <BsChevronRight />}
          </Entry>
        );
      })}
    </Container>
  );
};

export default BreadCrumb;
