import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export enum EncryptionStatus {
  IDLE = 'IDLE',
  ENCRYPTING = 'ENCRYPTING',
  SECURE = 'SECURE'
}

export interface TorNode {
  id: string;
  country: string;
  status: 'active' | 'inactive';
  latency: number;
}