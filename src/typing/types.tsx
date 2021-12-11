export interface personType {
  name: string;
  gender: string;
  height: string;
  mass: string;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
}
export interface ParentCompProps {
  childComp?: React.ReactNode;
}

export interface filmType {
  title: string;
  director: string;
}

export type Nullable<T> = T | null;

export type positionProps = {
  position: "static" | "absolute" | "relative" | "sticky";
};