import { 
  Stethoscope, 
  Calculator, 
  Apple, 
  Utensils, 
  Activity, 
  Droplet, 
  HeartHandshake,
  Pill,
  FileText
} from 'lucide-react';
import { AudienceType, Section } from './types';

export const PORTAL_DATA: Section[] = [
  {
    id: 'education-section',
    title: '衛教資料專區',
    audience: AudienceType.PATIENT_EDUCATION,
    description: '提供病患及家屬的疾病照護知識',
    categories: [
      {
        id: 'ckd-diet',
        title: '飲食控制 (高血鉀/高血磷)',
        icon: Apple, // 改用蘋果代表飲食/營養
        items: [
          {
            id: 'hyperkalemia',
            title: '高血鉀飲食衛教',
            url: 'https://chialin111.github.io/high-K-food/',
            description: '認識高鉀食物清單與烹調控制原則',
            isExternal: true,
            tag: '飲食'
          },
          {
            id: 'hyperphosphatemia',
            title: '高血磷控制衛教',
            url: 'https://chialin111.github.io/phos/',
            description: '如何正確服用降磷藥物與選擇低磷食物',
            isExternal: true,
            tag: '飲食'
          }
        ]
      },
      {
        id: 'pd',
        title: '腹膜透析 (PD)',
        icon: Droplet,
        items: [
          {
            id: 'peritonitis',
            title: '腹膜炎照護手冊',
            url: 'https://chialin111.github.io/cch-peritonitis/',
            description: '腹膜炎的早期症狀辨識、預防與居家緊急處理',
            isExternal: true,
            tag: '重要'
          },
          {
            id: 'pd-tech-quiz',
            title: '換液技術知識測驗',
            url: 'https://chialin111.github.io/pd-tech/',
            description: '測試您對腹膜透析換液技術的了解程度',
            isExternal: true,
            tag: '測驗'
          }
        ]
      },
      {
        id: 'hd',
        title: '血液透析 (HD)',
        icon: Activity,
        items: [
          {
            id: 'hd-placeholder',
            title: '血液透析衛教資料',
            description: '相關衛教文章資料建置中...',
            isExternal: false
          }
        ]
      },
      {
        id: 'transplant',
        title: '腎臟移植',
        icon: HeartHandshake,
        items: [
          {
            id: 'transplant-placeholder',
            title: '移植相關資訊',
            description: '移植評估與術後照護資料建置中...',
            isExternal: false
          }
        ]
      }
    ]
  },
  {
    id: 'staff-section',
    title: '醫師 / 專科護理師專區',
    audience: AudienceType.MEDICAL_STAFF,
    description: '臨床評估工具與專業指引',
    categories: [
      {
        id: 'clinical-tools',
        title: '臨床評估工具',
        icon: Calculator, // 改用計算機圖示更直覺
        items: [
          {
            id: 'anemia-tool',
            title: '腎性貧血評估工具',
            url: 'https://chialin111.github.io/anemia-chinese/',
            description: '協助評估腎性貧血狀況及用藥參考',
            isExternal: true,
            tag: '常用工具'
          }
        ]
      }
    ]
  }
];