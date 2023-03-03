export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          created_at: string | null
          headline: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          headline?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          headline?: string | null
          id?: number
          name?: string | null
        }
      }
      tasks: {
        Row: {
          completed: boolean | null
          created_at: string | null
          description: string | null
          id: number
        }
        Insert: {
          completed?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
        }
        Update: {
          completed?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
