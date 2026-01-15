import { User } from '@/types/userTypes';

// Mock Users with all related data nested
export const users: User[] = [
  {
    id: '0001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sample',
    password: 'sample',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    transactionCode: '6363',
    transactionMsg:
      "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
    createdAt: '2023-01-15',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '1234567890',
        balance: 8547.32,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Starbucks',
            category: 'Food & Drink',
            date: 'Dec 12, 2024',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Payroll Deposit',
            category: 'Income',
            date: 'Dec 5, 2024',
            amount: 3250.0,
            status: 'success'
          },
          {
            merchant: 'Chipotle',
            category: 'Food & Drink',
            date: 'Dec 4, 2024',
            amount: -14.32,
            status: 'success'
          },
          {
            merchant: 'Shell Gas Station',
            category: 'Transportation',
            date: 'Dec 3, 2024',
            amount: -52.18,
            status: 'success'
          },
          {
            merchant: 'Electric Company',
            category: 'Utilities',
            date: 'Dec 2, 2024',
            amount: -124.5,
            status: 'failed'
          },
          {
            merchant: 'Rent Payment',
            category: 'Housing',
            date: 'Dec 1, 2024',
            amount: -1850.0,
            status: 'success'
          },
          {
            merchant: 'Netflix',
            category: 'Entertainment',
            date: 'Nov 30, 2024',
            amount: -15.99,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: 'Transportation',
            date: 'Nov 28, 2024',
            amount: -23.45,
            status: 'success'
          },
          {
            merchant: 'Interest Payment',
            category: 'Income',
            date: 'Nov 30, 2024',
            amount: 24.5,
            status: 'success'
          },
          {
            merchant: 'Amazon',
            category: 'Shopping',
            date: 'Dec 4, 2024',
            amount: -89.99,
            status: 'processing'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 24892.5,
        isPrimary: false,
        transactions: [
          {
            merchant: 'Salary Bonus',
            category: 'Income',
            date: 'Dec 10, 2024',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Monthly Savings Transfer',
            category: 'Transfer',
            date: 'Dec 1, 2024',
            amount: 1000.0,
            status: 'success'
          }
        ]
      }
    ],
    cards: [
      {
        id: 'card_001',
        cardNumber: '4111111111111111',
        cardHolder: 'SARAH JOHNSON',
        expiryDate: '12/26',
        cvv: '123',
        cardType: 'debit',
        cardName: 'Everyday Checking Card',
        balance: 8547.32,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2022-06-15'
      }
    ]
  },
  {
    id: '0002',
    firstName: 'Charles',
    lastName: 'Newton',
    email: 'div**614@gmail.com',
    phone: '+1305***8865',
    username: 'NewtonC21?@',
    password: 'Diverman7?!',
    createdAt: '2026-1-7', // y-m-d
    transactionCode: '7894',
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876543210',
        balance: 350260.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Transfer from Wells Fargo',
            category: '****4389',
            date: 'Dec 17, 2025',
            amount: 350260.0,
            status: 'success'
          },
          {
            merchant: 'Account Opening',
            category: '*******',
            date: 'Dec 10, 2025',
            amount: 0.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456789011',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0003',
    firstName: 'Crystal',
    lastName: 'Tiffany',
    email: 'c**@gmail.com',
    username: 'Iamtiffany412',
    password: '886800',
    createdAt: '2026-1-13', // y-m-d
    transactionCode: '7894',
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876543210',
        balance: 354345.0,
        isPrimary: true,
        transactions: [
          {
            merchant:
              'Payment from shared assets',
            category: '****4389',
            date: 'Jan 12, 2026',
            amount: 354345.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532987654321098',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0004',
    firstName: 'Alfred',
    lastName: 'Westwood',
    email: 'c**@gmail.com',
    username: 'Alfred_west66',
    password: 'Westwood66$$',
    createdAt: '2026-1-15', // y-m-d
    transactionCode: '7894',
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876543210',
        balance: 22700000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Accrued Interest Credit',
            category: '****4721',
            date: 'Dec 17, 2025',
            amount: 600000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****3859',
            date: 'Dec 3, 2024',
            amount: 556000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****9184',
            date: 'Dec 12, 2023',
            amount: 558000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****7605',
            date: 'Dec 25, 2022',
            amount: 555000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****6317',
            date: 'Dec 9, 2021',
            amount: 600000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****8423',
            date: 'Dec 20, 2020',
            amount: 554000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****5198',
            date: 'Dec 5, 2019',
            amount: 557000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****2746',
            date: 'Dec 14, 2018',
            amount: 555000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****9302',
            date: 'Dec 28, 2017',
            amount: 600000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****1857',
            date: 'Dec 2, 2016',
            amount: 553000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****7640',
            date: 'Dec 19, 2015',
            amount: 556000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****4923',
            date: 'Dec 7, 2014',
            amount: 555000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****6185',
            date: 'Dec 11, 2013',
            amount: 554000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****3072',
            date: 'Dec 21, 2012',
            amount: 556000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****8391',
            date: 'Dec 13, 2011',
            amount: 555000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****1406',
            date: 'Dec 27, 2010',
            amount: 556000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****9217',
            date: 'Dec 6, 2009',
            amount: 600000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****5648',
            date: 'Dec 18, 2008',
            amount: 556000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****7830',
            date: 'Dec 8, 2007',
            amount: 553000,
            status: 'success'
          },
          {
            merchant: 'Accrued Interest Credit',
            category: '****4095',
            date: 'Dec 15, 2006',
            amount: 600000,
            status: 'success'
          },
          {
            merchant: 'Shared assets',
            category: '****4095',
            date: 'Dec 15, 2005',
            amount: 11350000,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532987654321098',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  }
];
