export interface CreateUserData {
  email: string;
  password: string;
  userType: string;
}

export interface UserData {
  displayName?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  contactNumber?: string;
  profilePicture?: string;
  rate?: number;
  isActive: boolean;
}