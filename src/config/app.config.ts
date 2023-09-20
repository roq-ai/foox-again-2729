interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox again',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own freelance profile', 'Apply for jobs', 'Manage own applications', 'View job details'],
  ownerAbilities: ['Manage country data', 'Manage freelance profiles', 'Manage job postings', 'Manage applications'],
  getQuoteUrl: 'https://app.roq.ai/proposal/7fb12cd9-a085-48e1-81ea-54ff2313bc20',
};
