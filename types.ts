export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
}

export interface Client {
  name: string;
  logoUrl: string;
}

export interface SpeakingEngagement {
  title: string;
  organization: string;
  details?: string;
}

export interface AdditionalCaseStudy {
  title: string;
}
