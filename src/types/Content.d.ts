export interface MenuItemType {
  name: string;
  icon: string;
  pathname: string[];
}

export interface PagesListType {
  number: string,
  label: string,
  link?: string
  newTab?: boolean,
}

export interface ExperienceDataType {
  position: string;
  company: string;
  place: string;
  start: string;
  end?: string;
}

export interface ProjectContentProps {
  name: string;
  description: string;
  link?: string | null;
  isHover?: boolean | null;
  tech?: string[] | null;
  image?: string | null;
}

export interface BoxCardProps extends ProjectContentProps {
  background?: string | null;
  logo?: string | null;
}

export interface ProjectCardProps
  extends ProjectContentProps,
    BoxCardProps,
    HTMLAttributes<HTMLDivElement> {
  shape: "vertical" | "horizontal" | "box";
}

export interface ProjectDataType extends ProjectCardProps {
  key: string;
}

export interface SocialListType {
  name: string;
  detail: string;
  link: string;
  icon: string;
}