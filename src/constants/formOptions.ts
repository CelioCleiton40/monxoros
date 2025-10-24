export const DESTINATIONS = [
  'All', 'Alaska', 'Antarctica', 'Argentina & Chile', 'Bhutan', 'Bolivia', 
  'Borneo', 'Botswana', 'Brazil', 'Ecuador', 'Ethiopia', 'Finland', 
  'Galapagos', 'India', 'Kenya', 'Madagascar', 'Mongolia', 'Namibia', 
  'Nepal', 'Norway', 'Panama', 'Papua New Guinea', 'Peru', 'Rwanda', 
  'South Africa', 'South Georgia', 'Sri Lanka', 'Svalbard', 'Tanzania', 
  'Uganda', 'Zambia', 'Zimbabwe'
] as const;

export const TITLE_OPTIONS = [
  { value: '', label: 'Please Select...' },
  { value: 'Mr.', label: 'Mr.' },
  { value: 'Mrs.', label: 'Mrs.' },
  { value: 'Ms.', label: 'Ms.' },
  { value: 'Dr.', label: 'Dr.' }
] as const;

export const HEAR_ABOUT_OPTIONS = [
  { value: '', label: 'Please Select...' },
  { value: 'Word of mouth', label: 'Word of mouth' },
  { value: 'Search Engine', label: 'Search Engine' },
  { value: 'Instagram', label: 'Instagram' },
  { value: 'Facebook', label: 'Facebook' },
  { value: 'Web Advert', label: 'Web Advert' },
  { value: 'Other', label: 'Other' }
] as const;

export const TOUR_TYPES = [
  { value: 'Scheduled Group Tour', label: 'Scheduled Group Tour' },
  { value: 'Custom Tour', label: 'Custom Tour' }
] as const;

export const SEND_ME_OPTIONS = [
  { value: 'an itinerary', label: 'an itinerary' },
  { value: 'a booking form', label: 'a booking form' }
] as const;