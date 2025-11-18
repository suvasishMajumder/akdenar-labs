export type sectionObj = {
  title: string;
  description: string;
  image: string;
};

export type serviceElemType = {
  route: string;
  title: string;
  heading: string;

  sections: sectionObj[];
};

export type ServiceContentType = {
  heading: string;
  content: string;
};
