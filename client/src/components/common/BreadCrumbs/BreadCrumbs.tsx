import Link from "next/link";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";
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
    default:
      return { label: path };
  }
};

const BreadCrumb = () => {
  const { asPath } = useRouter();
  const paths = asPath?.split("/") || [];

  const links: BreadCrumbsLink[] = [{ label: "Minerank", url: "/" }];

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
