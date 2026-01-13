import { LucideIcon } from 'lucide-react';

export enum AudienceType {
  MEDICAL_STAFF = 'MEDICAL_STAFF',
  PATIENT_EDUCATION = 'PATIENT_EDUCATION'
}

export interface ResourceItem {
  id: string;
  title: string;
  url?: string; // Optional, some might be placeholders
  description?: string;
  isExternal: boolean;
  tag?: string; // Optional tag like "New" or "Hot"
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  items: ResourceItem[];
}

export interface Section {
  id: string;
  title: string;
  audience: AudienceType;
  description: string;
  categories: Category[];
}