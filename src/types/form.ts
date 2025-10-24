export interface FormData {
  title?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  destinationsOfInterest?: string[];
  typeOfTour?: string;
  howDidYouHearAboutUs?: string;
  pleaseSendMe?: string[];
  yourEnquiry?: string;
  recommendedTourMailer?: boolean;
}