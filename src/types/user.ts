export interface CreateUserData {
  email: string;
  password: string;
}

export interface LaborerData {
  displayName?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  contactNumber?: string;
  profilePicture?: string;
  rate?: number;
  isActive: boolean;
}

export interface CustomerData {
  displayName?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  profilePicture?: string;
  contactNumber?: string;
  isActive: boolean;
}
