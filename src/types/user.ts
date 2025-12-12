export interface CreateUserData {
  email: string;
  password: string;
  userType: string;
}

export interface UserData {
  password: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  contactNumber?: string;
  profilePicture?: string;
  address?: string;
  rate?: number;
  isActive: boolean;
}