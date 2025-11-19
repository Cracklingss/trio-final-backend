export interface LaborerData {
  email: string;
  password: string;
  displayName: string;
  firstName: string;
  lastName: string;
  gender: string;
  contactNumber: string;
  profilePicture: string;
  rate?: number;
  isActive: boolean;
}

export interface CustomerData {
  email: string;
  password: string;
  displayName: string;
  firstName: string;
  lastName: string;
  gender: string;
  profilePicture: string;
  contactNumber: string;
  isActive: boolean;
}
