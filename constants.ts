import { Project, Client, SpeakingEngagement, AdditionalCaseStudy } from './types';

export const CLIENTS: Client[] = [
  {
    name: "Consorcio",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqX1tTqI0EG4qderC-xsUeVpzlP_x3Zruc83hMt75QnXwoKuwUe4P0XbEKWWi2D8IHIDLjh2fgUpF09ix2AtEtnrRFE278e-ITuetJowztSgGLQ-tFwCnPuUGN_oof_FcVbhWSl0E4UMHbL9-W3DFCjDI0P7odnnKgF3njPZ-I5Vcoicze0grrBTEtS7LGLJMYjct1BMA_a9lFVYaTj66_PRlcqT2t2p5_UqsXtUvRa080dLHlwWBFExf1AjxqQfvJmqj5wmlOEtx4"
  },
  {
    name: "Principal",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5NH669Dy3GAfutV9qbgjUQVVFeR0DHdnyVK46LsIwt-aQUB2hV0-GiGSKfKdXEUDtoIPTaB5Wg_L1AVTqWzHe95CACvkqBe5-M4DQ08r-uSjK9-HpO-dLmMA-BJa1sjtVkFRj_eMQm_YN4RmNtlWL_iAb4IlF-tmWzrSRS945u741rh8AUHuc7QKJNpKo4XxqAM5tMvoXYjqN2dYBZbvb0jMaR27PN66HM00gYMX0qlU0kH3it3KtrqCRoUfpKv1rUGg4CEW_Tatp"
  },
  {
    name: "Scotiabank",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4-VvdLHqAdajVy05doFQhU8SwuvZ4Sobp6pWpbvIr9pAc2Zv9n0r5Zjqtnpw9bYzS4z3drkfxmqa9b4F6Aau7d39biH9aoVxpOVQt_-8IP84rFejfqc0U5p_idGTdQcm6es_uZxQwHemQ60YaB9dbc4M0R34k_FqNsNQkCLM-VAIvQRhGaBbfJbq9quQ7oSYRGhvY1W3VjsxzwMdtf7YSoPrUUpPmtqSq52fH83onw5fldVKH8ZYwMwuNUdPTudgDUDgYHlsGX9-3"
  },
  {
    name: "Universidad Andrés Bello",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs9Ruh_2FoMcQ44KTeON0FpZ6dbXbT9TvZfa_Zbc91LofEvfQPdTqCH1nMAe4u9gFMaMp4Yydxsm6Dp93Gh6CX0IzoS01y422nVamjbW-16Cgj3bET2TG9nVMlPL9oaMNNgAelhuGf_Ac8j5YMFiLBHB0Uq29RcrxVK06qzyTeMNvwCmNqgXDnD3az0iH1klB6-3Qweh02vmcFNUR7EzWYJtULVszoF9rWIlajxm_SbuEycCR3tuCCs-pEkj2SVpNBtKqJugO14ymm"
  },
  {
    name: "Universidad del Desarrollo",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFCV-xbze4oVDOeGcpVYozYsM_LFBpV5xhC6jr5ZyidDqAsTTWke_IVJcMcN8ZWhfxvxdea0K3ealxoSqNYB221WpWfJ_H-P-4IEyrMzVxATB901YG7BMaca2bnFySQ9WHrLtU5abp0IM6DHGR8QrnXsklZA_f_Z8Vw7pSOBZdJRou7h1lBeIFiW6XeJApPIrsOQfsdaFRliXbrwCi_Xjfw-SgzuF-7GcrFLxlE1xULKHBtPMLkcp5cw2IEDyqwTqQYXjxFW_trHIt"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "sucursal-virtual",
    title: "Sucursal Virtual Homepage Redesign & Personalization Strategy",
    description: "Led the complete redesign of the post-login homepage for Consorcio's customers, introducing a personalized, modular experience to drive engagement and cross-sell opportunities.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEeMeGv69ZdLr4z_d9G03RPJUO54HbvTPIf--i-K3wkzdVK0Ig3iN-hjdqIE2Nvj5nGht9W-9JXeerYYdXrkKx2YkowBS7XqxWwqHnbrKl-tSbQZ4aN5dw0IxZCEB2Gx6L3eKLdZz-jLRwpNuuS8cB5wuvomh8VTvHbegU9fWscuaBYz1eHHJJ68I5ykOJAdbYIxFQu4q_hKwB7ouoSrQY5Gk-FKvcrgbGja5tmMNYuktG4kVhjjocC-Z6t-mqujh9Ik1W-iYuDEue",
    link: "#"
  },
  {
    id: "prisma-design-system",
    title: "Prisma Design System (v6) – Product Ownership & Multi-team Adoption",
    description: "Assumed product ownership of Prisma, leading the strategic roadmap, component development, and a multi-channel adoption strategy that increased usage by 40% across 12 product teams.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgZDuUDfYh6Urp8VsT1l7Y22fKGqzh_Pxg1eGLxiBOZ7Jt3vHBlmxuacE2Zsow_DsPZpQ01oxF-cKusBflBjJtFFI4JvBH3CLwxY3FN38bIZXFzP2vnmiRH3zIAJOlpmcX9khFOEiVpHSXBgENu95p2RsV8_wHF-H65KDGwd-CGskHCyebTK4DX6rOgX6bpBU-7v-8-7nwccGA6EM3-HPAWWittY56qYzndkAhuZPVWyF9Num8iIk0tQX_Z2J0sybapy9hT7a-irj0",
    link: "#"
  },
  {
    id: "health-insurance",
    title: "Health Insurance E-commerce Redesign (Landing Pages + Lead Capture)",
    description: "Revamped the entire health insurance acquisition funnel, from landing pages to lead capture forms, resulting in a 25% increase in qualified leads and a simplified user experience.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgtvNermUnosq6IDJg3FnmeU5Sb0ReUC00gMpMR0lqdrya14gUx6DI0IQ0kfDcvxm9lKtsHSO6RFSASDxW4x8oOhXGiU8sSQ8aVcJQa3i_Ol5SHtZ6T8W7lhpC8LdAE1XKXvT6zS8DX8f0rO1ebJqjMyh6T70QlYUiZAzrn_BAJsFxJuKz7BzFkmX3vVFfhjJf2hG9UYSsgo6AzN8FWOohsH5x6FD71cWc6jG6iKFBju8KGxr_GMBxJmUN-U-9MF7daX8Aj7hGx8Lr",
    link: "#"
  },
  {
    id: "ux-capability",
    title: "UX Team Capability Model & Career Path: Transition to Product Design",
    description: "Designed and implemented a skills-based capability model and clear career path for the UX team, facilitating the transition from a service-oriented model to an embedded product design function.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt_IQBXZdHkv2r1h-BE3AVOG9Du1g7JBKq1JKn_dmUKQen0wLxnOIsVLoo5xf1WJHWKk5LLVGvKCwb1p85c6AOdZORMzIvdn2KTm34IN6P9YY_E648IL8NDk0l8Og8dxbvCYo82LQEsHwxhgPHfBf1W9fGuYPsKvylgmWmBYfaQRYw8TNKuRjWLI-aPKOWLAPDqKtBY1w9lckkaOS_QvJJ_VVIAQpzXfwB-lcE1QSkvrwDvI6p5Ppnuv8M854wgoeXMILGpVdXAhwo",
    link: "#"
  },
  {
    id: "customer-insight",
    title: "Customer Insight Program & Mixed-Methods Research Practices",
    description: "Established a continuous customer insight program, integrating qualitative and quantitative research methods to inform product strategy and validate design decisions across the organization.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh0k1gecr_6XHLXGqvRlbBgyO7LjaRWCOzTJXbwzxB6UNtQZZNXQkS864rIGSD_ChuNcMSgRTukNoDyMbPbd7YMhRmf2ZBhgg4aFbqS8craMS3wkodavANYB2DwzXom294fWek-2SZSc8z_bsYvu8nX0DqrnhKOjbOVCyPafJA9xNpsPmfpl8Y4rbKmBGzxgPYMFdasC8bOXk43dFVA8tU65dfvAN-y22gV6DMnQI8IqkYb1tvK1crbLxyq6J79Hs4BdJXXFV1LApa",
    link: "#"
  }
];

export const ADDITIONAL_CASE_STUDIES: AdditionalCaseStudy[] = [
  { title: "Design System Governance & Release Communication" },
  { title: "Login & Password Recovery UX Improvements" },
  { title: "Vinculación Personas: Cross-sell Opportunity Mapping" },
  { title: "UX Strategy for Complex Insurance Journeys" }
];

export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = [
  {
    title: "Adjunct Professor",
    organization: "Universidad Andrés Bello (UX/UI Design)"
  },
  {
    title: "Adjunct Professor",
    organization: "Universidad del Desarrollo (Innovation & Design)"
  },
  {
    title: "Guest Speaker",
    organization: "UX leadership, product discovery, and design systems."
  }
];
